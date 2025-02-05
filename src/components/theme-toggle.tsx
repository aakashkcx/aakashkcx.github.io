import { Computer, Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

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
    <ToggleGroup
      type="single"
      variant="outline"
      size="sm"
      value={theme}
      onValueChange={(value: "light" | "system" | "dark") => {
        if (value) setTheme(value);
      }}
    >
      <ToggleGroupItem value="light" aria-label="Light theme">
        <Sun className="size-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="system" aria-label="System theme">
        <Computer className="size-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="dark" aria-label="Dark theme">
        <Moon className="size-4" />
      </ToggleGroupItem>
    </ToggleGroup>
  );
}
