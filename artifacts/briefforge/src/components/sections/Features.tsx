import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Target, Download, LayoutTemplate, Briefcase } from "lucide-react";

export function Features() {
  const features = [
    {
      icon: <Sparkles className="w-7 h-7 text-primary" />,
      title: "AI-Generated Briefs",
      description: "Unique, varied problem statements powered by advanced AI, ensuring your portfolio stands out from the crowd.",
      large: true,
    },
    {
      icon: <Briefcase className="w-6 h-6 text-amber-500" />,
      title: "Real-World Problems",
      description: "Briefs based on actual industry challenges faced by top tech companies and dynamic startups.",
    },
    {
      icon: <Download className="w-6 h-6 text-emerald-500" />,
      title: "Downloadable Images",
      description: "Export any brief as a clean, high-quality image — easy to save, share on socials, or drop straight into your portfolio.",
    },
    {
      icon: <LayoutTemplate className="w-6 h-6 text-indigo-500" />,
      title: "Portfolio-Ready Structure",
      description: "Organized with clear goals, user personas, constraints, and deliverables to guide your design process.",
    },
    {
      icon: <Target className="w-6 h-6 text-rose-500" />,
      title: "Placement-Focused",
      description: "Crafted specifically to highlight the skills hiring managers and recruiters look for in junior to mid-level designers.",
      wide: true,
    },
  ];

  return (
    <section id="features" className="py-24 bg-secondary/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Everything you need to build a standout portfolio
          </h2>
          <p className="text-lg text-muted-foreground">
            Stop redesigning Spotify. Start solving real problems.
          </p>
        </div>

        {/* Bento grid: 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-auto">

          {/* Card 1 — AI-Generated Briefs: 2 cols × 2 rows */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0, duration: 0.5 }}
            className="md:col-span-2 md:row-span-2 bg-card rounded-2xl p-10 border border-border shadow-sm hover:shadow-md transition-shadow flex flex-col justify-end min-h-[280px]"
          >
            <div className="w-14 h-14 rounded-2xl bg-background border border-border flex items-center justify-center mb-6 shadow-sm">
              {features[0].icon}
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-3">{features[0].title}</h3>
            <p className="text-muted-foreground leading-relaxed max-w-md">{features[0].description}</p>
          </motion.div>

          {/* Card 2 — Real-World Problems: col 3, row 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="bg-card rounded-2xl p-8 border border-border shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between min-h-[130px]"
          >
            <div className="w-11 h-11 rounded-xl bg-background border border-border flex items-center justify-center mb-4 shadow-sm">
              {features[1].icon}
            </div>
            <div>
              <h3 className="text-lg font-bold text-foreground mb-2">{features[1].title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{features[1].description}</p>
            </div>
          </motion.div>

          {/* Card 3 — Downloadable Images: col 3, row 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="bg-card rounded-2xl p-8 border border-border shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between min-h-[130px]"
          >
            <div className="w-11 h-11 rounded-xl bg-background border border-border flex items-center justify-center mb-4 shadow-sm">
              {features[2].icon}
            </div>
            <div>
              <h3 className="text-lg font-bold text-foreground mb-2">{features[2].title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{features[2].description}</p>
            </div>
          </motion.div>

          {/* Card 4 — Portfolio-Ready Structure: col 1, row 3 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="bg-card rounded-2xl p-8 border border-border shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between min-h-[160px]"
          >
            <div className="w-11 h-11 rounded-xl bg-background border border-border flex items-center justify-center mb-4 shadow-sm">
              {features[3].icon}
            </div>
            <div>
              <h3 className="text-lg font-bold text-foreground mb-2">{features[3].title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{features[3].description}</p>
            </div>
          </motion.div>

          {/* Card 5 — Placement-Focused: col 2–3, row 3 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="md:col-span-2 bg-card rounded-2xl p-8 border border-border shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between min-h-[160px]"
          >
            <div className="w-11 h-11 rounded-xl bg-background border border-border flex items-center justify-center mb-4 shadow-sm">
              {features[4].icon}
            </div>
            <div>
              <h3 className="text-lg font-bold text-foreground mb-2">{features[4].title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{features[4].description}</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
