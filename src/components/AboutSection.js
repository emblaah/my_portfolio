"use client";
import React from "react";
import AnimateSection from "@/components/ui/AnimateSection";

export default function AboutSection() {
  return (
    <section className="relative flex flex-col items-center justify-center w-full py-10 bg-secondary-background">
      <AnimateSection className="max-w-7xl md:flex md:flex-row flex flex-col md:items-start items-center gap-7 mx-auto px-[1rem] sm:px-[3rem] md:px-[5rem]">
        <img
          src="/Dev_Image.jpeg"
          alt="Animated photo of me"
          className="h-50 w-50 rounded-full mb-4 shadow-lg"
        />

        <div>
          <h2 className="text-3xl font-semibold mb-4">Hi! I'm Embla!</h2>
          <p>
            Aspiring full-stack developer located in Sweden with formal training
            from Chas Academy and hands-on experience building personal
            projects. Motivated to expand technical expertise and contribute to
            impactful development work. Strong team collaborator developed
            through sports and professional roles, with a focus on problem
            solving, continuous learning, and producing high-quality code.
          </p>
        </div>
      </AnimateSection>
    </section>
  );
}
