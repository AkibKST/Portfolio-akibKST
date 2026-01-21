//use this file into getSidebarItems.ts

import type { ISidebarItem } from "@/types";
import { lazy } from "react";

//UX and Performance Enhancements with Lazy Loading
const Dashboard = lazy(() => import("@/pages/Admin/Dashboard"));
const Analytics = lazy(() => import("@/pages/Admin/Analytics"));
const UserManagement = lazy(() => import("@/pages/Admin/UserManagement"));

import {
  BarChart3,
  Users,
  TrendingUp,
  Code2,
  FileText,
  Settings,
  Activity,
  Database,
  Shield,
  Zap,
} from "lucide-react";

export const adminSidebarItems: ISidebarItem[] = [
  {
    title: "Dashboard",
    items: [
      {
        title: "Overview",
        url: "/admin/dashboard",
        component: Dashboard,
        icon: BarChart3,
      },
      {
        title: "Analytics",
        url: "/admin/analytics",
        component: Analytics,
        icon: TrendingUp,
      },
    ],
  },
  {
    title: "Content Management",
    items: [
      {
        title: "Projects",
        url: "/admin/projects",
        icon: Code2,
      },
      {
        title: "Blog Articles",
        url: "/admin/blog",
        icon: FileText,
      },
      {
        title: "Testimonials",
        url: "/admin/testimonials",
        icon: Users,
      },
    ],
  },
  {
    title: "Performance",
    items: [
      {
        title: "Visitor Metrics",
        url: "/admin/metrics",
        icon: Activity,
      },
      {
        title: "Tech Stack",
        url: "/admin/tech-stack",
        icon: Zap,
      },
      {
        title: "Traffic Analysis",
        url: "/admin/traffic",
        icon: Database,
      },
    ],
  },
  {
    title: "User Management",
    items: [
      {
        title: "All Users",
        url: "/admin/users",
        component: UserManagement,
        icon: Users,
      },
      {
        title: "Permissions",
        url: "/admin/permissions",
        icon: Shield,
      },
    ],
  },
  {
    title: "Settings",
    items: [
      {
        title: "General Settings",
        url: "/admin/settings",
        icon: Settings,
      },
    ],
  },
];
