"use client";

import * as React from "react";
import { Building2, ChevronDown, Check } from "lucide-react";
import { demoBrand } from "@/lib/mock-data/brand";

export function BrandSwitcher() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="relative border-t border-border/80 p-3">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between rounded-lg p-2 text-left hover:bg-secondary/60 transition-colors focus:outline-none"
      >
        <div className="flex items-center gap-3 overflow-hidden">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-indigo-600/20 border border-indigo-500/30 text-indigo-400 font-bold text-sm">
            BB
          </div>
          <div className="truncate">
            <div className="truncate text-sm font-semibold text-foreground leading-tight">
              {demoBrand.name}
            </div>
            <div className="truncate text-xs text-muted-foreground">
              {demoBrand.industry}
            </div>
          </div>
        </div>
        <ChevronDown className="h-4 w-4 shrink-0 text-muted-foreground" />
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute bottom-16 left-3 right-3 z-50 rounded-xl border border-border bg-card p-2 shadow-2xl animate-in fade-in zoom-in-95">
            <div className="px-2 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
              Active Brand Profile
            </div>
            <div className="flex items-center justify-between rounded-lg bg-secondary/80 px-2.5 py-2 text-sm">
              <div className="flex items-center gap-2.5">
                <Building2 className="h-4 w-4 text-indigo-400" />
                <div>
                  <div className="font-medium text-foreground">{demoBrand.name}</div>
                  <div className="text-xs text-muted-foreground">Active (30 days learned)</div>
                </div>
              </div>
              <Check className="h-4 w-4 text-primary" />
            </div>
            <div className="mt-2 border-t border-border/60 pt-2 px-1 text-[11px] text-muted-foreground">
              Synthetic demo workspace for hackathon evaluation.
            </div>
          </div>
        </>
      )}
    </div>
  );
}
