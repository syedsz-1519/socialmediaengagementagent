import * as React from "react";
import { SocialPost } from "@/types";
import { demoHistoricalPosts } from "@/lib/mock-data/posts";
import { Eye, Heart, MessageSquare, Bookmark, Share2 } from "lucide-react";

export function MemoryEvidenceList({ postIds }: { postIds: string[] }) {
  const posts = demoHistoricalPosts.filter((p) => postIds.includes(p.id));

  if (posts.length === 0) {
    return (
      <div className="rounded-lg border border-border/60 bg-secondary/30 p-4 text-center text-xs text-muted-foreground">
        No specific post telemetry linked to this memory.
      </div>
    );
  }

  return (
    <div className="space-y-2.5">
      {posts.map((post) => (
        <div
          key={post.id}
          className="rounded-lg border border-border/80 bg-background/50 p-3 text-xs space-y-2 hover:border-border transition-colors"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="font-mono font-bold text-foreground">{post.postNumber}</span>
              <span className="rounded bg-secondary px-1.5 py-0.5 text-[10px] text-muted-foreground">
                {post.format}
              </span>
              <span className="text-[11px] text-muted-foreground">{post.topic}</span>
            </div>
            <span className="text-[11px] text-muted-foreground font-mono">{post.publishedAt}</span>
          </div>

          <p className="font-medium text-foreground italic">"{post.hook}"</p>

          <div className="flex flex-wrap items-center gap-3 pt-1 border-t border-border/50 text-[11px] text-muted-foreground font-mono">
            <span className="flex items-center gap-1">
              <Eye className="h-3 w-3 text-muted-foreground/70" /> {post.views.toLocaleString()}
            </span>
            <span className="flex items-center gap-1">
              <Heart className="h-3 w-3 text-muted-foreground/70" /> {post.likes}
            </span>
            <span className="flex items-center gap-1 text-primary font-bold">
              <MessageSquare className="h-3 w-3" /> {post.comments}
            </span>
            <span className="flex items-center gap-1 text-emerald-400 font-bold">
              <Bookmark className="h-3 w-3" /> {post.saves}
            </span>
            <span className="flex items-center gap-1">
              <Share2 className="h-3 w-3 text-muted-foreground/70" /> {post.shares}
            </span>
            <span className="ml-auto rounded bg-emerald-500/10 border border-emerald-500/20 px-1.5 py-0.2 text-[10px] text-emerald-400">
              {post.engagementRate}% ER
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
