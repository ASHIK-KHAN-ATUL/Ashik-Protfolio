import React from 'react';
import image from '../../assets/pic/Mainpic.jpg'

import { Typewriter } from 'react-simple-typewriter';
import HeroSection from '../Component/HeroSection/HeroSection';
import AboutSection from '../Component/AboutSection/AboutSection';
import Project from '../Component/Project/Project';

const Home = () => {
    return (
        <div>
            <HeroSection></HeroSection>
            <AboutSection></AboutSection>
            <Project></Project>
        </div>
    );
};

export default Home; 