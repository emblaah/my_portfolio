import { Moon, Sun, Github, Linkedin, Mail, ChevronDown } from "lucide-react";
import React, { useEffect, useState, useRef } from "react";

export default function ThemeButton() {
  const [theme, setTheme] = useState("light");
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  const socials = [
    {
      href: "https://github.com/emblaah",
      label: "GitHub",
      icon: <Github size={22} />,
      external: true,
    },
    {
      href: "https://www.linkedin.com/in/embla-andersson/",
      label: "LinkedIn",
      icon: <Linkedin size={22} />,
      external: true,
    },
    {
      href: "mailto:emblaandersson@yahoo.se",
      label: "Email",
      icon: <Mail size={22} />,
      external: false,
    },
  ];

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

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    }
    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  return (
    <div className="flex items-center gap-3">
      {/* Resume Dropdown */}
      <div className="relative" ref={dropdownRef}>
        <button
          onClick={() => setOpen((prev) => !prev)}
          className="flex items-center justify-center gap-1 hover:text-secondary hover:bg-secondary-background hover:rounded-full p-2 duration-300 ease-in cursor-pointer"
          aria-haspopup="true"
          aria-expanded={open}
          aria-label="Download CV">
          <span className="font-medium">CV</span>
          <ChevronDown size={18} />
        </button>
        {open && (
          <div className="absolute right-0 mt-2 w-40 bg-secondary-background rounded-md shadow-lg z-10">
            <a
              href="/Embla_Andersson_CV.pdf"
              download
              className="block px-4 py-2 hover:bg-secondary/20 rounded-t-md transition text-sm">
              Ladda ner CV här
            </a>
            <a
              href="/Embla_Andersson_CV_eng.pdf"
              download
              className="block px-4 py-2 hover:bg-secondary/20 rounded-b-md transition text-sm">
              Download English CV
            </a>
          </div>
        )}
      </div>
      {/* Socials */}
      {socials.map((social, idx) => (
        <a
          key={social.label}
          href={social.href}
          target={social.external ? "_blank" : undefined}
          rel={social.external ? "noopener noreferrer" : undefined}
          className="flex items-center justify-center hover:text-secondary hover:bg-secondary-background hover:rounded-full p-2 duration-300 ease-in cursor-pointer"
          aria-label={social.label}>
          {social.icon}
        </a>
      ))}

      {/* Theme Button */}
      <button
        className="flex items-center justify-center hover:text-secondary hover:bg-secondary-background hover:rounded-full p-2 duration-300 ease-in cursor-pointer"
        onClick={handleToggle}
        aria-label="Toggle theme">
        {theme === "dark" ? <Sun size={24} /> : <Moon size={24} />}
      </button>
    </div>
  );
}
