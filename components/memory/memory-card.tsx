import * as React from "react";
import { Brain, ArrowRight, ShieldCheck, Clock, Layers } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Memory } from "@/types";

interface MemoryCardProps {
  memory: Memory;
  onOpenDetail: (memory: Memory) => void;
}

export function MemoryCard({ memory, onOpenDetail }: MemoryCardProps) {
  const getCategoryColor = (cat: string) => {
    switch (cat.toLowerCase()) {
      case "audience":
        return "text-indigo-400 bg-indigo-500/10 border-indigo-500/20";
      case "content":
        return "text-blue-400 bg-blue-500/10 border-blue-500/20";
      case "performance":
        return "text-emerald-400 bg-emerald-500/10 border-emerald-500/20";
      case "brand":
        return "text-purple-400 bg-purple-500/10 border-purple-500/20";
      case "strategy":
        return "text-amber-400 bg-amber-500/10 border-amber-500/20";
      case "feedback":
        return "text-cyan-400 bg-cyan-500/10 border-cyan-500/20";
      default:
        return "text-muted-foreground bg-secondary border-border";
    }
  };

  return (
    <Card className="flex flex-col justify-between p-5 bg-card/80 border-border/80 hover:border-indigo-500/40 transition-all duration-200">
      <div>
        {/* Category & Status */}
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span
              className={`inline-flex items-center gap-1.5 rounded-md border px-2 py-0.5 text-xs font-semibold uppercase tracking-wider ${getCategoryColor(
                memory.category
              )}`}
            >
              <Brain className="h-3.5 w-3.5" />
              <span>{memory.category}</span>
            </span>
          </div>

          <Badge variant="memory" className="font-mono text-[11px]">
            {memory.confidence}% Confidence
          </Badge>
        </div>

        {/* Title */}
        <h4 className="mt-3.5 text-base font-semibold leading-snug text-foreground hover:text-primary transition-colors cursor-pointer" onClick={() => onOpenDetail(memory)}>
          {memory.title}
        </h4>

        {/* Description */}
        <p className="mt-2 text-xs leading-relaxed text-muted-foreground line-clamp-3">
          {memory.description}
        </p>
      </div>

      {/* Meta details & View Evidence CTA */}
      <div className="mt-5 space-y-3 border-t border-border/60 pt-3.5 text-xs">
        <div className="grid grid-cols-2 gap-2 text-muted-foreground">
          <div className="flex items-center gap-1.5">
            <Layers className="h-3.5 w-3.5 text-muted-foreground/70" />
            <span>
              Evidence: <strong className="text-foreground">{memory.evidenceCount} posts</strong>
            </span>
          </div>
          <div className="flex items-center gap-1.5 justify-end">
            <Clock className="h-3.5 w-3.5 text-muted-foreground/70" />
            <span>Updated {memory.lastUpdated}</span>
          </div>
        </div>

        <Button
          variant="outline"
          size="sm"
          onClick={() => onOpenDetail(memory)}
          className="w-full justify-between hover:bg-secondary border-border text-foreground font-medium"
        >
          <span>View Evidence & Details</span>
          <ArrowRight className="h-3.5 w-3.5 text-muted-foreground" />
        </Button>
      </div>
    </Card>
  );
}
