import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Target, Download, LayoutTemplate, Briefcase } from "lucide-react";

export function Features() {
  const features = [
    {
      icon: <Sparkles className="w-6 h-6 text-primary" />,
      title: "AI-Generated Briefs",
      description: "Unique, varied problem statements powered by advanced AI, ensuring your portfolio stands out from the crowd."
    },
    {
      icon: <Briefcase className="w-6 h-6 text-amber-500" />,
      title: "Real-World Problems",
      description: "Briefs based on actual industry challenges faced by top tech companies and dynamic startups."
    },
    {
      icon: <Download className="w-6 h-6 text-emerald-500" />,
      title: "Downloadable PDFs",
      description: "Export any brief as a polished, professional PDF document to reference offline or share with mentors."
    },
    {
      icon: <LayoutTemplate className="w-6 h-6 text-indigo-500" />,
      title: "Portfolio-Ready Structure",
      description: "Organized with clear goals, user personas, constraints, and deliverables to guide your design process."
    },
    {
      icon: <Target className="w-6 h-6 text-rose-500" />,
      title: "Placement-Focused",
      description: "Crafted specifically to highlight the skills hiring managers and recruiters look for in junior to mid-level designers."
    }
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className={`bg-card rounded-2xl p-8 border border-border shadow-sm hover:shadow-md transition-shadow ${
                idx === 0 ? "lg:col-span-2 lg:row-span-2 flex flex-col justify-center" : ""
              }`}
            >
              <div className="w-12 h-12 rounded-xl bg-background border border-border flex items-center justify-center mb-6 shadow-sm">
                {feature.icon}
              </div>
              <h3 className={`font-bold text-foreground mb-3 ${idx === 0 ? 'text-2xl' : 'text-xl'}`}>
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
