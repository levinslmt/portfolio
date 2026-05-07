import React from "react";
import heroImage from "../assets/hero-profile.png";

const Hero = () => {
  return (
    <section id="Hero" className="min-h-[calc(100svh-80px)] scroll-mt-24 flex items-center">
      <div className="max-w-6xl mx-auto w-full flex flex-col md:flex-row items-center">
        {/* hero text */}
        <div className="flex-1 text-left text-2xl">
          <p className="font-mono text-xl">FULL-STACK DEVELOPER</p>
          <h1 className="text-5xl font-semibold mt-3">
            Hi, I'm <span>Levin</span>,
            <br />I build clean, performant and scalable <span className="text-mist-600">web apps</span>
          </h1>
          <p className="mt-4 font-mono">
            Passionate about turning complex problems <br />
            into simple, intuitive and engaging solutions.
          </p>
          <div className="flex gap-4 mt-6 text-sm">
            <button className="px-5 py-3 bg-black text-white rounded-lg hover:opacity-80 transition">
              View Projects
            </button>

            <button className="px-5 py-3 border border-black text-black rounded-lg hover:bg-black hover:text-white transition">
               Resume
            </button>
          </div>
        </div>

        {/* hero image */}
        <div className="flex-1 flex justify-center">
          <img
            src={heroImage}
            alt="hero picture"
            className="w-full max-w-md md:max-w-lg object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
