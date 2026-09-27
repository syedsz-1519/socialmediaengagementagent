import * as React from "react";
import { Brain, Sparkles, BookOpen, FlaskConical } from "lucide-react";
import { Card } from "@/components/ui/card";
import { BrandIntelligenceMetrics } from "@/types";

export function IntelligenceCards({ metrics }: { metrics: BrandIntelligenceMetrics }) {
  const items = [
    {
      label: "Audience Understanding",
      value: `${metrics.audienceUnderstanding}%`,
      sub: "Derived from 20 posts & reactions",
      icon: Brain,
      trend: "+8% this week",
      color: "text-indigo-400 bg-indigo-500/10 border-indigo-500/20",
    },
    {
      label: "Content Confidence",
      value: `${metrics.contentConfidence}%`,
      sub: "High predictability on format ROI",
      icon: Sparkles,
      trend: "+5% vs baseline",
      color: "text-blue-400 bg-blue-500/10 border-blue-500/20",
    },
    {
      label: "Learned Patterns",
      value: metrics.learnedPatterns.toString(),
      sub: "Active strategic brand memories",
      icon: BookOpen,
      trend: "4 strengthened",
      color: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
    },
    {
      label: "Experiments",
      value: metrics.experimentsCount.toString(),
      sub: "4 completed · 1 active",
      icon: FlaskConical,
      trend: "91% win rate",
      color: "text-amber-400 bg-amber-500/10 border-amber-500/20",
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {items.map((item) => {
        const Icon = item.icon;
        return (
          <Card key={item.label} className="p-5 relative overflow-hidden bg-card/70 border-border/80">
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium text-muted-foreground">{item.label}</span>
              <div className={`rounded-lg border p-2 ${item.color}`}>
                <Icon className="h-4 w-4" />
              </div>
            </div>
            <div className="mt-3 flex items-baseline gap-2">
              <span className="text-2xl font-bold tracking-tight text-foreground font-mono">
                {item.value}
              </span>
              <span className="text-[11px] font-medium text-emerald-400 font-mono">
                {item.trend}
              </span>
            </div>
            <p className="mt-1 text-xs text-muted-foreground">{item.sub}</p>
          </Card>
        );
      })}
    </div>
  );
}
