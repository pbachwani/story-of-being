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
      "https://script.google.com/macros/s/AKfycbx01ZdIs2xe-Fwf13tRVM1jFw1PnpUs8L5wK0VwBNFTFGaSLgen-prm74lDgOYKZa8/exec";
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
      className="relative w-full min-h-screen h-full md:min-h-dvh px-4 md:px-16 bg-gradient-to-b from-transparent to-black"
    >
      <Toaster />

      <div className="md:py-20 py-10 text-white max-w-[1440px] mx-auto flex flex-col md:gap-16 gap-8">
        {/* HEADER */}
        <div className="flex flex-col gap-2">
          <h1 className="font-abril text-2xl md:text-4xl">Contact</h1>
        </div>

        {/* CONTENT */}
        <div className="grid lg:grid-cols-2 gap-10 items-end ">
          {/* LEFT LINKS */}
          <div className="text-white/80 flex flex-col gap-10">
            <div>
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

            {/* Book a Session */}
            <div className="flex flex-col backdrop-blur-md bg-white/5 p-6 md:p-8 rounded-2xl border border-white/10">
              <h2 className="font-abril text-2xl md:text-3xl">
                Book a Session
              </h2>

              <div className="text-white/70 my-10 space-y-4 text-sm md:text-base leading-relaxed">
                <p>
                  I invite you to explore this transformative journey. Whether
                  you seek clarity for your pet&apos;s behavior, wish to
                  strengthen your bond with houseplants, or desire personal
                  spiritual insight, a telepathic session offers compassionate,
                  personalized connection.
                </p>

                <p>
                  Reach out to schedule your session and unlock the silent
                  stories your companions are eager to share.
                </p>
              </div>

              <a
                href="https://calendly.com/keya-vaswani/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-between w-fit px-2 hover:px-6 py-3 rounded-full bg-none text-white hover:text-black text-sm md:text-base transition-all duration-300 hover:bg-white/90"
              >
                Schedule a Meeting
                <span className="ml-3 transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>
            </div>
          </div>

          {/* Right */}
          <div className="flex flex-col gap-4 max-md:mt-16">
            {/* FORM */}
            <form
              onSubmit={handleSubmit}
              disabled={submitting}
              className="flex flex-col gap-6 backdrop-blur-md bg-white/5 p-6 md:p-8 rounded-2xl border border-white/10"
            >
              <h1 className="font-abril text-2xl md:text-3xl">
                Have a project in mind?
              </h1>
              <p className="text-white/60">
                Drop me some details and we'll connect with you shortly
              </p>
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
                className={`mt-4 bg-none text-white hover:text-black px-2 hover:px-6 py-3 rounded-full w-fit hover:bg-white/90 transition-all ${submitting ? "cursor-not-allowed opacity-70" : ""}`}
              >
                Send Message
                <span className="ml-3 transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
