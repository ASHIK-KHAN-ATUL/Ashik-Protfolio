import React, { useState } from "react";
import Title from "../../Shared/Title";
import { useLocation } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { motion, AnimatePresence } from "framer-motion";
import { FiX, FiCalendar } from "react-icons/fi";

const Blog = () => {
  const location = useLocation();
  const axiosPublic = useAxiosPublic();
  const [selectedPost, setSelectedPost] = useState(null);

  const { data: blogPosts = [] } = useQuery({
    queryKey: ["blog"],
    queryFn: async () => {
      const res = await axiosPublic.get("/blog");
      return res.data;
    },
  });

  // Skeleton Loader
  if (!blogPosts.length) {
    return (
      <div className="px-4 md:px-16 lg:px-24 pb-10">
        {location.pathname === "/blog" && (
          <Title Subtitle="My Insights" title="Blog & Articles" />
        )}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div
              key={i}
              className="rounded-xl overflow-hidden bg-gray-700/20 animate-pulse border border-gray-600 flex flex-col h-[400px]"
            >
              <div className="w-full h-48 bg-gray-600/30"></div>
              <div className="p-5 flex flex-col flex-1 gap-3">
                <div className="h-4 w-1/4 bg-gray-500/30 rounded"></div>
                <div className="h-6 w-full bg-gray-500/20 rounded"></div>
                <div className="h-4 w-full bg-gray-500/20 rounded"></div>
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
    <div className="px-4 md:px-10 lg:px-24 pb-10">
      {location.pathname === "/blog" && (
        <Title Subtitle="My Insights" title="Blog & Articles" />
      )}

      {/* Blog Grid */}
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mt-12">
        {blogPosts.map((post) => (
          <motion.div
            key={post._id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="rounded-xl overflow-hidden border border-sky-600/60 hover:shadow-lg hover:shadow-sky-800/30 transition duration-300 bg-gradient-to-br from-slate-900 via-indigo-900/20 to-sky-900/10 flex flex-col "
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-5 flex flex-col flex-1 ">
              <p className="flex items-center gap-5 text-sm text-gray-400">
                <FiCalendar />{" "}
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
              <h2 className="text-xl font-semibold text-sky-400 hover:text-white transition mt-2">
                {post.title}
              </h2>
              <p className="text-white/70 line-clamp-3 flex-1 overflow-hidden mt-3">
                {post.summary}
              </p>
              <button
                onClick={() => setSelectedPost(post)}
                className=" text-sky-400 font-semibold hover:underline mt-3"
              >
                Read More →
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal for Details */}
      <AnimatePresence>
        {selectedPost && (
          <motion.div
            className="fixed inset-0 bg-black/80 flex justify-center items-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="relative w-full max-w-3xl bg-gradient-to-br from-gray-900 via-slate-900 to-gray-800 border border-sky-500/40 rounded-xl p-6 shadow-2xl overflow-y-auto max-h-[90vh]"
            >
              <button
                onClick={() => setSelectedPost(null)}
                className="absolute top-3 right-3 text-gray-300 text-2xl hover:text-sky-400 transition"
              >
                <FiX />
              </button>
              <img
                src={selectedPost.image}
                alt={selectedPost.title}
                className="w-full h-60 object-cover rounded-lg mb-5"
              />
              <h2 className="text-3xl font-bold text-sky-400 mb-2">
                {selectedPost.title}
              </h2>
              <p className="text-sm text-gray-400 mb-4">
                <FiCalendar className="inline mr-2" />
                {new Date(selectedPost.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
              <p className="text-gray-300 leading-relaxed whitespace-pre-line">
                {selectedPost.fullContent || "Full content coming soon!"}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Blog;
