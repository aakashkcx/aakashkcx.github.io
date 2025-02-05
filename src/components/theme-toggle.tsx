import { Computer, Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "system" | "dark">("system");

  useEffect(() => {
    const localStorageTheme = localStorage?.getItem("theme");
    if (localStorageTheme) setTheme(localStorageTheme as "light" | "dark");
  }, []);

  useEffect(() => {
    if (theme === "light") {
      localStorage?.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    }
    if (theme === "dark") {
      localStorage?.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    }
    if (theme === "system") {
      localStorage?.removeItem("theme");
      const mediaDarkTheme = window.matchMedia("(prefers-color-scheme: dark)");
      document.documentElement.classList.toggle("dark", mediaDarkTheme.matches);
    }
  }, [theme]);

  return (
    <div className="rounded-full border">
      <Button
        variant="ghost"
        size="icon"
        aria-label="Light theme"
        className={cn(
          "rounded-full",
          theme === "light" && "bg-accent text-accent-foreground border",
        )}
        onClick={() => setTheme("light")}
      >
        <Sun />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        aria-label="System theme"
        className={cn(
          "rounded-full",
          theme === "system" && "bg-accent text-accent-foreground border",
        )}
        onClick={() => setTheme("system")}
      >
        <Computer />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        aria-label="Dark theme"
        className={cn(
          "rounded-full",
          theme === "dark" && "bg-accent text-accent-foreground border",
        )}
        onClick={() => setTheme("dark")}
      >
        <Moon />
      </Button>
    </div>
  );
}
