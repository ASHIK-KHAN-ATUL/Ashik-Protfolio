import React from 'react';
import { useLocation } from 'react-router-dom';
import Title from '../../Shared/Title';
import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from '../../../Hooks/useAxiosPublic';

const Project = () => {

    const location = useLocation();
    const axiosPublic = useAxiosPublic();

    const {data:projects=[]} = useQuery({
        queryKey: ['project'],
        queryFn: async() => {
            const res = await axiosPublic.get('/project')
            return res.data
        }
    })

    console.log(projects)

    return (
<div className="px-4 md:px-16 lg:px-24 pb-10">

            {
                location.pathname === '/project' ? 
                <Title Subtitle='Showcasing some of my best work' title='About Me'></Title> : '' 
            }

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                {projects.map((project, index) => (
                    <div key={index} className="shadow-lg rounded-lg overflow-hidden transition-transform duration-300  border-2 flex flex-col justify-between bg-gradient-to-bl from-purple-600/20 via-indigo-500/10 to-sky-500/20   border-y-purple-500/70 border-x-sky-500/70 ">
                        <img src={project.image} alt={project.name} className="w-full h-48 object-cover" />
                        <div className="p-5 flex flex-col ">

                            <h2 className="text-2xl font-bold text-sky-500 hover:text-white duration-500 transition ">{project.name}</h2>

                            <p title={project.description} className="text-gray-400 mb-4 line-clamp-4">{project.description}</p>

                            {/* 🏷️ Tags */}
                            <div className="flex flex-wrap gap-2 mb-4">
                            {project.tags?.map((tag, i) => (
                                <span key={i} className="px-2 py-1 bg-sky-600/20 text-sky-400 text-xs rounded border border-purple-500/50 hover:bg-purple-400/20 hover:border-sky-500/70 cursor-pointer" > {tag}
                                </span>
                            ))}
                            </div>

                            <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-sky-500 font-medium hover:underline">
                                        Preview →
                            </a>

                        </div>
                    </div>
                ))}
            </div>
               
        </div>
    );
};

export default Project;