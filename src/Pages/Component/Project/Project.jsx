import React from "react";
import { useLocation, Link } from "react-router-dom";
import Title from "../../Shared/Title";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { FiExternalLink, FiInfo } from "react-icons/fi";

const Project = () => {
  const location = useLocation();
  const axiosPublic = useAxiosPublic();

  const { data: projects = [] } = useQuery({
    queryKey: ["project"],
    queryFn: async () => {
      const res = await axiosPublic.get("/project");
      return res.data;
    },
  });

  // Skeleton loader while fetching
  if (!projects.length) {
    return (
      <div className="px-4 md:px-10 lg:px-20 pb-10">
        {location.pathname === "/project" && (
          <Title Subtitle="Showcasing some of my best work" title="Projects" />
        )}

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5 mt-12">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div
              key={i}
              className="group shadow-xl rounded-xl overflow-hidden bg-gray-700/20 animate-pulse border border-gray-600 flex flex-col h-[320px]"
            >
              <div className="w-full h-52 bg-gray-600/30"></div>
              <div className="p-5 flex flex-col flex-1">
                <div className="h-6 w-3/4 bg-gray-500/30 rounded mb-2"></div>
                <div className="h-4 w-full bg-gray-500/20 rounded mb-2"></div>
                <div className="flex gap-2 mt-auto">
                  <div className="h-8 flex-1 bg-gray-500/20 rounded"></div>
                  <div className="h-8 flex-1 bg-gray-500/20 rounded"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="px-4 md:px-10 lg:px-20 pb-10">
      {location.pathname === "/project" && (
        <Title Subtitle="Showcasing some of my best work" title="Projects" />
      )}

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5 mt-12">
        {projects.map((project) => (
          <div
            key={project._id}
            className="group shadow-xl rounded-xl overflow-hidden bg-gradient-to-bl from-purple-600/20 via-indigo-500/10 to-sky-500/20 border border-y-purple-500/70 border-x-sky-500/70 transition-all duration-300 flex flex-col"
          >
            {/* Image */}
            <div className="overflow-hidden">
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-52 object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            <div className="p-5 flex flex-col flex-1">
              <h2 className="text-xl font-bold text-sky-500 group-hover:text-white transition duration-500">
                {project.name}
              </h2>

              <p className="text-gray-400 text-sm my-2 line-clamp-3 whitespace-pre-line group-hover:text-white transition-colors">
                {project.shortDescription}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 my-2">
                {project.techStack?.map((tech, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 bg-sky-600/20 text-sky-400 text-[10px] rounded border border-purple-500/50 hover:bg-sky-500 hover:text-white transition-colors cursor-pointer"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Tools Used */}
              <div className="flex flex-wrap gap-2 my-2">
                {project.toolsUsed?.map((tool, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 bg-purple-600/20 text-purple-400 text-[10px] rounded border border-sky-500/50 hover:bg-purple-500 hover:text-white transition-colors cursor-pointer"
                  >
                    {tool}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="mt-auto flex gap-3 pt-4">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-1.5 py-1.5 px-3 border border-sky-500 bg-transparent text-sky-500 text-sm rounded hover:bg-sky-500 hover:text-white transition-all duration-300"
                >
                  <FiExternalLink size={16} /> Preview
                </a>
                <Link
                  to={`/project/details/${project._id}`}
                  className="flex-1 flex items-center justify-center gap-1.5 py-1.5 px-3 border border-purple-500 bg-transparent text-purple-500 text-sm rounded hover:bg-purple-500 hover:text-white transition-all duration-300"
                >
                  <FiInfo size={16} /> Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
