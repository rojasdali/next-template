import { ThemeSwitcher } from "@/components/theme/theme-switcher";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { GithubIcon, HomeIcon } from "lucide-react";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="border-b bg-background">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 md:px-8">
        <div className="flex items-center gap-4">
          <Link href="/" className="text-xl font-semibold">
            <Button variant="ghost" size="icon">
              <HomeIcon className="h-5 w-5" />
            </Button>
          </Link>
          <Separator orientation="vertical" className="h-6" />
          <nav className="flex items-center gap-4">
            <Button variant="ghost" asChild>
              <Link href="/test">Test</Link>
            </Button>
            <Button variant="ghost" asChild>
              <a
                href="https://github.com/your-repo"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GithubIcon className="mr-2 h-4 w-4" />
                GitHub
              </a>
            </Button>
          </nav>
        </div>
        <ThemeSwitcher />
      </div>
    </header>
  );
};
