import React from 'react';
import Title from '../../Shared/Title';

const Contact = () => {
    return (
        <div className=" px-4 md:px-20 py-10  ">

            {
                location.pathname === '/contact' ? 
                <Title Subtitle='Feel free to reach out for collaborations or just a friendly hello 😊' title='Contact Me'></Title> : '' 
            }

            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                    type="text"
                    placeholder="Your Name"
                    className="border-b-2 p-3 border-[#25a244] w-full focus:outline-none"
                />
                <input
                    type="email"
                    placeholder="Your Email"
                    className="border-b-2 p-3 border-[#25a244] w-full focus:outline-none"
                />
                <input
                    type="text"
                    placeholder="Subject"
                    className="md:col-span-2 border-b-2 p-3 border-[#25a244] w-full focus:outline-none"
                />
                <textarea
                    placeholder="Your Message"
                    rows="5"
                    className="md:col-span-2 border-b-2 p-3 border-[#25a244] w-full focus:outline-none"
                ></textarea>
                <button
                    type="submit"
                    className="md:col-span-2 bg-[#25a244] hover:bg-[#1f8a3e] text-white font-semibold py-3 px-6 rounded-md duration-300"
                >
                    Send Message
                </button>
            </form>
        </div>
    );
};

export default Contact;