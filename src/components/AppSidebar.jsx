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
          <SidebarGroupLabel className="text-violet-500">Navigation</SidebarGroupLabel>

          <SidebarMenu>

            <SidebarMenuItem>
              <SidebarMenuButton className="hover:bg-violet-500">
                <Home className="h-8 w-8" />
                <span>Dashboard</span>
              </SidebarMenuButton>
            </SidebarMenuItem>

            <SidebarMenuItem>
              <SidebarMenuButton className="hover:bg-violet-500">
                <Backpack className="h-8 w-8" />
                <span>Inventory</span>
              </SidebarMenuButton>
            </SidebarMenuItem>

            <SidebarMenuItem>
              <SidebarMenuButton className="hover:bg-violet-500">
                <ShoppingCart className="h-8 w-8" />
                <span>Shop</span>
              </SidebarMenuButton>
            </SidebarMenuItem>

            <SidebarMenuItem>
              <SidebarMenuButton className="hover:bg-violet-500">
                <ScrollText className="h-8 w-8" />
                <span>Missions</span>
              </SidebarMenuButton>
            </SidebarMenuItem>

            <SidebarMenuItem>
              <SidebarMenuButton className="hover:bg-violet-500">
                <Trophy className="h-8 w-8" />
                <span>Leaderboard</span>
              </SidebarMenuButton>
            </SidebarMenuItem>

            <SidebarMenuItem>
              <SidebarMenuButton className="hover:bg-violet-500">
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