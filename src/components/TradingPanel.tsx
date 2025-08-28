import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface TradingPanelProps {
  title: string;
  children: ReactNode;
  className?: string;
  headerAction?: ReactNode;
}

export function TradingPanel({ title, children, className, headerAction }: TradingPanelProps) {
  return (
    <div className={cn(
      "bg-card border border-panel-border rounded-lg shadow-panel overflow-hidden",
      className
    )}>
      <div className="bg-panel-header border-b border-panel-border px-4 py-3 flex items-center justify-between">
        <h2 className="text-sm font-semibold text-foreground">{title}</h2>
        {headerAction}
      </div>
      <div className="p-4">
        {children}
      </div>
    </div>
  );
}