import React, { useContext, useState } from 'react';
import { CiMenuFries } from 'react-icons/ci';
import { FaBars } from 'react-icons/fa';
import { RxCross2 } from 'react-icons/rx';
import { NavLink } from 'react-router-dom';
import './Navbar.css'
import { AuthContext } from '../../Providers/AuthProvider';
import useAdmin from '../../Hooks/useAdmin';

const Navbar = () => {

    const [isClick, setIsClick] = useState(false);
    // console.log(isClick);
    const {user, logout} = useContext(AuthContext);

    const [isAdmin] = useAdmin();

    const handleLogout = () => {
        logout()
        .then(() => {
            console.log('Logged Out')
        }).catch(err => console.log(err))
    }

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
                        {
                            isAdmin && <NavLink to={'/dashboard/add-project'} className={'nav-link'}><li>DashBoard</li></NavLink>
                        }
                    </ul>
                </div>

                {
                    user?.email? 

                    <button onClick={handleLogout} className=' hidden md:block font-bold cursor-pointer text-red-400'>Logout</button> :

                    <NavLink to={'/login-register'} className=' hidden md:block font-bold'>Login</NavLink> 
                }

                <div className='md:hidden' >
                    <span onClick={()=>setIsClick(!isClick)} className=' text-2xl relative btn bg-transparent  z-10 '>
                        {
                            isClick ?

                            <span  className="transition-all duration-300 ease-in-out transform rotate-180 scale-110 text-sky-400 bg-tra"><RxCross2  /></span>
                            :
                            <span className="transition-all duration-300 ease-in-out transform rotate-0 scale-110 text-sky-400"><FaBars  /></span>
                        }
                            <div  className={` ${isClick?'block':'hidden' } absolute top-12 -right-0 w-60 bg-gradient-to-bl from-sky-400/20 via-indigo-500/30 to-purple-600/40 text-sky-400 border border-sky-400 text-base p-5 rounded-lg overflow-hidden `}>
                                <ul className=' flex flex-col  w-[60vh] text-start '>
                                    <NavLink to={'/'} className={'hover:bg-gradient-to-br from-sky-400/20 via-indigo-500/30 to-purple-600/20 duration-500 p-2 rounded-sm w-auto'}><li>Home</li></NavLink>
                                    <NavLink to={'/about'} className={'hover:bg-gradient-to-br from-sky-400/20 via-indigo-500/30 to-purple-600/20 duration-500 p-2 rounded-sm w-auto'}><li>About</li></NavLink>
                                    <NavLink to={'/project'}><li className={'hover:bg-gradient-to-br from-sky-400/20 via-indigo-500/30 to-purple-600/20 duration-500 p-2 rounded-sm w-auto'}>Project</li></NavLink>
                                    <NavLink to={'/blog'}><li className={'hover:bg-gradient-to-br from-sky-400/20 via-indigo-500/30 to-purple-600/20 duration-500 p-2 rounded-sm w-auto'}>Blog</li></NavLink>
                                    <NavLink to={'/contact'}><li className={'hover:bg-gradient-to-br from-sky-400/20 via-indigo-500/30 to-purple-600/20 duration-500 p-2 rounded-sm w-auto'}>Contact</li></NavLink>

                                    {
                                        isAdmin && <NavLink to={'dashboard/add-project'}><li className={'hover:bg-gradient-to-br from-sky-400/20 via-indigo-500/30 to-purple-600/20 duration-500 p-2 rounded-sm w-auto'}>DashBoard</li></NavLink>
                                    }

                                    {
                                    user?.email ? (
                                        <li>
                                        <button  onClick={handleLogout}  className="font-bold cursor-pointer p-2 hover:bg-gradient-to-br from-sky-400/20 via-indigo-500/30 to-purple-600/20 rounded-sm w-auto text-red-500" >  Logout
                                        </button>
                                        </li>
                                    ) : (
                                        <NavLink to={'/login-register'}   className="font-bold p-2 hover:bg-gradient-to-br from-sky-400/20 via-indigo-500/30 to-purple-600/20 rounded-sm w-auto block"  >  Login
                                        </NavLink>
                                    )
                                    }
                                    
                                </ul>
                            </div>
                    </span>

                </div>
            </div>
        </div>
    );
};

export default Navbar;