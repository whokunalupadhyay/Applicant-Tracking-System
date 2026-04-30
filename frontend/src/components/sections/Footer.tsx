import { GitBranch, Globe, Mail } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="bg-muted/80 border-t border-border/50 py-12">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <div className="mb-6 md:mb-0 text-center md:text-left">
          <h3 className="font-bold text-xl mb-2">ATS Showcase</h3>
          <p className="text-sm text-muted-foreground">
            Built with Next.js, Streamlit, and Google Gemini.
          </p>
        </div>

        <div className="flex flex-col items-center md:items-end gap-4">
          <div className="flex gap-4">
            <a href="#" target="_blank" rel="noreferrer" className={buttonVariants({ variant: "ghost", size: "icon", className: "rounded-full hover:bg-primary/10 hover:text-primary transition-colors" })}>
              <GitBranch className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </a>
            <a href="#" target="_blank" rel="noreferrer" className={buttonVariants({ variant: "ghost", size: "icon", className: "rounded-full hover:bg-primary/10 hover:text-primary transition-colors" })}>
              <Globe className="h-5 w-5" />
              <span className="sr-only">Website</span>
            </a>
            <a href="mailto:contact@example.com" className={buttonVariants({ variant: "ghost", size: "icon", className: "rounded-full hover:bg-primary/10 hover:text-primary transition-colors" })}>
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </a>
          </div>
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Kunal Upadhyay. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
