"use client";

import * as React from "react";
import { useSearchParams } from "next/navigation";
import { ContentInput } from "@/components/content/content-input";
import { GeneratedContentView } from "@/components/content/generated-content-view";
import { MemoryDetailModal } from "@/components/memory/memory-detail-modal";
import { demoGeneratedReel, alternativeGeneratedTemplates } from "@/lib/mock-data/generated-content";
import { demoMemories } from "@/lib/mock-data/memories";
import { GeneratedContent, Memory } from "@/types";
import { useToast } from "@/components/ui/toast";

function ContentPageInner() {
  const { toast } = useToast();
  const searchParams = useSearchParams();
  const initialAction = searchParams.get("action");

  // State
  const [generatedContent, setGeneratedContent] = React.useState<GeneratedContent | null>(
    initialAction === "recommended-reel" ? demoGeneratedReel : demoGeneratedReel
  );
  const [isLoading, setIsLoading] = React.useState(false);
  const [loadingStep, setLoadingStep] = React.useState("");
  const [inspectedMemory, setInspectedMemory] = React.useState<Memory | null>(null);

  const handleGenerate = (prompt: string, format: string) => {
    setIsLoading(true);
    setLoadingStep("Querying Hindsight Cloud for brand patterns...");

    setTimeout(() => {
      setLoadingStep("Recalling 4 high-confidence audience memories...");
    }, 600);

    setTimeout(() => {
      setLoadingStep("Groq LLM synthesizing script & reasoning rationale...");
    }, 1300);

    setTimeout(() => {
      setIsLoading(false);
      let selectedResult: GeneratedContent = demoGeneratedReel;
      if (format.toLowerCase().includes("carousel") && alternativeGeneratedTemplates.carousel) {
        selectedResult = alternativeGeneratedTemplates.carousel;
      } else if (format.toLowerCase().includes("hook") && alternativeGeneratedTemplates.hook) {
        selectedResult = alternativeGeneratedTemplates.hook;
      }
      setGeneratedContent(selectedResult);
      toast("Generated content package using recalled brand memories", "success");
    }, 1900);
  };

  const handleInspectMemory = (memoryId: string) => {
    const found = demoMemories.find((m) => m.id === memoryId);
    if (found) {
      setInspectedMemory(found);
    }
  };

  return (
    <div className="space-y-8">
      {/* Creation input bar */}
      <ContentInput
        onGenerate={handleGenerate}
        isLoading={isLoading}
        loadingStep={loadingStep}
      />

      {/* Generated Result View */}
      {generatedContent && !isLoading && (
        <GeneratedContentView
          content={generatedContent}
          onInspectMemory={handleInspectMemory}
          onReset={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        />
      )}

      {/* Detail modal for memories clicked from the "Why NEXA chose this" section */}
      <MemoryDetailModal
        memory={inspectedMemory}
        isOpen={Boolean(inspectedMemory)}
        onClose={() => setInspectedMemory(null)}
      />
    </div>
  );
}

export default function ContentPage() {
  return (
    <React.Suspense
      fallback={
        <div className="flex h-64 items-center justify-center text-xs text-muted-foreground">
          Loading content studio...
        </div>
      }
    >
      <ContentPageInner />
    </React.Suspense>
  );
}
