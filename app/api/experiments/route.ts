import { NextResponse } from "next/server";
import { demoExperiments } from "@/lib/mock-data/experiments";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const status = searchParams.get("status");

  let experiments = [...demoExperiments];
  if (status && status !== "All") {
    experiments = experiments.filter((e) => e.status.toLowerCase() === status.toLowerCase());
  }

  return NextResponse.json({
    experiments,
    total: experiments.length,
    status: "success",
  });
}
