"use client";

import * as React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Brand } from "@/types";
import { useToast } from "@/components/ui/toast";
import { Instagram, ExternalLink, ShieldAlert, CheckCircle2 } from "lucide-react";

export function BrandSettingsForm({ brand }: { brand: Brand }) {
  const { toast } = useToast();
  const [formData, setFormData] = React.useState(brand);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast("Byte Brothers brand profile saved", "success");
  };

  return (
    <Card className="bg-card/70 border-border/80">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg">Connected Brand Profile</CardTitle>
          <div className="flex items-center gap-2">
            <span className="flex h-2 w-2 rounded-full bg-emerald-400" />
            <span className="text-xs font-semibold text-emerald-400 font-mono">
              Live Connected Account
            </span>
          </div>
        </div>
        <CardDescription>
          Byte Brothers is the team's real web development & digital product agency.
        </CardDescription>
      </CardHeader>
      <CardContent>
        {/* Synthetic historical data notice */}
        <div className="mb-6 rounded-xl border border-amber-500/30 bg-amber-950/20 p-3.5 text-xs text-amber-300/90 flex items-start gap-2.5">
          <ShieldAlert className="h-4 w-4 text-amber-400 shrink-0 mt-0.5" />
          <div className="space-y-0.5">
            <span className="font-semibold text-amber-200">
              Data Transparency Disclosure:
            </span>
            <p className="leading-relaxed text-[11px] text-muted-foreground">
              {brand.dataSourceNotice} Never presented as actual Instagram analytics.
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1.5">
                Brand Name
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground focus:border-primary focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1.5">
                Business Type
              </label>
              <input
                type="text"
                value={formData.business}
                onChange={(e) => setFormData({ ...formData, business: e.target.value })}
                className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground focus:border-primary focus:outline-none"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1.5">
                Core Positioning & Tagline
              </label>
              <input
                type="text"
                value={formData.tagline}
                onChange={(e) => setFormData({ ...formData, tagline: e.target.value })}
                className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground focus:border-primary focus:outline-none font-mono"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1.5">
                Official Instagram URL
              </label>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={formData.instagramUrl}
                  onChange={(e) => setFormData({ ...formData, instagramUrl: e.target.value })}
                  className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground focus:border-primary focus:outline-none font-mono"
                />
                <a
                  href={formData.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg border border-border bg-secondary/80 p-2.5 text-muted-foreground hover:text-pink-400 hover:border-pink-500/40 transition-colors"
                  aria-label="Visit Instagram profile"
                >
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1.5">
              Positioning Statement
            </label>
            <input
              type="text"
              value={formData.positioning}
              onChange={(e) => setFormData({ ...formData, positioning: e.target.value })}
              className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground focus:border-primary focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1.5">
              Target Audience
            </label>
            <input
              type="text"
              value={formData.targetAudience}
              onChange={(e) => setFormData({ ...formData, targetAudience: e.target.value })}
              className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground focus:border-primary focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1.5">
              Primary Social Media Goal
            </label>
            <input
              type="text"
              value={formData.primaryGoal}
              onChange={(e) => setFormData({ ...formData, primaryGoal: e.target.value })}
              className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground focus:border-primary focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1.5">
              Brand Personality Pillars
            </label>
            <div className="flex flex-wrap gap-2 pt-1">
              {formData.brandPersonality.map((trait, idx) => (
                <Badge key={idx} variant="secondary" className="px-2.5 py-1 text-xs">
                  {trait}
                </Badge>
              ))}
            </div>
          </div>

          <div className="flex justify-end pt-2">
            <Button type="submit" size="sm">
              Save Brand Changes
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
