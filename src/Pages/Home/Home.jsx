import React from "react";
import image from "../../assets/pic/Mainpic.jpg";

import { Typewriter } from "react-simple-typewriter";
import HeroSection from "../Component/HeroSection/HeroSection";
import AboutSection from "../Component/AboutSection/AboutSection";
import Project from "../Component/Project/Project";
import Blog from "../Component/Blog/Blog";
import Contact from "../Component/Contact/Contact";
import Footer from "../Footer/Footer";
import SkillsCircle from "../Component/SkillsCircle/SkillsCircle";

const Home = () => {
  return (
    <div className="flex flex-col gap-20">
      <HeroSection></HeroSection>
      <AboutSection></AboutSection>
      <SkillsCircle></SkillsCircle>
      <Project></Project>
      <Contact></Contact>
      <Blog></Blog>
      <Footer></Footer>
    </div>
  );
};

export default Home;
