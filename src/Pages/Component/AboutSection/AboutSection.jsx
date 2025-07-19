import React, { useState } from 'react';
import Title from '../../Shared/Title';
import image from '../../../assets/pic/Mainpic.jpg'
import { FaFacebookF, FaGithub } from 'react-icons/fa';
import { CiLinkedin } from 'react-icons/ci';
import { FaXTwitter } from 'react-icons/fa6';
import { useLocation } from 'react-router-dom';

const AboutSection = () => {

    const [hoveredIndex, setHoveredIndex] = useState(null);

    const location = useLocation();

    const links = [
    { href: 'https://www.linkedin.com/in/ashik-khan-7b448630a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', icon: <CiLinkedin /> },
    { href: 'https://github.com/ASHIK-KHAN-ATUL', icon: <FaGithub /> },
    { href: 'https://www.facebook.com/atul.khan.7568596', icon: <FaFacebookF /> },
    { href: 'https://twitter.com/yourprofile', icon: <FaXTwitter /> },
    ];

    return (
        <div className="pb-10">
            {
                location.pathname === '/about' ? 
                <Title Subtitle='Get to know me' title='About Me'></Title> :
                ''
            }

            <div className=' flex flex-col lg:flex-row justify-between'>
                {/* img */}
                <div className='h-96 lg:h-[60vh] lg:w-full  mx-auto p-5'>
                    <img src={image} className='h-full w-full object-cover  rounded-full' alt="" />
                </div>
                {/* text */}
                <div className='p-5 flex flex-col justify-center '>

                    <p className='text-[#0EA5E9] text-lg font-medium mb-5 lg:hidden'>Who am i ?</p>

                    <h1 className='text-3xl font-bold mb-6'>I'm Ashik Khan, Junior MERN Stack Developer</h1>

                    <div className='text-gray-400 font-medium flex flex-col gap-3'>
                        <p>I’m Ashik Khan, a dedicated student and aspiring MERN Stack Developer who is continuously learning and growing in the world of web development. I specialize in building modern, responsive web applications and visually engaging user interfaces that align with the latest design and development trends. </p>

                        <p>With a growing foundation in MongoDB, Express.js, React, and Node.js, I enjoy turning ideas into functional and user-friendly digital products. My focus is on writing clean code and crafting intuitive designs that deliver seamless user experiences. </p>

                        <p>As I continue to learn and build real-world projects, I strive to improve with every step. I’m detail-oriented, eager to take on challenges, and committed to evolving as a developer who can create impactful web solutions.</p>
                    </div>

                    <div className='border-t-2 border-gray-500 mt-10 pt-10 grid grid-cols-1 md:grid-cols-2 gap-5 font-medium '>

                        <div className=' md:w-full '>
                            <span>Name : </span>
                            <span>ASHIK KHAN ATUL</span>
                        </div>

                        <div className=' md:w-full'>
                            <span>Email : </span>
                            <span className='text-[#0EA5E9] text-start'>ashikkhan693693@gamil.com</span>
                        </div>

                        <div className=' md:w-full'>
                            <span>Age : </span>
                            <span>22</span>
                        </div>

                        <div className=' md:w-full'>
                            <span>Phone : </span>
                            <span>01841065033</span>
                        </div>

                        <div className=' md:w-full'>
                            <span>From : </span>
                            <span>Kushtia, Bangladesh</span>
                        </div>

                    </div>

                    <div className='py-10 font-medium flex gap-4 mx-auto'>
                        {links.map((link, i) => (
                        <a
                            key={i}
                            href={link.href}
                            target='_blank'
                            rel="noopener noreferrer"
                            onMouseEnter={() => setHoveredIndex(i)}
                            onMouseLeave={() => setHoveredIndex(null)}
                            className={`border-2 h-12 w-12 flex justify-center items-center rounded-full 
                            ${
                                hoveredIndex === i
                                ? 'border-transparent bg-[#0EA5E9] text-black duration-500 ease-in-out'
                                : 'text-[#0EA5E9] border-[#0EA5E9]'
                            }
                            transition
                            `}
                        >
                            {link.icon}
                        </a>
                        ))}
                    </div>

                </div>
            </div>
        </div>
    );
};

export default AboutSection;