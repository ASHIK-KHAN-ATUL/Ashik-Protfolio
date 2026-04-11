import React, { useState } from "react";
import Title from "../../Shared/Title";
import image from "../../../assets/pic/Mainpic.jpg";
import { FaFacebookF, FaGithub, FaGraduationCap } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { useLocation } from "react-router-dom";

const AboutSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const location = useLocation();

  const links = [
    {
      href: "https://www.linkedin.com/in/ashik-khan-7b448630a",
      icon: <CiLinkedin />,
    },
    { href: "https://github.com/ASHIK-KHAN-ATUL", icon: <FaGithub /> },
    {
      href: "https://www.facebook.com/atul.khan.7568596",
      icon: <FaFacebookF />,
    },
    { href: "https://twitter.com/yourprofile", icon: <FaXTwitter /> },
  ];

  return (
    <div className="pb-16 overflow-x-hidden">
      {location.pathname === "/about" && (
        <Title Subtitle="Get to know me" title="About Me" />
      )}

      {/* TOP SECTION */}
      <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-10">
        {/* IMAGE */}
        <div className="h-80 md:h-96 lg:h-[70vh] w-full lg:w-1/2 flex justify-center items-end">
          <img
            src={image}
            className="max-h-full w-auto object-contain mix-blend-lighten"
            alt="Ashik Khan"
          />
        </div>

        {/* TEXT */}
        <div className="p-5 lg:w-1/2">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-tl from-purple-600 via-indigo-500 to-sky-500 bg-clip-text text-transparent">
            I'm Ashik Khan, Junior MERN Stack Developer
          </h1>

          <div className="text-gray-400 space-y-3">
            <p>
              Passionate MERN stack developer focused on building scalable web
              applications.
            </p>
            <p>
              I love clean UI, strong backend logic, and real-world projects.
            </p>
          </div>

          {/* PERSONAL INFO */}
          <div className="border-t border-gray-600 mt-10 pt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
            <div>
              <span>Name:</span> <span className="text-white">ASHIK KHAN</span>
            </div>
            <div>
              <span>Email:</span>{" "}
              <span className="text-[#0EA5E9]">ashikkhan693693@gmail.com</span>
            </div>
            <div>
              <span>Age:</span> 22
            </div>
            <div>
              <span>Phone:</span> 01306068794
            </div>
            <div>
              <span>From:</span> Kushtia
            </div>
            <div>
              <span>Current:</span> Dhaka
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM SECTION */}
      <div className="p-5 mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* EDUCATION */}
        <div className="border border-gray-700 rounded-2xl p-6">
          <h2 className="text-xl font-semibold text-[#0EA5E9] mb-5 flex items-center gap-2">
            <FaGraduationCap /> Education
          </h2>

          <div className="space-y-6 text-gray-400">
            <div className="border-l-2 border-[#0EA5E9] pl-4">
              <div className="text-white font-semibold">
                🎓 BSc in CSE (Running)
              </div>
              <p className="text-sm">BUBT</p>
              <p className="text-sm text-gray-500">Spring 2026</p>
            </div>

            <div className="border-l-2 border-[#0EA5E9] pl-4">
              <div className="text-white font-semibold">
                Diploma in Computer Technology
              </div>
              <p className="text-sm">KPI</p>
              <p className="text-sm text-gray-500">CGPA: 3.48</p>
            </div>

            <div className="border-l-2 border-[#0EA5E9] pl-4">
              <div className="text-white font-semibold">SSC in Science</div>
              <p className="text-sm">Jashore Board</p>
              <p className="text-sm text-gray-500">GPA: 4.56</p>
            </div>
          </div>
        </div>

        {/* EXPERIENCE */}
        <div className="border border-gray-700 rounded-2xl p-6">
          <h2 className="text-xl font-semibold text-[#0EA5E9] mb-5">
            Experience 💼
          </h2>

          <div className="space-y-6 text-gray-400">
            <div className="border-l-2 border-[#0EA5E9] pl-4">
              <div className="text-white font-semibold">
                Frontend Developer (CMS)
              </div>
              <p className="text-sm">Softvence</p>
              <p className="text-sm text-gray-500">Jan 2026 – Present</p>
              <p className="text-sm mt-2">
                Built responsive CMS websites using Squarespace + custom JS.
              </p>
            </div>
          </div>
        </div>

        {/* CERTIFICATES */}
        <div className="border border-gray-700 rounded-2xl p-6">
          <h2 className="text-xl font-semibold text-[#0EA5E9] mb-5">
            Certificates 🏅
          </h2>

          <div className="space-y-6 text-gray-400">
            <div className="border-l-2 border-[#0EA5E9] pl-4">
              <p className="text-white">Web Dev Course</p>
              <a className="text-[#0EA5E9] text-sm hover:underline">
                View Certificate
              </a>
            </div>

            <div className="border-l-2 border-[#0EA5E9] pl-4">
              <p className="text-white">CV & Interview</p>
              <a className="text-[#0EA5E9] text-sm hover:underline">
                View Certificate
              </a>
            </div>

            <div className="border-l-2 border-[#0EA5E9] pl-4">
              <p className="text-white">Email Writing</p>
              <a className="text-[#0EA5E9] text-sm hover:underline">
                View Certificate
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* SOCIAL */}
      <div className="py-10 mt-10 border-t border-gray-600 flex gap-6 justify-center flex-wrap">
        {links.map((link, i) => (
          <a
            key={i}
            href={link.href}
            target="_blank"
            onMouseEnter={() => setHoveredIndex(i)}
            onMouseLeave={() => setHoveredIndex(null)}
            className={`h-12 w-12 flex items-center justify-center rounded-full border-2 transition ${
              hoveredIndex === i
                ? "bg-[#0EA5E9] text-black"
                : "border-[#0EA5E9] text-[#0EA5E9]"
            }`}
          >
            {link.icon}
          </a>
        ))}
      </div>
    </div>
  );
};

export default AboutSection;
