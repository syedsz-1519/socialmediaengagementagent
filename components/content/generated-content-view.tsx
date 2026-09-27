"use client";

import * as React from "react";
import {
  Copy,
  Check,
  Clock,
  Sparkles,
  Share2,
  BookmarkCheck,
  Video,
  FileText,
  Hash,
} from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { GeneratedContent } from "@/types";
import { MemoryInfluence } from "./memory-influence";
import { BaselineComparison } from "./baseline-comparison";
import { useToast } from "@/components/ui/toast";

interface GeneratedContentViewProps {
  content: GeneratedContent;
  onInspectMemory?: (memoryId: string) => void;
  onReset?: () => void;
}

export function GeneratedContentView({
  content,
  onInspectMemory,
  onReset,
}: GeneratedContentViewProps) {
  const { toast } = useToast();
  const [copiedCaption, setCopiedCaption] = React.useState(false);
  const [copiedScript, setCopiedScript] = React.useState(false);

  const handleCopyCaption = () => {
    navigator.clipboard.writeText(content.caption);
    setCopiedCaption(true);
    toast("Caption & hashtags copied to clipboard", "success");
    setTimeout(() => setCopiedCaption(false), 2000);
  };

  const handleCopyScript = () => {
    const fullScript = `HOOK:\n${content.hook}\n\nOPENING:\n${content.script.opening}\n\nPAIN POINT:\n${content.script.painPoint}\n\nSOLUTION:\n${content.script.solution}\n\nCTA:\n${content.script.cta}`;
    navigator.clipboard.writeText(fullScript);
    setCopiedScript(true);
    toast("Reel script copied to clipboard", "success");
    setTimeout(() => setCopiedScript(false), 2000);
  };

  return (
    <div className="space-y-6">
      {/* Top Banner with Title, Posting Time & Quick Actions */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-border/80 pb-5">
        <div>
          <div className="flex items-center gap-2">
            <Badge variant="memory" className="font-mono text-xs">
              {content.contentType} Package
            </Badge>
            <span className="text-xs text-muted-foreground">Generated with Byte Brothers Brand Memory</span>
          </div>
          <h2 className="mt-1 text-2xl font-bold tracking-tight text-foreground">
            {content.title}
          </h2>
        </div>

        <div className="flex items-center gap-3">
          {/* Recommended Posting Time */}
          <div className="flex items-center gap-2 rounded-xl border border-indigo-500/30 bg-indigo-950/30 px-3.5 py-2">
            <Clock className="h-4 w-4 text-indigo-400" />
            <div>
              <div className="text-[10px] uppercase font-semibold text-muted-foreground font-mono">
                Optimal Dispatch
              </div>
              <div className="text-xs font-bold text-foreground flex items-center gap-1.5 font-mono">
                <span>{content.recommendedTime}</span>
                <span className="text-[10px] text-emerald-400 font-normal">82% Conf</span>
              </div>
            </div>
          </div>

          {onReset && (
            <Button variant="outline" size="sm" onClick={onReset}>
              Create Another
            </Button>
          )}
        </div>
      </div>

      {/* Flagship Section: Why NEXA Chose This */}
      <MemoryInfluence
        memories={content.memoriesUsed}
        onInspectMemory={onInspectMemory}
      />

      {/* Without vs With Memory Comparison Demo */}
      <BaselineComparison />

      {/* Core Content Grid: Hook, Concept & Script */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column: Script & Teardown (2 cols) */}
        <div className="lg:col-span-2 space-y-6">
          {/* Hook Card */}
          <Card className="p-5 border-border/80 bg-card/70">
            <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              <span className="flex items-center gap-1.5 text-primary">
                <Sparkles className="h-4 w-4" />
                Proven Hook Formula
              </span>
              <span className="font-mono text-[11px] text-emerald-400">91% Historical Lift</span>
            </div>
            <p className="mt-3 text-lg md:text-xl font-bold text-foreground leading-snug">
              "{content.hook}"
            </p>
          </Card>

          {/* Concept Card */}
          <Card className="p-5 border-border/80 bg-card/70">
            <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Strategic Concept
            </div>
            <p className="mt-2 text-sm text-foreground leading-relaxed">
              {content.concept}
            </p>
          </Card>

          {/* Reel Script Card */}
          <Card className="border-border/80 bg-card/70">
            <CardHeader className="flex flex-row items-center justify-between pb-3">
              <div className="flex items-center gap-2">
                <Video className="h-4 w-4 text-indigo-400" />
                <CardTitle className="text-base font-semibold">Short-Form Reel Script</CardTitle>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={handleCopyScript}
                className="gap-1.5 text-xs h-8"
              >
                {copiedScript ? <Check className="h-3.5 w-3.5 text-emerald-400" /> : <Copy className="h-3.5 w-3.5" />}
                {copiedScript ? "Copied" : "Copy Script"}
              </Button>
            </CardHeader>
            <CardContent className="space-y-4 text-sm divide-y divide-border/50">
              <div className="pt-2">
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-indigo-400">
                  Opening (0:00 - 0:05)
                </span>
                <p className="mt-1 text-foreground leading-relaxed">{content.script.opening}</p>
              </div>
              <div className="pt-3">
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-amber-400">
                  The Founder Pain Point (0:05 - 0:20)
                </span>
                <p className="mt-1 text-foreground leading-relaxed">{content.script.painPoint}</p>
              </div>
              <div className="pt-3">
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-emerald-400">
                  The Concrete Fix (0:20 - 0:35)
                </span>
                <p className="mt-1 text-foreground leading-relaxed">{content.script.solution}</p>
              </div>
              <div className="pt-3">
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-primary">
                  Interactive Lead CTA (0:35 - 0:45)
                </span>
                <p className="mt-1 text-foreground leading-relaxed font-medium">{content.script.cta}</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Column: Caption, Hashtags & Publishing Metadata (1 col) */}
        <div className="space-y-6">
          {/* Caption Card */}
          <Card className="border-border/80 bg-card/70 flex flex-col justify-between">
            <CardHeader className="flex flex-row items-center justify-between pb-3">
              <div className="flex items-center gap-2">
                <FileText className="h-4 w-4 text-primary" />
                <CardTitle className="text-base font-semibold">Post Caption</CardTitle>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={handleCopyCaption}
                className="gap-1.5 text-xs h-8"
              >
                {copiedCaption ? <Check className="h-3.5 w-3.5 text-emerald-400" /> : <Copy className="h-3.5 w-3.5" />}
                {copiedCaption ? "Copied" : "Copy"}
              </Button>
            </CardHeader>
            <CardContent>
              <div className="rounded-lg bg-background/60 p-3.5 font-sans text-xs text-foreground whitespace-pre-wrap leading-relaxed border border-border/60">
                {content.caption}
              </div>
            </CardContent>
          </Card>

          {/* Hashtags Card */}
          <Card className="p-5 border-border/80 bg-card/70">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
              <Hash className="h-4 w-4 text-muted-foreground" />
              <span>Recommended Tags</span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {content.hashtags.map((tag, idx) => (
                <span
                  key={idx}
                  className="rounded-md border border-border bg-secondary/60 px-2.5 py-1 text-xs font-mono text-muted-foreground hover:text-foreground transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>
          </Card>

          {/* Agency Context */}
          <div className="rounded-xl border border-border/60 bg-secondary/30 p-4 text-xs text-muted-foreground space-y-1">
            <div className="font-semibold text-foreground">Next Action</div>
            <p>
              Record the video using the provided teleprompter breakdown, then dispatch on Instagram at <strong>{content.recommendedTime}</strong> for optimal organic reach.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
