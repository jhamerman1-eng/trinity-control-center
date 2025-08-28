import { cn } from "@/lib/utils";

interface StatusIndicatorProps {
  status: "healthy" | "degraded" | "critical" | "inactive";
  label: string;
  className?: string;
}

const statusConfig = {
  healthy: {
    color: "bg-status-healthy",
    pulse: "animate-pulse",
    label: "Running"
  },
  degraded: {
    color: "bg-status-degraded",
    pulse: "animate-pulse",
    label: "Degraded"
  },
  critical: {
    color: "bg-status-critical",
    pulse: "animate-pulse",
    label: "Critical"
  },
  inactive: {
    color: "bg-status-inactive",
    pulse: "",
    label: "Offline"
  }
};

export function StatusIndicator({ status, label, className }: StatusIndicatorProps) {
  const config = statusConfig[status];
  
  return (
    <div className={cn("flex items-center space-x-2", className)}>
      <div className={cn(
        "w-2 h-2 rounded-full",
        config.color,
        config.pulse
      )} />
      <span className="text-sm font-medium">{label}</span>
      <span className="text-xs text-muted-foreground">{config.label}</span>
    </div>
  );
}