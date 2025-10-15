import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const ProjectAdd = () => {
  const { register, handleSubmit, reset } = useForm();
  const axiosSecure = useAxiosSecure();

  const onSubmit = async (data) => {
    try {
      // Upload main image
      const mainForm = new FormData();
      mainForm.append("image", data.mainImage[0]);
      const mainRes = await fetch(image_hosting_api, {
        method: "POST",
        body: mainForm,
      });
      const mainResult = await mainRes.json();
      const mainPhotoURL = mainResult.data.display_url;

      // Upload additional images
      const additionalImageURLs = [];
      if (data.additionalImages && data.additionalImages.length > 0) {
        for (let i = 0; i < data.additionalImages.length; i++) {
          const formData = new FormData();
          formData.append("image", data.additionalImages[i]);
          const res = await fetch(image_hosting_api, {
            method: "POST",
            body: formData,
          });
          const result = await res.json();
          if (result.success) additionalImageURLs.push(result.data.display_url);
        }
      }

      // Create project object
      const project = {
        name: data.name,
        shortDescription: data.shortDescription,
        fullDescription: data.fullDescription,
        link: data.link,
        repositoryLink: data.repositoryLink,
        image: mainPhotoURL,
        additionalImages: additionalImageURLs,
        tags: data.tags || [],
        techStack: data.techStack || [],
        toolsUsed: data.toolsUsed || [],
        dateCompleted: data.dateCompleted,
        role: data.role,
        features: data.features || [],
        challenges: data.challenges || "",
      };

      // Send to backend
      const res = await axiosSecure.post("/project", project);
      if (res.data.insertedId) {
        toast.success("Project added successfully!");
        reset();
      }
    } catch (error) {
      console.error(error);
      toast.error("Error adding project");
    }
  };

  // Predefined tech stack & tools
  const techOptions = [
    "HTML",
    "CSS",
    "TailwindCSS",
    "Bootstrap",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Vue",
    "Angular",
    "Node.js",
    "Express.js",
    "NestJS",
    "MongoDB",
    "PostgreSQL",
    "Firebase",
    "Python",
    "Django",
    "FastAPI",
    "Java",
    "C#",
    "PHP",
    "Laravel",
    "WordPress",
    "Docker",
    "Git",
  ];

  const toolOptions = [
    "Figma",
    "VS Code",
    "Postman",
    "Github",
    "GitLab",
    "Vercel",
    "Netlify",
  ];

  return (
    <div className="py-10">
      <div className="max-w-3xl mx-auto bg-gradient-to-bl from-purple-600/20 via-indigo-500/30 to-sky-500/20 border border-y-purple-500/50 border-x-sky-500/50 text-white p-6 rounded shadow">
        <h2 className="text-2xl mb-4">Add New Project</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Core Info */}
          <input
            {...register("name")}
            placeholder="Project Name"
            className="input input-bordered w-full bg-transparent"
          />
          <input
            {...register("shortDescription")}
            placeholder="Short Description"
            className="input input-bordered w-full bg-transparent"
          />
          <textarea
            {...register("fullDescription")}
            rows={5}
            placeholder="Full Description"
            className="textarea input-bordered w-full bg-transparent"
          />

          <input
            {...register("link")}
            placeholder="Live Preview Link"
            className="input input-bordered w-full bg-transparent"
          />
          <input
            {...register("repositoryLink")}
            placeholder="Repository Link"
            className="input input-bordered w-full bg-transparent"
          />

          {/* Images */}
          <input
            type="file"
            {...register("mainImage")}
            className="file-input w-full"
          />
          <input
            type="file"
            {...register("additionalImages")}
            className="file-input w-full"
            multiple
          />

          {/* Tags */}
          <input
            {...register("tags")}
            placeholder="Tags (comma separated)"
            className="input input-bordered w-full bg-transparent"
          />

          {/* Tech Stack */}
          <div>
            <label className="font-medium">Tech Stack:</label>
            <div className="flex flex-wrap gap-2 mt-1">
              {techOptions.map((tech) => (
                <label key={tech} className="flex items-center gap-1 text-sm">
                  <input
                    type="checkbox"
                    value={tech}
                    {...register("techStack")}
                    className="checkbox checkbox-xs"
                  />
                  <span>{tech}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Tools Used */}
          <div>
            <label className="font-medium">Tools Used:</label>
            <div className="flex flex-wrap gap-2 mt-1">
              {toolOptions.map((tool) => (
                <label key={tool} className="flex items-center gap-1 text-sm">
                  <input
                    type="checkbox"
                    value={tool}
                    {...register("toolsUsed")}
                    className="checkbox checkbox-xs"
                  />
                  <span>{tool}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Metadata */}
          <input
            type="date"
            {...register("dateCompleted")}
            className="input input-bordered w-full bg-transparent"
          />
          <input
            {...register("role")}
            placeholder="Role (Frontend/Backend/Fullstack)"
            className="input input-bordered w-full bg-transparent"
          />
          <textarea
            {...register("features")}
            rows={3}
            placeholder="Features (comma separated)"
            className="textarea input-bordered w-full bg-transparent"
          />
          <textarea
            {...register("challenges")}
            rows={3}
            placeholder="Challenges / Notes"
            className="textarea input-bordered w-full bg-transparent"
          />

          <div className="w-full flex justify-center">
            <button
              type="submit"
              className="btn w-[80%] bg-gradient-to-bl from-purple-600/20 via-indigo-500/30 to-sky-500/20 border border-y-purple-500/50 border-x-sky-500/50 mt-5"
            >
              Add Project
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProjectAdd;
