"use client";

import * as React from "react";
import { Building2, ChevronDown, Check, ExternalLink, Instagram } from "lucide-react";
import { connectedBrand } from "@/lib/mock-data/brand";

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
              {connectedBrand.name}
            </div>
            <div className="truncate text-xs text-muted-foreground">
              {connectedBrand.instagramHandle} · {connectedBrand.business}
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
          <div className="absolute bottom-16 left-3 right-3 z-50 rounded-xl border border-border bg-card p-3 shadow-2xl animate-in fade-in zoom-in-95 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                Connected Brand
              </span>
              <span className="rounded bg-indigo-500/20 px-1.5 py-0.5 text-[10px] font-mono text-indigo-300">
                Primary Account
              </span>
            </div>

            <div className="flex items-center justify-between rounded-lg bg-secondary/80 px-2.5 py-2 text-sm">
              <div className="flex items-center gap-2.5">
                <Building2 className="h-4 w-4 text-indigo-400" />
                <div>
                  <div className="font-semibold text-foreground">{connectedBrand.name}</div>
                  <div className="text-[11px] text-muted-foreground font-mono">
                    "{connectedBrand.tagline}"
                  </div>
                </div>
              </div>
              <Check className="h-4 w-4 text-primary" />
            </div>

            <a
              href={connectedBrand.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between rounded-lg border border-border/70 px-2.5 py-1.5 text-xs text-muted-foreground hover:bg-secondary/60 hover:text-foreground transition-colors"
            >
              <div className="flex items-center gap-1.5">
                <Instagram className="h-3.5 w-3.5 text-pink-400" />
                <span>{connectedBrand.instagramHandle}</span>
              </div>
              <ExternalLink className="h-3 w-3" />
            </a>

            <div className="border-t border-border/60 pt-2 px-1 text-[10px] text-muted-foreground leading-tight">
              {connectedBrand.dataSourceNotice}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
