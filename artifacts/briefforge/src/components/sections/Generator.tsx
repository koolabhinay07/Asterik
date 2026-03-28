import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Loader2, Download, RefreshCw, FileText, CheckCircle2, Sparkles } from "lucide-react";
import { toPng } from "html-to-image";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { INDUSTRIES, DIFFICULTIES, PLATFORMS, Brief, DeliverablePhase, generateMockBrief } from "@/data/mock-data";

export function Generator() {
  const [industry, setIndustry] = useState<string>(INDUSTRIES[0]);
  const [difficulty, setDifficulty] = useState<string>(DIFFICULTIES[1]);
  const [platform, setPlatform] = useState<string>(PLATFORMS[0]);
  const [isDownloading, setIsDownloading] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedBrief, setGeneratedBrief] = useState<Brief | null>(null);
  const briefCardRef = useRef<HTMLDivElement>(null);

  const handleGenerate = () => {
    setIsGenerating(true);
    setGeneratedBrief(null);
    setTimeout(() => {
      const brief = generateMockBrief(industry, difficulty, platform);
      setGeneratedBrief(brief);
      setIsGenerating(false);
    }, 1500);
  };

  const handleDownload = async () => {
    if (!generatedBrief || !briefCardRef.current) return;
    setIsDownloading(true);
    try {
      const el = briefCardRef.current;

      const filename = `${generatedBrief.title.replace(/[^a-z0-9]/gi, "-").toLowerCase()}-brief.png`;
      const dataUrl = await toPng(el, {
        pixelRatio: 3,
        backgroundColor: "#ffffff",
      });
      const link = document.createElement("a");
      link.download = filename;
      link.href = dataUrl;
      link.click();
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <section id="generator" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Generate Your Brief
          </h2>
          <p className="text-lg text-muted-foreground">
            Configure your parameters and let our AI forge your next challenge.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Controls Panel */}
          <div className="lg:col-span-4 bg-card border border-border rounded-2xl p-6 shadow-lg shadow-black/5 h-fit">
            <h3 className="font-semibold text-lg mb-6 flex items-center gap-2">
              <RefreshCw size={18} className="text-primary" />
              Parameters
            </h3>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Industry</label>
                <select 
                  value={industry}
                  onChange={(e) => setIndustry(e.target.value)}
                  className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all appearance-none"
                >
                  {INDUSTRIES.map(ind => <option key={ind} value={ind}>{ind}</option>)}
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Difficulty</label>
                <div className="grid grid-cols-3 gap-2">
                  {DIFFICULTIES.map(diff => (
                    <button
                      key={diff}
                      onClick={() => setDifficulty(diff)}
                      className={`py-2 text-xs font-medium rounded-lg border transition-all ${
                        difficulty === diff 
                          ? 'bg-primary text-primary-foreground border-primary shadow-sm' 
                          : 'bg-background text-muted-foreground border-border hover:bg-accent'
                      }`}
                    >
                      {diff}
                    </button>
                  ))}
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Platform</label>
                <select 
                  value={platform}
                  onChange={(e) => setPlatform(e.target.value)}
                  className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all appearance-none"
                >
                  {PLATFORMS.map(plat => <option key={plat} value={plat}>{plat}</option>)}
                </select>
              </div>

              <div className="pt-4 border-t border-border">
                <Button 
                  onClick={handleGenerate} 
                  disabled={isGenerating} 
                  className="w-full py-6 text-base"
                >
                  {isGenerating ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Forging Brief...
                    </>
                  ) : (
                    "Generate Brief"
                  )}
                </Button>
              </div>
            </div>
          </div>

          {/* Results Panel */}
          <div className="lg:col-span-8 min-h-[500px]">
            <AnimatePresence mode="wait">
              {isGenerating ? (
                <motion.div 
                  key="loading"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="h-full flex flex-col items-center justify-center bg-secondary/30 border border-border border-dashed rounded-2xl p-12"
                >
                  <Loader2 className="w-12 h-12 text-primary animate-spin mb-4" />
                  <p className="text-lg font-medium text-foreground">AI is crafting your scenario...</p>
                  <p className="text-muted-foreground text-sm mt-2">Setting up constraints and personas</p>
                </motion.div>
              ) : generatedBrief ? (
                <motion.div 
                  key="result"
                  ref={briefCardRef}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-card border border-border rounded-2xl shadow-xl overflow-hidden relative"
                >
                  <div id="print-brief" className="p-8 md:p-10">
                    <div className="flex justify-between items-start mb-6">
                      <div>
                        <div className="flex gap-2 mb-3">
                          <Badge variant="outline" className="bg-background">{generatedBrief.industry}</Badge>
                          <Badge variant="secondary">{generatedBrief.platform}</Badge>
                          <Badge variant={generatedBrief.difficulty === "Hard" ? "destructive" : generatedBrief.difficulty === "Medium" ? "warning" : "success" as any}>
                            {generatedBrief.difficulty}
                          </Badge>
                        </div>
                        <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground">
                          {generatedBrief.title}
                        </h3>
                      </div>
                    </div>

                    <div className="space-y-8 mt-8">
                      <div>
                        <h4 className="flex items-center gap-2 text-lg font-semibold text-foreground border-b border-border pb-2 mb-4">
                          <FileText size={18} className="text-primary" /> 
                          Problem Statement
                        </h4>
                        <p className="text-muted-foreground leading-relaxed">
                          {generatedBrief.problemStatement}
                        </p>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold text-foreground border-b border-border pb-2 mb-4">
                          User Persona
                        </h4>
                        <p className="text-muted-foreground leading-relaxed italic border-l-4 border-primary/30 pl-4 py-1">
                          {generatedBrief.userPersona}
                        </p>
                      </div>

                      <div className="grid md:grid-cols-2 gap-8">
                        <div>
                          <h4 className="text-lg font-semibold text-foreground border-b border-border pb-2 mb-4">
                            Goals
                          </h4>
                          <ul className="space-y-2">
                            {generatedBrief.goals.map((goal, i) => (
                              <li key={i} className="flex items-start gap-2 text-muted-foreground">
                                <CheckCircle2 size={16} className="text-emerald-500 mt-1 shrink-0" />
                                <span>{goal}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-foreground border-b border-border pb-2 mb-4">
                            Constraints
                          </h4>
                          <ul className="space-y-2 text-muted-foreground list-disc list-inside pl-4 marker:text-destructive/50">
                            {generatedBrief.constraints.map((constraint, i) => (
                              <li key={i}>{constraint}</li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div>
                        <h4 className="flex items-center gap-2 text-lg font-semibold text-foreground border-b border-border pb-2 mb-5">
                          <CheckCircle2 size={18} className="text-primary" />
                          Deliverables
                          <span className="ml-1 text-[10px] font-bold uppercase tracking-wider bg-primary text-primary-foreground px-2 py-0.5 rounded-full">Must Include</span>
                        </h4>
                        <div className="space-y-4">
                          {generatedBrief.deliverables.map((phase: DeliverablePhase, i: number) => (
                            <div key={i} className="bg-secondary/40 border border-border rounded-xl p-5">
                              <div className="flex items-center gap-2 mb-3">
                                <span className="text-lg">{phase.icon}</span>
                                <span className="font-semibold text-foreground text-sm">{phase.phase}</span>
                              </div>
                              <ul className="space-y-1.5">
                                {phase.items.map((item: string, j: number) => (
                                  <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
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
                  </div>
                  
                  {/* Action Bar */}
                  <div className="bg-secondary/30 border-t border-border p-4 flex justify-end">
                    <Button variant="outline" onClick={handleDownload} disabled={isDownloading}>
                      {isDownloading ? (
                        <><Loader2 size={16} className="mr-2 animate-spin" />Downloading...</>
                      ) : (
                        <><Download size={16} className="mr-2" />Download</>
                      )}
                    </Button>
                  </div>
                </motion.div>
              ) : (
                <motion.div 
                  key="empty"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="h-full flex flex-col items-center justify-center bg-card border border-border border-dashed rounded-2xl p-12 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center mb-4">
                    <Sparkles className="w-8 h-8 text-muted-foreground" />
                  </div>
                  <h3 className="text-xl font-medium text-foreground">Awaiting Instructions</h3>
                  <p className="text-muted-foreground mt-2 max-w-sm">
                    Select your preferred industry, difficulty, and platform on the left, then click Generate to create a custom brief.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
