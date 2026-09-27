"use client";

import * as React from "react";
import { Brain, Layers, Clock, Sparkles, Edit3, Trash2, CheckCircle2 } from "lucide-react";
import { Modal } from "@/components/ui/modal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Memory } from "@/types";
import { MemoryEvidenceList } from "./memory-evidence";
import { useToast } from "@/components/ui/toast";

interface MemoryDetailModalProps {
  memory: Memory | null;
  isOpen: boolean;
  onClose: () => void;
  onUpdate?: (updated: Memory) => void;
  onDelete?: (id: string) => void;
}

export function MemoryDetailModal({
  memory,
  isOpen,
  onClose,
  onUpdate,
  onDelete,
}: MemoryDetailModalProps) {
  const { toast } = useToast();
  const [isEditing, setIsEditing] = React.useState(false);
  const [editedTitle, setEditedTitle] = React.useState("");
  const [editedDesc, setEditedDesc] = React.useState("");

  React.useEffect(() => {
    if (memory) {
      setEditedTitle(memory.title);
      setEditedDesc(memory.description);
      setIsEditing(false);
    }
  }, [memory]);

  if (!memory) return null;

  const handleSaveCorrection = () => {
    if (onUpdate) {
      onUpdate({
        ...memory,
        title: editedTitle,
        description: editedDesc,
        lastUpdated: "Just now (Corrected)",
      });
    }
    setIsEditing(false);
    toast("Memory successfully corrected & retained in Hindsight knowledge base", "success");
  };

  const handleDelete = () => {
    if (onDelete) {
      onDelete(memory.id);
    }
    toast(`Memory archived from active strategy`, "info");
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} maxWidth="xl">
      <div className="space-y-6">
        {/* Header with Category and Confidence */}
        <div className="flex items-center justify-between border-b border-border/80 pb-4">
          <div className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-500/15 border border-indigo-500/30 text-indigo-400">
              <Brain className="h-5 w-5" />
            </div>
            <div>
              <div className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground font-mono">
                Hindsight Memory Detail
              </div>
              <div className="text-xs text-muted-foreground">Category: {memory.category}</div>
            </div>
          </div>
          <Badge variant="memory" className="font-mono text-xs px-3 py-1">
            {memory.confidence}% Confidence
          </Badge>
        </div>

        {/* Title and Description */}
        <div className="space-y-3">
          {isEditing ? (
            <div className="space-y-3 rounded-lg border border-indigo-500/40 bg-indigo-950/20 p-3.5">
              <label className="text-xs font-semibold uppercase tracking-wider text-indigo-300">
                Correct Memory Title
              </label>
              <input
                type="text"
                value={editedTitle}
                onChange={(e) => setEditedTitle(e.target.value)}
                className="w-full rounded-md border border-border bg-background px-3 py-1.5 text-sm text-foreground focus:border-primary focus:outline-none"
              />
              <label className="text-xs font-semibold uppercase tracking-wider text-indigo-300">
                Correct Learned Explanation
              </label>
              <textarea
                rows={3}
                value={editedDesc}
                onChange={(e) => setEditedDesc(e.target.value)}
                className="w-full rounded-md border border-border bg-background px-3 py-1.5 text-xs text-foreground focus:border-primary focus:outline-none"
              />
              <div className="flex justify-end gap-2 pt-1">
                <Button variant="ghost" size="sm" onClick={() => setIsEditing(false)}>
                  Cancel
                </Button>
                <Button size="sm" onClick={handleSaveCorrection} className="gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5" />
                  Save Correction
                </Button>
              </div>
            </div>
          ) : (
            <div>
              <h3 className="text-lg font-bold text-foreground leading-snug">{memory.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {memory.description}
              </p>
            </div>
          )}
        </div>

        {/* Evidence & Timeline Metadata Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 rounded-xl border border-border/70 bg-card/60 p-3.5 text-xs">
          <div>
            <div className="text-muted-foreground text-[11px]">Evidence Base</div>
            <div className="font-bold text-foreground mt-0.5 font-mono">
              {memory.evidenceCount} posts
              {memory.supportingExperimentIds?.length
                ? `, ${memory.supportingExperimentIds.length} exps`
                : ""}
            </div>
          </div>
          <div>
            <div className="text-muted-foreground text-[11px]">First Observed</div>
            <div className="font-medium text-foreground mt-0.5">{memory.firstObserved}</div>
          </div>
          <div>
            <div className="text-muted-foreground text-[11px]">Last Updated</div>
            <div className="font-medium text-foreground mt-0.5">{memory.lastUpdated}</div>
          </div>
          <div>
            <div className="text-muted-foreground text-[11px]">Lifecycle Status</div>
            <div className="font-semibold text-emerald-400 mt-0.5">{memory.status}</div>
          </div>
        </div>

        {/* How this memory is used */}
        <div className="rounded-xl border border-border/80 bg-secondary/40 p-4 space-y-1.5">
          <div className="flex items-center gap-2 text-xs font-semibold text-foreground">
            <Sparkles className="h-4 w-4 text-indigo-400" />
            <span>How this memory is used</span>
          </div>
          <p className="text-xs text-muted-foreground leading-relaxed">
            This insight influenced: <strong className="text-foreground font-mono">{memory.influencedCount} recommendations</strong>.
            When generating Instagram Reels and Carousels, NEXA checks this rule to enforce high-performing hooks and value-first pacing.
          </p>
        </div>

        {/* Supporting experiences list */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              <Layers className="h-4 w-4" />
              <span>Supporting Experiences ({memory.supportingPostIds.length})</span>
            </div>
            <span className="text-[11px] text-muted-foreground">Telemetry from historical posts</span>
          </div>
          <MemoryEvidenceList postIds={memory.supportingPostIds} />
        </div>

        {/* Action buttons */}
        <div className="flex items-center justify-between border-t border-border/80 pt-4">
          <div className="flex items-center gap-2">
            {!isEditing && (
              <Button variant="outline" size="sm" onClick={() => setIsEditing(true)} className="gap-1.5">
                <Edit3 className="h-3.5 w-3.5" />
                Correct
              </Button>
            )}
            <Button
              variant="ghost"
              size="sm"
              onClick={handleDelete}
              className="gap-1.5 text-muted-foreground hover:text-red-400 hover:bg-red-500/10"
            >
              <Trash2 className="h-3.5 w-3.5" />
              Delete
            </Button>
          </div>
          <Button variant="secondary" size="sm" onClick={onClose}>
            Done
          </Button>
        </div>
      </div>
    </Modal>
  );
}
