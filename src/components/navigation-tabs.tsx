"use client"

import { Link } from "@/navigation"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { LayoutGridIcon, BarChartIcon, MonitorIcon, NetworkIcon } from "lucide-react"
import { useTranslations } from 'next-intl';

export function NavigationTabs() {
  const pathname = usePathname();
  const t = useTranslations();

  const navigationTabs = [
    {
      id: 1,
      label: t('navigation.industriesNiches'),
      href: "/industry-niches",
      icon: LayoutGridIcon,
    },
    {
      id: 2,
      label: t('navigation.rankings'),
      href: "/rankings/leaderboard",
      icon: BarChartIcon,
    },
    {
      id: 3,
      label: t('navigation.industryWatch'),
      href: "#",
      icon: MonitorIcon,
    },
    {
      id: 4,
      label: t('navigation.networkWatch'),
      href: "#",
      icon: NetworkIcon,
    }
  ]

  return (
    <nav className="border-b bg-white fixed top-14 sm:left-[110px] left-0 right-0 z-50 border-gray-200">
      <div className="flex flex-wrap px-6 gap-4 md:gap-8">
        {navigationTabs.map((tab) => (
          <Link
            key={tab.id}
            href={tab.href}
            className={cn(
              "flex items-center gap-2 py-2 text-[13px] md:text-[15px] font-medium text-gray-600 border-b-2 border-transparent hover:text-gray-900",
              pathname === tab.href && "border-[var(--color-primary)] text-[var(--color-primary)]",
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

