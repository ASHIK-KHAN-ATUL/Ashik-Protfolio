import React from "react";
import image1 from "../../../assets/pic/Profile.png";
import { Typewriter } from "react-simple-typewriter";
import { FaDownload } from "react-icons/fa";

const HeroSection = () => {
  return (
    <div className="relative">
      <div className="min-h-screen px-6 flex justify-end items-center ">
        <img
          className="grayscale  max-h-[70vh] brightness-80 mask-b-from-20% mask-b-to-100% "
          src={image1}
          alt=""
        />
      </div>

      <div className="absolute top-0 bottom-0 left-0 right-0 flex flex-col items-center justify-center md:pr-[20%]  ">
        <p className="text-5xl font-bold">
          ASHIK KHAN <span>ATUL</span>
        </p>
        <h1 className="text-xl  font-semibold scale-95">
          I AM A{" "}
          <span className="text-[#0EA5E9]">
            <Typewriter
              words={["JUNIOR MERN STACK DEVELOPER"]}
              loop={true}
              cursor
              cursorStyle="__"
              typeSpeed={150}
              deleteSpeed={70}
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
