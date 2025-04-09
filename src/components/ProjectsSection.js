const projects = [
  {
    title: "My Portfolio",
    description: "A modern single-page portfolio built with Next.js.",
    link: "https://example.com",
  },
  {
    title: "Weather App",
    description: "React app that fetches real-time weather data.",
    link: "https://example.com",
  },
]

export default function ProjectsSection() {
  return (
    <section className="max-w-4xl mx-auto my-20 px-4">
      <h2 className="text-3xl font-semibold mb-6">Projects</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, index) => (
          <a key={index} href={project.link} target="_blank" className="border p-4 rounded-lg shadow hover:shadow-md transition">
            <h3 className="text-xl font-bold">{project.title}</h3>
            <p className="text-gray-600 mt-2">{project.description}</p>
          </a>
        ))}
      </div>
    </section>
  )
}
