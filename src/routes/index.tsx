import App from "@/App";
import DashboardLayout from "@/components/layout/DashboardLayout";

import Unauthorized from "@/pages/Unauthorized";
import { generateRoutes } from "@/utils/generateRoutes";
import { createBrowserRouter, Navigate } from "react-router";
import { adminSidebarItems } from "./adminSidebarItems";

import Homepage from "@/pages/Homepage";

import Profile from "@/pages/Profile";
import Features from "@/pages/Features";
import Contact from "@/pages/Contact";
import Faq from "@/pages/Faq";
import { AboutPage } from "@/pages/About";
import AdminDashboard from "@/pages/Admin/Dashboard";
import ProjectsPage from "@/pages/Projects";
import BlogPage from "@/pages/Blog";
import ServicesPage from "@/pages/Services";
import HireMe from "@/pages/HireMe";

export const router = createBrowserRouter([
  {
    Component: App,
    path: "/",
    children: [
      {
        Component: Homepage,
        index: true,
      },
      {
        Component: AboutPage,
        path: "about",
      },
      {
        Component: ProjectsPage,
        path: "projects",
      },
      {
        Component: BlogPage,
        path: "blog",
      },
      {
        Component: Profile,
        path: "profile",
      },
      {
        Component: Features,
        path: "features",
      },
      {
        Component: ServicesPage,
        path: "services",
      },
      {
        Component: HireMe,
        path: "hire-me",
      },
      {
        Component: Contact,
        path: "contact",
      },
      {
        Component: Faq,
        path: "faq",
      },
    ],
  },
  {
    Component: DashboardLayout, // Protected route for superAdmin
    path: "/admin",
    children: [
      { index: true, element: <Navigate to="/admin/dashboard" /> },
      { path: "dashboard", Component: AdminDashboard },
      ...generateRoutes(adminSidebarItems),
    ],
  },
  {
    Component: Unauthorized,
    path: "/unauthorized",
  },
]);
