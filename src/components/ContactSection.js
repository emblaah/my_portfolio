"use client";

import React, { useState } from "react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    if (response.ok) {
      setStatus("Message sent!");
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } else {
      setStatus("Failed to send message.");
    }
  };

  return (
    <section className="relative w-screen px-4 py-10">
      <div className="w-full mx-auto px-[1rem] sm:px-[5rem]">
        <h2 className="text-3xl font-semibold mb-4">Contact</h2>
        <p className="mb-4">
          Interested in working together or have a question? Drop me a message:
        </p>
        <form>
          <input
            name="name"
            type="text"
            placeholder="Your Name"
            onChange={handleChange}
            value={formData.name}
            required
            className="w-full p-2 border rounded"
          />
          <input
            name="email"
            type="email"
            placeholder="Your Email"
            onChange={handleChange}
            value={formData.email}
            required
            className="w-full p-2 border rounded"
          />
          <input
            name="message"
            placeholder="Your Message"
            onChange={handleChange}
            value={formData.message}
            required
            className="w-full p-2 border rounded"
            rows={5}
          />
          <button type="submit" className="bg-secondary p-2 rounded-xl">
            Send Email
          </button>
          <p>{status}</p>
        </form>
        <a
          href="mailto:emblaandersson@yahoo.se"
          className="inline-block mt-2 underline">
          emblaandersson@yahoo.se
        </a>
      </div>
      <form
        onSubmit={handleSubmit}
        className="border-none p-0"
        data-aos="fade-down">
        <input
          name="email"
          type="email"
          placeholder="your-email@mail.com"
          value={formData.email}
          onChange={handleChange}
          className="text-background w-full p-2 mb-4 border border-gray-300 rounded"
          required
        />
        <textarea
          name="message"
          cols={30}
          rows={5}
          placeholder="...type your message"
          value={formData.message}
          onChange={handleChange}
          className="text-background w-full p-2 mb-4 border border-gray-300 rounded"
          required
        />
        <button
          type="submit"
          className="w-full bg-primary hover:shadow-lg hover:opacity-90 text-background font-bold py-2 px-4 rounded">
          {isSending && <ClipLoader color="#000" size={10} />} &nbsp; Send
          Message
        </button>
      </form>
    </section>
  );
}

// ADD LinkedIn, GitHub, and CV links here with icons
