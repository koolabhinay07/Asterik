import React from "react";
import { FileText, CheckCircle2, X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/Badge";
import { Brief, DeliverablePhase } from "@/data/mock-data";

interface BriefModalProps {
  brief: Brief | null;
  onClose: () => void;
}

export function BriefModal({ brief, onClose }: BriefModalProps) {
  return (
    <Dialog open={!!brief} onOpenChange={(open) => { if (!open) onClose(); }}>
      <DialogContent className="max-w-2xl w-full max-h-[90vh] overflow-y-auto p-0 gap-0">
        {brief && (
          <>
            <div className="p-6 md:p-8 border-b border-border">
              <DialogTitle className="sr-only">{brief.title}</DialogTitle>
              <div className="flex gap-2 flex-wrap mb-3">
                <Badge variant="outline">{brief.industry}</Badge>
                <Badge variant="secondary">{brief.platform}</Badge>
                <Badge variant={brief.difficulty === "Hard" ? "destructive" : brief.difficulty === "Medium" ? "warning" : "success" as any}>
                  {brief.difficulty}
                </Badge>
              </div>
              <h2 className="text-2xl font-display font-bold text-foreground">
                {brief.title}
              </h2>
              <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
                {brief.description}
              </p>
            </div>

            <div className="p-6 md:p-8 space-y-8">
              <div>
                <h4 className="flex items-center gap-2 text-base font-semibold text-foreground border-b border-border pb-2 mb-4">
                  <FileText size={16} className="text-primary" />
                  Problem Statement
                </h4>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {brief.problemStatement}
                </p>
              </div>

              <div>
                <h4 className="text-base font-semibold text-foreground border-b border-border pb-2 mb-4">
                  User Persona
                </h4>
                <p className="text-muted-foreground leading-relaxed italic border-l-4 border-primary/30 pl-4 py-1 text-sm">
                  {brief.userPersona}
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-base font-semibold text-foreground border-b border-border pb-2 mb-4">
                    Goals
                  </h4>
                  <ul className="space-y-2">
                    {brief.goals.map((goal, i) => (
                      <li key={i} className="flex items-start gap-2 text-muted-foreground text-sm">
                        <CheckCircle2 size={14} className="text-emerald-500 mt-0.5 shrink-0" />
                        <span>{goal}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-base font-semibold text-foreground border-b border-border pb-2 mb-4">
                    Constraints
                  </h4>
                  <ul className="space-y-2 text-muted-foreground text-sm list-disc list-inside pl-2 marker:text-destructive/50">
                    {brief.constraints.map((constraint, i) => (
                      <li key={i}>{constraint}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div>
                <h4 className="flex items-center gap-2 text-base font-semibold text-foreground border-b border-border pb-2 mb-4">
                  <CheckCircle2 size={16} className="text-primary" />
                  Deliverables
                </h4>
                <div className="space-y-3">
                  {brief.deliverables.map((phase: DeliverablePhase, i: number) => (
                    <div key={i} className="bg-secondary/40 border border-border rounded-xl p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-base">{phase.icon}</span>
                        <span className="font-semibold text-foreground text-sm">{phase.phase}</span>
                        {phase.tag === "must" && (
                          <span className="ml-auto text-[10px] font-bold uppercase tracking-wider bg-primary text-primary-foreground px-2 py-0.5 rounded-full">Must Include</span>
                        )}
                        {phase.tag === "include" && (
                          <span className="ml-auto text-[10px] font-bold uppercase tracking-wider bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 px-2 py-0.5 rounded-full border border-emerald-500/20">Include</span>
                        )}
                      </div>
                      <ul className="space-y-1">
                        {phase.items.map((item: string, j: number) => (
                          <li key={j} className="flex items-start gap-2 text-xs text-muted-foreground">
                            <span className="text-primary mt-0.5 shrink-0">›</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
