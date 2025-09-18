import React from 'react';

import Title from '../../Shared/Title';
import { Link, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from '../../../Hooks/useAxiosPublic';

const Blog = () => {

  const location = useLocation();
  const axiosPublic = useAxiosPublic();

  const {data:blogPosts=[]} = useQuery({
      queryKey: ['blog'],
      queryFn: async() => {
          const res = await axiosPublic.get('/blog')
          return res.data
      }
  })


    return (
    <div className="px-4 md:px-16 lg:px-24 pb-10">

      {
        location.pathname === '/blog' ? <Title Subtitle="My Insights" title="Blog & Articles" /> : ''
      }

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 ">
        {blogPosts.map((post) => (
          <div
            key={post._id}
            className="rounded-xl overflow-hidden border border-[#0EA5E9] hover:shadow-xl transition duration-300 bg-gradient-to-bl from-purple-600/20 via-indigo-500/10 to-sky-500/20   border-y-purple-500/70 border-x-sky-500/70 "
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-5 flex flex-col gap-3">
              <p className="text-sm text-white/60"> {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}</p>
              <h2 className="text-xl font-bold text-sky-500 hover:text-white duration-500 transition">{post.title}</h2>
              <p className="text-white/60">{post.summary}</p>
              <Link
                onClick={()=> toast.info('Details Comming Soon')}
                className="mt-auto inline-block text-sky-500 font-semibold hover:underline"
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