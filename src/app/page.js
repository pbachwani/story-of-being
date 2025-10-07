import Awards from "@/sections/Awards";
import Brands from "@/sections/Brands";
import Featured from "@/sections/Featured";
import Hero from "@/sections/Hero";

export default function Home() {
  return (
    <main>
      <Hero />
      <Awards />
      <Featured />
      <Brands />
    </main>
  );
}
