"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface TabsProps {
  tabs: { id: string; label: string; count?: number }[];
  activeTab: string;
  onChange: (id: string) => void;
  className?: string;
}

export function Tabs({ tabs, activeTab, onChange, className }: TabsProps) {
  return (
    <div className={cn("flex flex-wrap items-center gap-1.5 border-b border-border/80 pb-2", className)}>
      {tabs.map((tab) => {
        const isActive = activeTab.toLowerCase() === tab.id.toLowerCase();
        return (
          <button
            key={tab.id}
            onClick={() => onChange(tab.id)}
            className={cn(
              "inline-flex items-center gap-2 rounded-lg px-3.5 py-1.5 text-xs md:text-sm font-medium transition-all duration-150 select-none",
              isActive
                ? "bg-secondary text-foreground shadow-sm border border-border/60"
                : "text-muted-foreground hover:bg-secondary/50 hover:text-foreground"
            )}
          >
            <span>{tab.label}</span>
            {tab.count !== undefined && (
              <span
                className={cn(
                  "rounded-full px-1.5 py-0.2 text-[10px] font-mono",
                  isActive ? "bg-primary/20 text-primary" : "bg-muted text-muted-foreground"
                )}
              >
                {tab.count}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}
