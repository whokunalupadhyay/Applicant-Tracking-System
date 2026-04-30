"use client";

import { motion } from "framer-motion";
import { ArrowRight, Database, FileDigit, Cpu, LayoutTemplate } from "lucide-react";

export function ArchitectureSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Code Architecture</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            How data flows from user input to AI-generated insights.
          </p>
        </div>

        <div className="max-w-5xl mx-auto relative">
          <div className="hidden md:block absolute top-24 left-[10%] right-[10%] h-1 bg-gradient-to-r from-primary/10 via-primary to-primary/10 -z-10" />
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex flex-col items-center text-center group"
            >
              <div className="w-16 h-16 rounded-2xl bg-muted border border-border flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
                <FileDigit className="h-8 w-8 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              <h3 className="font-semibold mb-2">1. PDF Parsing</h3>
              <p className="text-sm text-muted-foreground">pdfplumber extracts raw text from the uploaded resume</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col items-center text-center group"
            >
              <div className="w-16 h-16 rounded-2xl bg-muted border border-border flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
                <Database className="h-8 w-8 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              <h3 className="font-semibold mb-2">2. Prompt Generation</h3>
              <p className="text-sm text-muted-foreground">Construct precise prompts combining job description & resume</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col items-center text-center group"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/20 border border-primary/50 flex items-center justify-center mb-4 shadow-lg shadow-primary/20">
                <Cpu className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2 text-primary">3. Gemini API</h3>
              <p className="text-sm text-muted-foreground">Evaluates matching criteria and finds missing keywords</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col items-center text-center group"
            >
              <div className="w-16 h-16 rounded-2xl bg-muted border border-border flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
                <LayoutTemplate className="h-8 w-8 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              <h3 className="font-semibold mb-2">4. Result Rendering</h3>
              <p className="text-sm text-muted-foreground">Display actionable insights on the Streamlit dashboard</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
