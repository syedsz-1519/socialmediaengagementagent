import { Brand, GeneratedContent, Memory } from "@/types";
import { demoGeneratedReel, alternativeGeneratedTemplates } from "@/lib/mock-data/generated-content";
import { groqClient } from "./client";

/**
 * Agent Reasoning & Content Generation Service
 *
 * PROMPT ARCHITECTURE:
 * 1. Brand Profile & Core Goal
 * 2. Audience Constraints & Tone
 * 3. RECALLED HINDSIGHT MEMORIES (The differentiator!)
 * 4. User Request (e.g., "Create tomorrow's Reel")
 * 5. Generation Task (Hook, Concept, Script, Caption, Time, Memory Justification)
 */

export interface GenerateContentParams {
  brand: Brand;
  prompt: string;
  contentType?: "Reel" | "Carousel" | "Hook" | "Caption" | "Strategy";
  recalledMemories: Memory[];
}

export async function generateContentWithMemories(
  params: GenerateContentParams
): Promise<GeneratedContent> {
  const { prompt, contentType = "Reel", recalledMemories } = params;

  // TODO: When GROQ_API_KEY is configured, call Groq completion:
  // const systemPrompt = buildSystemPrompt(params.brand, recalledMemories);
  // const response = await groq.chat.completions.create({ ... });

  if (groqClient.isConfigured()) {
    // In live mode, execute the LLM reasoning chain here
  }

  // Return the high-quality mock Reel or format template for skeleton MVP
  if (contentType === "Carousel" && alternativeGeneratedTemplates.carousel) {
    return alternativeGeneratedTemplates.carousel;
  }
  if (contentType === "Hook" && alternativeGeneratedTemplates.hook) {
    return alternativeGeneratedTemplates.hook;
  }

  // Default to the flagship Problem-focused Reel
  return {
    ...demoGeneratedReel,
    memoriesUsed: recalledMemories.slice(0, 4).map((m) => ({
      memoryId: m.id,
      title: m.title,
      confidence: m.confidence,
      reason: `Utilized insight to shape tone, hook tension, and educational value for ${params.brand.name}.`,
    })),
  };
}
