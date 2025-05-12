"use client";
import React, { useEffect, useState } from "react";
import ThemeButton from "./ThemeButton";

export default function Header() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check initial theme
    const checkTheme = () => {
      setIsDarkMode(document.documentElement.classList.contains("dark"));
    };

    // Run once on mount
    checkTheme();

    const observer = new MutationObserver(checkTheme);

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header className="absolute flex justify-between items-center w-full p-6 top-0 z-50">
      {isDarkMode ? (
        <img
          src="/initials_dark.png"
          alt="Dark mode Initials"
          className="h-12"
        />
      ) : (
        <img
          src="/initials_light.png"
          alt="Light mode Initials"
          className="h-12"
        />
      )}

      <nav className="fixed right-4 top-4 space-x-4 flex justify-center items-center">
        <ThemeButton />
      </nav>
    </header>
  );
}
