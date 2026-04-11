import React, { useContext, useState } from "react";
import Title from "../../Shared/Title";
import { AuthContext } from "../../../Providers/AuthProvider";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { toast } from "react-toastify";
import { motion } from "framer-motion";

const Contact = () => {
  const { user } = useContext(AuthContext);
  const axiosPublic = useAxiosPublic();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;

    const contactMessage = {
      name: form.name.value,
      email: form.email.value,
      subject: form.subject.value,
      message: form.message.value,
      date: new Date(),
    };

    try {
      setLoading(true);

      const res = await axiosPublic.post("/send-message", contactMessage);

      if (res.data.insertedId) {
        toast.success("Message sent successfully!");
        form.reset();
      } else {
        toast.error("Failed to send message.");
      }
    } catch (err) {
      toast.error("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="px-4 md:px-20 py-10">
      {location.pathname === "/contact" && (
        <Title
          Subtitle="Feel free to reach out for collaborations or just a friendly hello "
          title="Contact Me"
        />
      )}

      {/* FORM CARD */}
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 
        bg-gradient-to-bl from-purple-600/30 via-indigo-500/20 to-sky-500/30  
        border border-y-purple-500/70 border-x-sky-500/70 
        p-6 md:p-10 rounded-lg shadow-lg"
      >
        {/* NAME */}
        <motion.input
          whileFocus={{ scale: 1.02 }}
          type="text"
          required
          name="name"
          defaultValue={user?.displayName}
          placeholder="Your Name"
          className="border-b-2 p-3 border-[#0EA5E9] w-full bg-transparent focus:outline-none text-white placeholder-gray-300 transition"
        />

        {/* EMAIL */}
        <motion.input
          whileFocus={{ scale: 1.02 }}
          type="email"
          required
          name="email"
          defaultValue={user?.email}
          placeholder="Your Email"
          className="border-b-2 p-3 border-[#0EA5E9] w-full bg-transparent focus:outline-none text-white placeholder-gray-300 transition"
        />

        {/* SUBJECT */}
        <motion.input
          whileFocus={{ scale: 1.02 }}
          type="text"
          required
          name="subject"
          placeholder="Subject"
          className="md:col-span-2 border-b-2 p-3 border-[#0EA5E9] w-full bg-transparent focus:outline-none text-white placeholder-gray-300 transition"
        />

        {/* MESSAGE */}
        <motion.textarea
          whileFocus={{ scale: 1.02 }}
          name="message"
          rows="5"
          required
          placeholder="Your Message"
          className="md:col-span-2 border-b-2 p-3 border-[#0EA5E9] w-full bg-transparent focus:outline-none text-white placeholder-gray-300 transition resize-none"
        ></motion.textarea>

        {/* BUTTON */}
        <motion.button
          type="submit"
          disabled={loading}
          whileHover={{ scale: loading ? 1 : 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="md:col-span-2 bg-[#0EA5E9] hover:bg-[#ab0ee9] text-white font-semibold py-3 px-6 rounded-md duration-300 cursor-pointer flex items-center justify-center gap-2"
        >
          {loading ? "Sending..." : "Send Message"}
        </motion.button>
      </motion.form>
    </div>
  );
};

export default Contact;
