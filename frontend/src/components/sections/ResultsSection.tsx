"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Target, AlertTriangle, KeySquare, Award } from "lucide-react";

export function ResultsSection({ show }: { show: boolean }) {
  if (!show) return null;

  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          {/* Header & Match Percentage */}
          <div className="flex flex-col md:flex-row gap-8 items-center justify-between p-8 rounded-3xl bg-primary/5 border border-primary/10">
            <div className="flex-1 space-y-4">
              <div className="flex items-center gap-3">
                <Award className="h-8 w-8 text-primary" />
                <h2 className="text-2xl font-bold">Analysis Complete</h2>
              </div>
              <p className="text-muted-foreground">
                We've compared the resume against the job description. Here is the AI-driven assessment.
              </p>
              <Badge variant="default" className="text-sm px-3 py-1 bg-green-500/10 text-green-600 hover:bg-green-500/20 border-green-500/20">
                Strong Match Recommendation
              </Badge>
            </div>
            
            <div className="flex flex-col items-center justify-center w-48 h-48 rounded-full border-8 border-muted relative bg-background shadow-inner">
              <div className="absolute inset-0 rounded-full border-8 border-primary border-t-transparent border-r-transparent rotate-45 opacity-20" />
              <div className="text-5xl font-extrabold text-primary">85<span className="text-2xl">%</span></div>
              <span className="text-xs font-medium text-muted-foreground mt-1 uppercase tracking-wider">Match Score</span>
            </div>
          </div>

          {/* Detailed Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="border-green-500/20 bg-green-500/5 shadow-none">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg flex items-center gap-2 text-green-700 dark:text-green-400">
                  <Target className="h-5 w-5" /> Strengths
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2"><span className="text-green-500 mt-0.5">•</span> Extensive React experience</li>
                  <li className="flex items-start gap-2"><span className="text-green-500 mt-0.5">•</span> Strong background in Next.js</li>
                  <li className="flex items-start gap-2"><span className="text-green-500 mt-0.5">•</span> Proven track record in UI/UX</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-red-500/20 bg-red-500/5 shadow-none">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg flex items-center gap-2 text-red-700 dark:text-red-400">
                  <AlertTriangle className="h-5 w-5" /> Weaknesses
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2"><span className="text-red-500 mt-0.5">•</span> Limited backend exposure</li>
                  <li className="flex items-start gap-2"><span className="text-red-500 mt-0.5">•</span> Python not explicitly mentioned</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-amber-500/20 bg-amber-500/5 shadow-none">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg flex items-center gap-2 text-amber-700 dark:text-amber-400">
                  <KeySquare className="h-5 w-5" /> Missing Keywords
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="border-amber-500/30 text-amber-600 bg-amber-500/10">Streamlit</Badge>
                  <Badge variant="outline" className="border-amber-500/30 text-amber-600 bg-amber-500/10">Docker</Badge>
                  <Badge variant="outline" className="border-amber-500/30 text-amber-600 bg-amber-500/10">CI/CD</Badge>
                  <Badge variant="outline" className="border-amber-500/30 text-amber-600 bg-amber-500/10">PostgreSQL</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
