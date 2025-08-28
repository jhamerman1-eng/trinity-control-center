import { cn } from "@/lib/utils";
import { TrendingUp, TrendingDown, Minus } from "lucide-react";

interface MetricCardProps {
  title: string;
  value: string;
  change?: string;
  changeType?: "positive" | "negative" | "neutral";
  subtitle?: string;
  className?: string;
}

export function MetricCard({ 
  title, 
  value, 
  change, 
  changeType = "neutral", 
  subtitle,
  className 
}: MetricCardProps) {
  const getTrendIcon = () => {
    switch (changeType) {
      case "positive":
        return <TrendingUp className="h-4 w-4" />;
      case "negative":
        return <TrendingDown className="h-4 w-4" />;
      default:
        return <Minus className="h-4 w-4" />;
    }
  };

  const getChangeColor = () => {
    switch (changeType) {
      case "positive":
        return "text-metric-positive";
      case "negative":
        return "text-metric-negative";
      default:
        return "text-metric-neutral";
    }
  };

  return (
    <div className={cn(
      "bg-card border border-panel-border rounded-lg p-4 shadow-panel",
      className
    )}>
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-medium text-muted-foreground">{title}</h3>
        {change && (
          <div className={cn("flex items-center space-x-1", getChangeColor())}>
            {getTrendIcon()}
            <span className="text-sm font-mono">{change}</span>
          </div>
        )}
      </div>
      <div className="mt-2">
        <div className="text-2xl font-mono font-bold">{value}</div>
        {subtitle && (
          <p className="text-xs text-muted-foreground mt-1">{subtitle}</p>
        )}
      </div>
    </div>
  );
}