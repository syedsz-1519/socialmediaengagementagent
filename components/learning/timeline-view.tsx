import * as React from "react";
import { GitBranch, Calendar, CheckCircle2, TrendingUp, AlertTriangle } from "lucide-react";
import { LearningEvent } from "@/types";
import { Badge } from "@/components/ui/badge";

export function TimelineView({ events }: { events: LearningEvent[] }) {
  const getCategoryBadge = (cat: LearningEvent["category"]) => {
    switch (cat) {
      case "Strategy Update":
        return <Badge variant="memory">Strategy Update</Badge>;
      case "Strengthened":
        return <Badge variant="success">Pattern Strengthened</Badge>;
      case "Flagged":
        return <Badge variant="warning">Signal Flagged</Badge>;
      case "Discovery":
        return <Badge variant="default">New Pattern</Badge>;
    }
  };

  return (
    <div className="relative border-l border-border/80 ml-4 md:ml-6 space-y-8 my-6">
      {events.map((event) => (
        <div key={event.id} className="relative pl-6 md:pl-8">
          {/* Milestone Node */}
          <div className="absolute -left-3 top-1 flex h-6 w-6 items-center justify-center rounded-full border-2 border-background bg-indigo-600 text-white text-[10px] font-bold font-mono">
            D{event.day}
          </div>

          {/* Event Content Box */}
          <div className="rounded-xl border border-border/80 bg-card/70 p-5 space-y-3 hover:border-indigo-500/40 transition-colors">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold text-indigo-400">
                  DAY {event.day}
                </span>
                <span className="text-border">·</span>
                <span className="text-xs text-muted-foreground">{event.timestamp}</span>
              </div>
              {getCategoryBadge(event.category)}
            </div>

            <h4 className="text-base font-bold text-foreground">
              {event.title}
            </h4>

            <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
              {event.description}
            </p>

            <div className="rounded-lg bg-secondary/50 px-3 py-1.5 text-xs font-mono text-muted-foreground border border-border/40 inline-flex items-center gap-2">
              <TrendingUp className="h-3.5 w-3.5 text-primary" />
              <span>{event.confidenceImpact}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
