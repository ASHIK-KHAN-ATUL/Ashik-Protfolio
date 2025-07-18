import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import HomeLayouts from '../HomeLayouts/HomeLayouts';
import Home from '../Pages/Home/Home';
import AboutSection from '../Pages/Component/AboutSection/AboutSection';
import Project from '../Pages/Component/Project/Project';
import Blog from '../Pages/Component/Blog/Blog';
import Contact from '../Pages/Component/Contact/Contact';
import LoginWithGoogle from '../Pages/LoginWithGoogle/LoginWithGoogle';

export const Router = createBrowserRouter([
  {
    path: "/",
    element:<HomeLayouts></HomeLayouts>,
    children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/about',
            element: <AboutSection></AboutSection>
        },
        {
          path: '/project',
          element: <Project></Project>
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        },
        {
          path: '/contact',
          element: <Contact></Contact>
        },
        {
          path: '/login-register',
          element: <LoginWithGoogle></LoginWithGoogle>
        }
    ]
  },
]);

export default Router;