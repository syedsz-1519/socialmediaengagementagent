import * as React from "react";
import { Brain, ArrowRight, ZapOff, Sparkles } from "lucide-react";
import { Card } from "@/components/ui/card";

export function BaselineComparison() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Card className="p-4 bg-card/60 border-border/80 text-xs">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Sparkles className="h-4 w-4 text-indigo-400" />
          <span className="font-semibold text-foreground text-sm">
            Comparison: Without Memory vs With NEXA Memory
          </span>
        </div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-xs text-primary hover:underline font-medium"
        >
          {isOpen ? "Collapse" : "Compare with Generic AI"}
        </button>
      </div>

      {isOpen && (
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3 pt-3 border-t border-border/60">
          {/* Without Memory */}
          <div className="rounded-lg border border-red-500/20 bg-red-950/10 p-3.5 space-y-2">
            <div className="flex items-center gap-2 text-red-400 font-semibold">
              <ZapOff className="h-3.5 w-3.5" />
              <span>Generic AI (No Hindsight Memory)</span>
            </div>
            <p className="font-medium text-foreground italic">
              "5 Ways To Improve Your Website Design in 2026"
            </p>
            <p className="text-muted-foreground text-[11px] leading-relaxed">
              Produces a broad, repetitive listicle without knowing that Byte Brothers' audience
              actively skips generic design tips and demands actionable diagnostic audits.
            </p>
          </div>

          {/* With NEXA Memory */}
          <div className="rounded-lg border border-emerald-500/30 bg-emerald-950/10 p-3.5 space-y-2">
            <div className="flex items-center gap-2 text-emerald-400 font-semibold">
              <Brain className="h-3.5 w-3.5" />
              <span>NEXA (Accumulated Brand Memory)</span>
            </div>
            <p className="font-medium text-foreground italic">
              "Your website may be losing customers before they ever call you."
            </p>
            <p className="text-muted-foreground text-[11px] leading-relaxed">
              Leveraged 30 days of data: problem-focused opening (+43% comments), 3-point diagnostic checklist
              (+210% saves), and an interactive audit keyword CTA.
            </p>
          </div>
        </div>
      )}
    </Card>
  );
}
