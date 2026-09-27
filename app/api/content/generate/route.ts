import { NextResponse } from "next/server";
import { demoBrand } from "@/lib/mock-data/brand";
import { recallRelevantMemories } from "@/lib/services/hindsight/recall";
import { generateContentWithMemories } from "@/lib/services/llm/generate";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { prompt, contentType } = body;

    // STEP 1: Recall relevant memories using Hindsight semantic search
    const { memories, degradedMode } = await recallRelevantMemories({
      brandId: demoBrand.id,
      query: prompt || "Create tomorrow's Instagram Reel",
      topK: 4,
    });

    // STEP 2: Agent reasoning with Groq LLM using recalled memories
    const generated = await generateContentWithMemories({
      brand: demoBrand,
      prompt: prompt || "Create tomorrow's Instagram Reel",
      contentType: contentType || "Reel",
      recalledMemories: memories,
    });

    return NextResponse.json({
      content: generated,
      degradedMode,
      status: "success",
    });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Error generating content";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
