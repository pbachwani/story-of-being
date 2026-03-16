"use client";
import React from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import FullscreenImage from "@/components/FullscreenImage";
gsap.registerPlugin(ScrollTrigger);

import { motion } from "motion/react";
import Contact from "@/sections/Contact";
import FadingImageHero from "@/components/FadingImageHero";

const telepathySections = [
  {
    title: "Who I Am",
    content: `With over 4 years of dedicated practice as a telepathic communicator, I specialize in bridging the unseen language between humans and their animal and plant companions. Combining intuition, empathy, and an attuned sensitivity to subtle energies, I offer a rare opportunity for meaningful dialogue that transcends ordinary communication.`,
  },
  {
    title: "How It Works",
    content: `Telepathic communication is a natural, non-verbal form of connection — something we all experience daily. Through focused intention and intuitive perception, I receive impressions, emotions, and messages from your pets, plants, or even your inner self. This process offers insight into needs, feelings, and energetic well-being.`,
  },
  {
    title: "Why Connect This Way?",
    content: `We often wonder what our companions are feeling — or how we can care more deeply. Telepathic sessions provide clarity, healing, and guidance by tuning into these subtle dialogues, strengthening bonds and nurturing soulful understanding.`,
  },
];

const testimonials = [
  {
    name: "Arun",
    images: ["/testimonials/arun1.jpeg", "/testimonials/arun2.jpg"],
    paragraphs: [
      ` “I had a pet parrot, Chikki, more than a decade ago. I had tohand him over to a caretaker due to personal reasons. However, in both my mind and my wife&apos;s we really felt guilty and we had no closure. We weren&apos;t sure how he was. He was happy when he was with us, and the lack of information about him kept troubling us through the years. I recently came across Keyas instagram page. I was very sceptical about the telepathy with animals, but I had to try. Keya was empathetic and patiently explained techniques used. With some experience with meditation, energy work etc., I was able to understand most of it.`,
      `I must say it was such an amazing hour with her and my parrot. For some questions at least, I knew the emotions that were coming our way - I felt them, thanks to Keya. Our Chikki was happy and that&apos;s all we needed to hear. We had a great conversation with him back and forth, and Keya addressed all of them with responses from Chikki. I finished the call teary eyed, satisfied, happy, but most of all, got a closure. Thanks Keya.”`,
    ],
  },
  {
    name: "Divya",
    images: ["/testimonials/divya1.jpeg", "/testimonials/divya2.png"],
    paragraphs: [
      ` I got to know Keya about 3 years ago through a friend who lost her cat for a few days - was then found with Keya's help. It was at that moment I got really interested about communicating with pets. It was my first ever experience to get in touch with someone who can communicate intuitively with animals. I have always wanted to get in touch with one, I finally got to do it with Keya. A session with her feels like a therapy - I have had 4 amazing meaningful sessions with her & by the end of it, I can&apos;t help but feel so much lighter and happier.`,
      `She is truly an angel ❤️ I am so glad I got to connect with her as it has also changed my way of thinking / communicating with my pets daily. It sort of opened up some things between my pets and I. I always look forward to have sessions with her as I myself enjoy finding out how my pets are doing and having sort of like a sharing session all together. If you ever have doubts whether or not to reach out, stop and look for Keya. Because that's what I did. Thank you for sharing your positive energy always 💖`,
    ],
  },
  {
    name: "Gazal",
    images: ["/testimonials/gazal1.jpeg", "/testimonials/gazal2.jpeg"],
    paragraphs: [
      ` Connecting with my pet through Keya was truly a revelation. I never imagined how deeply an animal soul could communicate until Mishky helped bridge that connection. Her energy, empathy, and clarity were truly magical.`,
      `Thank you, Keya, for helping me understand my little one's world so soulfully. Grateful for this beautiful experience! Highly recommend her to anyone who wants to understand their pet on a deeper, spiritual level.`,
    ],
  },
  {
    name: "Sneha",
    images: ["/testimonials/sneha1.JPG", "/testimonials/sneha2.jpg"],
    paragraphs: [
      ` Your session was honestly such a blessing for both me and Priya. We walked away feeling so light, like a weight we'd been carrying since losing Goli had finally eased a little. It was this bittersweet mix — missing him deeply, but also smiling through tears knowing he&apos;s happy where he is. You somehow made space for both our grief and our laughter, and that really helped us breathe again. We just wish we had reached out sooner, but we&apos;re so grateful we finally did.`,
      `Also, you were so right about Barfi, he's literally a cat in a dogs body. 😂 Btw, thanks to your guidance we have also started taking baby steps to communicate with Goli and Barfi. It has been such a new experience for us. So glad to have stumbled upon one of your reels. 💕`,
    ],
  },
];

