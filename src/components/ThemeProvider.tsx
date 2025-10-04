import { ThemeProviderContext, type Theme, type ThemeProviderState } from "@/context/ThemeContext";
import { ReactNode, useEffect, useState } from "react";


type ThemeProviderProps = {
  children: ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
};

export function ThemeProvider({
  children,
  defaultTheme = "system",
  storageKey = "vite-ui-theme",
}: ThemeProviderProps) {
  const [theme, setThemeState] = useState<Theme>(
    () => (localStorage.getItem(storageKey) as Theme) || defaultTheme
  );

  useEffect(() => {
    const root = document.documentElement;

    const isSystemDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    const appliedTheme =
      theme === "system" ? (isSystemDark ? "dark" : "light") : theme;

    root.classList.remove("light", "dark");
    root.classList.add(appliedTheme);

    localStorage.setItem(storageKey, theme);
  }, [theme, storageKey]);

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
  };

  const value: ThemeProviderState = { theme, setTheme };

  return (
    <ThemeProviderContext.Provider value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
}
