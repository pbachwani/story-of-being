"use client";
import React from "react";
import { motion } from "motion/react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

const telepathy = () => {
  return (
    <main className="w-full min-h-screen bg-[#FFFAED]">
      {/* top */}
      <div className="h-[70vh] z-30 flex flex-col justify-center items-center relative text-white">
        <img
          src="/telepathy/1.jpg"
          alt="cover image"
          className="absolute inset-0 object-cover w-full h-full -z-10"
        />
        <h1 className="font-boska font-black text-3xl mt-10 text-center">
          Telepathic Communication
        </h1>
        <p className="font-boska font-bold text-xl">
          Connecting Hearts Beyond Words
        </p>
        <p className="font-montserrat text-white font-semibold md:w-4/5 px-8 max-w-2xl text-sm text-center backdrop-blur-[1.5px] rounded-full mt-10">
          Welcome to the Telepathic Communication experience—a unique path to
          deepen your connection with your beloved pets, plant companions, and
          the natural world around you.
        </p>
      </div>

      <section className="h-[40vh] relative">
        <div className="text-5xl md:text-9xl absolute left-1/2  -bottom-4 md:-bottom-20 lg:-bottom-16 z-20 text-white font-black mix-blend-difference flex flex-col">
          {/* <h1 className="w-full">Who I Am</h1> */}
        </div>
      </section>

      <section className="h-full relative overflow-hidden">
        <motion.img
          initial={{ scale: 0.8, borderRadius: "100px" }}
          whileInView={{ scale: 1, borderRadius: "0px" }}
          transition={{ duration: 1, ease: "easeOut" }}
          src="/telepathy/12.jpg"
          alt="double height image"
          className="absolute w-full h-full inset-0 object-cover z-0"
        />
        <div className="relative z-10 w-full h-full flex flex-col justify-end py-12 items-center">
          {/* row 1 */}
          <div className="flex">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="flex flex-col gap-4 font-montserrat mt-20 md:w-1/2 w-full text-black backdrop-blur-md h-fit rounded-xl p-4 mx-4 md:p-10 text-lg font-medium"
            >
              <h1 className="text-3xl md:text-7xl text-white font-black mix-blend-difference font-boska">
                Who Am I
              </h1>
              <p>
                With over 4 years of dedicated practice as a telepathic
                communicator, I specialize in bridging the unseen language
                between humans and their animal and plant companions.
              </p>

              <p>
                Combining intuition, empathy, and an attuned sensitivity to
                subtle energies, I offer a rare opportunity for meaningful
                dialogue that transcends ordinary communication.
              </p>
            </motion.div>
          </div>
          {/* row 2 */}
          <div className="flex justify-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="flex flex-col gap-4 font-montserrat mt-20 md:w-1/2 w-full text-black backdrop-blur-md h-fit rounded-xl p-4 mx-4 md:p-10 text-lg font-medium"
            >
              <h1 className="text-3xl md:text-7xl text-white font-black mix-blend-difference">
                How It Works
              </h1>
              <p>
                Telepathic communication is a natural, non-verbal form of
                connection. Something that we all experience everyday. Through
                focused intention and intuitive perception, I receive
                impressions, feelings, and messages from your pets, plants, or
                even your own inner soul.
              </p>

              <p>
                This process allows you to gain insights into their needs,
                emotions, and well-being, fostering greater understanding and
                harmony.
              </p>
            </motion.div>
          </div>
          {/* row 3 */}
          <div className="flex justify-end">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="flex flex-col gap-4 font-montserrat mt-20 md:w-1/2 w-full text-black backdrop-blur-md h-fit rounded-xl p-4 mx-4 md:p-10 text-lg font-medium"
            >
              <h1 className="text-3xl md:text-7xl text-white font-black mix-blend-difference">
                Why Connect This Way?
              </h1>
              <p>
                Many of us experience moments of wondering—what is my pet
                feeling? How can I care more deeply for my plants? Or how can I
                nurture my own inner self through these connections?
              </p>

              <p>
                Telepathic sessions provide clear answers, healing, and guidance
                by tuning into these soulful dialogues.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* bottom cards */}
      <section className="mt-20 w-full md:w-[90vw] mx-auto relative gap-10 flex flex-col">
        {/* card 1 */}
        <div className="h-full md:h-[70vh] p-0 border-black/20 flex flex-col md:flex-row items-center gap-0 md:gap-10 sticky top-4 md:top-[15%] bg-[#FFFAED]">
          <div className="flex flex-col justify-start gap-10 md:gap-20 p-6 md:py-10 w-full md:w-3/5">
            <h1 className="font-boska font-[900] text-xl md:text-4xl">
              Arun, Chikki
            </h1>
            {/* content */}
            <div className="flex flex-col gap-4 font-montserrat max-md:text-[10px] ">
              <p>
                “I had a pet parrot, Chikki, more than a decade ago. I had to
                hand him over to a caretaker due to personal reasons. However,
                in both my mind and my wife&apos;s we really felt guilty and we
                had no closure. We weren&apos;t sure how he was. He was happy
                when he was with us, and the lack of information about him kept
                troubling us through the years. I recently came across Keyas
                instagram page. I was very sceptical about the telepathy with
                animals, but I had to try. Keya was empathetic and patiently
                explained techniques used. With some experience with meditation,
                energy work etc., I was able to understand most of it.
              </p>
              <p>
                I must say it was such an amazing hour with her and my parrot.
                For some questions at least, I knew the emotions that were
                coming our way - I felt them, thanks to Keya. Our Chikki was
                happy and that&apos;s all we needed to hear. We had a great
                conversation with him back and forth, and Keya addressed all of
                them with responses from Chikki. I finished the call teary eyed,
                satisfied, happy, but most of all, got a closure. Thanks Keya.”
              </p>
            </div>
          </div>
          <div className="w-full md:w-2/5 relative">
            <img
              src="/testimonials/arun1.jpeg"
              alt="arun 1"
              className="h-fit object-cover w-full rounded-lg max-h-80"
            />
            <img
              src="/testimonials/arun2.jpg"
              alt="arun 2"
              className="h-fit object-cover md:w-60 w-40 max-h-40 rounded-lg absolute inset-0 right-0"
            />
          </div>
        </div>
        {/* card 2 */}
        <div className="h-screen md:h-[70vh] p-0 border-black/20 flex flex-col md:flex-row items-center gap-0 md:gap-10 sticky top-4 md:top-[15%] bg-[#FFFAED]">
          <div className="flex flex-col justify-start gap-10 md:gap-20 p-6 md:py-10 w-full md:w-3/5">
            <h1 className="font-boska font-[900] text-xl md:text-4xl">Divya</h1>
            {/* content */}
            <div className="flex flex-col gap-4 font-montserrat max-md:text-[10px]">
              <p>
                I got to know Keya about 3 years ago through a friend who lost
                her cat for a few days - was then found with Keya&apos;s help.
                It was at that moment I got really interested about
                communicating with pets. It was my first ever experience to get
                in touch with someone who can communicate intuitively with
                animals. I have always wanted to get in touch with one, I
                finally got to do it with Keya. A session with her feels like a
                therapy - I have had 4 amazing meaningful sessions with her & by
                the end of it, I can&apos;t help but feel so much lighter and
                happier.
              </p>
              <p>
                She is truly an angel ❤️ I am so glad I got to connect with her
                as it has also changed my way of thinking / communicating with
                my pets daily. It sort of opened up some things between my pets
                and I. I always look forward to have sessions with her as I
                myself enjoy finding out how my pets are doing and having sort
                of like a sharing session all together. If you ever have doubts
                whether or not to reach out, stop and look for Keya. Because
                that's what I did. Thank you for sharing your positive energy
                always 💖
              </p>
            </div>
          </div>
          <div className="w-full md:w-2/5 relative">
            <img
              src="/testimonials/divya1.jpeg"
              alt="arun 1"
              className="h-fit object-cover w-full rounded-lg max-h-80"
            />
            <img
              src="/testimonials/divya2.png"
              alt="arun 2"
              className="h-fit object-cover w-20 md:w-40 rounded-lg absolute inset-0 right-0"
            />
          </div>
        </div>
        {/* card 3 */}
        <div className="h-screen md:h-[70vh] p-0 border-black/20 flex flex-col md:flex-row items-center gap-0 md:gap-10 sticky top-0 md:top-[15%] bg-[#FFFAED]">
          <div className="flex flex-col justify-start gap-10 md:gap-20  p-6 md:py-10 w-full md:w-3/5">
            <h1 className="font-boska font-[900] text-xl md:text-4xl">Gazal</h1>
            {/* content */}
            <div className="flex flex-col gap-4 font-montserrat max-md:text-[10px]">
              <p>
                Connecting with my pet through Keya was truly a revelation. I
                never imagined how deeply an animal soul could communicate until
                Mishky helped bridge that connection. Her energy, empathy, and
                clarity were truly magical.
              </p>
              <p>
                Thank you,Keya, for helping me understand my little one&apos;s
                world so soulfully. Grateful for this beautiful experience!
                Highly recommend her to anyone who wants to understand their pet
                on a deeper, spiritual level.
              </p>
            </div>
          </div>
          <div className="w-full md:w-2/5 relative">
            <img
              src="/testimonials/gazal1.jpeg"
              alt="arun 1"
              className="h-fit object-cover w-full rounded-lg max-h-80"
            />
            <img
              src="/testimonials/gazal2.jpeg"
              alt="arun 2"
              className="h-fit object-cover w-40 rounded-lg absolute right-0 bottom-0"
            />
          </div>
        </div>

        {/* card 4 */}
        <div className="h-screen md:h-[70vh] p-0 border-black/20 flex flex-col md:flex-row items-center gap-0 md:gap-10 sticky top-0 md:top-[15%] bg-[#FFFAED]">
          <div className="flex flex-col justify-start gap-10 md:gap-20  p-6 md:py-10 w-full md:w-3/5">
            <h1 className="font-boska font-[900] text-xl md:text-4xl">Sneha</h1>
            {/* content */}
            <div className="flex flex-col gap-4 font-montserrat max-md:text-[10px]">
              <p>
                Your session was honestly such a blessing for both me and Priya.
                We walked away feeling so light, like a weight we&apos;d been
                carrying since losing Goli had finally eased a little. It was
                this bittersweet mix — missing him deeply, but also smiling
                through tears knowing he&apos;s happy where he is. You somehow
                made space for both our grief and our laughter, and that really
                helped us breathe again. We just wish we had reached out sooner,
                but we&apos;re so grateful we finally did.
              </p>
              <p>
                Also, you were so right about Barfi, he's literally a cat in a
                dogs body. 😂 Btw, thanks to your guidance we have also started
                taking baby steps to communicate with Goli and Barfi. It has
                been such a new experience for us. So glad to have stumbled upon
                one of your reels. 💕
              </p>
            </div>
          </div>
          <div className="w-full md:w-2/5 relative overflow-hidden">
            <img
              src="/testimonials/sneha1.JPG"
              alt="arun 1"
              className="h-fit object-cover w-full rounded-lg max-h-80"
            />
            <img
              src="/testimonials/sneha2.jpg"
              alt="arun 2"
              className="h-fit object-cover w-52 rounded-lg absolute inset-0 right-0"
            />
          </div>
        </div>
      </section>

      {/* book a calendy call section */}
      {/* <div
        // transition={{star}}
        className="h-screen z-40 py-12 mt-10"
        id="clip"
      >
        Book a Session
      </div> */}
    </main>
  );
};

export default telepathy;
