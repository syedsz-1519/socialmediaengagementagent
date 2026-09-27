"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  BrainCircuit,
  Sparkles,
  GitBranch,
  FlaskConical,
  Settings,
  Flame,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { BrandSwitcher } from "./brand-switcher";

interface NavItem {
  label: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  badge?: string;
}

const navItems: NavItem[] = [
  { label: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { label: "Memory", href: "/memory", icon: BrainCircuit, badge: "9 Active" },
  { label: "Content", href: "/content", icon: Sparkles },
  { label: "Learning", href: "/learning", icon: GitBranch },
  { label: "Experiments", href: "/experiments", icon: FlaskConical, badge: "5" },
  { label: "Settings", href: "/settings", icon: Settings },
];

export function Sidebar({ onCloseMobile }: { onCloseMobile?: () => void }) {
  const pathname = usePathname();

  return (
    <aside className="flex h-full w-64 flex-col border-r border-border/80 bg-card/60 backdrop-blur-md">
      {/* Brand Header */}
      <div className="flex h-16 items-center justify-between border-b border-border/80 px-5">
        <Link
          href="/dashboard"
          onClick={onCloseMobile}
          className="flex items-center gap-2.5 transition-opacity hover:opacity-90"
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-blue-600 shadow-sm shadow-indigo-500/25">
            <Flame className="h-4.5 w-4.5 text-white" />
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold tracking-tight text-foreground font-mono">
              NEXA
            </span>
            <span className="text-[10px] uppercase tracking-wider text-muted-foreground -mt-1 font-medium">
              AI Strategist
            </span>
          </div>
        </Link>
        <span className="rounded-full bg-indigo-500/10 border border-indigo-500/20 px-2 py-0.5 text-[10px] font-medium text-indigo-400">
          v1.0 MVP
        </span>
      </div>

      {/* Navigation List */}
      <div className="flex-1 overflow-y-auto px-3 py-4">
        <div className="mb-2 px-3 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
          Strategy Engine
        </div>
        <nav className="space-y-1">
          {navItems.map((item) => {
            const isActive =
              pathname === item.href ||
              (item.href !== "/dashboard" && pathname.startsWith(item.href));
            const Icon = item.icon;

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={onCloseMobile}
                className={cn(
                  "group flex items-center justify-between rounded-lg px-3 py-2.5 text-sm font-medium transition-all duration-150",
                  isActive
                    ? "bg-secondary text-foreground font-semibold shadow-xs border border-border/60"
                    : "text-muted-foreground hover:bg-secondary/40 hover:text-foreground"
                )}
              >
                <div className="flex items-center gap-3">
                  <Icon
                    className={cn(
                      "h-4.5 w-4.5 transition-colors",
                      isActive
                        ? "text-primary"
                        : "text-muted-foreground group-hover:text-foreground"
                    )}
                  />
                  <span>{item.label}</span>
                </div>
                {item.badge && (
                  <span
                    className={cn(
                      "rounded-full px-2 py-0.5 text-[11px] font-mono",
                      isActive
                        ? "bg-primary/20 text-primary"
                        : "bg-muted text-muted-foreground"
                    )}
                  >
                    {item.badge}
                  </span>
                )}
              </Link>
            );
          })}
        </nav>

        {/* Learning Status Box */}
        <div className="mt-8 rounded-xl border border-indigo-500/20 bg-indigo-950/20 p-3.5">
          <div className="flex items-center gap-2 text-xs font-semibold text-indigo-300">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
            </span>
            Memory Core Active
          </div>
          <p className="mt-1.5 text-[12px] leading-relaxed text-muted-foreground">
            Hindsight knowledge base contains 30 days of synthetic audience patterns.
          </p>
        </div>
      </div>

      {/* Brand Switcher Profile */}
      <BrandSwitcher />
    </aside>
  );
}
