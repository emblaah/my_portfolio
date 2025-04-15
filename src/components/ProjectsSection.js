"use client";

import Link from "next/link";

const projects = [
  {
    id: 1,
    title: "Todo List App",
    description: "A modern single-page portfolio built with Next.js.",
    techsUsed: ["React", "Tailwind CSS"],
    githubLink: "https://github.com/emblaah/ws-react-todolist",
    liveLink: "https://example.com",
  },
  {
    id: 2,
    title: "Pokemon API Site",
    description:
      "A website that dynamically connects to the Pokemon API to display information about different Pokemon. Built with React and styled using Tailwind CSS.",
    techsUsed: ["React", "Next.js", "Tailwind CSS"],
    githubLink: "https://github.com/emblaah/chas_pokemon_site",
    liveLink: "https://pokemon-site-nu.vercel.app/",
  },
  {
    id: 3,
    title: "QuizMaster App",
    description:
      "A quiz website where users can add questions, play the game, and view a leaderboard. Built with React and styled using Tailwind CSS.",
    techsUsed: ["React", "Next.js", "Tailwind CSS"],
    githubLink: "https://github.com/emblaah/chas_quiz_site",
    liveLink: "https://chas-quiz-site.vercel.app/",
  },
  // {
  //   id: 4,
  //   title: "Blog Platform",
  //   description: "A blogging platform with user authentication and comments.",
  //   techsUsed: ["React", "Next.js", "Tailwind CSS"],
  //   githubLink: "https://example.com",
  //   liveLink: "https://example.com",
  // },
];

export default function ProjectsSection() {
  return (
    <section className="max-w-4xl mt-10 px-4">
      <h2 className="text-3xl font-semibold mb-6">Projects</h2>
      <div className="flex flex-col gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            target="_blank"
            className="border p-4 rounded-lg shadow hover:shadow-md transition">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-bold">{project.title}</h3>
              <div className="flex mt-4 gap-2 ">
                <Link
                  href={project.liveLink}
                  target=""
                  className="text-blue-500 hover:underline bg-secondary p-2 rounded-full">
                  Live
                </Link>
                <Link
                  href={project.githubLink}
                  target="_blank"
                  className="text-blue-500 hover:underline mr-4 bg-secondary p-2 rounded-full">
                  GitHub
                </Link>
              </div>
            </div>
            <p className="mt-2">{project.description}</p>
            <div className="flex justify-between items-center">
              <div className="mt-4">
                {project.techsUsed.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-secondary inline-block px-2 py-1 rounded-full text-sm mr-2">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
