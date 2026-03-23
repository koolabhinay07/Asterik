import React from "react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: "Free",
      description: "Perfect for students building their first portfolio.",
      features: [
        "5 generated briefs per month",
        "Standard difficulty levels",
        "PDF exports with watermark",
        "Community support"
      ],
      cta: "Get Started",
      popular: false
    },
    {
      name: "Pro",
      price: "$12",
      period: "/month",
      description: "Everything you need to land senior roles.",
      features: [
        "Unlimited generated briefs",
        "Advanced & Niche industries",
        "Clean, unwatermarked PDF exports",
        "Save & favorite briefs",
        "Figma starter templates"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Bootcamp",
      price: "$29",
      period: "/month",
      description: "For mentors and design educators.",
      features: [
        "Everything in Pro",
        "Bulk export for students",
        "Custom branding on PDFs",
        "API access to generator",
        "Priority email support"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Simple, transparent pricing
          </h2>
          <p className="text-lg text-muted-foreground">
            Start for free, upgrade when you need more power.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto items-center">
          {plans.map((plan, i) => (
            <div 
              key={i}
              className={`relative bg-card rounded-3xl p-8 transition-transform hover:-translate-y-1 ${
                plan.popular 
                  ? "border-2 border-primary shadow-xl shadow-primary/10 md:-translate-y-4 md:hover:-translate-y-5" 
                  : "border border-border shadow-md"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-indigo-500 text-primary-foreground text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide shadow-sm">
                  Most Popular
                </div>
              )}
              
              <h3 className="text-xl font-bold text-foreground mb-2">{plan.name}</h3>
              <p className="text-sm text-muted-foreground mb-6 min-h-[40px]">{plan.description}</p>
              
              <div className="mb-6 flex items-baseline">
                <span className="text-4xl font-display font-extrabold text-foreground">{plan.price}</span>
                {plan.period && <span className="text-muted-foreground ml-1">{plan.period}</span>}
              </div>
              
              <Button 
                variant={plan.popular ? "default" : "outline"} 
                className="w-full mb-8"
              >
                {plan.cta}
              </Button>
              
              <ul className="space-y-3">
                {plan.features.map((feat, j) => (
                  <li key={j} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <Check size={16} className="text-primary mt-0.5 shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
