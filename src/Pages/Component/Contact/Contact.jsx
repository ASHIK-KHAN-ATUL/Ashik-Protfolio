import React, { useContext } from "react";
import Title from "../../Shared/Title";
import { AuthContext } from "../../../Providers/AuthProvider";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { toast } from "react-toastify";

const Contact = () => {
  const { user } = useContext(AuthContext);
  const axiosPublic = useAxiosPublic();

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const subject = form.subject.value;
    const message = form.message.value;

    const contactMessage = {
      name,
      email,
      subject,
      message,
      date: new Date(),
    };

    axiosPublic.post("/send-message", contactMessage).then((res) => {
      if (res.data.insertedId) {
        toast.success("Message sent successfully!");
        form.reset();
      } else {
        toast.error("Failed to send message.");
      }
    });
  };

  return (
    <div className=" px-4 md:px-20 py-10  ">
      {location.pathname === "/contact" ? (
        <Title
          Subtitle="Feel free to reach out for collaborations or just a friendly hello 😊"
          title="Contact Me"
        ></Title>
      ) : (
        ""
      )}

      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-gradient-to-bl from-purple-600/30 via-indigo-500/20 to-sky-500/30  border  border-y-purple-500/70 border-x-sky-500/70 p-10 rounded-lg"
      >
        <input
          type="text"
          required
          name="name"
          placeholder="Your Name"
          defaultValue={user?.displayName}
          className="border-b-2 p-3 border-[#0EA5E9] w-full focus:outline-none"
        />
        <input
          type="email"
          required
          name="email"
          placeholder="Your Email"
          defaultValue={user?.email}
          className="border-b-2 p-3 border-[#0EA5E9] w-full focus:outline-none"
        />
        <input
          type="text"
          required
          name="subject"
          placeholder="Subject"
          className="md:col-span-2 border-b-2 p-3 border-[#0EA5E9] w-full focus:outline-none"
        />
        <textarea
          placeholder="Your Message"
          required
          name="message"
          rows="5"
          className="md:col-span-2 border-b-2 p-3 border-[#0EA5E9] w-full focus:outline-none"
        ></textarea>
        <button
          type="submit"
          className="md:col-span-2 bg-[#0EA5E9] hover:bg-[#ab0ee9] text-white font-semibold py-3 px-6 rounded-md duration-300 cursor-pointer hover:scale-x-95"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
