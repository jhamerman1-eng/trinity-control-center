import { TradingPanel } from "./TradingPanel";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

interface Trade {
  id: string;
  timestamp: string;
  bot: string;
  side: "BUY" | "SELL";
  size: string;
  price: string;
  reason: string;
  pnl?: string;
}

const mockTrades: Trade[] = [
  {
    id: "1",
    timestamp: "14:32:15",
    bot: "JIT",
    side: "BUY",
    size: "2.5",
    price: "$142.45",
    reason: "Quote Fill",
    pnl: "+$12.50"
  },
  {
    id: "2", 
    timestamp: "14:31:58",
    bot: "HEDGE",
    side: "SELL",
    size: "5.0",
    price: "$142.20",
    reason: "Delta Rebalance",
    pnl: "-$5.75"
  },
  {
    id: "3",
    timestamp: "14:31:42",
    bot: "TREND",
    side: "BUY",
    size: "1.8",
    price: "$142.15",
    reason: "MACD Signal",
    pnl: "+$8.20"
  },
  {
    id: "4",
    timestamp: "14:31:28",
    bot: "JIT",
    side: "SELL",
    size: "3.2",
    price: "$142.35",
    reason: "Quote Fill",
    pnl: "+$18.40"
  },
  {
    id: "5",
    timestamp: "14:31:05",
    bot: "HEDGE",
    side: "BUY",
    size: "2.1",
    price: "$142.40",
    reason: "Urgency IOC",
    pnl: "-$3.20"
  }
];

export function TradeStream() {
  return (
    <TradingPanel title="Live Trade Stream">
      <ScrollArea className="h-64">
        <div className="space-y-2">
          {mockTrades.map((trade) => (
            <div 
              key={trade.id}
              className="flex items-center justify-between p-3 bg-secondary/20 rounded-md border border-panel-border/50"
            >
              <div className="flex items-center space-x-3">
                <span className="text-xs font-mono text-muted-foreground">
                  {trade.timestamp}
                </span>
                <Badge variant="outline" className="text-xs">
                  {trade.bot}
                </Badge>
                <span className={cn(
                  "text-sm font-mono font-medium",
                  trade.side === "BUY" ? "text-profit" : "text-loss"
                )}>
                  {trade.side} {trade.size}
                </span>
                <span className="text-sm font-mono">@ {trade.price}</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <span className="text-xs text-muted-foreground">
                  {trade.reason}
                </span>
                {trade.pnl && (
                  <span className={cn(
                    "text-sm font-mono font-medium",
                    trade.pnl.startsWith("+") ? "text-profit" : "text-loss"
                  )}>
                    {trade.pnl}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
    </TradingPanel>
  );
}