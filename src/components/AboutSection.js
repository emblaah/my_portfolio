"use client";
import React from "react";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section className="relative flex flex-col items-center justify-center w-screen px-4 py-10 bg-secondary-background">
      <div className="w-full mx-auto px-[1rem] sm:px-[5rem]">
        <h2 className="text-3xl font-semibold mb-4">About Me</h2>
        <p className="leading-relaxed">
          I'm a web developer focused on building beautiful, fast, and
          accessible websites using React, Next.js, and Tailwind. I enjoy
          solving real-world problems and learning new tools.
        </p>
      </div>
    </section>
  );
}
