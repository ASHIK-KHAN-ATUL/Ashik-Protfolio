import React from 'react';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';


const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`

const AddProject = () => {

    const { register, handleSubmit, reset } = useForm();
    const axiosSecure = useAxiosSecure();

    const onSubmit = async(data) => {

        console.log(data);

        const formData = new FormData();
        formData.append('image', data.image[0]);
        const res = await fetch(image_hosting_api, {
            method: "POST",
            body: formData,
        })

        const result = await res.json();
        console.log(result);

        if(result.success){
            const photoURL = result.data.display_url;

            const project = {
                name: data.name,
                description: data.description,
                link: data.link,
                image: photoURL,
                tags: data.tags || []
            }
            console.log("Project : ", project);

            axiosSecure.post('/project', project)
            .then(res => {
                if(res.data.insertedId){
                    console.log("Project added in Database");
                    toast.success("Project added in Database");
                    reset();

                }
            })
        }
    }

    return (
        <div className='py-20'>
            <div className="max-w-lg mx-auto  bg-gradient-to-bl from-purple-600/20 via-indigo-500/30 to-sky-500/20 border  border-y-purple-500/50 border-x-sky-500/50 text-white p-6 rounded shadow ">

            <h2 className="text-2xl mb-4">Add New Project</h2>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

                <input {...register('name')} placeholder="Project Name" className="input input-bordered w-full focus:outline-none border-sky-500 bg-transparent  " />

                <textarea {...register('description')} rows={3} placeholder="Description" className="textarea input input-bordered w-full focus:outline-none border-sky-500 bg-transparent resize-none overflow-y-auto break-words" />

                <input {...register('link')} placeholder="Preview Link" className="input input-bordered w-full focus:outline-none border-sky-500 bg-transparent " />

                <div className="space-y-2">
                    <label className="block font-medium">Tags:</label>
                    <div className="flex flex-wrap gap-3">
                        {[
                        'HTML', 'CSS', 'TailwindCSS', 'Bootstrap',
                        'JavaScript', 'TypeScript', 'React', 'Next.js', 'Vue', 'Angular', 'Node.js', 'Express.js', 'NestJS', 'MongoDB', 'PostgreSQL',  'Firebase', 'Python', 'Django',  'FastAPI', 'Java',  'C#',  'PHP', 'Laravel', 'WordPress','DevOps', 'Docker',
                        ].map(tag => (
                        <label key={tag} className="flex items-center gap-1 text-sm">
                            <input
                            type="checkbox"
                            value={tag}
                            {...register('tags')}
                            className="checkbox checkbox-xs checkbox-primary"
                            />
                            <span>{tag}</span>
                        </label>
                        ))}
                    </div>
                </div>

                <input type="file" {...register('image')} className="file-input file-input-bordered w-full focus:outline-none border-sky-500 bg-transparent " />

                <div className='w-full flex justify-center'>
                    <button type="submit" className="btn  w-[80%] hover:w-[75%] ease-in-out transform duration-300 cursor-pointer transition-all  bg-gradient-to-bl from-purple-600/20 via-indigo-500/30 to-sky-500/20 border  border-y-purple-500/50 border-x-sky-500/50 mt-5">Add Project</button>
                </div>
            </form>
            
            </div>
        </div>
    );
};

export default AddProject;