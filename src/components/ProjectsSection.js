"use client";

import Link from "next/link";
import { LucideLink, Github } from "lucide-react";
import AnimateSection from "./ui/AnimateSection";

const projects = [
  {
    id: 1,
    title: "Pokemon API Site",
    description:
      "A website that dynamically connects to the Pokemon API to display information about different Pokemon. Built with React and styled using Tailwind CSS.",
    techsUsed: ["Next.js", "Tailwind CSS", "PokeAPI", "Context API"],
    githubLink: "https://github.com/emblaah/chas_pokemon_site",
    liveLink: "https://pokemon-site-nu.vercel.app/",
  },
  {
    id: 2,
    title: "QuizMaster App",
    description:
      "A quiz website where users can add questions, play the game, and view a leaderboard. Built with React and styled using Tailwind CSS.",
    techsUsed: ["React", "Next.js", "Tailwind CSS"],
    githubLink: "https://github.com/emblaah/chas_quiz_site",
    liveLink: "https://chas-quiz-site.vercel.app/",
  },
  {
    id: 3,
    title: "Todo List App",
    description:
      "A simple todo list application built with React and styled using Tailwind CSS. Users can add, edit, and delete tasks.",
    techsUsed: ["React", "Tailwind CSS"],
    githubLink: "https://github.com/emblaah/ws-react-todolist",
    liveLink: "https://ws-react-todolist.vercel.app/",
  },
];

export default function ProjectsSection() {
  return (
    <section className="relative w-full py-10">
      <AnimateSection className="max-w-7xl mx-auto flex flex-col px-[1rem] sm:px-[3rem] md:px-[5rem]">
        <h2 className="text-3xl font-semibold mb-6">Projects</h2>
        <AnimateSection className="flex flex-col gap-6 ">
          {projects.map((project, index) => (
            <AnimateSection
              key={index}
              className="border-l border-secondary pl-4 w-full self-stretch">
              <div className="flex justify-between items-center ">
                <h3 className="text-xl">{project.title}</h3>
                <div className="flex gap-2">
                  <Link
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-secondary-background p-2 rounded-full  hover:text-secondary duration-200 ease-in transition">
                    <LucideLink />
                  </Link>
                  <Link
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className=" hover:text-secondary duration-200 ease-in bg-secondary-background p-2 rounded-full">
                    <Github />
                  </Link>
                </div>
              </div>
              <p className="mt-2">{project.description}</p>
              <div className="flex flex-wrap gap-2 mt-2">
                {project.techsUsed.map((tech, index) => (
                  <div
                    key={index}
                    className="inline-block bg-secondary px-2 py-1 rounded-full text-sm">
                    {tech}
                  </div>
                ))}
              </div>
            </AnimateSection>
          ))}
        </AnimateSection>
      </AnimateSection>
    </section>
  );
}
