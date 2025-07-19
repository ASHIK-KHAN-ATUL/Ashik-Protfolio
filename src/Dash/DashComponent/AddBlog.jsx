import React from 'react';
import { useForm } from 'react-hook-form';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import { toast } from 'react-toastify';

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddBlog = () => {
  const { register, handleSubmit, reset } = useForm();
  const axiosSecure = useAxiosSecure();

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append('image', data.image[0]);

    const res = await fetch(image_hosting_api, {
      method: 'POST',
      body: formData,
    });

    const result = await res.json();

    if (result.success) {
      const photoURL = result.data.display_url;

      const blog = {
        title: data.title,
        date: new Date(),
        summary: data.summary,
        image: photoURL,
      };

      axiosSecure.post('/blog', blog).then((res) => {
        if (res.data.insertedId) {
          toast.success('Blog added successfully!');
          reset();
        } else {
          toast.error('Failed to add blog');
        }
      });
    }
  };

  return (
    <div className="py-20">
      <div className="max-w-lg mx-auto bg-gradient-to-bl from-purple-600/20 via-indigo-500/30 to-sky-500/20 border border-y-purple-500/50 border-x-sky-500/50 text-white p-6 rounded shadow">
        <h2 className="text-2xl mb-4">Add New Blog</h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <input
            {...register('title')}
            placeholder="Blog Title"
            className="input input-bordered w-full focus:outline-none border-sky-500 bg-transparent"
          />

          <textarea
            {...register('summary')}
            rows={3}
            placeholder="Summary"
            className="textarea input input-bordered w-full focus:outline-none border-sky-500 bg-transparent resize-none overflow-y-auto break-words"
          />

          <input
            type="file"
            {...register('image')}
            className="file-input file-input-bordered w-full focus:outline-none border-sky-500 bg-transparent"
          />

          <div className="w-full flex justify-center">
            <button
              type="submit"
              className="btn w-[80%] hover:w-[75%] ease-in-out transform duration-300 cursor-pointer transition-all bg-gradient-to-bl from-purple-600/20 via-indigo-500/30 to-sky-500/20 border border-y-purple-500/50 border-x-sky-500/50 mt-5"
            >
              Add Blog
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddBlog;
