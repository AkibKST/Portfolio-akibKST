/* eslint-disable @typescript-eslint/no-explicit-any */
import type { ISidebarItem } from "@/types";
import type { LucideIcon } from "lucide-react";
import {
  BarChart3,
  TrendingUp,
  Code2,
  FileText,
  Users,
  Mail,
  Bell,
  HelpCircle,
  Activity,
  Zap,
  Database,
  Shield,
  Lock,
  Briefcase,
  FileCheck,
  Settings,
  Sliders,
  User,
} from "lucide-react";

/**
 * Control Hub Configuration for Admin Sidebar
 * Manages all administrative features of the web application
 */

export interface AdminFeature {
  id: string;
  title: string;
  url: string;
  icon: LucideIcon;
  description: string;
  badge?: string | number;
  component?: React.ComponentType<any>;
}

export interface AdminSection {
  title: string;
  description?: string;
  items: AdminFeature[];
}

/**
 * Generate sidebar items for admin control house
 * Includes all management features like blog posts, messages, etc.
 */
export function generateSidebarItems(
  customSections?: AdminSection[],
): ISidebarItem[] {
  const defaultSections: AdminSection[] = customSections || [
    {
      title: "Dashboard",
      description: "Overview and analytics",
      items: [
        {
          id: "dashboard-overview",
          title: "Overview",
          url: "/admin/dashboard",
          icon: BarChart3,
          description: "Dashboard overview with key metrics",
        },
        {
          id: "dashboard-analytics",
          title: "Analytics",
          url: "/admin/analytics",
          icon: TrendingUp,
          description: "Detailed analytics and insights",
        },
      ],
    },
    {
      title: "Content Management",
      description: "Manage all content on the platform",
      items: [
        {
          id: "content-projects",
          title: "Projects",
          url: "/admin/projects",
          icon: Code2,
          description: "Manage portfolio projects",
        },
        {
          id: "content-blog",
          title: "Blog Articles",
          url: "/admin/blog",
          icon: FileText,
          description: "Manage blog posts and articles",
          badge: "12", // Number of pending articles
        },
        {
          id: "content-testimonials",
          title: "Testimonials",
          url: "/admin/testimonials",
          icon: Users,
          description: "Manage client testimonials",
        },
      ],
    },
    {
      title: "Communication",
      description: "Messages and notifications",
      items: [
        {
          id: "comm-messages",
          title: "Messages",
          url: "/admin/messages",
          icon: Mail,
          description: "Check and respond to messages",
          badge: "5", // Unread messages
        },
        {
          id: "comm-notifications",
          title: "Notifications",
          url: "/admin/notifications",
          icon: Bell,
          description: "Manage notifications",
        },
        {
          id: "comm-inquiries",
          title: "Inquiries",
          url: "/admin/inquiries",
          icon: HelpCircle,
          description: "View client inquiries",
          badge: "3",
        },
      ],
    },
    {
      title: "Performance",
      description: "Track performance metrics",
      items: [
        {
          id: "perf-metrics",
          title: "Visitor Metrics",
          url: "/admin/metrics",
          icon: Activity,
          description: "Track visitor statistics",
        },
        {
          id: "perf-tech",
          title: "Tech Stack",
          url: "/admin/tech-stack",
          icon: Zap,
          description: "Manage technology stack",
        },
        {
          id: "perf-traffic",
          title: "Traffic Analysis",
          url: "/admin/traffic",
          icon: Database,
          description: "Analyze traffic patterns",
        },
      ],
    },
    {
      title: "User Management",
      description: "Manage users and permissions",
      items: [
        {
          id: "user-all",
          title: "All Users",
          url: "/admin/users",
          icon: Users,
          description: "View all users",
        },
        {
          id: "user-permissions",
          title: "Permissions",
          url: "/admin/permissions",
          icon: Shield,
          description: "Manage user permissions",
        },
        {
          id: "user-roles",
          title: "Roles",
          url: "/admin/roles",
          icon: Lock,
          description: "Manage user roles",
        },
      ],
    },
    {
      title: "Business",
      description: "Business and sales management",
      items: [
        {
          id: "business-inquiries",
          title: "Hire Requests",
          url: "/admin/hire-requests",
          icon: Briefcase,
          description: "View hire requests from clients",
          badge: "2",
        },
        {
          id: "business-proposals",
          title: "Proposals",
          url: "/admin/proposals",
          icon: FileCheck,
          description: "Manage sent proposals",
        },
        {
          id: "business-services",
          title: "Services",
          url: "/admin/services",
          icon: Settings,
          description: "Manage services offered",
        },
      ],
    },
    {
      title: "Settings",
      description: "System and account settings",
      items: [
        {
          id: "settings-general",
          title: "General Settings",
          url: "/admin/settings",
          icon: Sliders,
          description: "General system settings",
        },
        {
          id: "settings-profile",
          title: "Profile Settings",
          url: "/admin/profile-settings",
          icon: User,
          description: "Update profile information",
        },
        {
          id: "settings-security",
          title: "Security",
          url: "/admin/security",
          icon: Lock,
          description: "Manage security settings",
        },
      ],
    },
  ];

  return defaultSections.map((section) => ({
    title: section.title,
    items: section.items.map((item) => ({
      title: item.title,
      url: item.url,
      icon: item.icon,
      component: item.component,
    })),
  }));
}

/**
 * Get sidebar item by ID
 * Useful for dynamic feature management
 */
export function getSidebarItemById(
  sidebarItems: ISidebarItem[],
  itemId: string,
): AdminFeature | undefined {
  for (const section of sidebarItems) {
    const found = section.items.find((item) => item.title === itemId);
    if (found) {
      return found as AdminFeature;
    }
  }
  return undefined;
}

/**
 * Get all sidebar items flattened
 * Useful for searching or filtering
 */
export function getAllSidebarItems(
  sidebarItems: ISidebarItem[],
): AdminFeature[] {
  const allItems: AdminFeature[] = [];
  sidebarItems.forEach((section) => {
    section.items.forEach((item) => {
      allItems.push(item as AdminFeature);
    });
  });
  return allItems;
}

/**
 * Filter sidebar items by search term
 */
export function searchSidebarItems(
  sidebarItems: ISidebarItem[],
  searchTerm: string,
): AdminFeature[] {
  const allItems = getAllSidebarItems(sidebarItems);
  return allItems.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase()),
  );
}
