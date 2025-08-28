import { TradingPanel } from "./TradingPanel";
import { StatusIndicator } from "./StatusIndicator";
import { MetricCard } from "./MetricCard";
import { Badge } from "@/components/ui/badge";

interface BotMetric {
  label: string;
  value: string;
  change?: string;
  changeType?: "positive" | "negative" | "neutral";
}

interface BotStatusPanelProps {
  botName: string;
  status: "healthy" | "degraded" | "critical" | "inactive";
  metrics: BotMetric[];
  badges?: string[];
}

export function BotStatusPanel({ botName, status, metrics, badges = [] }: BotStatusPanelProps) {
  return (
    <TradingPanel 
      title={botName} 
      headerAction={<StatusIndicator status={status} label={botName} />}
    >
      <div className="space-y-4">
        {badges.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {badges.map((badge, index) => (
              <Badge key={index} variant="outline" className="text-xs">
                {badge}
              </Badge>
            ))}
          </div>
        )}
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {metrics.map((metric, index) => (
            <MetricCard
              key={index}
              title={metric.label}
              value={metric.value}
              change={metric.change}
              changeType={metric.changeType}
              className="border-0 bg-secondary/30 shadow-none"
            />
          ))}
        </div>
      </div>
    </TradingPanel>
  );
}