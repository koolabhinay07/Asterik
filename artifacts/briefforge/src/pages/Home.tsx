import React, { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Carousel } from "@/components/sections/Carousel";
import { Features } from "@/components/sections/Features";
import { Generator } from "@/components/sections/Generator";
import { Pricing } from "@/components/sections/Pricing";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero activeFilter={activeFilter} setActiveFilter={setActiveFilter} />
        <Carousel activeFilter={activeFilter} />
        <Features />
        <Generator />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
}
