import * as React from "react";
import { ShieldCheck, Compass, CheckCircle2 } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { StrategicBelief } from "@/types";

export function StrategicBeliefsList({ beliefs }: { beliefs: StrategicBelief[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {beliefs.map((belief) => (
        <Card key={belief.id} className="p-5 bg-card/70 border-border/80 flex flex-col justify-between space-y-4">
          <div>
            <div className="flex items-center justify-between gap-2">
              <span className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                <Compass className="h-3.5 w-3.5 text-indigo-400" />
                Strategic Belief
              </span>
              <Badge
                variant={belief.status === "Confirmed" ? "success" : "memory"}
                className="font-mono text-[11px]"
              >
                {belief.status} · {belief.confidence}%
              </Badge>
            </div>

            <h4 className="mt-3 text-base font-bold text-foreground leading-snug">
              {belief.title}
            </h4>

            <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
              {belief.description}
            </p>
          </div>

          <div className="space-y-2 border-t border-border/60 pt-3 text-xs">
            <div className="flex items-start gap-1.5 text-muted-foreground">
              <span className="font-semibold text-foreground shrink-0">Evidence:</span>
              <span>{belief.evidence}</span>
            </div>
            <div className="rounded-md bg-secondary/50 p-2.5 text-[11px] text-indigo-300 border border-indigo-500/20">
              <span className="font-semibold block text-foreground">Rule enforced:</span>
              {belief.impactOnStrategy}
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}
