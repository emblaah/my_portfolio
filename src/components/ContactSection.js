"use client";
import React, { useState } from "react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    //confirm email and message field are not empty
    if (!formData.email || !formData.message) {
      showToast.info("Email and message are required fields");
      return;
    }

    try {
      setIsSending(true);
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.email,
          message: formData.message,
        }),
      });

      // handle success
      if (response.ok) {
        showToast.success("Email Sent Successfully!");
        setFormData({
          email: "",
          message: "",
        });
      } else {
        showToast.error("There was a problem sending email. Pls try again!");
      }
    } catch (error) {
      console.log("Error sending email:", error);
      showToast.error("There was a problem sending email. Pls try again!");
    } finally {
      setIsSending(false);
    }
  };

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
