/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import Logo from "@/assets/icons/Logo";
import { Link } from "react-router";
import { useUserInfoQuery } from "@/redux/features/auth/auth.api";
import { getSidebarItems } from "@/utils/getSidebarItems";
import { adminSidebarItems } from "@/routes/adminSidebarItems";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { data: userData } = useUserInfoQuery(undefined);

  // Get user role from API or fallback to showing admin items
  const userRole = userData?.data?.data?.role;

  // Use getSidebarItems if role exists, otherwise show adminSidebarItems as default
  const navMain = userRole ? getSidebarItems(userRole) : adminSidebarItems;

  return (
    <Sidebar {...props}>
      <SidebarHeader className="items-center">
        <Link to="/">
          <Logo />
        </Link>
      </SidebarHeader>
      <SidebarContent>
        {/* We create a SidebarGroup for each parent. */}
        {navMain && navMain.length > 0 ? (
          navMain.map((item) => (
            <SidebarGroup key={item.title}>
              <SidebarGroupLabel>{item.title}</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {item.items?.map((subItem: any) => (
                    <SidebarMenuItem key={subItem.title}>
                      <SidebarMenuButton asChild>
                        <Link to={subItem.url}>
                          {subItem.icon && <subItem.icon />}
                          <span>{subItem.title}</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          ))
        ) : (
          <div className="p-4 text-sm text-muted-foreground">
            <p>
              No menu items available. Please ensure you're logged in as an
              admin.
            </p>
          </div>
        )}
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
