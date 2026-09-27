import * as React from "react";
import { Settings as SettingsIcon } from "lucide-react";
import { BrandSettingsForm } from "@/components/settings/brand-settings";
import { AISettingsForm } from "@/components/settings/ai-settings";
import { MemorySettingsForm } from "@/components/settings/memory-settings";
import { IntegrationsStatus } from "@/components/settings/integrations-status";
import { demoBrand } from "@/lib/mock-data/brand";

export default function SettingsPage() {
  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div className="border-b border-border/80 pb-6">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground font-mono">
          <SettingsIcon className="h-4 w-4" />
          <span>Configuration & Extensions</span>
        </div>
        <h1 className="mt-1 text-2xl md:text-3xl font-extrabold tracking-tight text-foreground">
          Settings
        </h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Manage brand persona, AI reasoning constraints, and Hindsight memory engine rules.
        </p>
      </div>

      <div className="space-y-8 max-w-4xl">
        {/* Section 1: Brand Settings */}
        <BrandSettingsForm brand={demoBrand} />

        {/* Section 2: AI Settings */}
        <AISettingsForm />

        {/* Section 3: Memory & Learning Engine */}
        <MemorySettingsForm />

        {/* Section 4: Architecture Integration Boundaries */}
        <IntegrationsStatus />
      </div>
    </div>
  );
}
