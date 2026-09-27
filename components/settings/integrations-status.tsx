import * as React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Database, Cpu, Cloud, CheckCircle2 } from "lucide-react";

export function IntegrationsStatus() {
  const integrations = [
    {
      name: "Hindsight Cloud by Vectorize",
      description: "Durable semantic memory store, experience retention, and pattern recall engine.",
      status: "Skeleton Ready (Mock Layer Active)",
      envKeys: ["HINDSIGHT_API_KEY", "HINDSIGHT_PROJECT_ID"],
      icon: Database,
      badge: "Hindsight Core",
      color: "border-indigo-500/30 text-indigo-400 bg-indigo-500/10",
    },
    {
      name: "Groq LLM Reasoning Engine",
      description: "Ultra-fast agent inference and content drafting using openai/gpt-oss-120b.",
      status: "Interface Ready",
      envKeys: ["GROQ_API_KEY"],
      icon: Cpu,
      badge: "LLM Agent",
      color: "border-blue-500/30 text-blue-400 bg-blue-500/10",
    },
    {
      name: "Supabase PostgreSQL",
      description: "Relational storage for synthetic posts, raw analytics metrics, and user preferences.",
      status: "Schema Ready",
      envKeys: ["NEXT_PUBLIC_SUPABASE_URL", "NEXT_PUBLIC_SUPABASE_ANON_KEY"],
      icon: Cloud,
      badge: "Data Layer",
      color: "border-emerald-500/30 text-emerald-400 bg-emerald-500/10",
    },
  ];

  return (
    <Card className="bg-card/70 border-border/80">
      <CardHeader>
        <CardTitle className="text-lg">Hackathon Integration Architecture</CardTitle>
        <CardDescription>
          Production-grade service extension boundaries ready for live API credentials.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {integrations.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.name}
              className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 rounded-xl border border-border/70 bg-background/40 p-4"
            >
              <div className="flex items-start gap-3">
                <div className={`rounded-lg border p-2 shrink-0 ${item.color}`}>
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-sm text-foreground">{item.name}</span>
                    <Badge variant="outline" className="text-[10px] font-mono">
                      {item.badge}
                    </Badge>
                  </div>
                  <p className="mt-1 text-xs text-muted-foreground">{item.description}</p>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {item.envKeys.map((k) => (
                      <code
                        key={k}
                        className="rounded bg-secondary/80 px-1.5 py-0.5 text-[10px] font-mono text-muted-foreground border border-border/50"
                      >
                        {k}
                      </code>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-1.5 sm:self-center shrink-0">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                <span className="text-xs font-mono text-emerald-400">{item.status}</span>
              </div>
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
}
