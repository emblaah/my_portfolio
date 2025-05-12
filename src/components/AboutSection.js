"use client";
import React from "react";
import AnimateSection from "@/components/ui/AnimateSection";

export default function AboutSection() {
  return (
    <section className="relative flex flex-col items-center justify-center w-screen px-4 py-10 bg-secondary-background">
      <AnimateSection className="w-full md:flex md:flex-row flex flex-col md:items-start items-center gap-7 mx-auto px-[1rem] sm:px-[3rem] md:px-[5rem]">
        <img
          src="/Dev_Image.jpeg"
          alt="Animated photo of me"
          className="h-50 w-50 rounded-full mb-4 shadow-lg"
        />
        <div>
          <h2 className="text-3xl font-semibold mb-4">About Me</h2>
          <p className="leading-relaxed">
            I'm a web developer focused on building beautiful, fast, and
            accessible websites using React, Next.js, and Tailwind. I enjoy
            solving real-world problems and learning new tools.
          </p>
        </div>
      </AnimateSection>
    </section>
  );
}
