const express = require('express');
const fs = require('fs');
const yaml = require('js-yaml');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.FLAGS_PORT || 8787;
const FLAGS_PATH = process.env.FLAGS_PATH || path.resolve(__dirname, '../flags/flags.yaml');
const SIGNAL_DIR = path.resolve(__dirname, '../flags/signals');
const AUDIT_PATH = path.resolve(__dirname, '../flags/audit.log');

// helper functions
const load = () => yaml.load(fs.readFileSync(FLAGS_PATH, 'utf8')) || {};
const save = (d) => fs.writeFileSync(FLAGS_PATH, yaml.dump(d, { sortKeys: false }));
const get = (o, p) => p.split('.').reduce((x, k) => (x ? x[k] : undefined), o);
const setp = (o, p, v) => {
  const ks = p.split('.');
  let c = o;
  for (let i = 0; i < ks.length - 1; i++) {
    if (!c[ks[i]] || typeof c[ks[i]] !== 'object') c[ks[i]] = {};
    c = c[ks[i]];
  }
  c[ks[ks.length - 1]] = v;
};
const audit = (line) => {
  fs.appendFileSync(AUDIT_PATH, `${new Date().toISOString()} ${line}\n`);
};
const ensureDir = (dir) => {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
};

// ensure directories exist
ensureDir(path.dirname(FLAGS_PATH));
ensureDir(SIGNAL_DIR);

// validation
const BOUNDS = {
  'feature.jit.spread_bps': [1, 50],
  'mm.max_position_usd': [0, 1000000],
  'trend.stop_loss_pct': [0, 0.2],
  'trend.take_profit_pct': [0, 0.5],
};
function validate(pathKey, value) {
  if (BOUNDS[pathKey]) {
    const [lo, hi] = BOUNDS[pathKey];
    if (typeof value !== 'number' || value < lo || value > hi) {
      throw new Error(`${pathKey} out of bounds [${lo}, ${hi}]`);
    }
  }
  if (pathKey === 'trend.take_profit_pct') {
    const d = load();
    const sl = get(d, 'trend.stop_loss_pct') ?? 0.01;
    if (value <= sl) {
      throw new Error('take_profit_pct must be > stop_loss_pct');
    }
  }
}

app.use(cors());
app.use(express.json());

// get flags
app.get('/flags', (_req, res) => {
  res.json(load());
});

// patch flags
app.post('/flags', (req, res) => {
  try {
    const { path: p, value } = req.body || {};
    if (!p) return res.status(400).json({ error: 'missing path' });
    validate(p, value);
    const d = load();
    const old = get(d, p);
    setp(d, p, value);
    save(d);
    audit(`user=local set ${p} ${JSON.stringify(old)} -> ${JSON.stringify(value)}`);
    res.json({ ok: true, path: p, value });
  } catch (err) {
    res.status(400).json({ ok: false, error: String(err.message || err) });
  }
});

// toggle boolean flag
app.post('/flags/toggle', (req, res) => {
  try {
    const { path: p } = req.body || {};
    if (!p) return res.status(400).json({ error: 'missing path' });
    const d = load();
    const current = get(d, p);
    if (typeof current !== 'boolean') {
      return res.status(400).json({ error: 'path is not boolean' });
    }
    const newVal = !current;
    setp(d, p, newVal);
    save(d);
    audit(`user=local toggle ${p} ${JSON.stringify(current)} -> ${JSON.stringify(newVal)}`);
    res.json({ ok: true, path: p, value: newVal });
  } catch (err) {
    res.status(400).json({ ok: false, error: String(err.message || err) });
  }
});

// kill endpoints
app.post('/control/kill/:target', (req, res) => {
  const { target } = req.params;
  const allowed = ['jit', 'swift', 'trend', 'mm', 'all'];
  if (!allowed.includes(target)) {
    return res.status(400).json({ error: 'invalid target' });
  }
  try {
    ensureDir(SIGNAL_DIR);
    const filePath = path.join(SIGNAL_DIR, `kill_${target}`);
    fs.writeFileSync(filePath, `${Date.now()}`);
    const envVar = `KILL_${target.toUpperCase()}_CMD`;
    const killCmd = process.env[envVar];
    if (killCmd) {
      const { exec } = require('child_process');
      exec(killCmd, () => {});
    }
    audit(`user=local kill ${target}`);
    res.json({ ok: true, target });
  } catch (err) {
    res.status(500).json({ ok: false, error: String(err.message || err) });
  }
});

app.listen(PORT, () => {
  console.log(`[flags-api] listening on http://localhost:${PORT}`);
});
