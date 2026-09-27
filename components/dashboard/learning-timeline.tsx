import * as React from "react";
import Link from "next/link";
import { GitCommit, ArrowRight } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

interface ActivityItem {
  time: string;
  title: string;
  detail: string;
  badge: "updated" | "strengthened" | "identified" | "flagged";
}

const activities: ActivityItem[] = [
  {
    time: "Today",
    title: "Strategy updated",
    detail: "Shifted focus towards Problem-First Educational Reels based on 14.8% average engagement.",
    badge: "updated",
  },
  {
    time: "2 days ago",
    title: "Educational content pattern strengthened",
    detail: "Post #17 confirmed 3.4x save multiplier on actionable founder checklists.",
    badge: "strengthened",
  },
  {
    time: "5 days ago",
    title: "Problem-based hooks identified",
    detail: "Interrogative pain-point hooks generated +43% higher comment volume.",
    badge: "identified",
  },
  {
    time: "12 days ago",
    title: "Generic promotional content flagged",
    detail: "Direct sales pitches flagged with 68% lower reach across founders.",
    badge: "flagged",
  },
];

export function LearningActivityTimeline() {
  const getBadgeStyle = (type: ActivityItem["badge"]) => {
    switch (type) {
      case "updated":
        return "bg-indigo-500/15 text-indigo-300 border-indigo-500/30";
      case "strengthened":
        return "bg-emerald-500/15 text-emerald-300 border-emerald-500/30";
      case "identified":
        return "bg-blue-500/15 text-blue-300 border-blue-500/30";
      case "flagged":
        return "bg-amber-500/15 text-amber-300 border-amber-500/30";
    }
  };

  return (
    <Card className="bg-card/70 border-border/80">
      <CardHeader className="flex flex-row items-center justify-between pb-3">
        <CardTitle className="text-base font-semibold">Learning Activity</CardTitle>
        <Link
          href="/learning"
          className="text-xs text-primary hover:underline inline-flex items-center gap-1 font-medium"
        >
          Full Timeline
          <ArrowRight className="h-3 w-3" />
        </Link>
      </CardHeader>
      <CardContent>
        <div className="relative border-l border-border/70 ml-2.5 space-y-4 my-1">
          {activities.map((item, idx) => (
            <div key={idx} className="relative pl-6">
              <span className="absolute -left-1.5 top-1.5 h-3 w-3 rounded-full border-2 border-background bg-primary" />
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-sm text-foreground">{item.title}</span>
                  <span
                    className={`rounded border px-1.5 py-0.2 text-[10px] uppercase font-mono tracking-wider ${getBadgeStyle(
                      item.badge
                    )}`}
                  >
                    {item.badge}
                  </span>
                </div>
                <span className="text-xs text-muted-foreground font-mono">{item.time}</span>
              </div>
              <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                {item.detail}
              </p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
