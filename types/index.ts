export type MemoryCategory =
  | "All"
  | "Audience"
  | "Content"
  | "Performance"
  | "Brand"
  | "Strategy"
  | "Feedback";

export interface Brand {
  id: string;
  name: string;
  business: string;
  industry: string;
  positioning: string;
  tagline: string;
  instagramUrl: string;
  instagramHandle: string;
  targetAudience: string;
  primaryGoal: string;
  brandVoice: string;
  brandPersonality: string[];
  contentConstraints?: string[];
  daysLearned: number;
  isRealBrand: boolean;
  dataSourceNotice: string;
}

export interface SocialPost {
  id: string;
  postNumber: string;
  publishedAt: string;
  format: "Reel" | "Carousel" | "Static Post" | "Story";
  topic: string;
  hook: string;
  caption: string;
  views: number;
  likes: number;
  comments: number;
  saves: number;
  shares: number;
  engagementRate: number;
}

export interface Memory {
  id: string;
  category: Exclude<MemoryCategory, "All">;
  title: string;
  description: string;
  confidence: number; // 0 - 100
  evidenceCount: number;
  firstObserved: string;
  lastUpdated: string;
  supportingPostIds: string[];
  supportingExperimentIds?: string[];
  influencedCount: number;
  status: "Active" | "Strengthened" | "Refining" | "Confirmed";
  tags?: string[];
}

export interface Experiment {
  id: string;
  number: string;
  name: string;
  hypothesis: string;
  variantA: string;
  variantB: string;
  status: "Active" | "Completed";
  result: string;
  learning: string;
  confidence: number;
  startedAt: string;
  completedAt?: string;
  metricObserved: string;
}

export interface GeneratedContent {
  id: string;
  brandId: string;
  title: string;
  contentType: "Reel" | "Carousel" | "Hook" | "Caption" | "Strategy";
  hook: string;
  concept: string;
  script: {
    opening: string;
    painPoint: string;
    solution: string;
    cta: string;
  };
  caption: string;
  hashtags: string[];
  recommendedTime: string;
  confidence: number;
  memoriesUsed: {
    memoryId: string;
    title: string;
    confidence: number;
    reason: string;
  }[];
  createdAt: string;
}

export interface LearningEvent {
  id: string;
  day: number;
  title: string;
  description: string;
  category: "Discovery" | "Strengthened" | "Flagged" | "Strategy Update";
  timestamp: string;
  confidenceImpact: string;
}

export interface StrategicBelief {
  id: string;
  title: string;
  description: string;
  status: "Confirmed" | "Strong" | "Evolving";
  confidence: number;
  evidence: string;
  impactOnStrategy: string;
}

export interface BrandIntelligenceMetrics {
  audienceUnderstanding: number;
  contentConfidence: number;
  learnedPatterns: number;
  experimentsCount: number;
}
