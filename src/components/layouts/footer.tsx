import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { GithubIcon, TwitterIcon } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="border-t bg-background">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 md:px-8">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Your Company. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" asChild>
            <a
              href="https://twitter.com/your-handle"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <TwitterIcon className="h-4 w-4" />
            </a>
          </Button>
          <Separator orientation="vertical" className="h-6" />
          <Button variant="ghost" size="icon" asChild>
            <a
              href="https://github.com/your-repo"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <GithubIcon className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </footer>
  );
};
