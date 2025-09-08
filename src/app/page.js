"use client";

import React from "react";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import HeroSection from "@/components/HeroSection";
import EducationSection from "@/components/EducationSection";
import BackToTopBtn from "@/components/ui/BackToTopBtn";
import TechSection from "@/components/TechSection";

export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <TechSection />
      <ProjectsSection />
      <EducationSection />
      <ContactSection />
      <BackToTopBtn />
    </div>
  );
}
