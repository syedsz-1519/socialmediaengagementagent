"use client";

import * as React from "react";
import { Search, Bell, Menu, Sparkles, Database } from "lucide-react";
import { demoBrand } from "@/lib/mock-data/brand";

interface TopbarProps {
  onToggleMobileMenu: () => void;
}

export function Topbar({ onToggleMobileMenu }: TopbarProps) {
  const [showNotifications, setShowNotifications] = React.useState(false);

  return (
    <header className="sticky top-0 z-30 flex h-16 w-full items-center justify-between border-b border-border/80 bg-background/80 px-4 md:px-8 backdrop-blur-md">
      {/* Left side: Mobile menu toggle & Breadcrumbs/Context */}
      <div className="flex items-center gap-3">
        <button
          onClick={onToggleMobileMenu}
          className="rounded-lg p-2 text-muted-foreground hover:bg-secondary hover:text-foreground md:hidden"
          aria-label="Toggle navigation menu"
        >
          <Menu className="h-5 w-5" />
        </button>

        <div className="hidden items-center gap-2 sm:flex">
          <div className="flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 text-xs text-muted-foreground">
            <span className="flex h-2 w-2 rounded-full bg-emerald-500" />
            <span className="font-semibold text-foreground">{demoBrand.name}</span>
            <span className="text-border">|</span>
            <a
              href={demoBrand.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-400 hover:underline font-mono text-[11px]"
            >
              {demoBrand.instagramHandle}
            </a>
            <span className="text-border">|</span>
            <span>{demoBrand.business}</span>
          </div>
        </div>
      </div>

      {/* Center: Search input */}
      <div className="relative mx-4 hidden max-w-md flex-1 md:block">
        <div className="relative">
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search memories, post patterns, experiments... (Ctrl + K)"
            className="w-full rounded-lg border border-border bg-card/70 py-1.5 pl-9 pr-4 text-xs md:text-sm text-foreground placeholder:text-muted-foreground/70 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
          />
          <kbd className="absolute right-3 top-2 hidden rounded border border-border bg-secondary px-1.5 py-0.5 text-[10px] font-mono text-muted-foreground lg:inline-block">
            ⌘K
          </kbd>
        </div>
      </div>

      {/* Right side: Integrations status, Notifications, User */}
      <div className="flex items-center gap-2.5">
        {/* Hindsight status badge */}
        <div className="hidden lg:flex items-center gap-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-2.5 py-1 text-xs text-indigo-300">
          <Database className="h-3.5 w-3.5 text-indigo-400" />
          <span>Hindsight Cloud</span>
          <span className="rounded bg-indigo-500/20 px-1 py-0.2 text-[10px] font-mono text-indigo-200">
            Ready
          </span>
        </div>

        {/* Notifications */}
        <div className="relative">
          <button
            onClick={() => setShowNotifications(!showNotifications)}
            className="relative rounded-lg p-2 text-muted-foreground hover:bg-secondary hover:text-foreground transition-colors"
            aria-label="View notifications"
          >
            <Bell className="h-4.5 w-4.5" />
            <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-primary" />
          </button>

          {showNotifications && (
            <>
              <div
                className="fixed inset-0 z-40"
                onClick={() => setShowNotifications(false)}
              />
              <div className="absolute right-0 top-12 z-50 w-80 rounded-xl border border-border bg-card p-3 shadow-2xl animate-in fade-in zoom-in-95">
                <div className="flex items-center justify-between border-b border-border/60 pb-2 px-1">
                  <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Learning Updates
                  </span>
                  <span className="text-[11px] text-primary">3 new</span>
                </div>
                <div className="divide-y divide-border/40 text-xs">
                  <div className="py-2.5 px-1 hover:bg-secondary/40 rounded transition-colors">
                    <p className="font-medium text-foreground">Strategy updated</p>
                    <p className="text-muted-foreground mt-0.5">Problem-focused educational Reels confirmed as #1 driver.</p>
                    <span className="text-[10px] text-muted-foreground mt-1 inline-block">Today</span>
                  </div>
                  <div className="py-2.5 px-1 hover:bg-secondary/40 rounded transition-colors">
                    <p className="font-medium text-foreground">Memory strengthened</p>
                    <p className="text-muted-foreground mt-0.5">Question hooks achieved 91% confidence score.</p>
                    <span className="text-[10px] text-muted-foreground mt-1 inline-block">2 days ago</span>
                  </div>
                  <div className="py-2.5 px-1 hover:bg-secondary/40 rounded transition-colors">
                    <p className="font-medium text-foreground">Experiment #05 active</p>
                    <p className="text-muted-foreground mt-0.5">Comment keyword lead magnet testing underway.</p>
                    <span className="text-[10px] text-muted-foreground mt-1 inline-block">4 days ago</span>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>

        {/* User profile avatar */}
        <div className="flex items-center gap-2 border-l border-border/80 pl-2.5">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-tr from-indigo-500 to-primary text-xs font-semibold text-white">
            HK
          </div>
        </div>
      </div>
    </header>
  );
}
