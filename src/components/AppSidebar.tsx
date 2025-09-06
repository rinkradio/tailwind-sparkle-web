import { useState } from "react";
import { 
  Home, 
  Info, 
  Briefcase, 
  FolderOpen, 
  Users, 
  Mail,
  Menu,
  X
} from "lucide-react";
import { useLocation } from "react-router-dom";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";

const navigationItems = [
  { title: "Home", url: "#home", icon: Home },
  { title: "About", url: "#about", icon: Info },
  { title: "Services", url: "#services", icon: Briefcase },
  { title: "Portfolio", url: "#portfolio", icon: FolderOpen },
  { title: "Team", url: "#team", icon: Users },
  { title: "Contact", url: "#contact", icon: Mail },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const location = useLocation();
  const isCollapsed = state === "collapsed";

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Sidebar className={`border-r border-border ${isCollapsed ? "w-16" : "w-64"} transition-all duration-300`}>
      <SidebarContent className="bg-card">
        {/* Logo Section */}
        <div className="p-4 border-b border-border">
          {!isCollapsed ? (
            <div className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              WebCraft
            </div>
          ) : (
            <div className="text-xl font-bold text-primary">
              W
            </div>
          )}
        </div>

        <SidebarGroup className="px-2 py-4">
          <SidebarGroupLabel className={isCollapsed ? "sr-only" : ""}>
            Navigation
          </SidebarGroupLabel>
          
          <SidebarGroupContent>
            <SidebarMenu className="space-y-2">
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    onClick={() => scrollToSection(item.url)}
                    className="w-full justify-start hover:bg-accent hover:text-accent-foreground transition-colors group"
                    tooltip={isCollapsed ? item.title : undefined}
                  >
                    <item.icon className="w-5 h-5 text-primary group-hover:text-accent-foreground" />
                    {!isCollapsed && (
                      <span className="ml-3 font-medium">{item.title}</span>
                    )}
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* CTA Section */}
        {!isCollapsed && (
          <div className="mt-auto p-4 border-t border-border">
            <Button variant="hero" className="w-full" size="sm">
              Get Started
            </Button>
          </div>
        )}
        
        {isCollapsed && (
          <div className="mt-auto p-2">
            <Button variant="hero" size="icon" className="w-full">
              <Mail className="w-4 h-4" />
            </Button>
          </div>
        )}
      </SidebarContent>
    </Sidebar>
  );
}