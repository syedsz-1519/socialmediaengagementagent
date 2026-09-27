import * as React from "react";
import { GitBranch, Compass, Sparkles } from "lucide-react";
import { TimelineView } from "@/components/learning/timeline-view";
import { StrategicBeliefsList } from "@/components/learning/strategic-beliefs";
import { demoLearningTimeline, demoStrategicBeliefs } from "@/lib/mock-data/learning";

export default function LearningPage() {
  return (
    <div className="space-y-10">
      {/* Page Header */}
      <div className="border-b border-border/80 pb-6">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-indigo-400 font-mono">
          <GitBranch className="h-4 w-4" />
          <span>Continuous Strategy Evolution</span>
        </div>
        <h1 className="mt-1 text-2xl md:text-3xl font-extrabold tracking-tight text-foreground">
          Learning Timeline
        </h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Watch how Byte Brothers' strategic knowledge transitioned from cold assumptions to verified audience patterns.
        </p>
      </div>

      {/* 1. Current Strategic Beliefs */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-muted-foreground font-mono">
              Core Principles
            </h2>
            <h3 className="text-lg font-bold text-foreground">Current Strategic Beliefs</h3>
          </div>
          <span className="text-xs text-muted-foreground font-mono">4 verified beliefs</span>
        </div>
        <StrategicBeliefsList beliefs={demoStrategicBeliefs} />
      </div>

      {/* 2. Chronological Timeline */}
      <div className="space-y-4">
        <div>
          <h2 className="text-xs font-bold uppercase tracking-wider text-muted-foreground font-mono">
            30-Day Synthesis
          </h2>
          <h3 className="text-lg font-bold text-foreground">Progression of Audience Discoveries</h3>
        </div>
        <TimelineView events={demoLearningTimeline} />
      </div>
    </div>
  );
}
