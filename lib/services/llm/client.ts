/**
 * Groq LLM Client (Placeholder Interface)
 *
 * Target Hackathon Model: openai/gpt-oss-120b or llama-3.3-70b-versatile via Groq
 *
 * TODO (Post-Skeleton Hackathon Step):
 * - GROQ_API_KEY from process.env.GROQ_API_KEY
 * - Groq SDK / OpenAI compatible REST client
 */

export interface LLMConfig {
  apiKey?: string;
  model?: string;
}

export class GroqLLMClient {
  private apiKey: string | null;
  public model: string;

  constructor(config?: LLMConfig) {
    this.apiKey = config?.apiKey || process.env.GROQ_API_KEY || null;
    this.model = config?.model || "openai/gpt-oss-120b";
  }

  public isConfigured(): boolean {
    return Boolean(this.apiKey);
  }

  public getStatus() {
    return {
      configured: this.isConfigured(),
      model: this.model,
      provider: "Groq Cloud",
    };
  }
}

export const groqClient = new GroqLLMClient();
