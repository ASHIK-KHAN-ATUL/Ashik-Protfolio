import React from "react";
import { useLocation, Link } from "react-router-dom";
import Title from "../../Shared/Title";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { FiExternalLink, FiInfo } from "react-icons/fi";
import { motion } from "framer-motion";

const Project = () => {
  const location = useLocation();
  const axiosPublic = useAxiosPublic();

  const { data: projects = [], isLoading } = useQuery({
    queryKey: ["project"],
    queryFn: async () => {
      const res = await axiosPublic.get("/project");
      return res.data;
    },
  });

  // TIME AGO
  const getTimeAgo = (date) => {
    const now = new Date();
    const past = new Date(date);
    const diff = Math.floor((now - past) / (1000 * 60 * 60 * 24));

    if (diff === 0) return "Today";
    if (diff === 1) return "1d ago";
    if (diff < 7) return `${diff}d ago`;
    if (diff < 30) return `${Math.floor(diff / 7)}w ago`;
    if (diff < 365) return `${Math.floor(diff / 30)}m ago`;
    return `${Math.floor(diff / 365)}y ago`;
  };

  // SKELETON
  if (isLoading) {
    return (
      <div className="px-4 md:px-10 lg:px-20 pb-10">
        {location.pathname === "/project" && (
          <Title Subtitle="Showcasing some of my best work" title="Projects" />
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 mt-12">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div
              key={i}
              className="rounded-xl overflow-hidden bg-gray-700/20 animate-pulse border border-gray-600 h-[320px]"
            >
              <div className="h-52 bg-gray-600/30"></div>
              <div className="p-5 space-y-3">
                <div className="h-5 w-2/3 bg-gray-500/30 rounded"></div>
                <div className="h-3 w-full bg-gray-500/20 rounded"></div>
                <div className="h-3 w-5/6 bg-gray-500/20 rounded"></div>
                <div className="flex gap-2 mt-4">
                  <div className="h-6 w-16 bg-gray-500/20 rounded"></div>
                  <div className="h-6 w-16 bg-gray-500/20 rounded"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // ANIMATION VARIANTS
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.12 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 25 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div className="px-4 md:px-10 lg:px-20 pb-10">
      {location.pathname === "/project" && (
        <Title Subtitle="Showcasing some of my best work" title="Projects" />
      )}

      {/* GRID */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 mt-12"
      >
        {projects.map((project) => (
          <motion.div
            key={project._id}
            variants={item}
            whileHover={{ y: -6 }}
            className="group shadow-xl rounded-xl overflow-hidden bg-gradient-to-bl from-purple-600/20 via-indigo-500/10 to-sky-500/20 border border-y-purple-500/70 border-x-sky-500/70 flex flex-col"
          >
            {/* IMAGE */}
            <div className="overflow-hidden h-52">
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>

            <div className="p-5 flex flex-col flex-1">
              {/* TITLE + TIME */}
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-bold text-sky-500 group-hover:text-white transition">
                  {project.name}
                </h2>

                <span className="text-[10px] px-2 py-1 rounded-full bg-sky-500/10 text-sky-400 border border-sky-500/20">
                  {project.dateCompleted
                    ? getTimeAgo(project.dateCompleted)
                    : "N/A"}
                </span>
              </div>

              {/* DESCRIPTION */}
              <p className="text-gray-400 text-sm my-2 line-clamp-3 group-hover:text-white transition">
                {project.shortDescription}
              </p>

              {/* TECH */}
              <div className="flex flex-wrap gap-2 my-2">
                {project.techStack?.map((tech, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 text-[10px] rounded border 
                    bg-sky-600/20 text-sky-400 border-purple-500/50
                    hover:scale-105 transition-transform duration-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* TOOLS */}
              <div className="flex flex-wrap gap-2 my-2">
                {project.toolsUsed?.map((tool, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 text-[10px] rounded border 
                    bg-purple-600/20 text-purple-400 border-sky-500/50
                    hover:scale-105 transition-transform duration-200"
                  >
                    {tool}
                  </span>
                ))}
              </div>

              {/* BUTTONS */}
              <div className="mt-auto flex gap-3 pt-4">
                <a
                  href={project.link}
                  target="_blank"
                  className="flex-1 flex items-center justify-center gap-1.5 py-1.5 px-3 border border-sky-500 text-sky-500 text-sm rounded hover:bg-sky-500 hover:text-white transition"
                >
                  <FiExternalLink size={16} /> Preview
                </a>

                <Link
                  to={`/project/details/${project._id}`}
                  className="flex-1 flex items-center justify-center gap-1.5 py-1.5 px-3 border border-purple-500 text-purple-500 text-sm rounded hover:bg-purple-500 hover:text-white transition"
                >
                  <FiInfo size={16} /> Details
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Project;
