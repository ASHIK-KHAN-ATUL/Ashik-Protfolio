import React from "react";
import { createBrowserRouter } from "react-router-dom";
import HomeLayouts from "../HomeLayouts/HomeLayouts";
import Home from "../Pages/Home/Home";
import AboutSection from "../Pages/Component/AboutSection/AboutSection";
import Project from "../Pages/Component/Project/Project";
import Blog from "../Pages/Component/Blog/Blog";
import Contact from "../Pages/Component/Contact/Contact";
import LoginWithGoogle from "../Pages/LoginWithGoogle/LoginWithGoogle";
import DashBoardLayout from "../Dash/DashBoardLayout/DashBoardLayout";
import AdminRoute from "./AdminRoute";
import AddProject from "../Dash/DashComponent/AddProject";
import AddBlog from "../Dash/DashComponent/AddBlog";
import MessageSee from "../Dash/DashComponent/MessageSee";
import Resume from "../Pages/Component/Resume/Resume";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayouts></HomeLayouts>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <AboutSection></AboutSection>,
      },
      {
        path: "/project",
        element: <Project></Project>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/resume",
        element: <Resume></Resume>,
      },
      {
        path: "/login-register",
        element: <LoginWithGoogle></LoginWithGoogle>,
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <AdminRoute>
        <DashBoardLayout></DashBoardLayout>
      </AdminRoute>
    ),
    children: [
      {
        path: "add-project",
        element: <AddProject></AddProject>,
      },
      {
        path: "add-blog",
        element: <AddBlog></AddBlog>,
      },
      {
        path: "messages",
        element: <MessageSee></MessageSee>,
      },
    ],
  },
]);

export default Router;
