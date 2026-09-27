import { Memory } from "@/types";
import { demoMemories } from "@/lib/mock-data/memories";
import { hindsightClient } from "./client";

/**
 * Hindsight Memory Management Service
 *
 * Architecture Role:
 * Stores and manages durable semantic memories, learned rules, and audience patterns.
 * Supabase handles raw analytics (likes, views), whereas Hindsight stores
 * the higher-order reflections ("Practical tips yield high saves").
 */

export interface RetainMemoryPayload {
  brandId: string;
  category: Memory["category"];
  title: string;
  description: string;
  confidence: number;
  evidencePostIds?: string[];
  tags?: string[];
}

/**
 * Retains a new learned memory in Hindsight
 */
export async function retainMemory(payload: RetainMemoryPayload): Promise<Memory> {
  // TODO: Connect to Hindsight Retain API endpoint:
  // POST /v1/projects/{projectId}/memories/retain
  // Body: { content: payload.description, metadata: { ...payload } }
  
  if (hindsightClient.isConfigured()) {
    // In live mode, call actual Hindsight Cloud endpoint here
    throw new Error("TODO: Live Hindsight Cloud Retain API not yet connected. Add HINDSIGHT_API_KEY.");
  }

  // Fallback to local mock data layer for skeleton MVP
  const newMemory: Memory = {
    id: `mem-${Date.now()}`,
    category: payload.category,
    title: payload.title,
    description: payload.description,
    confidence: payload.confidence,
    evidenceCount: payload.evidencePostIds?.length || 1,
    firstObserved: "Just now",
    lastUpdated: "Just now",
    supportingPostIds: payload.evidencePostIds || [],
    influencedCount: 0,
    status: "Active",
    tags: payload.tags || [],
  };

  return newMemory;
}

/**
 * Retrieves all stored memories for a given brand
 */
export async function listMemories(category?: string): Promise<Memory[]> {
  // TODO: Query Hindsight Cloud memories for brandId
  if (hindsightClient.isConfigured()) {
    // Live Hindsight call
  }

  if (!category || category === "All") {
    return demoMemories;
  }
  return demoMemories.filter((m) => m.category.toLowerCase() === category.toLowerCase());
}

/**
 * Corrects or updates an existing memory based on explicit user correction
 */
export async function updateMemory(id: string, updates: Partial<Memory>): Promise<Memory> {
  // TODO: Hindsight memory correction endpoint
  const existing = demoMemories.find((m) => m.id === id);
  if (!existing) {
    throw new Error(`Memory ${id} not found`);
  }
  return { ...existing, ...updates, lastUpdated: "Just now" };
}

/**
 * Removes or archives a memory from Hindsight
 */
export async function deleteMemory(id: string): Promise<boolean> {
  // TODO: Hindsight memory deletion endpoint
  return true;
}
