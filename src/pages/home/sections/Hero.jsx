import React from "react";
import CocoaHero from "../../../../assets/Cocoa1.jpg"; 
import { HashLink } from "react-router-hash-link";

const Hero = () => {
  return (
    <section 
      className="w-full h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${CocoaHero})` }}
    >
      <div className="w-full h-full flex flex-col items-center justify-center bg-[#191D34]/50 text-center text-white pt-[5.5rem]">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          Revolutionizing Cocoa Processing
        </h1>
        <p className="text-lg md:text-xl max-w-2xl font-semibold">
          Say goodbye to manual labor! Our cutting-edge Cocoa Pod Breaking Machine makes processing effortless, saving you time and effort.
        </p>
        <HashLink smooth to='/#products' 
          href="#contact"
          className="mt-8 bg-[#FE5C24] hover:bg-[#191D34] text-white px-6 py-3 rounded-full text-lg font-semibold transition duration-500"
        >
          Get Yours Today
        </HashLink>
      </div>
    </section>
  );
};

export default Hero;
