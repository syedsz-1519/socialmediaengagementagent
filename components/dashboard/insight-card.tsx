import * as React from "react";
import { MessageSquare, BookmarkCheck, ArrowDownRight, ArrowRight, Brain } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Memory } from "@/types";

interface InsightCardProps {
  memory: Memory;
  onSelectMemory?: (memory: Memory) => void;
}

export function InsightCard({ memory, onSelectMemory }: InsightCardProps) {
  const getIcon = (category: string) => {
    switch (category.toLowerCase()) {
      case "content":
        return MessageSquare;
      case "audience":
        return BookmarkCheck;
      case "performance":
        return ArrowDownRight;
      default:
        return Brain;
    }
  };

  const Icon = getIcon(memory.category);

  return (
    <Card className="flex flex-col justify-between p-5 bg-card/80 border-border/80 hover:border-indigo-500/40 transition-all duration-200 group">
      <div>
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-secondary text-primary">
              <Icon className="h-4 w-4" />
            </div>
            <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              {memory.category}
            </span>
          </div>
          <Badge variant="memory" className="font-mono text-[11px]">
            {memory.confidence}% Confidence
          </Badge>
        </div>

        <h4 className="mt-3 text-base font-semibold text-foreground group-hover:text-primary transition-colors">
          {memory.title}
        </h4>

        <p className="mt-2 text-xs text-muted-foreground line-clamp-2 leading-relaxed">
          {memory.description}
        </p>
      </div>

      <div className="mt-4 flex items-center justify-between border-t border-border/60 pt-3 text-xs">
        <span className="text-muted-foreground">
          Based on <strong className="text-foreground">{memory.evidenceCount} posts</strong>
        </span>
        <button
          onClick={() => onSelectMemory?.(memory)}
          className="inline-flex items-center gap-1 font-medium text-primary hover:underline focus:outline-none"
        >
          <span>View memory</span>
          <ArrowRight className="h-3 w-3" />
        </button>
      </div>
    </Card>
  );
}
