import { SocialPost } from "@/types";
import { demoHistoricalPosts } from "@/lib/mock-data/posts";

/**
 * Analytics & Pattern Detection Service
 *
 * Architecture Role:
 * Scans historical post data in Supabase, identifies statistically significant patterns,
 * and passes candidates to Hindsight Retain for consolidation into brand memory.
 */

export interface PatternInsight {
  pattern: string;
  metric: string;
  confidence: number;
  sampleSize: number;
  direction: "positive" | "negative";
}

export function calculateEngagementRate(post: Omit<SocialPost, "engagementRate">): number {
  if (post.views === 0) return 0;
  return Number((((post.likes + post.comments + post.saves + post.shares) / post.views) * 100).toFixed(2));
}

export async function analyzePostPatterns(posts: SocialPost[] = demoHistoricalPosts): Promise<PatternInsight[]> {
  // TODO: Run statistical clustering over Supabase post telemetry
  return [
    {
      pattern: "Problem-based question hooks",
      metric: "Comment Rate (+43%)",
      confidence: 91,
      sampleSize: 7,
      direction: "positive",
    },
    {
      pattern: "Actionable checklist carousels",
      metric: "Save Rate (+210%)",
      confidence: 88,
      sampleSize: 6,
      direction: "positive",
    },
    {
      pattern: "Generic agency promotion",
      metric: "Overall Reach (-68%)",
      confidence: 79,
      sampleSize: 5,
      direction: "negative",
    },
  ];
}
