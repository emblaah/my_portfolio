import React from "react";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
  FaFigma,
  FaAws,
  FaDocker,
} from "react-icons/fa";
import { RiTailwindCssFill, RiNextjsFill } from "react-icons/ri";
import { SiFramer, SiMysql, SiExpress } from "react-icons/si";
import { IoLogoVercel } from "react-icons/io5";
import { BiLogoTypescript, BiLogoJavascript } from "react-icons/bi";
import { TbBrandReactNative } from "react-icons/tb";
import AnimateSection from "./ui/AnimateSection";

// Conditional rendering for icons
const icons = {
  FaReact: FaReact,
  FaHtml5: FaHtml5,
  FaCss3Alt: FaCss3Alt,
  RiTailwindCssFill: RiTailwindCssFill,
  SiFramer: SiFramer,
  BiLogoTypescript: BiLogoTypescript,
  BiLogoJavascript: BiLogoJavascript,
  SiExpress: SiExpress,
  SiMysql: SiMysql,
  FaGitAlt: FaGitAlt,
  FaGithub: FaGithub,
  IoLogoVercel: IoLogoVercel,
  FaFigma: FaFigma,
  TbBrandReactNative: TbBrandReactNative,
  FaAws: FaAws,
  RiNextjsFill: RiNextjsFill,
  FaDocker: FaDocker,
};

export default function TechSection() {
  // Tech categories with names and icons
  const techStacks = [
    {
      category: "Frontend",
      techs: [
        { name: "React", icon: "FaReact" },
        { name: "HTML", icon: "FaHtml5" },
        { name: "CSS", icon: "FaCss3Alt" },
        { name: "Tailwind CSS", icon: "RiTailwindCssFill" },
        { name: "Framer Motion", icon: "SiFramer" },
        { name: "JavaScript", icon: "BiLogoJavascript" },
        { name: "TypeScript", icon: "BiLogoTypescript" },
        { name: "React Native", icon: "TbBrandReactNative" },
      ],
    },
    {
      category: "Backend",
      techs: [
        { name: "Next.js", icon: "RiNextjsFill" },
        { name: "Express.js", icon: "SiExpress" },
        { name: "MySQL", icon: "SiMysql" },
      ],
    },
    {
      category: "Tools & Platforms",
      techs: [
        { name: "Git", icon: "FaGitAlt" },
        { name: "GitHub", icon: "FaGithub" },
        { name: "Vercel", icon: "IoLogoVercel" },
        { name: "Figma", icon: "FaFigma" },
        { name: "AWS", icon: "FaAws" },
        { name: "Docker", icon: "FaDocker" },
      ],
    },
  ];
  return (
    <div>
      <section className="relative flex w-screen px-4 py-10 bg-secondary-background">
        <div className="w-full flex flex-col mx-auto px-[1rem] sm:px-[3rem] md:px-[5rem]">
          <h2 className="text-3xl font-semibold mb-4">
            Technologies I have worked with:
          </h2>
          <AnimateSection>
            <div className="flex flex-col">
              {techStacks.map((stack, index) => {
                return (
                  <div key={index} className="flex flex-col gap-4">
                    <AnimateSection>
                      <h3 className="text-xl font-semibold mt-4">
                        {stack.category}
                      </h3>
                    </AnimateSection>
                    {/* Map through the techs array */}
                    <AnimateSection>
                      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 ">
                        {stack.techs.map((tech, index) => {
                          // Dynamically import the icon component
                          const IconComponent = icons[tech.icon];
                          return (
                            <AnimateSection key={index}>
                              <div className="flex gap-4 bg-secondary rounded-full p-2">
                                {IconComponent && (
                                  <IconComponent className="w-6 h-6 " />
                                )}
                                <span>{tech.name}</span>
                              </div>
                            </AnimateSection>
                          );
                        })}
                      </div>
                    </AnimateSection>
                  </div>
                );
              })}
            </div>
          </AnimateSection>
        </div>
      </section>
    </div>
  );
}
