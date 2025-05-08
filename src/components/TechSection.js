import React from "react";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
  FaFigma,
} from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiFramer, SiSupabase, SiExpress } from "react-icons/si";
import { IoLogoJavascript, IoLogoVercel } from "react-icons/io5";
import { BiLogoTypescript } from "react-icons/bi";
import { LiaNode } from "react-icons/lia";

// add conditional rendering for icons
const icons = {
  FaReact: FaReact,
  FaHtml5: FaHtml5,
  FaCss3Alt: FaCss3Alt,
  RiTailwindCssFill: RiTailwindCssFill,
  SiFramer: SiFramer,
  IoLogoJavascript: IoLogoJavascript,
  BiLogoTypescript: BiLogoTypescript,
  LiaNode: LiaNode,
  SiExpress: SiExpress,
  SiSupabase: SiSupabase,
  FaGitAlt: FaGitAlt,
  FaGithub: FaGithub,
  IoLogoVercel: IoLogoVercel,
  FaFigma: FaFigma,
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
        { name: "JavaScript", icon: "IoLogoJavascript" },
        { name: "TypeScript", icon: "BiLogoTypescript" },
      ],
    },
    {
      category: "Backend",
      techs: [
        { name: "Node.js", icon: "LiaNode" },
        { name: "Express.js", icon: "SiExpress" },
        { name: "SupaBaseSQL", icon: "SiSupabase" },
      ],
    },
    {
      category: "Tools & Platforms",
      techs: [
        { name: "Git", icon: "FaGitAlt" },
        { name: "GitHub", icon: "FaGithub" },
        { name: "Vercel", icon: "IoLogoVercel" },
        { name: "Figma", icon: "FaFigma" },
      ],
    },
  ];
  return (
    <div>
      <section className="relative flex w-screen px-4 py-10 bg-secondary-background">
        <div className="w-full flex flex-col mx-auto px-[1rem] sm:px-[5rem]">
          <h2 className="text-3xl font-semibold mb-4">Tech Stacks</h2>
          <div className="flex justify-between">
            {techStacks.map((stack, index) => {
              return (
                <div key={index} className="flex flex-col">
                  <h3 className="text-xl font-semibold mb-2">
                    {stack.category}
                  </h3>
                  {/* Map through the techs array */}
                  {stack.techs.map((tech, index) => {
                    // Dynamically import the icon component
                    const IconComponent = icons[tech.icon];
                    console.log("iconcomponent", IconComponent);
                    return (
                      <div key={index} className="flex gap-4">
                        <div className="flex items-center gap-2">
                          {IconComponent && (
                            <IconComponent className="w-6 h-6 " />
                          )}
                          <span>{tech.name}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
