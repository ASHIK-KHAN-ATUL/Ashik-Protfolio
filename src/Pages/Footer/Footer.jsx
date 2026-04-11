import React, { useContext } from "react";
import { CiLinkedin } from "react-icons/ci";
import { FaFacebookF, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdEmail, MdLocationOn, MdWork } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const Footer = () => {
  const { logout } = useContext(AuthContext);

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
    <footer className="w-full overflow-x-hidden bg-gradient-to-bl from-purple-600/20 via-indigo-500/10 to-sky-500/20 text-gray-300 px-4 sm:px-6 md:px-10 lg:px-20 py-10 mt-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
        {/* LEFT */}
        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-purple-500">ASHIK KHAN</h2>

          <p className="text-sm text-gray-400 break-words">
            Junior MERN Stack Developer | Passionate about building elegant,
            responsive, and user-friendly web applications.
          </p>

          <p className="text-xs flex items-center gap-2 justify-center md:justify-start text-gray-400">
            <MdWork /> Available for Freelance / Internship
          </p>

          <p className="text-xs flex items-center gap-2 justify-center md:justify-start text-gray-400">
            <MdLocationOn /> Kushtia / Dhaka, Bangladesh
          </p>

          <a
            href="mailto:ashikkhan693693@gmail.com"
            className="text-xs flex items-center gap-2 justify-center md:justify-start text-gray-400 hover:text-[#0EA5E9] break-all"
          >
            <MdEmail /> ashikkhan693693@gmail.com
          </a>

          <div className="text-xs text-gray-500 flex flex-wrap gap-3 justify-center md:justify-start">
            <span>⚡ 10+ Projects</span>
            <span>💻 MERN Dev</span>
            <span>🎯 Learning Daily</span>
          </div>
        </div>

        {/* CENTER */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-purple-500">
            Quick Links
          </h3>

          <ul className="space-y-2 text-sm">
            {[
              { name: "Home", path: "/" },
              { name: "About", path: "/about" },
              { name: "Projects", path: "/project" },
              { name: "Contact", path: "/contact" },
            ].map((item, i) => (
              <li key={i}>
                <NavLink
                  to={item.path}
                  className="hover:text-[#0EA5E9] transition relative inline-block"
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-purple-500">
            Connect with Me
          </h3>

          <div className="flex flex-wrap justify-center md:justify-start gap-3 text-xl">
            {links.map((link, i) => (
              <a
                key={i}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-purpl text-[#0EA5E9] h-10 w-10 flex items-center justify-center rounded-full shrink-0"
              >
                {link.icon}
              </a>
            ))}
          </div>

          <p className="text-xs text-gray-500 mt-4">
            Let’s build something amazing 🚀
          </p>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="mt-10 text-center text-sm text-purple-500 border-t border-gray-700 pt-4 break-words">
        &copy; {new Date().getFullYear()}{" "}
        <NavLink to={"/login-register"} className="hover:underline">
          Ashik Khan
        </NavLink>{" "}
        . All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
