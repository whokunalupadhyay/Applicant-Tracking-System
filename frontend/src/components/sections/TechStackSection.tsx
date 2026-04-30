"use client";

import { motion } from "framer-motion";

const technologies = [
  { name: "Python", category: "Backend", color: "bg-blue-500/10 text-blue-600 border-blue-500/20" },
  { name: "Streamlit", category: "Frontend (Backend UI)", color: "bg-red-500/10 text-red-600 border-red-500/20" },
  { name: "Google Gemini API", category: "AI Model", color: "bg-purple-500/10 text-purple-600 border-purple-500/20" },
  { name: "PDFPlumber", category: "Data Extraction", color: "bg-orange-500/10 text-orange-600 border-orange-500/20" },
  { name: "React / Next.js", category: "Showcase Frontend", color: "bg-sky-500/10 text-sky-600 border-sky-500/20" },
  { name: "Tailwind CSS", category: "Styling", color: "bg-teal-500/10 text-teal-600 border-teal-500/20" },
];

export function TechStackSection() {
  return (
    <section className="py-20 bg-muted/50 border-y border-border/50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold tracking-tight mb-12">Powered By Modern Tech</h2>
        
        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className={`px-6 py-4 rounded-2xl border ${tech.color} flex flex-col items-center justify-center min-w-[160px] bg-background shadow-sm hover:shadow-md transition-shadow`}
            >
              <span className="font-semibold">{tech.name}</span>
              <span className="text-xs opacity-80 mt-1">{tech.category}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
