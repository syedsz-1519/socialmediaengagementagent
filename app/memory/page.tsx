"use client";

import * as React from "react";
import { Brain, Filter, Plus, Search, ShieldCheck } from "lucide-react";
import { MemoryCard } from "@/components/memory/memory-card";
import { MemoryFilters } from "@/components/memory/memory-filters";
import { MemoryDetailModal } from "@/components/memory/memory-detail-modal";
import { Button } from "@/components/ui/button";
import { demoMemories as initialMemories } from "@/lib/mock-data/memories";
import { Memory, MemoryCategory } from "@/types";
import { useToast } from "@/components/ui/toast";

export default function MemoryPage() {
  const { toast } = useToast();
  const [memories, setMemories] = React.useState<Memory[]>(initialMemories);
  const [activeCategory, setActiveCategory] = React.useState<MemoryCategory>("All");
  const [searchQuery, setSearchQuery] = React.useState("");
  const [selectedMemory, setSelectedMemory] = React.useState<Memory | null>(null);

  // Category counts
  const categories: { id: MemoryCategory; label: string; count: number }[] = [
    { id: "All", label: "All", count: memories.length },
    {
      id: "Audience",
      label: "Audience",
      count: memories.filter((m) => m.category === "Audience").length,
    },
    {
      id: "Content",
      label: "Content",
      count: memories.filter((m) => m.category === "Content").length,
    },
    {
      id: "Performance",
      label: "Performance",
      count: memories.filter((m) => m.category === "Performance").length,
    },
    {
      id: "Brand",
      label: "Brand",
      count: memories.filter((m) => m.category === "Brand").length,
    },
    {
      id: "Strategy",
      label: "Strategy",
      count: memories.filter((m) => m.category === "Strategy").length,
    },
    {
      id: "Feedback",
      label: "Feedback",
      count: memories.filter((m) => m.category === "Feedback").length,
    },
  ];

  // Filter memories
  const filteredMemories = memories.filter((m) => {
    const matchesCategory =
      activeCategory === "All" || m.category.toLowerCase() === activeCategory.toLowerCase();
    const matchesSearch =
      searchQuery.trim() === "" ||
      m.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      m.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      m.tags?.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const handleUpdateMemory = (updated: Memory) => {
    setMemories((prev) => prev.map((m) => (m.id === updated.id ? updated : m)));
    setSelectedMemory(updated);
  };

  const handleDeleteMemory = (id: string) => {
    setMemories((prev) => prev.filter((m) => m.id !== id));
  };

  const handleAddMockMemory = () => {
    const newMem: Memory = {
      id: `mem-${Date.now()}`,
      category: "Audience",
      title: "Video pacing under 35 seconds retains 60% more completion on Instagram Reels",
      description: "Fast cuts in the first 5 seconds prevent founder drop-off before the diagnostic CTA.",
      confidence: 81,
      evidenceCount: 4,
      firstObserved: "Today",
      lastUpdated: "Just now",
      supportingPostIds: ["post-15", "post-18", "post-20"],
      influencedCount: 2,
      status: "Active",
      tags: ["Video Pacing", "Reels", "Audience Retention"],
    };
    setMemories((prev) => [newMem, ...prev]);
    toast("Simulated retaining new learned memory in Hindsight knowledge base", "success");
  };

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-border/80 pb-6">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-indigo-400 font-mono">
            <Brain className="h-4 w-4" />
            <span>Hindsight Knowledge Base</span>
          </div>
          <h1 className="mt-1 text-2xl md:text-3xl font-extrabold tracking-tight text-foreground">
            Brand Memory
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Everything NEXA has learned about your brand and audience.
          </p>
        </div>

        <Button
          onClick={handleAddMockMemory}
          variant="outline"
          size="sm"
          className="gap-2 shrink-0 border-indigo-500/40 text-indigo-300 hover:bg-indigo-950/30"
        >
          <Plus className="h-4 w-4" />
          <span>Simulate Retain Event</span>
        </Button>
      </div>

      {/* Categories & Filter Bar */}
      <MemoryFilters
        categories={categories}
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />

      {/* Memory Cards Grid */}
      {filteredMemories.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredMemories.map((memory) => (
            <MemoryCard
              key={memory.id}
              memory={memory}
              onOpenDetail={(m) => setSelectedMemory(m)}
            />
          ))}
        </div>
      ) : (
        <div className="rounded-2xl border border-dashed border-border/80 p-12 text-center space-y-3">
          <Brain className="mx-auto h-8 w-8 text-muted-foreground" />
          <h3 className="text-base font-semibold text-foreground">No memories found</h3>
          <p className="text-xs text-muted-foreground max-w-sm mx-auto">
            No memories matched your current category or search query. Try clearing your search term.
          </p>
          <Button variant="outline" size="sm" onClick={() => { setActiveCategory("All"); setSearchQuery(""); }}>
            Reset Filters
          </Button>
        </div>
      )}

      {/* Memory Detail Modal */}
      <MemoryDetailModal
        memory={selectedMemory}
        isOpen={Boolean(selectedMemory)}
        onClose={() => setSelectedMemory(null)}
        onUpdate={handleUpdateMemory}
        onDelete={handleDeleteMemory}
      />
    </div>
  );
}
