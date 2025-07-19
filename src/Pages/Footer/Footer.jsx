import React from 'react';
import { CiLinkedin } from 'react-icons/ci';
import { FaFacebookF, FaGithub } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {

    const links = [
        {
        href: 'https://www.linkedin.com/in/ashik-khan-7b448630a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
        icon: <CiLinkedin />
        },
        { href: 'https://github.com/ASHIK-KHAN-ATUL', icon: <FaGithub /> },
        { href: 'https://www.facebook.com/atul.khan.7568596', icon: <FaFacebookF /> },
        { href: 'https://twitter.com/yourprofile', icon: <FaXTwitter /> }
    ];


    return (
    <footer className="bg-gradient-to-bl from-purple-600/20 via-indigo-500/10 to-sky-500/20  text-gray-300 px-5 md:px-20 py-12 mt-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Left Section */}
        <div>
          <h2 className="text-2xl font-bold text-purple-500 mb-2">ASHIK KHAN</h2>
          <p className="text-sm text-gray-400">
            Junior MERN Stack Developer | Passionate about building elegant, responsive, and user-friendly web applications.
          </p>
        </div>

        {/* Center Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-purple-500 ">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:text-[#0EA5E9] duration-300">Home</a></li>
            <li><a href="/about" className="hover:text-[#0EA5E9] duration-300">About</a></li>
            <li><a href="/project" className="hover:text-[#0EA5E9] duration-300">Projects</a></li>
            <li><a href="/contact" className="hover:text-[#0EA5E9] duration-300">Contact</a></li>
          </ul>
        </div>

        {/* Right Socials */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-purple-500 ">Connect with Me</h3>
          <div className="flex justify-center md:justify-start gap-4 text-xl">
            {links.map((link, i) => (
              <a
                key={i}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-purpl text-[#0EA5E9] h-10 w-10 flex items-center justify-center rounded-full hover:bg-[#0EA5E9] hover:text-black transition duration-300"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-10 text-center text-sm text-purple-500 border-t border-gray-700 pt-4">
        &copy; {new Date().getFullYear()} Ashik Khan. All Rights Reserved.
      </div>
    </footer>
    );
};

export default Footer;