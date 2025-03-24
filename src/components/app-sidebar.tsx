'use client'
import { ChartNoAxesColumn, Star, Search } from "lucide-react"
import { useState } from "react"
import { usePathname } from 'next/navigation'
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
import { logo } from "../../public/images"
// Menu items.
const items = [
  {
    title: "Discovery",
    url: "/discovery",
    icon: Search,
  },
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
      className={`bg-white ${isHovered ? "" : "w-[110px]"} z-110`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <SidebarContent className="p-0">
        <SidebarGroup className="p-0">
          <SidebarGroupContent>
            <SidebarMenu className="p-2 ">
              <Image src={logo} alt="logo" className={` ${isHovered ? ' w-full' : 'h-[40px]'} object-contain`} width={100} height={100} />
              {items.map((item) => (
                <SidebarMenuItem 
                  key={item.title} 
                  className="group mt-4"
                >
                  <SidebarMenuButton 
                    asChild
                    isActive={pathname.startsWith(item.url)}
                    className={`${isHovered?'w-full' : 'w-fit mx-auto'} transition-colors hover:rounded-md`}
                  >
                    <a href={item.url} className="flex items-center gap-2 px-4 py-2">
                      <item.icon className={`w-8 h-8 ${pathname.startsWith(item.url) ? 'text-white' : ''}`} />
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
