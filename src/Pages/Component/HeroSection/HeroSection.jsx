import React from "react";
import image1 from "../../../assets/pic/Profile.png";
import { Typewriter } from "react-simple-typewriter";
import { FaDownload } from "react-icons/fa";

const HeroSection = () => {
  return (
    <div className="relative w-full min-h-screen bg-black">
      {/* Background Image */}
      <div className="min-h-screen px-6 flex justify-center md:justify-end items-center ">
        <img
          className="grayscale max-h-[80vh] brightness-80 mask-b-from-20% mask-b-to-100% "
          src={image1}
          alt=""
        />
      </div>

      {/* Text Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-6 md:items-start md:pl-16">
        {/* Name */}
        <p className="text-4xl sm:text-5xl md:text-6xl font-bold text-center md:text-left mb-3">
          ASHIK KHAN{" "}
          <span className="bg-gradient-to-tl from-purple-600 via-indigo-500 to-sky-500 bg-clip-text text-transparent">
            ATUL
          </span>
        </p>

        {/* Typewriter */}
        <h1 className="text-md sm:text-lg md:text-xl font-semibold text-center md:text-left mb-6">
          I AM A{" "}
          <span className="text-[#0EA5E9]">
            <Typewriter
              words={["JUNIOR MERN STACK DEVELOPER"]}
              loop={true}
              cursor
              cursorStyle="__"
              typeSpeed={100}
              deleteSpeed={50}
              delaySpeed={1200}
            />
          </span>
        </h1>

        {/* Download Resume Button */}
        <a
          href="/Ashik-Khan-Mern.pdf" // PDF public folder e thakbe
          download
          className="mt-6 inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-bl from-purple-600/40 via-indigo-500/10 to-sky-500/40   border-y-purple-500/70 border border-x-sky-500/70 text-white font-semibold rounded-full shadow-lg hover:scale-105 transition-transform duration-300 group"
        >
          <FaDownload className="text-white text-lg group-hover:translate-x-38 group-hover:text-sky-500 duration-500" />
          <p className="group-hover:-translate-x-8 group-hover:text-purple-500 duration-500">
            Download Resume
          </p>
        </a>
      </div>
    </div>
  );
};

export default HeroSection;
