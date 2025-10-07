import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 z-50 w-screen h-16 backdrop-blur-md bg-black/20 flex justify-between items-center px-10 md:px-16 text-white text-lg font-semibold">
      <Link href={"/"}>
        <div className="flex justify-center items-center gap-4">
          <img
            src="/logo-green-nobg.png"
            alt=""
            className="object-contain w-10 h-10"
          />
          <p className="font-abril opacity-80">Story of Being</p>
        </div>
      </Link>

      <div className="gap-8 hidden md:flex">
        <Link href={"/about"}>About</Link>
        <Link href={"/films"}>Films</Link>
        <Link href={"/telepathy"}>Telepathy</Link>
        <Link href={"/media"}>Media</Link>
        <Link href={"/contact"}>Contact</Link>
      </div>
      <div className="block md:hidden">
        <p>...</p>
      </div>
    </nav>
  );
};

export default Navbar;
