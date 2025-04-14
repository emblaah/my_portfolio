"use client";
import React from "react";
import ThemeButton from "./ThemeButton";

export default function Header() {
  return (
    <header className="flex justify-between items-center px-6 py-4 shadow-md top-0 z-50">
      <h1 className="text-2xl font-bold">Embla</h1>
      <nav className="space-x-4 flex justify-center items-center">
        <a href="#about" className="hover:underline">
          About
        </a>
        <a href="#projects" className="hover:underline">
          Projects
        </a>
        <a href="#contact" className="hover:underline">
          Contact
        </a>
        <ThemeButton />
      </nav>
    </header>
  );
}
