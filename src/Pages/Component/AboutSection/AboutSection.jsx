import React, { useState } from "react";
import Title from "../../Shared/Title";
import image from "../../../assets/pic/Mainpic.jpg";
import { FaFacebookF, FaGithub } from "react-icons/fa";
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
    <div className="pb-16">
      {location.pathname === "/about" && (
        <Title Subtitle="Get to know me" title="About Me" />
      )}

      {/* TOP SECTION */}
      <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-10">
        {/* IMAGE FIXED */}
        <div className="h-80 md:h-96 lg:h-[70vh] w-full lg:w-1/2 flex justify-center items-end">
          <img
            src={image}
            className="max-h-full w-auto object-contain mix-blend-lighten"
            alt="Ashik Khan"
          />
        </div>

        {/* TEXT */}
        <div className="p-5 lg:w-1/2 flex flex-col justify-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-tl from-purple-600 via-indigo-500 to-sky-500 bg-clip-text text-transparent">
            I'm Ashik Khan, Junior MERN Stack Developer
          </h1>

          <div className="text-gray-400 font-medium flex flex-col gap-4">
            <p>
              I’m Ashik Khan, a dedicated student and aspiring MERN Stack
              Developer who is continuously learning and growing in the world of
              web development. I specialize in building modern, responsive web
              applications and visually engaging user interfaces.
            </p>

            <p>
              With a strong foundation in MongoDB, Express.js, React, and
              Node.js, I enjoy turning ideas into real-world digital products.
              My focus is clean code, performance, and smooth user experience.
            </p>
          </div>

          {/* PERSONAL INFO */}
          <div className="border-t border-gray-500 mt-10 pt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm md:text-base">
            <div>
              <span>Name:</span>{" "}
              <span className="text-white">ASHIK KHAN ATUL</span>
            </div>
            <div>
              <span>Email:</span>{" "}
              <span className="text-[#0EA5E9]">ashikkhan693693@gmail.com</span>
            </div>
            <div>
              <span>Age:</span> <span>22</span>
            </div>
            <div>
              <span>Phone:</span> <span>01306068794</span>
            </div>
            <div>
              <span>From:</span> <span>Kushtia, Bangladesh</span>
            </div>
            <div>
              <span>Current:</span> <span>Kakrail, Dhaka</span>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM SECTION */}
      <div className="p-5 mt-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* EDUCATION */}
          {/* EDUCATION */}
          <div className="border border-gray-700 rounded-2xl p-6">
            <h2 className="text-2xl font-semibold text-[#0EA5E9] mb-5">
              Education 🎓
            </h2>

            <ul className="text-gray-400 space-y-4">
              <li>
                🎯{" "}
                <span className="text-white font-semibold">
                  Bachelor of Science in Computer Science & Engineering (BSc in
                  CSE)
                </span>
                <br />
                <span className="text-sm text-gray-500">
                  Bangladesh University of Business and Technology (BUBT)
                </span>
                <br />
                <span className="text-sm text-gray-500">
                  Session: Spring 2026 | Status: Running
                </span>
              </li>

              <li>
                🎯{" "}
                <span className="text-white font-semibold">
                  Diploma in Computer Technology
                </span>
                <br />
                <span className="text-sm text-gray-500">
                  Kushtia Polytechnic Institute
                </span>
                <br />
                <span className="text-sm text-gray-500">
                  Session: 2020–2021 | Passing Year: 2024 | CGPA: 3.48
                </span>
              </li>

              <li>
                🧠{" "}
                <span className="text-white font-semibold">
                  Secondary School Certificate (SSC) – Science
                </span>
                <br />
                <span className="text-sm text-gray-500">
                  Mohinimohon Biddapith, Kushtia
                </span>
                <br />
                <span className="text-sm text-gray-500">
                  Passing Year: 2020 | GPA: 4.56 | Board: Jashore
                </span>
              </li>
            </ul>
          </div>

          {/* EXPERIENCE */}
          <div className="border border-gray-700 rounded-2xl p-6">
            <h2 className="text-2xl font-semibold text-[#0EA5E9] mb-5">
              Experience 💼
            </h2>
            <ul className="text-gray-400 space-y-4">
              <li>
                💻{" "}
                <span className="text-white font-semibold">
                  Frontend Developer
                </span>
                <br />
                <span className="text-sm text-gray-500">
                  Softvence | Jan 2026 – Present
                </span>
                <p className="text-sm text-gray-500 mt-1">
                  Working with React & Tailwind CSS to build modern UI.
                </p>
              </li>
            </ul>
          </div>

          {/* COURSES FIXED */}
          <div className="border border-gray-700 rounded-2xl p-6">
            <h2 className="text-2xl font-semibold text-[#0EA5E9] mb-5">
              Courses 🏅
            </h2>

            <ul className="text-gray-400 space-y-4">
              <li>
                💻 <span className="text-white">Web Dev Course</span>
                <br />
                <a
                  href="https://drive.google.com/file/d/13-TO6kXkya2WJvgPurHTwZlh9NcN0x36/view"
                  target="_blank"
                  className="text-[#0EA5E9] text-sm hover:underline"
                >
                  View Certificate
                </a>
              </li>

              <li>
                📝 <span className="text-white">CV & Interview</span>
                <br />
                <a
                  href="https://drive.google.com/file/d/1QcOEtwM48raYKRf8WeOKFsOeq8nGolHb/view"
                  target="_blank"
                  className="text-[#0EA5E9] text-sm hover:underline"
                >
                  View Certificate
                </a>
              </li>

              <li>
                ✉️ <span className="text-white">Email Writing</span>
                <br />
                <a
                  href="https://drive.google.com/file/d/1Yfiu-BGH9fe6UFQxXUC5NrZRB9feuXC4/view"
                  target="_blank"
                  className="text-[#0EA5E9] text-sm hover:underline"
                >
                  View Certificate
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* SOCIAL */}
        <div className="py-10 mt-10 border-t border-gray-500 flex gap-6 justify-center flex-wrap">
          {links.map((link, i) => (
            <a
              key={i}
              href={link.href}
              target="_blank"
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`flex items-center justify-center rounded-full border-2 h-14 w-14 transition-all duration-500 ${
                hoveredIndex === i
                  ? "scale-125 bg-gradient-to-br from-[#0EA5E9] to-[#38BDF8] text-black"
                  : "border-[#0EA5E9] text-[#0EA5E9]"
              }`}
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
