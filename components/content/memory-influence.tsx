import * as React from "react";
import Link from "next/link";
import { Brain, ArrowRight, ShieldCheck, CheckCircle2 } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface MemoryInfluenceProps {
  memories: {
    memoryId: string;
    title: string;
    confidence: number;
    reason: string;
  }[];
  onInspectMemory?: (memoryId: string) => void;
}

export function MemoryInfluence({ memories, onInspectMemory }: MemoryInfluenceProps) {
  return (
    <Card className="border-indigo-500/30 bg-gradient-to-br from-indigo-950/20 via-card to-card p-6 space-y-5">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 border-b border-border/70 pb-4">
        <div className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-500/20 border border-indigo-500/30 text-indigo-400">
            <Brain className="h-5 w-5" />
          </div>
          <div>
            <h3 className="text-lg font-bold tracking-tight text-foreground flex items-center gap-2">
              Why NEXA chose this
            </h3>
            <p className="text-xs text-muted-foreground">
              NEXA recalled <strong className="text-indigo-400 font-mono">{memories.length} durable brand memories</strong> to shape this content.
            </p>
          </div>
        </div>

        <Link
          href="/memory"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline"
        >
          <span>View all memories</span>
          <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>

      {/* Grid of Influencing Memories */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
        {memories.map((m) => (
          <div
            key={m.memoryId}
            className="rounded-xl border border-indigo-500/20 bg-card/90 p-4 space-y-2 hover:border-indigo-500/50 transition-all cursor-pointer group"
            onClick={() => onInspectMemory?.(m.memoryId)}
          >
            <div className="flex items-start justify-between gap-2">
              <div className="flex items-center gap-2">
                <span className="text-base select-none">🧠</span>
                <span className="font-semibold text-sm text-foreground group-hover:text-primary transition-colors leading-snug">
                  {m.title}
                </span>
              </div>
              <Badge variant="memory" className="font-mono text-[11px] shrink-0">
                {m.confidence}%
              </Badge>
            </div>

            <p className="text-xs text-muted-foreground leading-relaxed pl-6">
              {m.reason}
            </p>
          </div>
        ))}
      </div>

      {/* Trust & Architecture note */}
      <div className="flex items-center gap-2 rounded-lg bg-secondary/40 px-3 py-2 text-[11px] text-muted-foreground border border-border/50">
        <ShieldCheck className="h-4 w-4 text-emerald-400 shrink-0" />
        <span>
          Retrieved via Hindsight semantic recall. This generated recommendation is customized to Byte Brothers' accumulated history, not generic LLM priors.
        </span>
      </div>
    </Card>
  );
}
