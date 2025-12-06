import React, { useState } from "react";
import Title from "../../Shared/Title";
import image from "../../../assets/pic/Mainpic.jpg";
import { FaFacebookF, FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { useLocation } from "react-router-dom";

const AboutSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  // console.log(hoveredIndex);
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
    <div className="pb-10">
      {location.pathname === "/about" && (
        <Title Subtitle="Get to know me" title="About Me" />
      )}

      <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-10">
        {/* Image */}
        <div className="h-80 md:h-96 lg:h-[75vh] w-full lg:w-1/2 flex justify-center items-center">
          <img
            src={image}
            className="h-full w-auto  object-cover "
            alt="Ashik Khan profile"
          />
        </div>

        {/* Text Section */}
        <div className="p-5 lg:w-1/2 flex flex-col justify-center">
          <h1 className="text-3xl font-bold mb-6">
            I'm Ashik Khan, Junior MERN Stack Developer
          </h1>

          <div className="text-gray-400 font-medium flex flex-col gap-3">
            <p>
              I’m Ashik Khan, a dedicated student and aspiring MERN Stack
              Developer who is continuously learning and growing in the world of
              web development. I specialize in building modern, responsive web
              applications and visually engaging user interfaces that align with
              the latest design and development trends.
            </p>

            <p>
              With a growing foundation in MongoDB, Express.js, React, and
              Node.js, I enjoy turning ideas into functional and user-friendly
              digital products. My focus is on writing clean code and crafting
              intuitive designs that deliver seamless user experiences.
            </p>
          </div>

          {/* Personal Info */}
          <div className="border-t border-gray-500 mt-10 pt-6 grid grid-cols-1 md:grid-cols-2 gap-4 font-medium">
            <div>
              <span>Name: </span>
              <span>ASHIK KHAN ATUL</span>
            </div>

            <div>
              <span>Email: </span>
              <span className="text-[#0EA5E9]">ashikkhan693693@gmail.com</span>
            </div>

            <div>
              <span>Age: </span>
              <span>22</span>
            </div>

            <div>
              <span>Phone: </span>
              <span>01306068794</span>
            </div>

            <div>
              <span>From: </span>
              <span>Kushtia, Bangladesh</span>
            </div>

            <div>
              <span>Current Address: </span>
              <span>Kakrail, Dhaka, Bangladesh</span>
            </div>
          </div>
        </div>
      </div>

      <div className="p-5">
        {/* Education and achivement */}
        <div className="flex flex-col md:flex-row gap-10 justify-center">
          {/* Education */}
          <div className="border-t border-gray-500 mt-10 pt-6 w-full">
            <h2 className="text-2xl font-semibold text-[#0EA5E9] mb-5">
              Education 🎓
            </h2>
            <ul className="text-gray-400 space-y-3">
              <li>
                🎯{" "}
                <span className="font-semibold text-white">
                  Diploma in Computer Technology
                </span>{" "}
                — Kushtia Polytechnic Institute <br />
                <span className="text-sm text-gray-500">
                  Session: 2020–2021 | Passing Year: 2024 | CGPA: 3.48
                </span>
              </li>
              <li>
                🧠{" "}
                <span className="font-semibold text-white">SSC in Science</span>{" "}
                — Mohinimohon Biddapith, Kushtia <br />
                <span className="text-sm text-gray-500">
                  Passing Year: 2020 | GPA: 4.56 | Board: Jashore
                </span>
              </li>
            </ul>
          </div>

          {/* Achievements & Courses */}
          <div className="border-t border-gray-500 mt-10 pt-6 w-full">
            <h2 className="text-2xl font-semibold text-[#0EA5E9] mb-5">
              Courses & Certificates 🏅
            </h2>
            <ul className="text-gray-400 space-y-4">
              <li>
                💻{" "}
                <span className="font-semibold text-white">
                  Complete Web Development Course Level-1
                </span>{" "}
                —{" "}
                <a
                  href="https://drive.google.com/file/d/13-TO6kXkya2WJvgPurHTwZlh9NcN0x36/view?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#0EA5E9] hover:underline"
                >
                  View Certificate
                </a>
              </li>
              <li>
                📝{" "}
                <span className="font-semibold text-white">
                  CV Writing and Interview
                </span>{" "}
                — 10 Minute School{" "}
                <a
                  href="https://drive.google.com/file/d/1QcOEtwM48raYKRf8WeOKFsOeq8nGolHb/view?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#0EA5E9] hover:underline"
                >
                  View Certificate
                </a>
              </li>
              <li>
                ✉️{" "}
                <span className="font-semibold text-white">
                  Email Writing Certificate
                </span>{" "}
                — 10 Minute School{" "}
                <a
                  href="https://drive.google.com/file/d/1Yfiu-BGH9fe6UFQxXUC5NrZRB9feuXC4/view?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#0EA5E9] hover:underline"
                >
                  View Certificate
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Links */}
        <div className="py-5 mt-10 border-t border-gray-500 font-medium flex gap-6 md:gap-20 duration-1000 justify-center">
          {links.map((link, i) => (
            <a
              key={i}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={` flex justify-center items-center rounded-full border-2  h-14 w-14 md:h-16 md:w-16 transition-all duration-500  ${
                hoveredIndex === i
                  ? "border-transparent scale-125 bg-gradient-to-br from-[#0EA5E9] to-[#38BDF8] text-black"
                  : "border-[#0EA5E9] text-[#0EA5E9] hover:scale-110"
              }  `}
            >
              <span
                className={` transition-all duration-700  ${
                  hoveredIndex === i ? "scale-150 rotate-[-6deg]" : ""
                } `}
              >
                {link.icon}
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
