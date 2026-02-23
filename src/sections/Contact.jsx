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
      "https://script.google.com/macros/s/AKfycbwG3mBm3-iYw8opdJ1fC2K1ClF17O-huKAZAc6bIHgOWFvzIi7TpmMtIl_ASRbmhmoA/exec";
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
      className="relative w-full min-h-dvh px-4 md:px-16 bg-gradient-to-b from-transparent to-black"
    >
      <Toaster />

      <div className="py-20 text-white max-w-[1440px] mx-auto flex flex-col gap-16">
        {/* HEADER */}
        <div className="flex flex-col gap-2">
          <p className="text-sm text-white/70">Give me a toast</p>
          <h1 className="font-abril text-4xl md:text-6xl">Contact</h1>
        </div>

        {/* CONTENT */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* LEFT TEXT */}
          <div className="max-w-md text-white/80 leading-relaxed">
            <p>
              Whether it’s a film, collaboration, or just a conversation — feel
              free to reach out.
            </p>
            <p className="mt-4">
              I’m always open to meaningful stories and interesting ideas.
            </p>
          </div>

          {/* FORM */}
          <form className="flex flex-col gap-6 backdrop-blur-md bg-white/5 p-6 md:p-8 rounded-2xl border border-white/10">
            {/* NAME */}
            <div className="flex flex-col gap-2">
              <label className="text-sm text-white/60">Name</label>
              <input
                type="text"
                placeholder="Your name"
                className="bg-transparent border-b border-white/20 focus:border-white outline-none py-2 placeholder:text-white/40 transition-all"
              />
            </div>

            {/* EMAIL */}
            <div className="flex flex-col gap-2">
              <label className="text-sm text-white/60">Email</label>
              <input
                type="email"
                placeholder="you@email.com"
                className="bg-transparent border-b border-white/20 focus:border-white outline-none py-2 placeholder:text-white/40 transition-all"
              />
            </div>

            {/* MESSAGE */}
            <div className="flex flex-col gap-2">
              <label className="text-sm text-white/60">Message</label>
              <textarea
                rows="4"
                placeholder="Tell me about your project..."
                className="bg-transparent border-b border-white/20 focus:border-white outline-none py-2 placeholder:text-white/40 transition-all resize-none"
              />
            </div>

            {/* BUTTON */}
            <button
              type="submit"
              className="mt-4 bg-white text-black px-6 py-3 rounded-full w-fit hover:bg-white/90 transition-all"
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
