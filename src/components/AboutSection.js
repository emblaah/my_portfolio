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
          <h2 className="text-3xl font-semibold mb-4">Hi! I'm Embla!</h2>
          <p>
            I'm a frontend developer in training with growing skills in backend
            development. I focus on building beautiful, fast, and responsive
            websites using React, Next.js, and Tailwind. While my professional
            background started in education, I have always had a passion for
            technology. <br />
            <br />I love learning new things and am always looking for ways to
            improve my skills. I enjoy problem-solving and creativity that comes
            with development.
          </p>
        </div>
      </AnimateSection>
    </section>
  );
}