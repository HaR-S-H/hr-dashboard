"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { IconHome } from "@tabler/icons-react";
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

export function NavMain({ items }) {
  const router = useRouter();
  const [activeRoute, setActiveRoute] = useState("/");

  const handleClick = (route) => {
    setActiveRoute(route);
    router.push(route);
  };

  return (
    <SidebarGroup>
      <SidebarGroupContent className="flex flex-col gap-2">
        {/* Home */}
        <SidebarMenu>
          <SidebarMenuItem className="flex items-center gap-2">
            <SidebarMenuButton
              tooltip="Home"
              onClick={() => handleClick("/")}
              className={`min-w-8 duration-200 ease-linear hover:bg-primary/90 hover:text-primary-foreground active:bg-primary/90 active:text-primary-foreground ${
                activeRoute === "/" ? "bg-primary text-primary-foreground" : ""
              }`}
            >
              <IconHome />
              <span>Home</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>

        {/* Dynamic items */}
        <SidebarMenu>
          {items.map((item) => {
            const route = `/${item.title.toLowerCase()}`;
            const isActive = activeRoute === route;

            return (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton
                  tooltip={item.title}
                  onClick={() => handleClick(route)}
                  className={`min-w-8 duration-200 ease-linear hover:bg-primary/90 hover:text-primary-foreground active:bg-primary/90 active:text-primary-foreground ${
                    isActive ? "bg-primary text-primary-foreground" : ""
                  }`}
                >
                  {item.icon && <item.icon />}
                  <span>{item.title}</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            );
          })}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}
