"use client";

import * as React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/toast";

export function AISettingsForm() {
  const { toast } = useToast();
  const [preferredFormat, setPreferredFormat] = React.useState("Reel");
  const [tone, setTone] = React.useState("Professional, practical, confident and approachable");
  const [constraints, setConstraints] = React.useState(
    "Never use shallow clickbait hooks\nFocus on practical ROI over developer jargon\nAlways provide an actionable takeaway before proposing agency services"
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast("AI content parameters updated", "success");
  };

  return (
    <Card className="bg-card/70 border-border/80">
      <CardHeader>
        <CardTitle className="text-lg">AI Content Generation Parameters</CardTitle>
        <CardDescription>
          Configure how the Groq LLM agent balances tone, formats, and strategic constraints.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1.5">
                Preferred Content Format
              </label>
              <select
                value={preferredFormat}
                onChange={(e) => setPreferredFormat(e.target.value)}
                className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground focus:border-primary focus:outline-none"
              >
                <option value="Reel">Instagram Reel (Video Script)</option>
                <option value="Carousel">Carousel Checklist Deck</option>
                <option value="Hook">Hook Sets</option>
                <option value="Caption">Long-Form Case Study Caption</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1.5">
                Target LLM Model
              </label>
              <input
                type="text"
                disabled
                value="openai/gpt-oss-120b (via Groq Cloud)"
                className="w-full rounded-lg border border-border bg-secondary/60 px-3 py-2 text-sm text-muted-foreground cursor-not-allowed"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1.5">
              Tone Directives
            </label>
            <input
              type="text"
              value={tone}
              onChange={(e) => setTone(e.target.value)}
              className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground focus:border-primary focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1.5">
              Content Constraints (One rule per line)
            </label>
            <textarea
              rows={4}
              value={constraints}
              onChange={(e) => setConstraints(e.target.value)}
              className="w-full rounded-lg border border-border bg-background px-3 py-2 text-xs md:text-sm text-foreground focus:border-primary focus:outline-none font-mono"
            />
          </div>

          <div className="flex justify-end pt-2">
            <Button type="submit" size="sm">
              Save AI Parameters
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
