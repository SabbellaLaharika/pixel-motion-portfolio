"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";

// Suppress harmless dev warnings caused by:
// 1. next-themes injecting a <script> tag (React 19 false positive)
// 2. Browser extensions (1Password, Dashlane, etc.) adding attributes like fdprocessedid
if (typeof window !== "undefined" && process.env.NODE_ENV === "development") {
  const origError = console.error;
  console.error = (...args) => {
    const msg = typeof args[0] === "string" ? args[0] : "";
    if (
      msg.includes("Encountered a script tag") ||
      msg.includes("fdprocessedid") ||
      msg.includes("A tree hydrated but some attributes")
    ) {
      return;
    }
    origError.apply(console, args);
  };
}

export function ThemeProvider({ children, ...props }) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
