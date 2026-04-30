"use client";

import { motion } from "framer-motion";
import { CardStack, type CardData } from "@/components/ui/card-stack";
import { FileUp, Brain, Percent, LayoutDashboard, Shield } from "lucide-react";

const features: CardData[] = [
  {
    id: "resume-upload",
    title: "Resume Upload & Conversion",
    description: "Upload PDF resumes and extract structured text for analysis.",
    icon: <FileUp className="h-6 w-6" />,
    color: "var(--background)",
  },
  {
    id: "ai-analysis",
    title: "AI-Powered Analysis",
    description: "Analyze resumes using Google Gemini API for deep insights.",
    icon: <Brain className="h-6 w-6" />,
    color: "var(--background)",
  },
  {
    id: "percentage-match",
    title: "Percentage Match",
    description: "Get match percentage and missing keyword analysis.",
    icon: <Percent className="h-6 w-6" />,
    color: "var(--background)",
  },
  {
    id: "dashboard",
    title: "Interactive Dashboard",
    description: "Streamlit-powered backend with real-time results.",
    icon: <LayoutDashboard className="h-6 w-6" />,
    color: "var(--background)",
  },
  {
    id: "secure-api",
    title: "Secure API Handling",
    description: "Environment variables managed securely using dotenv.",
    icon: <Shield className="h-6 w-6" />,
    color: "var(--background)",
  }
];

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">Powerful Features</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need to find the perfect candidate, powered by state-of-the-art AI technology.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 mb-10 w-full flex justify-center"
        >
          <CardStack
            cards={features}
            defaultLayout="stack"
          />
        </motion.div>
      </div>
    </section>
  );
}
