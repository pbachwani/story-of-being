import Awards from "@/sections/Awards";
import Brands from "@/sections/Brands";
import Contact from "@/sections/Contact";
import Featured from "@/sections/Featured";
import Hero from "@/sections/Hero";

export default function Home() {
  return (
    <main>
      <div className="sticky top-0 h-screen">
        <Hero />
      </div>
      <div className="relative z-10 bg-white">
        <Awards />
        <Featured />
        <Brands />
        <Contact />
      </div>
    </main>
  );
}
