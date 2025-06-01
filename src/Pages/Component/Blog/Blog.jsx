import React from 'react';

import Title from '../../Shared/Title';
import { Link, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';

const Blog = () => {

    const location = useLocation();

    const blogPosts = [
        {
        id: 1,
        title: 'Mastering the MERN Stack in 2025',
        date: 'May 30, 2025',
        summary: 'Explore how to efficiently build full-stack apps with MongoDB, Express, React, and Node.js — with modern tools and patterns.',
        image: 'https://i.ibb.co/vx4S5t8H/1-1.webp',
        },
        {
        id: 2,
        title: '10 Tips to Improve Your React Projects',
        date: 'May 20, 2025',
        summary: 'From component structure to performance optimization, discover actionable tips that help you level up your React codebase.',
        image: 'https://i.ibb.co/XfkR9rNL/React-Project-Ideas.webp',
        },
        {
        id: 3,
        title: 'Why You Should Learn Backend as a Frontend Developer',
        date: 'May 10, 2025',
        summary: 'Learn how understanding backend logic can improve your frontend work and make you a more versatile developer.',
        image: 'https://i.ibb.co/9kGq00XY/1694082383728.png',
        },
    ];

    return (
    <div className="px-4 md:px-16 lg:px-24 pb-10">

      {
        location.pathname === '/blog' ? <Title Subtitle="My Insights" title="Blog & Articles" /> : ''
      }

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 ">
        {blogPosts.map((post) => (
          <div
            key={post.id}
            className="rounded-xl overflow-hidden border border-[#25a244] hover:shadow-xl transition duration-300"
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-5 flex flex-col gap-3">
              <p className="text-sm text-gray-400">{post.date}</p>
              <h2 className="text-xl font-bold text-[#25a244] hover:text-white duration-500 transition">{post.title}</h2>
              <p className="text-gray-500">{post.summary}</p>
              <Link
                onClick={()=> toast.info('Details Comming Soon')}
                className="mt-auto inline-block text-[#25a244] font-semibold hover:underline"
              >
                Read More →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
    );
};

export default Blog;