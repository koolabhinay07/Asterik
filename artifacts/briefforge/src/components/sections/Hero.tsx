import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { INDUSTRIES } from "@/data/mock-data";
import { cn } from "@/lib/utils";

interface HeroProps {
  activeFilter: string | null;
  setActiveFilter: (filter: string | null) => void;
}

export function Hero({ activeFilter, setActiveFilter }: HeroProps) {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-0 inset-x-0 h-[500px] bg-gradient-to-b from-primary/10 to-transparent -z-10" />
      <div className="absolute top-1/4 -right-1/4 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px] -z-10" />
      <div className="absolute bottom-0 -left-1/4 w-[500px] h-[500px] rounded-full bg-violet-500/5 blur-[100px] -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6 border border-primary/20">
            Design better. Get hired faster.
          </span>
          <h1 className="text-5xl md:text-7xl font-display font-extrabold text-foreground leading-tight mb-6">
            Create Portfolio-Ready <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-violet-500">
              UX Case Studies
            </span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            Generate real-world, highly-detailed design briefs that challenge your skills, 
            help you build a standout portfolio, and impress recruiters.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button size="lg" asChild className="w-full sm:w-auto">
              <a href="#generator">Generate Brief</a>
            </Button>
            <Button size="lg" variant="outline" asChild className="w-full sm:w-auto">
              <a href="#featured">Explore Samples</a>
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mt-12"
        >
          <p className="text-sm font-medium text-muted-foreground mb-4 uppercase tracking-wider">
            Filter briefs by industry
          </p>
          <div className="flex flex-wrap justify-center gap-2 max-w-3xl mx-auto">
            <button
              onClick={() => setActiveFilter(null)}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 border",
                activeFilter === null
                  ? "bg-foreground text-background border-foreground shadow-md"
                  : "bg-background text-muted-foreground border-border hover:border-foreground/30 hover:text-foreground"
              )}
            >
              All
            </button>
            {INDUSTRIES.map((industry) => (
              <button
                key={industry}
                onClick={() => setActiveFilter(industry === activeFilter ? null : industry)}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 border",
                  activeFilter === industry
                    ? "bg-primary text-primary-foreground border-primary shadow-md shadow-primary/20"
                    : "bg-background text-muted-foreground border-border hover:border-foreground/30 hover:text-foreground"
                )}
              >
                {industry}
              </button>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
