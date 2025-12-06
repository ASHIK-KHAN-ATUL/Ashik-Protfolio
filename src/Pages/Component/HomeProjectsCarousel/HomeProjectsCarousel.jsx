import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FiExternalLink, FiInfo } from "react-icons/fi";
import { Link } from "react-router-dom";

const HomeProjectsCarousel = () => {
  const axiosPublic = useAxiosPublic();
  const [active, setActive] = useState(1);

  const { data: projects = [] } = useQuery({
    queryKey: ["homeProjects"],
    queryFn: async () => {
      const res = await axiosPublic.get("/project");
      return res.data;
    },
  });

  // Auto slide
  useEffect(() => {
    if (!projects.length) return;

    const slider = setInterval(() => {
      setActive((prev) => (prev + 1) % projects.length);
    }, 3000);

    return () => clearInterval(slider);
  }, [projects]);

  if (!projects.length)
    return (
      <div className="flex justify-center gap-6 py-14 overflow-x-auto">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="w-80 h-72 bg-gray-700/20 animate-pulse rounded-xl shadow-lg"
          ></div>
        ))}
      </div>
    );

  return (
    <div className="relative w-full flex flex-col justify-center items-center overflow-hidden py-14">
      {/* Carousel Container */}
      <div className="relative h-[480px] w-full flex justify-center items-center">
        {projects.map((project, index) => {
          const offset = index - active;

          return (
            <motion.div
              key={project._id}
              onClick={() => setActive(index)}
              className="absolute cursor-pointer"
              drag="x" // <-- dragable
              dragConstraints={{ left: -380, right: 380 }} // adjust based on card width
              dragElastic={0.2} // smooth dragging
              onDragEnd={(e, info) => {
                // decide which card should be active based on drag distance
                if (info.offset.x < -50) {
                  setActive((prev) => (prev + 1) % projects.length);
                } else if (info.offset.x > 50) {
                  setActive(
                    (prev) => (prev - 1 + projects.length) % projects.length
                  );
                }
              }}
              animate={{
                x: offset * 380,
                scale: offset === 0 ? 1 : 0.75,
                rotateY: offset === 0 ? 0 : offset > 0 ? -45 : 45,
                opacity: offset === 0 ? 1 : 0.4,
                zIndex: 20 - Math.abs(offset),
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              {/* Card */}
              <div className="shadow-xl w-[360px] rounded-xl overflow-hidden bg-gradient-to-bl from-purple-600/20 via-indigo-500/10 to-sky-500/20 border border-sky-500/50 flex flex-col">
                {/* Image */}
                <div className="overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-56 object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>

                <div className="p-5 flex flex-col flex-1">
                  <h2 className="text-xl font-bold text-sky-500">
                    {project.name}
                  </h2>

                  <p className="text-gray-400 text-sm mt-1 line-clamp-2">
                    {project.shortDescription}
                  </p>

                  {/* Buttons */}
                  <div className="mt-auto flex gap-3 pt-4">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-1.5 py-1.5 px-3 border border-sky-500 text-sky-500 rounded hover:bg-sky-500 hover:text-white transition"
                    >
                      <FiExternalLink size={16} /> Preview
                    </a>

                    <Link
                      to={`/project/details/${project._id}`}
                      className="flex-1 flex items-center justify-center gap-1.5 py-1.5 px-3 border border-purple-500 text-purple-500 rounded hover:bg-purple-500 hover:text-white transition"
                    >
                      <FiInfo size={16} /> Details
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* View All Button */}
      <Link
        to="/project"
        className="mt-12 px-6 py-2 rounded-full bg-gradient-to-r from-sky-600 to-purple-600 text-white font-semibold shadow-lg hover:scale-110 transition-all duration-300"
      >
        View All Projects →
      </Link>
    </div>
  );
};

export default HomeProjectsCarousel;
