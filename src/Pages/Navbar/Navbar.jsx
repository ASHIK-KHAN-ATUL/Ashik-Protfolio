import React, { useState } from 'react';
import { CiMenuFries } from 'react-icons/ci';
import { FaBars } from 'react-icons/fa';
import { RxCross2 } from 'react-icons/rx';
import { NavLink } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {

    const [isClick, setIsClick] = useState(false);
    // console.log(isClick)

    return (
        <div className='  p-2 px-10'>
            <div className='flex justify-between items-center'>
                <span className='text-3xl font-bold'>ASHIK</span>
                <div className='hidden md:block'>
                    <ul className='flex gap-5  font-semibold'>
                        <NavLink to={'/'} className={'nav-link'}><li>Home</li></NavLink>
                        <NavLink to={'/about'} className={'nav-link'}><li>About</li></NavLink>
                        <NavLink to={'/project'} className={'nav-link'}><li>Project</li></NavLink>
                        <NavLink to={'/blog'} className={'nav-link'}><li>Blog</li></NavLink>
                        <NavLink to={'/contact'} className={'nav-link'}><li>Contact</li></NavLink>
                    </ul>
                </div>
                <div >
                    <span onClick={()=>setIsClick(!isClick)} className='md:hidden text-2xl relative btn bg-transparent  z-10 '>
                        {
                            isClick ?

                            <span  className="transition-all duration-300 ease-in-out transform rotate-180 scale-110 text-[#2dc653] bg-tra"><RxCross2  /></span>
                            :
                            <span className="transition-all duration-300 ease-in-out transform rotate-0 scale-110 text-[#2dc653]"><FaBars  /></span>
                        }
                            <div  className={` ${isClick?'block':'hidden' } absolute top-12 -right-0 w-60 bg-black/80 text-[#2dc653] border  text-base p-5 rounded-lg overflow-hidden `}>
                                <ul className=' flex flex-col  w-[60vh] text-start '>
                                    <NavLink to={'/'} className={'hover:bg-white duration-500 p-2 rounded-sm w-auto'}><li>Home</li></NavLink>
                                    <NavLink to={'/about'} className={'hover:bg-white duration-500 p-2 rounded-sm w-auto'}><li>About</li></NavLink>
                                    <NavLink to={'/project'}><li className={'hover:bg-white duration-500 p-2 rounded-sm w-auto'}>Project</li></NavLink>
                                    <NavLink to={'/blog'}><li className={'hover:bg-white duration-500 p-2 rounded-sm w-auto'}>Blog</li></NavLink>
                                    <NavLink to={'/contact'}><li className={'hover:bg-white duration-500 p-2 rounded-sm w-auto'}>Contact</li></NavLink>
                                </ul>
                            </div>
                    </span>

                </div>
            </div>
        </div>
    );
};

export default Navbar;