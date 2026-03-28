import React from "react";
import { Link } from "wouter";
import asterikLogo from "@assets/Asterik_1774711991505.png";

export function Footer() {
  return (
    <footer className="bg-card border-t border-border py-12 md:py-16 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center gap-4">
          <Link href="/" className="flex items-center gap-2">
            <img src={asterikLogo} alt="Asterik logo" className="w-8 h-8" />
            <span className="font-display font-bold text-xl text-foreground">
              Asterik
            </span>
          </Link>
          <p className="text-muted-foreground max-w-sm">
            Generate real-world design briefs that help you build a standout portfolio and get hired.
          </p>
        </div>

        <div className="border-t border-border mt-10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Asterik. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
