import { Brand, BrandIntelligenceMetrics } from "@/types";

export const demoBrand: Brand = {
  id: "brand-byte-brothers",
  name: "Byte Brothers",
  industry: "Web Development Agency",
  targetAudience: "Small-business owners, founders and entrepreneurs",
  primaryGoal: "Generate leads through educational social content",
  brandVoice: "Professional, practical, confident and approachable",
  contentConstraints: [
    "Never use shallow clickbait hooks",
    "Focus on practical ROI and measurable technical clarity",
    "Avoid generic agency jargon",
    "Always provide actionable takeaways before proposing agency services",
  ],
  daysLearned: 30,
};

export const demoMetrics: BrandIntelligenceMetrics = {
  audienceUnderstanding: 87,
  contentConfidence: 82,
  learnedPatterns: 12,
  experimentsCount: 5,
};
