import { NextResponse } from "next/server";
import { demoMemories } from "@/lib/mock-data/memories";
import { retainMemory } from "@/lib/services/hindsight/memory";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get("category");
  const query = searchParams.get("q");

  let memories = [...demoMemories];

  if (category && category !== "All") {
    memories = memories.filter(
      (m) => m.category.toLowerCase() === category.toLowerCase()
    );
  }

  if (query) {
    const q = query.toLowerCase();
    memories = memories.filter(
      (m) =>
        m.title.toLowerCase().includes(q) ||
        m.description.toLowerCase().includes(q) ||
        m.tags?.some((t) => t.toLowerCase().includes(q))
    );
  }

  return NextResponse.json({
    memories,
    total: memories.length,
    status: "success",
  });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    // In live system, calls Hindsight Retain API
    const created = await retainMemory({
      brandId: body.brandId || "brand-byte-brothers",
      category: body.category || "Audience",
      title: body.title,
      description: body.description,
      confidence: body.confidence || 85,
      evidencePostIds: body.evidencePostIds || [],
      tags: body.tags || [],
    });

    return NextResponse.json({ memory: created, status: "success" }, { status: 201 });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Error retaining memory";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
