import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { HiOutlineDotsVertical } from "react-icons/hi";

const DashNavbar = () => {

    const [isOpen, setIsOpen] = useState(false);

    return (
    <div className=" text-sky-400 border-b border-sky-400 px-6 py-3 flex justify-between items-center relative">
      <h1 className="text-xl md:text-2xl font-bold">Dashboard</h1>

      {/* Desktop Links */}
      <div className="space-x-2 hidden md:flex">
        <NavLink to="/dashboard/add-project" className=" duration-300 px-3 py-1 rounded font-semibold  " >  Add Project </NavLink>

        <NavLink to="/dashboard/add-blog" className=" duration-300 px-3 py-1 rounded font-semibold " >  Add Blog </NavLink>

        <NavLink to="/dashboard/messages" className=" duration-300 px-3 py-1 rounded font-semibold " > Messages </NavLink>
      </div>

      <div></div>

      {/* Mobile 3-dot menu */}
      <div  onClick={() => setIsOpen(!isOpen)} className="md:hidden border-2 rounded-md px-2 pt-1 cursor-pointer ">
        <button  className="text-2xl focus:outline-none cursor-pointer" >
          <HiOutlineDotsVertical />
        </button>

        {/* Dropdown */}
        {isOpen && (
          <div className="absolute top-12 right-4 w-40 bg-gradient-to-bl from-sky-400/30 via-indigo-500/40 to-purple-600/30 text-sky-400 border border-sky-400 p-2 rounded shadow-md z-50 font-semibold">
            <NavLink to="/dashboard/add-project" onClick={() => setIsOpen(false)} className="block px-2 py-1 rounded hover:bg-gradient-to-br from-sky-400/20 via-indigo-500/30 to-purple-600/20 duration-300" > + Project
            </NavLink>

            <NavLink to="/dashboard/add-blog" onClick={() => setIsOpen(false)} className="block px-2 py-1 rounded hover:bg-gradient-to-br from-sky-400/20 via-indigo-500/30 to-purple-600/20 duration-300" > + Blog
            </NavLink>

            <NavLink to="/dashboard/messages" onClick={() => setIsOpen(false)} className="block px-2 py-1 rounded hover:bg-gradient-to-br from-sky-400/20 via-indigo-500/30 to-purple-600/20 duration-300" > Messages
            </NavLink>
          </div>
        )}
      </div>
    </div>
    );
};

export default DashNavbar;