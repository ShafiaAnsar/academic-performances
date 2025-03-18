'use client'
import { ChartNoAxesColumn, Star } from "lucide-react"
import { useState } from "react"
import { usePathname } from 'next/navigation'
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
  const pathname = usePathname()

  return (
    <Sidebar 
      collapsible="icon"
      className={`bg-white ${isHovered ? "" : "w-[90px]"}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <SidebarContent className="p-0">
        <SidebarGroup className="p-0">
          <SidebarGroupContent>
            <SidebarMenu className="p-2 ">
              <Image src={logo} alt="logo" width={100} height={100} />
              {items.map((item) => (
                <SidebarMenuItem 
                  key={item.title} 
                  className="group"
                >
                  <SidebarMenuButton 
                    asChild
                    isActive={pathname.startsWith(item.url)}
                    className={`${isHovered?'w-full' : 'w-fit mx-auto'} transition-colors hover:rounded-md`}
                  >
                    <a href={item.url} className="flex items-center gap-2 px-4 py-2">
                      <item.icon className={`w-6 h-6 ${pathname.startsWith(item.url) ? 'text-white' : ''}`} />
                      <span className={`${!isHovered ? 'hidden' : 'block'} text-sm ${pathname.startsWith(item.url) ? 'text-white' : ''}`}>
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
