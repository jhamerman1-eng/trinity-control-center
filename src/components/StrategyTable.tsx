import { TradingPanel } from "./TradingPanel";

const strategyData = [
  { feature: "OBI Edge + JIT", pnl: "+$6,847.30", percentage: "+53.3%", sharpe: "2.34", maxDD: "-1.2%" },
  { feature: "MACD Momentum", pnl: "+$3,247.20", percentage: "+25.3%", sharpe: "1.87", maxDD: "-2.1%" },
  { feature: "Spread Capture", pnl: "+$1,924.50", percentage: "+15.0%", sharpe: "3.12", maxDD: "-0.8%" },
  { feature: "Anti-Chop Filter", pnl: "+$828.20", percentage: "+6.4%", sharpe: "1.45", maxDD: "-1.5%" }
];

export const StrategyTable = () => {
  return (
    <TradingPanel title="PnL by Strategy Feature">
      <div className="space-y-1">
        <div className="grid grid-cols-5 gap-4 pb-2 border-b border-panel-border text-xs text-muted-foreground font-medium">
          <div>Strategy Feature</div>
          <div className="text-right">PnL</div>
          <div className="text-right">% of Total</div>
          <div className="text-right">Sharpe</div>
          <div className="text-right">Max DD</div>
        </div>
        {strategyData.map((row, index) => (
          <div key={index} className="grid grid-cols-5 gap-4 py-2 text-sm hover:bg-secondary/20 rounded">
            <div className="text-foreground">{row.feature}</div>
            <div className="text-right font-mono text-metric-positive">{row.pnl}</div>
            <div className="text-right text-muted-foreground">{row.percentage}</div>
            <div className="text-right font-mono text-metric-positive">{row.sharpe}</div>
            <div className="text-right font-mono text-metric-negative">{row.maxDD}</div>
          </div>
        ))}
      </div>
    </TradingPanel>
  );
};