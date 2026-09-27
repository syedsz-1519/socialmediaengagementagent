"use client";

import * as React from "react";
import { Sparkles, Brain, Wand2, ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ContentInputProps {
  onGenerate: (prompt: string, format: string) => void;
  isLoading?: boolean;
  loadingStep?: string;
}

const quickActions = [
  { label: "Reel", format: "Reel", prompt: "Create tomorrow's Instagram Reel" },
  { label: "Carousel", format: "Carousel", prompt: "Create an educational carousel checklist for founders" },
  { label: "Content Strategy", format: "Strategy", prompt: "Synthesize this week's content strategy from audience signals" },
  { label: "Hook Set", format: "Hook", prompt: "Generate 3 high-converting question hooks for website conversion" },
  { label: "Caption", format: "Caption", prompt: "Write an educational caption breaking down mobile page speed" },
];

export function ContentInput({ onGenerate, isLoading, loadingStep }: ContentInputProps) {
  const [prompt, setPrompt] = React.useState("Create tomorrow's Instagram Reel");
  const [selectedFormat, setSelectedFormat] = React.useState("Reel");

  const handleSelectQuickAction = (action: (typeof quickActions)[0]) => {
    setPrompt(action.prompt);
    setSelectedFormat(action.format);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt.trim() || isLoading) return;
    onGenerate(prompt, selectedFormat);
  };

  return (
    <Card className="border-indigo-500/30 bg-gradient-to-br from-card via-card to-indigo-950/20 p-6 md:p-8 space-y-6">
      <div>
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-indigo-400 font-mono">
          <Brain className="h-3.5 w-3.5" />
          <span>Memory-Informed Generation</span>
        </div>
        <h2 className="mt-1 text-2xl md:text-3xl font-bold tracking-tight text-foreground">
          Create Content
        </h2>
        <p className="mt-1 text-sm text-muted-foreground">
          Tell NEXA what you want to create. NEXA will recall accumulated audience patterns before writing a single word.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="prompt-input"
            className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2"
          >
            What should NEXA create?
          </label>
          <div className="relative">
            <textarea
              id="prompt-input"
              rows={3}
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Example: Create tomorrow's Instagram Reel"
              className="w-full rounded-xl border border-border bg-background/80 p-4 text-sm text-foreground placeholder:text-muted-foreground focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
            />
          </div>
        </div>

        {/* Quick action chips */}
        <div className="space-y-2">
          <span className="text-xs font-medium text-muted-foreground">Quick formats:</span>
          <div className="flex flex-wrap gap-2">
            {quickActions.map((action) => {
              const isSelected = selectedFormat === action.format;
              return (
                <button
                  key={action.label}
                  type="button"
                  onClick={() => handleSelectQuickAction(action)}
                  className={`rounded-lg border px-3 py-1.5 text-xs font-medium transition-all ${
                    isSelected
                      ? "border-indigo-500/60 bg-indigo-500/20 text-indigo-300 font-semibold"
                      : "border-border/80 bg-secondary/50 text-muted-foreground hover:bg-secondary hover:text-foreground"
                  }`}
                >
                  {action.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Generation Trigger & Progress */}
        <div className="pt-2 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="text-xs text-muted-foreground">
            {isLoading ? (
              <span className="flex items-center gap-2 text-indigo-400 font-medium">
                <span className="animate-spin h-3.5 w-3.5 border-2 border-indigo-400 border-t-transparent rounded-full" />
                {loadingStep || "Recalling Hindsight memories..."}
              </span>
            ) : (
              <span>✨ 4 relevant memories will be recalled to formulate this output</span>
            )}
          </div>

          <Button
            type="submit"
            size="lg"
            isLoading={isLoading}
            className="bg-indigo-600 hover:bg-indigo-500 text-white font-medium shadow-md shadow-indigo-600/30 gap-2 shrink-0"
          >
            <Wand2 className="h-4 w-4" />
            <span>Generate with NEXA</span>
          </Button>
        </div>
      </form>
    </Card>
  );
}
