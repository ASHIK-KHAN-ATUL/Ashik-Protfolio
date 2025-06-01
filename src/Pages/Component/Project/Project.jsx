import React from 'react';
import { useLocation } from 'react-router-dom';
import Title from '../../Shared/Title';

const Project = () => {

    const location = useLocation();

    const projects = [
    {
        name: "FitVerse",
        description: "A full-featured fitness tracking platform with trainer booking, Stripe payments, and community forums.",
        link: "http://fitverse.surge.sh/",
        image: "https://i.ibb.co/5XDQ29bJ/FITVERSE.jpg"
    },
    {
        name: "LibroHub",
        description: "A library management system with category-wise books, user roles, and a clean dashboard.",
        link: "https://ashik-khan-atul-assignment-11th.surge.sh/",
        image: "https://i.ibb.co/B5WdY202/Librohub.jpg"
    },
    {
        name: "Visa Navigator",
        description: "A visa information and management portal with filtering, modals, and protected routes.",
        link: "https://ashik-khan-atul-assignment-10th.surge.sh/",
        image: "https://i.ibb.co/fmjd8W4/Visa-Navigator.jpg"
    }
    ];

    return (
<div className="px-4 md:px-16 lg:px-24 py-10">

            {
                location.pathname === '/project' ? 
                <Title Subtitle='Showcasing some of my best work' title='About Me'></Title> :
                ''
            }

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                {projects.map((project, index) => (
                    <div key={index} className="shadow-lg rounded-lg overflow-hidden transition-transform duration-300 hover:translate-0.5 border-2 border-[#25a244]/50">
                        <img src={project.image} alt={project.name} className="w-full h-48 object-cover" />
                        <div className="p-5">
                            <h2 className="text-2xl font-semibold mb-2">{project.name}</h2>
                            <p className="text-gray-400 mb-4">{project.description}</p>
                            <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-[#25a244] font-medium hover:underline">
                                        Visit Site →
                            </a>
                        </div>
                    </div>
                ))}
            </div>
               
        </div>
    );
};

export default Project;