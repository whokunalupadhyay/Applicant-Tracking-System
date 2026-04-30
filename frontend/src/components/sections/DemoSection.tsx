"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Upload, File, X, Sparkles, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";

export function DemoSection({ onAnalyze }: { onAnalyze: () => void }) {
  const [file, setFile] = useState<File | null>(null);
  const [jobDescription, setJobDescription] = useState("");
  const [isDragging, setIsDragging] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      setFile(e.dataTransfer.files[0]);
    }
  };

  const handleAnalyze = () => {
    setIsAnalyzing(true);
    // Mocking an API call delay
    setTimeout(() => {
      setIsAnalyzing(false);
      onAnalyze();
    }, 2000);
  };

  return (
    <section id="demo" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Try the Demo</h2>
          <p className="text-lg text-muted-foreground">
            Experience the AI analysis firsthand. Upload a sample resume and job description.
          </p>
        </div>

        <Card className="bg-background shadow-xl border-border/50">
          <CardContent className="p-6 sm:p-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* File Upload Area */}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold">Resume (PDF)</label>
                <div
                  onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
                  onDragLeave={() => setIsDragging(false)}
                  onDrop={handleDrop}
                  className={`border-2 border-dashed rounded-2xl p-8 flex flex-col items-center justify-center text-center h-64 transition-all duration-200 ${
                    isDragging ? "border-primary bg-primary/5" : "border-border hover:border-primary/50"
                  }`}
                >
                  {file ? (
                    <div className="flex flex-col items-center gap-4">
                      <div className="p-4 bg-primary/10 rounded-full">
                        <File className="h-8 w-8 text-primary" />
                      </div>
                      <div className="flex flex-col items-center">
                        <span className="text-sm font-medium truncate max-w-[200px]">{file.name}</span>
                        <span className="text-xs text-muted-foreground">{(file.size / 1024 / 1024).toFixed(2)} MB</span>
                      </div>
                      <Button variant="ghost" size="sm" onClick={() => setFile(null)} className="text-destructive hover:text-destructive hover:bg-destructive/10">
                        <X className="h-4 w-4 mr-2" /> Remove
                      </Button>
                    </div>
                  ) : (
                    <>
                      <div className="p-4 bg-muted rounded-full mb-4">
                        <Upload className="h-8 w-8 text-muted-foreground" />
                      </div>
                      <p className="text-sm font-medium mb-1">Drag & drop your resume here</p>
                      <p className="text-xs text-muted-foreground mb-4">PDF up to 5MB</p>
                      <div className="relative">
                        <input
                          type="file"
                          accept=".pdf"
                          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                          onChange={(e) => {
                            if (e.target.files && e.target.files.length > 0) {
                              setFile(e.target.files[0]);
                            }
                          }}
                        />
                        <Button variant="secondary" size="sm">Browse Files</Button>
                      </div>
                    </>
                  )}
                </div>
              </div>

              {/* Job Description Area */}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold">Job Description</label>
                <Textarea
                  placeholder="Paste the target job description here..."
                  className="resize-none h-64 rounded-2xl bg-muted/20 focus-visible:ring-primary/30"
                  value={jobDescription}
                  onChange={(e) => setJobDescription(e.target.value)}
                />
              </div>
            </div>

            <div className="mt-8 flex justify-end">
              <Button
                size="lg"
                className="w-full sm:w-auto rounded-full px-8 shadow-md"
                disabled={!file || !jobDescription || isAnalyzing}
                onClick={handleAnalyze}
              >
                {isAnalyzing ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" /> Analyzing...
                  </>
                ) : (
                  <>
                    <Sparkles className="mr-2 h-5 w-5" /> Analyze Resume
                  </>
                )}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
