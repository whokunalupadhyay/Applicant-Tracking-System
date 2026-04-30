"use client";

import { useState } from "react";
import { ThemeToggle } from "@/components/theme-toggle";
import { HeroSection } from "@/components/sections/HeroSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { DemoSection } from "@/components/sections/DemoSection";
import { ResultsSection } from "@/components/sections/ResultsSection";
import { TechStackSection } from "@/components/sections/TechStackSection";
import { ArchitectureSection } from "@/components/sections/ArchitectureSection";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  const [showResults, setShowResults] = useState(false);

  return (
    <div className="min-h-screen flex flex-col font-[family-name:var(--font-geist-sans)]">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">ATS</span>
            </div>
            <span className="font-bold hidden sm:inline-block">Applicant Tracking System</span>
          </div>
          <nav className="flex items-center gap-6">
            <a href="#features" className="text-sm font-medium hover:text-primary transition-colors hidden md:inline-block">Features</a>
            <a href="#demo" className="text-sm font-medium hover:text-primary transition-colors hidden md:inline-block">Demo</a>
            <ThemeToggle />
          </nav>
        </div>
      </header>

      <main className="flex-1">
        <HeroSection />
        <FeaturesSection />
        <HowItWorksSection />
        <DemoSection onAnalyze={() => setShowResults(true)} />
        <div id="results" className={showResults ? "block" : "hidden"}>
          <ResultsSection show={showResults} />
        </div>
        <TechStackSection />
        <ArchitectureSection />
      </main>

      <Footer />
    </div>
  );
}
