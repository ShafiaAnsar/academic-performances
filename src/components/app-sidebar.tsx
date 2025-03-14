'use client'
import { ChartNoAxesColumn, Star } from "lucide-react"
import { useState } from "react"
import logo from "../../public/logo.png"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import Image from "next/image"
// Menu items.
const items = [
  {
    title: "Rankings",
    url: "/rankings/leaderboard",
    icon: ChartNoAxesColumn,
  },
  {
    title: "Hall of Fame",
    url: "/hall-of-fame",
    icon: Star,
  },
]

export function AppSidebar() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Sidebar 
      collapsible="icon"
      className={isHovered ? "" : "w-[90px]"}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <SidebarContent className="p-0">
        <SidebarGroup className="p-0">
          <SidebarGroupContent>
            <SidebarMenu className="p-2">
              <Image src={logo} alt="logo" width={100} height={100} />
              {items.map((item) => (
                <SidebarMenuItem 
                  key={item.title} 
                  className="group"
                >
                  <SidebarMenuButton 
                    asChild
                    className="w-full transition-colors hover:text-white hover:bg-[#6543eb] hover:rounded-md"
                  >
                    <a href={item.url} className="flex items-center gap-2 p-2">
                      <item.icon className="w-6 h-6" />
                      <span className={`${!isHovered ? 'hidden' : 'block'} text-sm`}>
                        {item.title}
                      </span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
