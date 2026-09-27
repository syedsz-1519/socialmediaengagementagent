import * as React from "react";
import Link from "next/link";
import { Sparkles, Brain, ArrowRight, ShieldCheck } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function RecommendationCard() {
  return (
    <Card className="relative overflow-hidden border-indigo-500/40 bg-gradient-to-br from-indigo-950/40 via-card to-card p-6 shadow-lg shadow-indigo-950/20">
      <div className="absolute right-0 top-0 -mr-12 -mt-12 h-44 w-44 rounded-full bg-indigo-500/10 blur-3xl pointer-events-none" />

      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 relative z-10">
        <div className="space-y-3 max-w-2xl">
          <div className="flex items-center gap-2">
            <span className="flex h-6 w-6 items-center justify-center rounded-md bg-indigo-500/20 text-indigo-400">
              <Sparkles className="h-3.5 w-3.5" />
            </span>
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-400 font-mono">
              NEXA Recommends
            </span>
            <Badge variant="memory" className="font-mono text-[11px]">
              87% Confidence
            </Badge>
          </div>

          <h3 className="text-xl md:text-2xl font-bold tracking-tight text-foreground">
            Create a problem-focused educational Reel.
          </h3>

          <div className="rounded-lg border border-border/80 bg-background/50 p-3.5 space-y-1">
            <div className="flex items-center gap-2 text-xs font-semibold text-foreground">
              <Brain className="h-3.5 w-3.5 text-indigo-400" />
              <span>Why NEXA chose this:</span>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Your audience has consistently responded better to business pain-point content
              (14.8% avg. engagement vs. 3.4% on promotional broadcasts). Post #18 and #20 proved
              that interrogative hooks double founder comments.
            </p>
          </div>
        </div>

        <div className="flex shrink-0 flex-col sm:flex-row md:flex-col gap-2.5">
          <Link href="/content?action=recommended-reel">
            <Button size="lg" className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-medium shadow-md shadow-indigo-600/30 gap-2">
              <span>Create this Reel</span>
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
          <div className="flex items-center justify-center gap-1.5 text-[11px] text-muted-foreground">
            <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
            <span>Backed by 4 active memories</span>
          </div>
        </div>
      </div>
    </Card>
  );
}
