import { TradingPanel } from "./TradingPanel";

const regimeData = [
  { regime: "Trending Up", pnl: "+$8,247.30", percentage: "+64.2%", trades: 127, winRate: "78.4%" },
  { regime: "Choppy", pnl: "+$2,124.50", percentage: "+16.5%", trades: 89, winRate: "62.9%" },
  { regime: "Trending Down", pnl: "+$1,847.20", percentage: "+14.4%", trades: 45, winRate: "71.1%" },
  { regime: "High Volatility", pnl: "+$628.20", percentage: "+4.9%", trades: 23, winRate: "56.5%" }
];

export const RegimeTable = () => {
  return (
    <TradingPanel title="PnL by Market Regime">
      <div className="space-y-1">
        <div className="grid grid-cols-5 gap-4 pb-2 border-b border-panel-border text-xs text-muted-foreground font-medium">
          <div>Market Regime</div>
          <div className="text-right">PnL</div>
          <div className="text-right">% of Total</div>
          <div className="text-right">Trades</div>
          <div className="text-right">Win Rate</div>
        </div>
        {regimeData.map((row, index) => (
          <div key={index} className="grid grid-cols-5 gap-4 py-2 text-sm hover:bg-secondary/20 rounded">
            <div className="text-foreground">{row.regime}</div>
            <div className="text-right font-mono text-metric-positive">{row.pnl}</div>
            <div className="text-right text-muted-foreground">{row.percentage}</div>
            <div className="text-right text-muted-foreground">{row.trades}</div>
            <div className="text-right font-mono">{row.winRate}</div>
          </div>
        ))}
      </div>
    </TradingPanel>
  );
};