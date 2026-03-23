import React, { useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Briefcase, BarChart } from "lucide-react";
import { FEATURED_BRIEFS, Brief } from "@/data/mock-data";
import { Badge } from "@/components/ui/Badge";

interface CarouselProps {
  activeFilter: string | null;
}

export function Carousel({ activeFilter }: CarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const filteredBriefs = activeFilter 
    ? FEATURED_BRIEFS.filter(b => b.industry === activeFilter)
    : FEATURED_BRIEFS;

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth + 40 : scrollLeft + clientWidth - 40;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Easy": return "success";
      case "Medium": return "warning";
      case "Hard": return "destructive";
      default: return "default";
    }
  };

  return (
    <section id="featured" className="py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 flex justify-between items-end">
        <div>
          <h2 className="text-3xl font-display font-bold text-foreground">Featured Briefs</h2>
          <p className="text-muted-foreground mt-2">Swipe to explore curated challenges.</p>
        </div>
        <div className="hidden md:flex gap-2">
          <button 
            onClick={() => scroll('left')}
            className="p-2 rounded-full border border-border bg-background hover:bg-accent text-foreground transition-colors"
            aria-label="Scroll left"
          >
            <ChevronLeft size={24} />
          </button>
          <button 
            onClick={() => scroll('right')}
            className="p-2 rounded-full border border-border bg-background hover:bg-accent text-foreground transition-colors"
            aria-label="Scroll right"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>

      <div className="relative">
        <div 
          ref={scrollRef}
          className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-12 pt-4 px-4 sm:px-6 lg:px-8 gap-6 max-w-7xl mx-auto"
        >
          {filteredBriefs.length === 0 ? (
            <div className="w-full py-20 text-center flex flex-col items-center">
              <Briefcase className="w-12 h-12 text-muted-foreground mb-4 opacity-50" />
              <p className="text-lg text-foreground font-medium">No briefs found for {activeFilter}</p>
              <p className="text-muted-foreground">Try selecting a different industry or clearing the filter.</p>
            </div>
          ) : (
            filteredBriefs.map((brief, idx) => (
              <motion.div
                key={brief.id}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="min-w-[300px] md:min-w-[380px] w-[300px] md:w-[380px] snap-center shrink-0 flex flex-col"
              >
                <div className="bg-card border border-border rounded-2xl p-6 h-full shadow-sm hover:shadow-xl hover:border-primary/30 transition-all duration-300 group hover:-translate-y-1 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-primary/10 to-transparent rounded-bl-full -z-10 opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  <div className="flex justify-between items-start mb-4">
                    <Badge variant="outline">{brief.industry}</Badge>
                    <Badge variant={getDifficultyColor(brief.difficulty) as any}>{brief.difficulty}</Badge>
                  </div>
                  
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {brief.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm flex-grow mb-6">
                    {brief.description}
                  </p>
                  
                  <div className="mt-auto pt-4 border-t border-border flex items-center justify-between text-sm">
                    <span className="text-muted-foreground flex items-center gap-1.5">
                      <BarChart size={14} />
                      {brief.platform}
                    </span>
                    <button className="text-primary font-medium hover:underline opacity-0 group-hover:opacity-100 transition-opacity">
                      View Details &rarr;
                    </button>
                  </div>
                </div>
              </motion.div>
            ))
          )}
        </div>
        
        {/* Gradients to indicate scrollability */}
        <div className="absolute top-0 left-0 bottom-12 w-8 md:w-24 bg-gradient-to-r from-background to-transparent pointer-events-none" />
        <div className="absolute top-0 right-0 bottom-12 w-8 md:w-24 bg-gradient-to-l from-background to-transparent pointer-events-none" />
      </div>
    </section>
  );
}
