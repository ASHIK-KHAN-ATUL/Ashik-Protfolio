import React from 'react';
import DashNavbar from '../DashComponent/DashNavbar';
import { Outlet } from 'react-router-dom';

const DashBoardLayout = () => {
    return (
        <div className='mx-auto min-h-screen bg-black text-white'>
            <DashNavbar></DashNavbar>
            <Outlet></Outlet>
        </div>
    );
};

export default DashBoardLayout;