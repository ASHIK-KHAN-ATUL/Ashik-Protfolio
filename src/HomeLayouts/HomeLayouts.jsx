import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Pages/Navbar/Navbar';

const HomeLayouts = () => {
    return (
        <div className='mx-auto min-h-screen bg-black text-white'>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default HomeLayouts;