const Telepathy = () => {
  return (
    <main className="w-full min-h-screen bg-background">
      {/* top */}
      <div className="flex items-center justify-center relative h-[70vh]">
        <FadingImageHero
          images={[
            "/telepathy/1.jpg",
            "/telepathy/2.jpg",
            "/telepathy/3.jpg",
            "/telepathy/4.jpg",
            "/telepathy/5.jpg",
            "/telepathy/6.jpg",
            "/telepathy/7.jpg",
            "/telepathy/8.jpg",
            "/telepathy/9.jpg",
            "/telepathy/10.jpg",
            "/telepathy/11.jpg",
            "/telepathy/12.jpg",
            "/telepathy/13.jpg",
          ]}
          interval={3000}
          className="brightness-60"
        />
        <div className="absolute top-1/2 -translate-y-1/2 flex flex-col justify-center items-center gap-2 z-10 text-white">
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: 0.08, // 👈 stagger delay
              ease: "easeOut",
            }}
            className="font-abril text-3xl mt-10 text-center"
          >
            Telepathic Communication
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: 0.1, // 👈 stagger delay
              ease: "easeOut",
            }}
            className="font-montserrat text-lg"
          >
            Connecting Hearts Beyond Words
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: 0.12, // 👈 stagger delay
              ease: "easeOut",
            }}
            className="font-montserrat text-white font-base md:w-4/5 px-8 max-w-2xl text-sm text-center backdrop-blur-[1.5px] rounded-full mt-4"
          >
            Welcome to the Telepathic Communication experience - a unique path
            to deepen your connection with your beloved pets, plant companions,
            and the natural world around you.
          </motion.p>
        </div>
      </div>

      <section className="w-full px-4 md:px-16 py-24 bg-background">
        <div className="grid lg:grid-cols-3 max-w-7xl mx-auto">
          {telepathySections.map((section, i) => (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: i * 0.1, // 👈 stagger delay
                ease: "easeOut",
              }}
              key={i}
              className="flex flex-col justify-start px-4 py-4 gap-4"
            >
              {/* Heading */}
              <h3 className="text-xl font-abril font-bold">{section.title}</h3>

              {/* Content */}
              <p className="leading-relaxed text-base md:text-base h-full">
                {section.content}
              </p>
            </motion.div>
          ))}
        </div>

        {/* testimonials section */}
        <div className="max-w-6xl mx-auto flex flex-col mt-20">
          {/* Section Heading */}
          <div className="text-center max-w-2xl mx-auto">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.08, // 👈 stagger delay
                ease: "easeOut",
              }}
              className="uppercase tracking-widest text-sm mb-4 opacity-60"
            >
              Testimonials
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.1, // 👈 stagger delay
                ease: "easeOut",
              }}
              className="text-3xl md:text-5xl font-abril font-bold"
            >
              Words From Beautiful Souls
            </motion.h2>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-2 gap-10 mt-10">
            {testimonials.map((t, i) => (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.08, // 👈 stagger delay
                  ease: "easeOut",
                }}
                key={i}
                className="flex flex-col gap-8 p-8 md:p-10 bg-[#98c867]/20 rounded-2xl shadow-sm"
              >
                {/* Images */}
                <div className="flex gap-2">
                  <img
                    src={t.images[0]}
                    alt={t.name}
                    className="w-2/3 h-64 object-cover rounded-md"
                  />
                  <img
                    src={t.images[1]}
                    alt={t.name}
                    className="w-1/3 h-64 object-cover rounded-md"
                  />
                </div>

                {/* Name */}
                <h3 className="text-xl font-montserrat font-bold">{t.name}</h3>

                {/* Content */}
                <div className="space-y-4 font-montserrat leading-relaxed text-sm md:text-base">
                  {t.paragraphs.map((p, idx) => (
                    <p key={idx}>{p}</p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <FullscreenImage />
    </main>
  );
};

export default Telepathy;

{
  /* <div className="grid lg:grid-cols-3 gap-16">

            <div className="flex flex-col gap-40 bg-blue-200">
              <h3 className="text-3xl md:text-5xl font-abril font-bold">
                Who I Am
              </h3>
              <p className="leading-relaxed">
                With over 4 years of dedicated practice as a telepathic
                communicator, I specialize in bridging the unseen language
                between humans and their animal and plant companions. Combining
                intuition, empathy, and an attuned sensitivity to subtle
                energies, I offer a rare opportunity for meaningful dialogue
                that transcends ordinary communication.
              </p>
            </div>


            <div className="space-y-6">
              <h3 className="text-3xl md:text-5xl font-abril font-medium">
                How It Works
              </h3>
              <p className="leading-relaxed">
                Telepathic communication is a natural, non-verbal form of
                connection — something we all experience daily. Through focused
                intention and intuitive perception, I receive impressions,
                emotions, and messages from your pets, plants, or even your
                inner self. This process offers insight into needs, feelings,
                and energetic well-being.
              </p>
            </div>


            <div className="flex flex-col gap-40 bg-blue-200 justify-between">
              <h3 className="text-3xl md:text-5xl font-abril font-medium">
                Why Connect This Way?
              </h3>
              <p className="leading-relaxed">
                We often wonder what our companions are feeling — or how we can
                care more deeply. Telepathic sessions provide clarity, healing,
                and guidance by tuning into these subtle dialogues,
                strengthening bonds and nurturing soulful understanding.
              </p>
            </div>
          </div> */
}
