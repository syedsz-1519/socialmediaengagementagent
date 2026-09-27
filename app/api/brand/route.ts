import { NextResponse } from "next/server";
import { demoBrand, demoMetrics } from "@/lib/mock-data/brand";

export async function GET() {
  // TODO: Fetch brand configuration from Supabase 'brands' table
  return NextResponse.json({
    brand: demoBrand,
    metrics: demoMetrics,
    status: "success",
  });
}

export async function PATCH(request: Request) {
  try {
    const body = await request.json();
    // TODO: Update brand settings in Supabase
    return NextResponse.json({
      brand: { ...demoBrand, ...body },
      message: "Brand settings updated",
      status: "success",
    });
  } catch {
    return NextResponse.json({ error: "Invalid request payload" }, { status: 400 });
  }
}
