import React from "react";
import AnimateSection from "@/components/ui/AnimateSection";

export default function EducationSection() {
  const educationData = [
    {
      year: "2024 - 2026",
      title: "Frontend Developer",
      institution: "Chas Academy | Stockholm, Sweden",
    },
    {
      year: "2024",
      title: "Programmering 1 — C++",
      institution: "Iris Vuxenutbildning | Järfälla, Sweden",
    },
    {
      year: "2019 - 2022",
      title: "Elementary Education — Bachelor of Arts",
      institution: "University of Charleston | West Virginia, USA",
    },
    {
      year: "2017 - 2019",
      title: "Elementary Education — Associate of Arts",
      institution: "Eastern Florida State College | Florida, USA",
    },
  ];

  return (
    <section className="relative w-full py-10 bg-secondary-background">
      <AnimateSection className="max-w-7xl mx-auto px-[1rem] sm:px-[3rem] md:px-[5rem]">
        <h2 className="text-3xl font-semibold mb-4">Education</h2>
        {educationData.map((edu, index) => (
          <AnimateSection key={index} className="mb-4">
            <p>{edu.year}</p>
            <h3 className="text-xl font-semibold">{edu.title}</h3>
            <p>{edu.institution}</p>
          </AnimateSection>
        ))}
      </AnimateSection>
    </section>
  );
}
