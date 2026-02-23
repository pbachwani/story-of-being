"use client";
import React, { useState } from "react";
import { toast, Toaster } from "sonner";

const Contact = () => {
  const [submitting, setSubmitting] = useState(false);
  const handleCopy = async (textToCopy) => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      toast.success("Copied to clipboard!");
    } catch (err) {
      console.error("Failed to copy text: ", err);
      toast.error("Failed to copy text.");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    const url =
      "https://script.google.com/macros/s/AKfycby8Fit0wD3YKZlQJUx7AjnD01jkecJAKcYsebnd8Y3G0VqBVzYZJnL5dUy5EMQrDVRr/exec";
    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `Name=${e.target.name.value}&Email=${e.target.email.value}&Message=${e.target.message.value}`,
    })
      .then((res) => res.text())
      .then((data) => {
        toast.success(data);
      })
      .then(() => e.target.reset())
      .catch((error) => console.log(error))
      .finally(() => setSubmitting(false));
  };

  return (
    <section
      id="contact"
      className="relative w-full min-h-screen md:min-h-dvh px-4 md:px-16 bg-gradient-to-b from-transparent to-black"
    >
      <Toaster />

      <div className="md:py-20 py-10 text-white max-w-[1440px] mx-auto flex flex-col md:gap-16 gap-8">
        {/* HEADER */}
        <div className="flex flex-col gap-2">
          <h1 className="font-abril text-4xl md:text-6xl">Contact</h1>
        </div>

        {/* CONTENT */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* LEFT LINKS */}
          <div className="max-w-md text-white/80 flex flex-col">
            {[
              {
                name: "Instagram",
                sub: "@keya.vaswani",
                link: "https://www.instagram.com/keya.vaswani",
              },
              {
                name: "Story of Being",
                sub: "@story.of.being",
                link: "https://www.instagram.com/story.of.being",
              },
              {
                name: "LinkedIn",
                sub: "View profile",
                link: "https://www.linkedin.com/in/keya-vaswani-9b86a938",
              },
            ].map((item, i) => (
              <a
                key={i}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="relative group flex items-center justify-between py-3"
              >
                {/* TEXT */}
                <span className="text-lg font-raleway">{item.name}</span>

                <span className="text-sm opacity-60 group-hover:opacity-100 transition">
                  {item.sub} →
                </span>

                {/* BASE LINE */}
                <span className="absolute bottom-0 left-0 h-[1px] w-full bg-white/20 overflow-hidden">
                  <span className="block h-full w-0 bg-white transition-all duration-300 ease-out group-hover:w-full" />
                </span>
              </a>
            ))}
          </div>

          {/* FORM */}
          <form
            onSubmit={handleSubmit}
            disabled={submitting}
            className="flex flex-col gap-6 backdrop-blur-md bg-white/5 p-6 md:p-8 rounded-2xl border border-white/10"
          >
            {/* NAME */}
            <div className="flex flex-col gap-2">
              <label className="text-sm text-white/60">Name</label>
              <input
                name="name"
                type="text"
                placeholder="Your name"
                className="bg-transparent border-b border-white/20 focus:border-white outline-none py-2 placeholder:text-white/40 transition-all"
              />
            </div>

            {/* EMAIL */}
            <div className="flex flex-col gap-2">
              <label className="text-sm text-white/60">Email</label>
              <input
                name="email"
                type="email"
                placeholder="you@email.com"
                className="bg-transparent border-b border-white/20 focus:border-white outline-none py-2 placeholder:text-white/40 transition-all"
              />
            </div>

            {/* MESSAGE */}
            <div className="flex flex-col gap-2">
              <label className="text-sm text-white/60">Message</label>
              <textarea
                name="message"
                rows="4"
                placeholder="Tell me about your project..."
                className="bg-transparent border-b border-white/20 focus:border-white outline-none py-2 placeholder:text-white/40 transition-all resize-none"
              />
            </div>

            {/* BUTTON */}
            <button
              disabled={submitting}
              type="submit"
              className={`mt-4 bg-white text-black px-6 py-3 rounded-full w-fit hover:bg-white/90 transition-all ${submitting ? "cursor-not-allowed opacity-70" : ""}`}
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
