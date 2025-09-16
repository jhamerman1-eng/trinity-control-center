import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface TradingPanelProps {
  title: string;
  children: ReactNode;
  className?: string;
  headerAction?: ReactNode;
  onTitleClick?: () => void;
  isActive?: boolean;
}

export function TradingPanel({ title, children, className, headerAction, onTitleClick, isActive = true }: TradingPanelProps) {
  return (
    <div className={cn(
      "bg-card border border-panel-border rounded-lg shadow-panel overflow-hidden",
      !isActive && "opacity-60",
      className
    )}>
      <div className="bg-panel-header border-b border-panel-border px-4 py-3 flex items-center justify-between">
        <h2 
          className={cn(
            "text-sm font-semibold text-foreground",
            onTitleClick && "cursor-pointer hover:text-primary transition-colors",
            !isActive && "text-muted-foreground"
          )}
          onClick={onTitleClick}
        >
          {title} {!isActive && "(OFF)"}
        </h2>
        {headerAction}
      </div>
      <div className="p-4">
        {children}
      </div>
    </div>
  );
}