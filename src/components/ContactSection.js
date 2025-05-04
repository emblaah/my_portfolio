"use client";

import React, { useState } from "react";
import AnimateSection from "./ui/AnimateSection";

export default function ContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submit, setSubmit] = useState(false);
  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmit(true);
    setStatus(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });
      console.log("response", response);

      const data = await response.json();
      console.log("data", data);

      console.log("response.ok", response.ok);
      if (response.ok) {
        setStatus({ type: "success", message: "Message sent successfully!" });
        console.log("status", status);
        // Reset form fields
        setName("");
        setEmail("");
        setMessage("");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setStatus({ type: "error", message: "Failed to send message." });
    } finally {
      setSubmit(false);
    }
  };

  return (
    <section id="contact" className="relative w-screen px-4 py-10">
      <AnimateSection className="w-full mx-auto px-[1rem] sm:px-[5rem]">
        <h2 className="text-3xl font-semibold mb-4">Contact Me!</h2>
        <p className="mb-4">
          Interested in working together or have a question? Drop me a message:
        </p>
        <div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                name="name"
                type="text"
                placeholder="Your Name"
                onChange={(e) => setName(e.target.value)}
                value={name}
                required
                className="w-full px-4 py-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-secondary"
              />
            </div>
            <div>
              <input
                name="email"
                type="email"
                placeholder="Your Email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                required
                className="w-full px-4 py-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-secondary"
              />
            </div>
            <div>
              <textarea
                name="message"
                placeholder="Your Message"
                onChange={(e) => setMessage(e.target.value)}
                value={message}
                required
                className="w-full px-4 py-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-secondary"
                rows="5"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-secondary py-2 px-6 rounded-xl"
              disabled={submit}>
              {submit ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </AnimateSection>
    </section>
  );
}

