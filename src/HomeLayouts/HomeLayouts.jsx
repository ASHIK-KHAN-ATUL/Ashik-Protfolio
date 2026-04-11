import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Navbar/Navbar";
import "./Homelayouts.css";

const HomeLayouts = () => {
  return (
    <div className="mx-auto min-h-screen bg-black text-white overflow-x-hidden animate-fadeIn">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default HomeLayouts;
