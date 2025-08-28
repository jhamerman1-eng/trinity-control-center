import { MetricCard } from "@/components/MetricCard";
import { TradingPanel } from "@/components/TradingPanel";
import { BotStatusPanel } from "@/components/BotStatusPanel";
import { TradeStream } from "@/components/TradeStream";
import { StatusIndicator } from "@/components/StatusIndicator";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Settings, Power, AlertTriangle } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-panel-border bg-panel-header">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <h1 className="text-xl font-bold text-foreground">Trinity Control Center</h1>
              <Badge variant="outline" className="text-xs bg-gradient-profit">
                v3.0 Live
              </Badge>
            </div>
            
            <div className="flex items-center space-x-4">
              <StatusIndicator status="healthy" label="System" />
              <Button variant="outline" size="sm">
                <Settings className="h-4 w-4 mr-2" />
                Config
              </Button>
              <Button variant="destructive" size="sm">
                <Power className="h-4 w-4 mr-2" />
                Emergency Stop
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="p-6 space-y-6">
        {/* Global Portfolio Overview */}
        <section>
          <h2 className="text-lg font-semibold mb-4 text-foreground">Portfolio Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <MetricCard
              title="Total Equity"
              value="$847,293.45"
              change="+2.34%"
              changeType="positive"
              subtitle="Peak: $852,100 • DD: -1.2%"
            />
            <MetricCard
              title="Daily PnL"
              value="+$12,847.20"
              change="+1.54%"
              changeType="positive"
              subtitle="Realized: $8,200 • Unrealized: $4,647"
            />
            <MetricCard
              title="Leverage"
              value="2.4x"
              change="Normal"
              changeType="neutral"
              subtitle="Margin Used: 68% • Available: $124k"
            />
            <MetricCard
              title="Sharpe Ratio"
              value="2.18"
              change="+0.05"
              changeType="positive"
              subtitle="30D Rolling • Risk-adj returns"
            />
          </div>
        </section>

        {/* Bot Status Grid */}
        <section>
          <h2 className="text-lg font-semibold mb-4 text-foreground">Bot Orchestration</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <BotStatusPanel
              botName="JIT Market Maker"
              status="healthy"
              badges={["OBI Active", "Quote v2", "Cancel/Replace"]}
              metrics={[
                {
                  label: "Spread (bps)",
                  value: "2.4",
                  change: "-0.2",
                  changeType: "positive"
                },
                {
                  label: "Fill Rate",
                  value: "87.3%",
                  change: "+1.2%",
                  changeType: "positive"
                },
                {
                  label: "Quote Latency",
                  value: "12ms",
                  change: "Normal",
                  changeType: "neutral"
                },
                {
                  label: "Toxicity Score",
                  value: "0.23",
                  change: "Low",
                  changeType: "positive"
                }
              ]}
            />

            <BotStatusPanel
              botName="Hedge Engine"
              status="healthy"
              badges={["Delta Neutral", "CEX Route", "Swift v2"]}
              metrics={[
                {
                  label: "Net Delta",
                  value: "$245",
                  change: "Target",
                  changeType: "neutral"
                },
                {
                  label: "Hedge Ratio",
                  value: "98.7%",
                  change: "+0.3%", 
                  changeType: "positive"
                },
                {
                  label: "Avg Slippage",
                  value: "1.2bps",
                  change: "-0.4bps",
                  changeType: "positive"
                },
                {
                  label: "Route Latency",
                  value: "45ms",
                  change: "Normal",
                  changeType: "neutral"
                }
              ]}
            />

            <BotStatusPanel
              botName="Trend Alpha"
              status="degraded"
              badges={["MACD Signal", "RBC Filter", "Anti-Chop"]}
              metrics={[
                {
                  label: "Signal Strength",
                  value: "0.65",
                  change: "+0.12",
                  changeType: "positive"
                },
                {
                  label: "Active Positions",
                  value: "3",
                  change: "+1",
                  changeType: "neutral"
                },
                {
                  label: "Win Rate",
                  value: "73.4%",
                  change: "-2.1%",
                  changeType: "negative"
                },
                {
                  label: "Avg Hold Time",
                  value: "14.2m",
                  change: "+3.1m",
                  changeType: "neutral"
                }
              ]}
            />
          </div>
        </section>

        {/* Risk & Performance */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <TradingPanel title="Risk Exposure">
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <MetricCard
                  title="SOL-PERP"
                  value="$124.2k"
                  change="+$8.4k"
                  changeType="positive"
                  className="border-0 bg-secondary/30 shadow-none"
                />
                <MetricCard
                  title="ETH-PERP"
                  value="$89.1k"
                  change="-$2.1k"
                  changeType="negative"
                  className="border-0 bg-secondary/30 shadow-none"
                />
              </div>
              
              <div className="pt-4 border-t border-panel-border">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-muted-foreground">VaR (24h)</span>
                  <span className="text-sm font-mono">$18,450</span>
                </div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-muted-foreground">Max Drawdown</span>
                  <span className="text-sm font-mono text-metric-negative">-3.2%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Funding (24h)</span>
                  <span className="text-sm font-mono text-metric-positive">+$127.80</span>
                </div>
              </div>
            </div>
          </TradingPanel>

          <TradingPanel title="Infrastructure Status">
            <div className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Drift RPC</span>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm font-mono">23ms</span>
                    <StatusIndicator status="healthy" label="" />
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm">Swift Sidecar</span>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm font-mono">8ms</span>
                    <StatusIndicator status="healthy" label="" />
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm">WebSocket</span>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm font-mono">Connected</span>
                    <StatusIndicator status="healthy" label="" />
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm">Backup RPC</span>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm font-mono">Standby</span>
                    <StatusIndicator status="inactive" label="" />
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-panel-border">
                <div className="flex items-center space-x-2 text-warning">
                  <AlertTriangle className="h-4 w-4" />
                  <span className="text-sm">1 warning: High CPU on Node-2</span>
                </div>
              </div>
            </div>
          </TradingPanel>
        </section>

        {/* Trade Stream */}
        <section>
          <TradeStream />
        </section>

        {/* PnL Attribution */}
        <section>
          <TradingPanel title="PnL Attribution (Last 24h)">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <MetricCard
                title="JIT Maker PnL"
                value="+$8,247.50"
                change="+64.2%"
                changeType="positive"
                subtitle="Spread capture + OBI edge"
                className="border-0 bg-gradient-profit shadow-none"
              />
              <MetricCard
                title="Hedge Engine PnL"
                value="-$1,124.20"
                change="-8.8%" 
                changeType="negative"
                subtitle="Delta mgmt cost"
                className="border-0 bg-gradient-loss shadow-none"
              />
              <MetricCard
                title="Trend Alpha PnL"
                value="+$5,723.90"
                change="+44.6%"
                changeType="positive"
                subtitle="MACD momentum capture"
                className="border-0 bg-gradient-profit shadow-none"
              />
            </div>
          </TradingPanel>
        </section>
      </main>
    </div>
  );
};

export default Index;