"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { LayoutGridIcon, BarChartIcon, MonitorIcon, NetworkIcon } from "lucide-react"

const navigationTabs = [
  {
    label: "Industries & Niches",
    href: "/industry-niches",
    icon: LayoutGridIcon,
  },
  {
    label: "Rankings",
    href: "/rankings/leaderboard",
    icon: BarChartIcon,
  },
  {
    label: "Industry Watch",
    href: "/industry-watch",
    icon: MonitorIcon,
  },
  {
    label: "Network Watch",
    href: "/network-watch",
    icon: NetworkIcon,
  }
]

export function NavigationTabs() {
  const pathname = usePathname()

  return (
    <nav className="border-b bg-white border-gray-200">
      <div className="flex px-6 gap-8">
        {navigationTabs.map((tab) => (
          <Link
            key={tab.href}
            href={tab.href}
            className={cn(
              "flex items-center gap-2 py-4 text-[15px] font-medium text-gray-600 border-b-2 border-transparent hover:text-gray-900",
              pathname === tab.href && "border-[#6542ea] text-[#6542ea]",
            )}
          >
            <tab.icon className="h-5 w-5" />
            {tab.label}
          </Link>
        ))}
      </div>
    </nav>
  )
}

