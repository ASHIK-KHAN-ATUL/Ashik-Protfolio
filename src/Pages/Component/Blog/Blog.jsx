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

  // ✅ TIME AGO FUNCTION
  const getTimeAgo = (date) => {
    const now = new Date();
    const postDate = new Date(date);
    const diff = Math.floor((now - postDate) / (1000 * 60 * 60 * 24));

    if (diff === 0) return "Today";
    if (diff === 1) return "1 day ago";
    if (diff < 7) return `${diff} days ago`;
    if (diff < 30) return `${Math.floor(diff / 7)} week ago`;
    if (diff < 365) return `${Math.floor(diff / 30)} month ago`;
    return `${Math.floor(diff / 365)} year ago`;
  };

  // Skeleton Loader
  if (!blogPosts.length) {
    return (
      <div className="px-4 md:px-16 lg:px-24 pb-10">
        {location.pathname === "/blog" && (
          <Title Subtitle="My Insights" title="Blog & Articles" />
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 md:gap-8 mt-12">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div
              key={i}
              className="w-full max-w-sm mx-auto sm:max-w-none rounded-xl overflow-hidden bg-gray-700/20 animate-pulse border border-gray-600 flex flex-col h-[400px]"
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

      {/* BLOG GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 md:gap-8 mt-12">
        {blogPosts.map((post) => (
          <motion.div
            key={post._id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ y: -8, scale: 1.02 }}
            transition={{ duration: 0.4 }}
            className="w-full max-w-sm mx-auto sm:max-w-none rounded-xl overflow-hidden border border-sky-600/60 hover:shadow-lg hover:shadow-sky-800/30 bg-gradient-to-br from-slate-900 via-indigo-900/20 to-sky-900/10 flex flex-col"
          >
            <motion.img
              src={post.image}
              alt={post.title}
              className="w-full h-48 object-cover"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
            />

            <div className="p-5 flex flex-col flex-1">
              {/* DATE + TIME AGO */}
              <div className="flex items-center justify-between text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <FiCalendar />
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </div>

                <span className="text-xs px-2 py-1 rounded-full bg-sky-500/10 text-sky-400 border border-sky-500/20">
                  {getTimeAgo(post.date)}
                </span>
              </div>

              <h2 className="text-xl font-semibold text-sky-400 hover:text-white transition mt-2">
                {post.title}
              </h2>

              <p className="text-white/70 line-clamp-3 flex-1 mt-3">
                {post.summary}
              </p>

              <button
                onClick={() => setSelectedPost(post)}
                className="text-sky-400 font-semibold hover:underline mt-3 text-left"
              >
                Read More →
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {selectedPost && (
          <motion.div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm flex justify-center items-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 30 }}
              transition={{ duration: 0.2 }}
              className="w-full max-w-3xl bg-[#0B0F19] border border-white/10 rounded-xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
            >
              {/* HEADER */}
              <div className="sticky top-0 z-10 flex items-center justify-between px-5 py-4 border-b border-white/10 bg-[#0B0F19]">
                <h2 className="text-white text-lg font-semibold truncate pr-10">
                  {selectedPost.title}
                </h2>

                <button
                  onClick={() => setSelectedPost(null)}
                  className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-red-500/20 text-gray-300 hover:text-red-400 transition"
                >
                  ✕
                </button>
              </div>

              {/* IMAGE */}
              <div className="w-full h-64 bg-black">
                <img
                  src={selectedPost.image}
                  alt={selectedPost.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* CONTENT */}
              <div className="p-6 overflow-y-auto">
                <p className="text-sm text-gray-400 mb-4">
                  📅{" "}
                  {new Date(selectedPost.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>

                <div className="text-gray-300 leading-relaxed whitespace-pre-line text-[15px]">
                  {selectedPost.fullContent || selectedPost.summary}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Blog;
