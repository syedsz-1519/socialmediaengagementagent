import * as React from "react";
import { FlaskConical, CheckCircle2, Clock, ArrowRight, TrendingUp } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Experiment } from "@/types";

export function ExperimentCard({ experiment }: { experiment: Experiment }) {
  const isCompleted = experiment.status === "Completed";

  return (
    <Card className="p-6 bg-card/70 border-border/80 space-y-4 hover:border-indigo-500/40 transition-colors">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 border-b border-border/60 pb-3">
        <div className="flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-md bg-secondary text-primary">
            <FlaskConical className="h-4 w-4" />
          </div>
          <div>
            <span className="text-xs font-mono font-bold text-muted-foreground">
              {experiment.number}
            </span>
            <h3 className="text-base font-bold text-foreground">{experiment.name}</h3>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Badge variant={isCompleted ? "success" : "default"} className="font-mono text-xs">
            {experiment.status}
          </Badge>
          <span className="text-xs font-mono text-muted-foreground">{experiment.startedAt}</span>
        </div>
      </div>

      {/* Hypothesis */}
      <div className="space-y-1">
        <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          Hypothesis
        </span>
        <p className="text-sm text-foreground font-medium">{experiment.hypothesis}</p>
      </div>

      {/* Variants comparison */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
        <div className="rounded-lg border border-border/70 bg-secondary/30 p-3">
          <span className="font-mono font-bold text-muted-foreground block mb-1">
            VARIANT A (Control)
          </span>
          <p className="text-muted-foreground">{experiment.variantA}</p>
        </div>
        <div className="rounded-lg border border-indigo-500/30 bg-indigo-950/20 p-3">
          <span className="font-mono font-bold text-indigo-400 block mb-1">
            VARIANT B (Test)
          </span>
          <p className="text-foreground">{experiment.variantB}</p>
        </div>
      </div>

      {/* Result & Learning */}
      <div className="rounded-xl border border-border/80 bg-background/50 p-4 space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Result Observed
          </span>
          <span className="text-xs font-mono font-bold text-emerald-400">
            {experiment.result}
          </span>
        </div>

        <div className="pt-2 border-t border-border/60">
          <span className="text-xs font-semibold text-foreground flex items-center gap-1.5 mb-1">
            <TrendingUp className="h-3.5 w-3.5 text-indigo-400" />
            Learned Principle
          </span>
          <p className="text-xs text-muted-foreground leading-relaxed">
            {experiment.learning}
          </p>
        </div>
      </div>
    </Card>
  );
}
