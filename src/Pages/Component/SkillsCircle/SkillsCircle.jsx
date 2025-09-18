import React from "react";
import "./SkillsCirle.css";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGithub,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiMongodb,
  SiFirebase,
  SiExpress,
  SiNetlify,
  SiVercel,
  SiJsonwebtokens,
} from "react-icons/si";

const SkillsCircle = () => {
  const skills = [
    { icon: <FaHtml5 />, color: "#E34F26" },
    { icon: <FaCss3Alt />, color: "#1572B6" },
    { icon: <SiTailwindcss />, color: "#38BDF8" },
    { icon: <FaJs />, color: "#F7DF1E" },
    { icon: <FaReact />, color: "#61DAFB" },
    { icon: <FaNodeJs />, color: "#339933" },
    { icon: <SiExpress />, color: "#000000" },
    { icon: <SiMongodb />, color: "#47A248" },
    { icon: <SiFirebase />, color: "#FFCA28" },
    { icon: <SiNetlify />, color: "#00C7B7" },
    { icon: <SiVercel />, color: "#000000" },
    { icon: <SiJsonwebtokens />, color: "#F0DB4F" },
    { icon: <FaGithub />, color: "#181717" },
  ];

  // Repeat skills to make seamless scrolling
  const repeatedSkills = [...skills, ...skills];
  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-5">
        {/* marquee normal */}
        <div className="overflow-hidden w-full py-4 rotate-2 bg-gradient-to-bl from-purple-600/20 via-indigo-500/30 to-sky-500/20 border-y-purple-500/70 border-x-sky-500/70 rounded">
          <div className="flex animate-marquee whitespace-nowrap">
            {repeatedSkills.map((skill, i) => (
              <div
                key={i}
                className="mx-6 text-4xl"
                style={{ color: skill.color }}
              >
                {skill.icon}
              </div>
            ))}
          </div>
        </div>

        {/* marquee reverse / slower */}
        <div className="overflow-hidden w-full py-4 -rotate-2 bg-gradient-to-bl from-purple-600/40 via-indigo-500/30 to-sky-500/20 border-y-purple-500/70 border-x-sky-500/70 rounded">
          <div className="flex animate-marquee-reverse whitespace-nowrap">
            {repeatedSkills.map((skill, i) => (
              <div
                key={i}
                className="mx-6 text-4xl"
                style={{ color: skill.color }}
              >
                {skill.icon}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsCircle;
