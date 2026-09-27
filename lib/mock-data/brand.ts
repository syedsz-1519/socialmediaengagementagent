import { Brand, BrandIntelligenceMetrics } from "@/types";

/**
 * Connected Brand: Byte Brothers
 *
 * NOTE: Byte Brothers is the team's real web development & digital product agency
 * (https://www.instagram.com/bytebrothers_/), serving as the primary real-world brand
 * for the NEXA intelligence platform.
 *
 * Historical analytics used for hackathon evaluation:
 * "Synthetic historical data for hackathon demonstration."
 */
export const connectedBrand: Brand = {
  id: "brand-byte-brothers",
  name: "Byte Brothers",
  business: "Web development / digital product agency",
  industry: "Web Development & Digital Products",
  positioning: "We build modern digital products for businesses.",
  tagline: "YOUR IDEA. OUR CODE.",
  instagramUrl: "https://www.instagram.com/bytebrothers_/",
  instagramHandle: "@bytebrothers_",
  targetAudience:
    "Businesses, founders, entrepreneurs and organizations that need websites, web applications, digital products, or custom software.",
  primaryGoal:
    "Build brand awareness, demonstrate expertise, attract potential clients, and turn the agency's social audience into business opportunities.",
  brandPersonality: [
    "Professional",
    "Modern",
    "Practical",
    "Trustworthy",
    "Technical but understandable",
  ],
  brandVoice: "Professional, modern, practical, trustworthy, and technical but understandable",
  contentConstraints: [
    "Never use shallow clickbait hooks",
    "Focus on practical ROI, measurable engineering quality, and actionable solutions",
    "Avoid vague agency buzzwords; explain digital product architecture clearly",
    "Lead with educational and strategic value before proposing custom software or development services",
  ],
  daysLearned: 30,
  isRealBrand: true,
  dataSourceNotice: "Synthetic historical data for hackathon demonstration.",
};

// Maintained for backward compatibility
export const demoBrand = connectedBrand;

export const brandIntelligenceMetrics: BrandIntelligenceMetrics = {
  audienceUnderstanding: 87,
  contentConfidence: 82,
  learnedPatterns: 12,
  experimentsCount: 5,
};

export const demoMetrics = brandIntelligenceMetrics;
