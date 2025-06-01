import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import HomeLayouts from '../HomeLayouts/HomeLayouts';
import Home from '../Pages/Home/Home';
import AboutSection from '../Pages/Component/AboutSection/AboutSection';
import Project from '../Pages/Component/Project/Project';

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
        }
    ]
  },
]);

export default Router;