import {
  Home,
  Backpack,
  ShoppingCart,
  Trophy,
  ScrollText,
  User,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <img src="src/components/image.png" alt="logo" className="rounded-full" />
        {/* Logo */}
        <div className="px-4 py-6 border-b">
          <h1 className="text-2xl font-bold text-violet-600">
            Cyber RPG
          </h1>
          <p className="text-xs text-muted-foreground">
            Adventure Dashboard
          </p>
        </div>

        {/* Navigation */}
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>

          <SidebarMenu>

            <SidebarMenuItem>
              <SidebarMenuButton>
                <Home className="h-8 w-8" />
                <span>Dashboard</span>
              </SidebarMenuButton>
            </SidebarMenuItem>

            <SidebarMenuItem>
              <SidebarMenuButton>
                <Backpack className="h-8 w-8" />
                <span>Inventory</span>
              </SidebarMenuButton>
            </SidebarMenuItem>

            <SidebarMenuItem>
              <SidebarMenuButton>
                <ShoppingCart className="h-8 w-8" />
                <span>Shop</span>
              </SidebarMenuButton>
            </SidebarMenuItem>

            <SidebarMenuItem>
              <SidebarMenuButton>
                <ScrollText className="h-8 w-8" />
                <span>Missions</span>
              </SidebarMenuButton>
            </SidebarMenuItem>

            <SidebarMenuItem>
              <SidebarMenuButton>
                <Trophy className="h-8 w-8" />
                <span>Leaderboard</span>
              </SidebarMenuButton>
            </SidebarMenuItem>

            <SidebarMenuItem>
              <SidebarMenuButton>
                <User className="h-8 w-8" />
                <span>Profile</span>
              </SidebarMenuButton>
            </SidebarMenuItem>

          </SidebarMenu>
        </SidebarGroup>

      </SidebarContent>
    </Sidebar>
  );
}