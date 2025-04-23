import { Moon, Sun } from "lucide-react";
import React, { useEffect, useState } from "react";

export default function ThemeButton() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const root = document.documentElement;
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    const initialTheme = savedTheme || (prefersDark ? "dark" : "light");

    root.classList.remove("light", "dark");
    root.classList.add(initialTheme);
    setTheme(initialTheme);
  }, []);

  const handleToggle = () => {
    const root = document.documentElement;
    const newTheme = theme === "dark" ? "light" : "dark";

    root.classList.remove("light", "dark");
    root.classList.add(newTheme);
    localStorage.setItem("theme", newTheme);
    setTheme(newTheme);
  };

  return (
    <button
      className="flex items-center justify-center hover:text-text-secondary hover:bg-secondary hover:rounded-full p-1 duration-300 ease-in"
      onClick={handleToggle}
      aria-label="Toggle theme">
      {theme === "dark" ? <Sun size={24} /> : <Moon size={24} />}
    </button>
  );
}
