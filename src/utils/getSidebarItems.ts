//use this function to get sidebar items based on user role and  also use this into app-sidebar.tsx

import { role } from "@/constants/role";
import { adminSidebarItems } from "@/routes/adminSidebarItems";

import type { TRole } from "@/types";

export const getSidebarItems = (userRole: TRole) => {
  switch (userRole) {
    case role.superAdmin:
      return [...adminSidebarItems];
    case role.admin:
      return [...adminSidebarItems];

    default:
      return [];
  }
};
