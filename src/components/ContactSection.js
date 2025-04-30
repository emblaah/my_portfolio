"use client";

export default function ContactSection() {
  return (
    <section className="relative w-screen px-4 py-10">
      <div className="w-full mx-auto px-[1rem] sm:px-[5rem]">
        <h2 className="text-3xl font-semibold mb-4">Contact</h2>
        <p className="mb-4">
          Interested in working together or have a question? Drop me a message:
        </p>
        <a
          href="mailto:emblaandersson@yahoo.se"
          className="inline-block mt-2 underline">
          emblaandersson@yahoo.se
        </a>
      </div>
    </section>
  );
}

// ADD LinkedIn, GitHub, and CV links here with icons
