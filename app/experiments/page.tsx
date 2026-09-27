"use client";

import * as React from "react";
import { FlaskConical, Plus } from "lucide-react";
import { ExperimentCard } from "@/components/experiments/experiment-card";
import { Tabs } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { demoExperiments } from "@/lib/mock-data/experiments";
import { Experiment } from "@/types";
import { useToast } from "@/components/ui/toast";

export default function ExperimentsPage() {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = React.useState("All");

  const tabs = [
    { id: "All", label: "All Experiments", count: demoExperiments.length },
    {
      id: "Active",
      label: "Active Tests",
      count: demoExperiments.filter((e) => e.status === "Active").length,
    },
    {
      id: "Completed",
      label: "Completed",
      count: demoExperiments.filter((e) => e.status === "Completed").length,
    },
  ];

  const filtered = demoExperiments.filter((e) => {
    if (activeTab === "All") return true;
    return e.status.toLowerCase() === activeTab.toLowerCase();
  });

  const handleLaunchExperiment = () => {
    toast("Hypothesis registered. Telemetry monitoring will log results to Supabase.", "info");
  };

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-border/80 pb-6">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400 font-mono">
            <FlaskConical className="h-4 w-4" />
            <span>Audience Hypothesis Engine</span>
          </div>
          <h1 className="mt-1 text-2xl md:text-3xl font-extrabold tracking-tight text-foreground">
            Experiments
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">
            A/B tests and tactical hypotheses validated against Byte Brothers' audience telemetry.
          </p>
        </div>

        <Button onClick={handleLaunchExperiment} variant="outline" size="sm" className="gap-2 shrink-0">
          <Plus className="h-4 w-4" />
          <span>New Hypothesis</span>
        </Button>
      </div>

      {/* Tabs */}
      <Tabs
        tabs={tabs}
        activeTab={activeTab}
        onChange={setActiveTab}
      />

      {/* Experiment Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {filtered.map((exp) => (
          <ExperimentCard key={exp.id} experiment={exp} />
        ))}
      </div>
    </div>
  );
}
