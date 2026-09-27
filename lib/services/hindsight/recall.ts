import { Memory } from "@/types";
import { demoMemories } from "@/lib/mock-data/memories";
import { hindsightClient } from "./client";

/**
 * Hindsight Recall Service
 *
 * Core Differentiator:
 * NEXA retrieves stored audience patterns and strategic beliefs relevant to the
 * requested content goal, then injects them into the LLM context prompt.
 *
 * FLOW:
 * Prompt: "Create tomorrow's Instagram Reel"
 *   ↓
 * recallRelevantMemories(query="Create tomorrow's Instagram Reel", brandId="...")
 *   ↓
 * Returns Top-K relevant memories (e.g. Problem-based hooks, Educational focus, Evening timing)
 */

export interface RecallOptions {
  brandId: string;
  query: string;
  topK?: number;
  categoryFilter?: string[];
  minConfidence?: number;
}

export interface RecallResult {
  memories: Memory[];
  relevanceScores: Record<string, number>;
  degradedMode: boolean; // True if fallback used due to Hindsight unavailable
}

export async function recallRelevantMemories(options: RecallOptions): Promise<RecallResult> {
  const { topK = 4, minConfidence = 70 } = options;

  // TODO: Call Hindsight Semantic Recall API
  // POST /v1/projects/{projectId}/memories/recall
  // Body: { query: options.query, limit: topK, filters: { brandId: options.brandId } }
  
  if (hindsightClient.isConfigured()) {
    // In live mode, call actual Hindsight Cloud endpoint here
  }

  // Filter memories matching high-confidence learning signals for the skeleton MVP
  const filtered = demoMemories
    .filter((m) => m.confidence >= minConfidence)
    .slice(0, topK);

  const scores: Record<string, number> = {};
  filtered.forEach((m, idx) => {
    scores[m.id] = Number((0.95 - idx * 0.06).toFixed(2));
  });

  return {
    memories: filtered,
    relevanceScores: scores,
    degradedMode: !hindsightClient.isConfigured(),
  };
}
