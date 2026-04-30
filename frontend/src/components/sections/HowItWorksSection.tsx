"use client";

import { motion } from "framer-motion";

const steps = [
  {
    title: "Upload Resume",
    description: "Drag and drop the candidate's PDF resume into the system.",
    category: "Step 1",
    image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=1200&h=800&auto=format&fit=crop&q=60"
  },
  {
    title: "Extract Text",
    description: "Our system accurately parses and extracts text from the PDF.",
    category: "Step 2",
    image: "https://images.unsplash.com/photo-1618044733300-9472054094ee?w=1200&h=800&auto=format&fit=crop&q=60"
  },
  {
    title: "AI Analysis",
    description: "Gemini AI compares the resume against your detailed job description.",
    category: "Step 3",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=1200&h=800&auto=format&fit=crop&q=60"
  },
  {
    title: "Review Results",
    description: "Get a match percentage, missing keywords, and hiring recommendations.",
    category: "Step 4",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&auto=format&fit=crop&q=60"
  },
];

export function HowItWorksSection() {
  return (
    <section className="py-24 relative overflow-hidden bg-background">
      <div className="flex flex-col items-center w-full container mx-auto px-4">
        {/* Заголовок сверху */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">How It Works</h2>
          <p className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">
            A simple 4-step process to evaluate candidates with AI precision.
          </p>
        </motion.div>

        {/* Карточки */}
        <div className="mt-16 flex flex-wrap justify-center gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="max-w-[280px] w-full hover:-translate-y-1 hover:shadow-lg rounded-xl transition duration-300 group cursor-pointer"
            >
              <div className="overflow-hidden rounded-xl bg-muted aspect-[3/2]">
                <img
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  src={step.image}
                  alt={step.title}
                />
              </div>
              <div className="p-2">
                <p className="text-xs text-primary font-semibold mt-3 uppercase tracking-wider">{step.category}</p>
                <h3 className="text-lg text-foreground font-semibold mt-1 mb-2 leading-tight">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-2">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
