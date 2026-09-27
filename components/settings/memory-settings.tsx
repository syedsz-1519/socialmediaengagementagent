"use client";

import * as React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Brain, Database, ShieldCheck } from "lucide-react";
import { useToast } from "@/components/ui/toast";

export function MemorySettingsForm() {
  const { toast } = useToast();
  const [memoryEnabled, setMemoryEnabled] = React.useState(true);
  const [learningEnabled, setLearningEnabled] = React.useState(true);
  const [minConfidence, setMinConfidence] = React.useState(70);

  const handleSave = () => {
    toast("Memory policy saved to local state", "success");
  };

  return (
    <Card className="bg-card/70 border-border/80">
      <CardHeader>
        <CardTitle className="text-lg">Hindsight Memory & Learning Engine</CardTitle>
        <CardDescription>
          Control how NEXA retains historical experiences and reflects on new audience signals.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Toggle 1: Memory Enabled */}
        <div className="flex items-center justify-between gap-4 rounded-xl border border-border/70 bg-background/50 p-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2 font-semibold text-sm text-foreground">
              <Brain className="h-4 w-4 text-indigo-400" />
              <span>Memory Recall Enabled</span>
            </div>
            <p className="text-xs text-muted-foreground">
              When enabled, NEXA injects recalled semantic memories into LLM generation prompts.
            </p>
          </div>
          <button
            type="button"
            role="switch"
            aria-checked={memoryEnabled}
            onClick={() => setMemoryEnabled(!memoryEnabled)}
            className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
              memoryEnabled ? "bg-indigo-600" : "bg-muted"
            }`}
          >
            <span
              className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out ${
                memoryEnabled ? "translate-x-5" : "translate-x-0"
              }`}
            />
          </button>
        </div>

        {/* Toggle 2: Learning Enabled */}
        <div className="flex items-center justify-between gap-4 rounded-xl border border-border/70 bg-background/50 p-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2 font-semibold text-sm text-foreground">
              <Database className="h-4 w-4 text-emerald-400" />
              <span>Continuous Pattern Learning</span>
            </div>
            <p className="text-xs text-muted-foreground">
              When enabled, new post analytics automatically trigger reflection cycles to update confidence scores.
            </p>
          </div>
          <button
            type="button"
            role="switch"
            aria-checked={learningEnabled}
            onClick={() => setLearningEnabled(!learningEnabled)}
            className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
              learningEnabled ? "bg-emerald-600" : "bg-muted"
            }`}
          >
            <span
              className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out ${
                learningEnabled ? "translate-x-5" : "translate-x-0"
              }`}
            />
          </button>
        </div>

        {/* Slider: Min Confidence Threshold */}
        <div className="space-y-2 rounded-xl border border-border/70 bg-background/50 p-4">
          <div className="flex items-center justify-between text-xs">
            <span className="font-semibold text-foreground">Minimum Confidence Threshold for Generation</span>
            <span className="font-mono font-bold text-indigo-400">{minConfidence}%</span>
          </div>
          <input
            type="range"
            min="50"
            max="95"
            value={minConfidence}
            onChange={(e) => setMinConfidence(Number(e.target.value))}
            className="w-full accent-indigo-500 cursor-pointer"
          />
          <p className="text-[11px] text-muted-foreground">
            Only memories with confidence greater than or equal to {minConfidence}% will be recalled to formulate strategic decisions.
          </p>
        </div>

        <div className="flex justify-end pt-2">
          <Button onClick={handleSave} size="sm">
            Save Engine Preferences
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
