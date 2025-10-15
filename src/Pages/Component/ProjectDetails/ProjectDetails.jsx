import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import { FiExternalLink, FiGithub, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

const ProjectDetails = () => {
  const { id } = useParams();
  const axiosPublic = useAxiosPublic();
  const [selectedImage, setSelectedImage] = useState(null);

  const { data: projectData, isLoading } = useQuery({
    queryKey: ["projectData", id],
    enabled: !!id,
    queryFn: async () => {
      const res = await axiosPublic.get(`/project/single/details/${id}`);
      return res.data;
    },
  });

  if (isLoading)
    return (
      <div className="flex justify-center items-center min-h-[70vh]">
        <div className="w-16 h-16 border-4 border-t-sky-500 border-gray-300 rounded-full animate-spin"></div>
      </div>
    );

  if (!projectData)
    return (
      <div className="flex justify-center items-center min-h-[70vh]">
        <p className="text-red-500 text-xl font-semibold">Project not found</p>
      </div>
    );

  return (
    <div className="px-4 md:px-16 lg:px-24 py-10">
      {/* Banner */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="rounded-xl overflow-hidden shadow-lg border border-gray-700"
      >
        <img
          src={projectData.image}
          alt={projectData.name}
          className="w-full max-h-[420px] object-top object-cover  transition-transform duration-700"
        />
      </motion.div>

      {/* Title Section */}
      <div className="mt-6 space-y-2">
        <motion.h1
          className="text-3xl md:text-4xl font-bold text-sky-500"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {projectData.name}
        </motion.h1>
        <p className="text-purple-400 font-semibold">{projectData.role}</p>
        <p className="text-gray-300 max-w-3xl">
          {projectData.shortDescription}
        </p>
      </div>

      {/* Action Buttons */}
      <motion.div
        className="flex flex-wrap gap-4 mt-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <a
          href={projectData.link}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 border-2 border-sky-500 text-sky-400 rounded-md hover:bg-sky-500 hover:text-white transition-all duration-300 flex items-center gap-2"
        >
          <FiExternalLink /> Live Demo
        </a>
        <a
          href={projectData.repositoryLink}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 border-2 border-purple-500 text-purple-400 rounded-md hover:bg-purple-500 hover:text-white transition-all duration-300 flex items-center gap-2"
        >
          <FiGithub /> GitHub Repo
        </a>
      </motion.div>

      {/* Description */}
      <section className="mt-10 space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h2 className="text-2xl font-semibold text-sky-400 mb-2">Overview</h2>
          <p className="text-gray-300 leading-relaxed whitespace-pre-line">
            {projectData.fullDescription}
          </p>
        </motion.div>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h2 className="text-2xl font-semibold text-purple-400 mb-2">
            Key Features
          </h2>
          <ul className="list-disc list-inside text-gray-300 space-y-1">
            {projectData.features?.split("\n").map((feature, i) => (
              <li key={i}>{feature}</li>
            ))}
          </ul>
        </motion.div>

        {/* Challenges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <h2 className="text-2xl font-semibold text-red-400 mb-2">
            Challenges Faced
          </h2>
          <ul className="list-disc list-inside text-gray-300 space-y-1">
            {projectData.challenges?.split("\n").map((challenge, i) => (
              <li key={i}>{challenge}</li>
            ))}
          </ul>
        </motion.div>

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <h2 className="text-2xl font-semibold text-sky-400 mb-2">
            Tech Stack
          </h2>
          <div className="flex flex-wrap gap-3">
            {projectData.techStack?.map((tech, i) => (
              <span
                key={i}
                className="px-3 py-1 border border-sky-600 text-sky-300 rounded-md bg-sky-900/30 hover:bg-sky-600/30 transition"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Tools Used */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          <h2 className="text-2xl font-semibold text-purple-400 mb-2">
            Tools Used
          </h2>
          <div className="flex flex-wrap gap-3">
            {projectData.toolsUsed?.map((tool, i) => (
              <span
                key={i}
                className="px-3 py-1 border border-purple-600 text-purple-300 rounded-md bg-purple-900/30 hover:bg-purple-600/30 transition"
              >
                {tool}
              </span>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Additional Images */}
      {projectData.additionalImages?.length > 0 && (
        <section className="mt-12">
          <h2 className="text-2xl font-semibold text-sky-400 mb-4">
            Additional Images
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {projectData.additionalImages.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: i * 0.1 }}
                className="relative group overflow-hidden rounded-lg border border-gray-700"
              >
                <img
                  src={img}
                  alt={`${projectData.name}-${i}`}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <button
                  onClick={() => setSelectedImage(img)}
                  className="absolute bottom-2 right-2 px-3 py-1 text-xs bg-sky-600/80 text-white rounded-md opacity-0 group-hover:opacity-100 transition"
                >
                  View Full
                </button>
              </motion.div>
            ))}
          </div>
        </section>
      )}

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 backdrop-blur-sm bg-sky-600/20 flex justify-center items-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative max-w-4xl w-full px-4 border"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-3 right-3 text-white text-2xl hover:text-sky-400 transition"
              >
                <FiX />
              </button>
              <img
                src={selectedImage}
                alt="Full View"
                className="rounded-lg w-full max-h-[80vh] object-contain shadow-lg"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProjectDetails;
