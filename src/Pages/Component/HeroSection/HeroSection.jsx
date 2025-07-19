import React from 'react';
import image1 from '../../../assets/pic/Profile.png'
import { Typewriter } from 'react-simple-typewriter';

const HeroSection = () => {
    return (
            <div className='relative'> 
                    <div className='min-h-screen px-6 flex justify-end items-center '>
                        <img className='grayscale  max-h-[70vh] brightness-80 mask-b-from-20% mask-b-to-100% ' src={image1} alt="" />
                    </div>

                    <div className='absolute top-0 bottom-0 left-0 right-0 flex flex-col items-center justify-center md:pr-[20%]  '>
                        <p className='text-5xl font-bold'>ASHIK KHAN <span>ATUL</span></p>
                        <h1 className="text-xl  font-semibold scale-95">
                            I AM A{' '}
                            <span className="text-[#0EA5E9]">
                            <Typewriter
                                words={['JUNIOR MERN STACK DEVELOPER']}
                                loop={true}
                                cursor
                                cursorStyle="|"
                                typeSpeed={100}
                                deleteSpeed={60}
                                delaySpeed={1200}
                            />
                            </span>
                        </h1>
                    </div>
            </div>
    );
};

export default HeroSection;