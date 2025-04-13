import Link from "next/link";

const projects = [
  {
    id: 1,
    title: "Todo List App",
    description: "A modern single-page portfolio built with Next.js.",
    techsUsed: ["React", "Tailwind CSS"],
    githubLink: "https://github.com/emblaah/ws-react-todolist",
  },
  {
    id: 2,
    title: "Pokemon API Site",
    description:
      "A website that dynamically connects to the Pokemon API to display information about different Pokemon. Built with React and styled using Tailwind CSS.",
    techsUsed: ["React", "Next.js", "Tailwind CSS"],
    githubLink: "https://github.com/emblaah/chas_pokemon_site",
  },
  {
    id: 3,
    title: "QuizMaster App",
    description:
      "A quiz website where users can add questions, play the game, and view a leaderboard. Built with React and styled using Tailwind CSS.",
    techsUsed: ["React", "Next.js", "Tailwind CSS"],
    githubLink: "https://github.com/emblaah/chas_quiz_site",
  },
  {
    id: 4,
    title: "Blog Platform",
    description: "A blogging platform with user authentication and comments.",
    techsUsed: ["React", "Next.js", "Tailwind CSS"],
    githubLink: "https://example.com",
  },
];

export default function ProjectsSection() {
  return (
    <section className="max-w-4xl mx-auto my-20 px-4">
      <h2 className="text-3xl font-semibold mb-6">Projects</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, index) => (
          <Link
            key={index}
            href={project.githubLink}
            target="_blank"
            className="border p-4 rounded-lg shadow hover:shadow-md transition">
            <h3 className="text-xl font-bold">{project.title}</h3>
            <p className="text-primary mt-2">{project.description}</p>
            <div className="mt-4">
              {project.techsUsed.map((tech, index) => (
                <span
                  key={index}
                  className="inline-block bg-secondary text-primary-foreground px-2 py-1 rounded-full text-sm mr-2">
                  {tech}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
