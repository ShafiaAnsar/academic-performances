'use client'
import Link from "next/link"
import { BookText, CircleHelp, Menu } from "lucide-react"
import { Separator } from "./ui/separator"
import { Drawer, DrawerTrigger, DrawerContent, DrawerHeader, DrawerTitle } from "./ui/drawer"
import { useState } from "react"
export function Navbar({ title }: { title: string }) {
  const [open,setOpen] = useState(false)
  return (
    <div className="flex justify-between items-center   bg-white p-6 border-b ">
      <h1 className="text-lg font-semibold">{title}</h1>
      <div className=" md:flex items-center hidden  gap-4">
        <Link href="/sign-in" className="text-sm font-medium bg-[#f4f7ff] px-4 py-2 text-[var(--color-primary)] rounded-md hover:bg-[#ede9fe]">
          Sign in
        </Link>
        <Link href="/sign-up" className="bg-[var(--color-primary)] hover:bg-[var(--color-primary)]/80 px-2 py-1 text-white rounded-md">Register for free</Link>
        <Separator orientation="vertical" className="h-4" />
        <Link href="/tutorial" className="flex items-center gap-1 bg-[#f4f7ff] rounded-md px-3 py-2 text-sm text-[var(--color-primary)] font-medium hover:underline">
          Tutorial
          <BookText className="w-4 h-4" />
        </Link>
        <span className="cursor-pointer bg-[#f4f7ff] rounded-md px-3 py-2 text-sm text-[var(--color-primary)] font-medium hover:underline">
          <CircleHelp className="w-4 h-4 text-[var(--color-primary)]" />
        </span>
      </div>
      <div className="md:hidden flex items-center gap-4">
      <Drawer direction="right" open={open}  onOpenChange={setOpen}>
        <DrawerTrigger>
          <Menu className="w-6 h-6 cursor-pointer" />
        </DrawerTrigger>
        <DrawerContent className="w-[200px] p-4">
          <DrawerHeader>
            <DrawerTitle>Welcome 👋</DrawerTitle>
          </DrawerHeader>
          <div className="flex  flex-col  w-fit gap-4">
            <Link href="/sign-in" className="text-sm font-medium bg-[#f4f7ff] px-4 py-2 text-[var(--color-primary)] rounded-md hover:bg-[#ede9fe]">
              Sign in
            </Link>
            <Link href="/sign-up" className="bg-[#f4f7ff] hover:bg-[#ede9fe] px-2 py-1 text-[var(--color-primary)]  rounded-md">Register for free</Link>
            <Link href="/tutorial" className="flex items-center gap-1 bg-[#f4f7ff] rounded-md px-3 py-2 text-sm text-[var(--color-primary)] font-medium hover:underline">
              Tutorial
              <BookText className="w-4 h-4" />
            </Link>
            <Link href="/hall-of-fame" className="flex items-center gap-1 bg-[#f4f7ff] rounded-md px-3 py-2 text-sm text-[var(--color-primary)] font-medium hover:underline">
              Hall of Fame
            </Link>
            <Link href="/rankings/leaderboard" className="flex items-center gap-1 bg-[#f4f7ff] rounded-md px-3 py-2 text-sm text-[var(--color-primary)] font-medium hover:underline">
              Leaderboard
            </Link>
          </div>
        </DrawerContent>
      </Drawer>
    </div>
    </div>
  )
}

