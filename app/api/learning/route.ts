import { NextResponse } from "next/server";
import { demoLearningTimeline, demoStrategicBeliefs } from "@/lib/mock-data/learning";

export async function GET() {
  // TODO: Fetch synthesized learning timeline from Hindsight + Supabase
  return NextResponse.json({
    timeline: demoLearningTimeline,
    strategicBeliefs: demoStrategicBeliefs,
    status: "success",
  });
}
