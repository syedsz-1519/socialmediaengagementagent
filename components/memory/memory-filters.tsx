"use client";

import * as React from "react";
import { Search } from "lucide-react";
import { Tabs } from "@/components/ui/tabs";
import { MemoryCategory } from "@/types";

interface MemoryFiltersProps {
  categories: { id: MemoryCategory; label: string; count: number }[];
  activeCategory: MemoryCategory;
  onCategoryChange: (cat: MemoryCategory) => void;
  searchQuery: string;
  onSearchChange: (q: string) => void;
}

export function MemoryFilters({
  categories,
  activeCategory,
  onCategoryChange,
  searchQuery,
  onSearchChange,
}: MemoryFiltersProps) {
  return (
    <div className="space-y-4">
      {/* Category selector */}
      <Tabs
        tabs={categories}
        activeTab={activeCategory}
        onChange={(id) => onCategoryChange(id as MemoryCategory)}
      />

      {/* Search Input */}
      <div className="relative max-w-md">
        <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Filter memories by keyword, format, or tag..."
          className="w-full rounded-lg border border-border bg-card/70 py-1.5 pl-9 pr-4 text-xs md:text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
        />
      </div>
    </div>
  );
}
