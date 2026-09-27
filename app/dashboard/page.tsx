"use client";

import * as React from "react";
import Link from "next/link";
import { Sparkles, Brain, PlusCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { IntelligenceCards } from "@/components/dashboard/intelligence-card";
import { InsightCard } from "@/components/dashboard/insight-card";
import { LearningActivityTimeline } from "@/components/dashboard/learning-timeline";
import { RecommendationCard } from "@/components/dashboard/recommendation-card";
import { MemoryDetailModal } from "@/components/memory/memory-detail-modal";
import { demoBrand, demoMetrics } from "@/lib/mock-data/brand";
import { demoMemories } from "@/lib/mock-data/memories";
import { Memory } from "@/types";

export default function DashboardPage() {
  const [selectedMemory, setSelectedMemory] = React.useState<Memory | null>(null);

  // Top 3 curated learned insights for the dashboard
  const topInsights = demoMemories.filter((m) =>
    ["mem-02", "mem-01", "mem-03"].includes(m.id)
  );

  return (
    <div className="space-y-8">
      {/* Dashboard Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-border/80 pb-6">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-indigo-400 font-mono">
            <span className="flex h-2 w-2 rounded-full bg-emerald-400" />
            <span>Active Strategy Profile</span>
          </div>
          <h1 className="mt-1 text-2xl md:text-3xl font-extrabold tracking-tight text-foreground">
            Good evening, {demoBrand.name}
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">
            NEXA has learned from {demoBrand.daysLearned} days of audience activity.
          </p>
        </div>

        <Link href="/content">
          <Button
            size="lg"
            className="bg-indigo-600 hover:bg-indigo-500 text-white font-medium shadow-md shadow-indigo-600/30 gap-2 shrink-0"
          >
            <Sparkles className="h-4 w-4" />
            <span>Create Content</span>
          </Button>
        </Link>
      </div>

      {/* 1. Brand Intelligence Metrics */}
      <div className="space-y-3">
        <h2 className="text-xs font-bold uppercase tracking-wider text-muted-foreground font-mono">
          1. Brand Intelligence
        </h2>
        <IntelligenceCards metrics={demoMetrics} />
      </div>

      {/* 4. Recommended Next Action (Highlighted Card) */}
      <div className="space-y-3">
        <h2 className="text-xs font-bold uppercase tracking-wider text-muted-foreground font-mono">
          Strategic Directive
        </h2>
        <RecommendationCard />
      </div>

      {/* 2. What NEXA Has Learned */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-muted-foreground font-mono">
              2. What NEXA Has Learned
            </h2>
            <h3 className="text-lg font-bold text-foreground">Key Audience & Content Insights</h3>
          </div>
          <Link
            href="/memory"
            className="text-xs font-medium text-primary hover:underline inline-flex items-center gap-1"
          >
            <span>Explore all {demoMemories.length} memories</span>
            <ArrowRight className="h-3 w-3" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {topInsights.map((memory) => (
            <InsightCard
              key={memory.id}
              memory={memory}
              onSelectMemory={(m) => setSelectedMemory(m)}
            />
          ))}
        </div>
      </div>

      {/* 3. Learning Activity Timeline */}
      <div className="space-y-3">
        <h2 className="text-xs font-bold uppercase tracking-wider text-muted-foreground font-mono">
          3. Learning Activity
        </h2>
        <LearningActivityTimeline />
      </div>

      {/* Memory Detail Modal */}
      <MemoryDetailModal
        memory={selectedMemory}
        isOpen={Boolean(selectedMemory)}
        onClose={() => setSelectedMemory(null)}
      />
    </div>
  );
}
