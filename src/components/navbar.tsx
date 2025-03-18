import Link from "next/link"
import { BookText, CircleHelp } from "lucide-react"
import { Separator } from "./ui/separator"

export function Navbar({ title }: { title: string }) {
  return (
    <div className="flex justify-between items-center   bg-white p-6 border-b ">
      <h1 className="text-lg font-semibold">{title}</h1>
      <div className="flex items-center gap-4">
        <Link href="/sign-in" className="text-sm font-medium bg-[#f4f7ff] px-4 py-2 text-[#6542ea] rounded-md hover:bg-[#ede9fe]">
          Sign in
        </Link>
        <Link href="/sign-up" className="bg-[#6542ea] hover:bg-[#5a3bd3] px-2 py-1 text-white rounded-md">Register for free</Link>
        <Separator orientation="vertical" className="h-4" />
        <Link href="/tutorial" className="flex items-center gap-1 bg-[#f4f7ff] rounded-md px-3 py-2 text-sm text-[#6542ea] font-medium hover:underline">
          Tutorial
          <BookText className="w-4 h-4" />
        </Link>
        <span className="cursor-pointer bg-[#f4f7ff] rounded-md px-3 py-2 text-sm text-[#6542ea] font-medium hover:underline">
          <CircleHelp className="w-4 h-4 text-[#6542ea]" />
        </span>
      </div>
    </div>
  )
}

