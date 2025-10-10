import Awards from "@/sections/Awards";
import Brands from "@/sections/Brands";
import Contact from "@/sections/Contact";
import Featured from "@/sections/Featured";
import Hero from "@/sections/Hero";

export default function Home() {
  return (
    <main>
      <div className="">
        <Hero />
      </div>
      <div className="z-10">
        <Awards />
        <Featured />
        <Brands />
        <Contact />
      </div>
    </main>
  );
}
