import { Spotlight } from "./components/spotlight"
import { CreatorGrid } from "./components/creator-grid"
import { CreatorTable } from "./components/creator-table"
import { Navbar } from "@/components/navbar"    
import { star } from "@/public/images"
import Image from "next/image"
import { Separator } from "@/components/ui/separator"
export default function HallOfFame() {
  return (
    <div className="min-h-screen bg-gray-50 ">
      <Navbar title="Hall of Fame"/>
      <main className=" px-4 py-4 lg:px-8 pt-24 ">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900">Hall of Fame</h1>
          <p className="mt-2 text-lg text-gray-600">Discover all our verified Uniranks Academics</p>
        </div>
        <section className="mt-2 ">
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-green-400" />
            <h2 className="text-xl font-semibold">Recently edited Spotlights</h2>
          </div>
          <Spotlight />     
        </section>
        <Separator className="my-6" />
        <section className="mt-16">
          <div className="flex items-center gap-2">
            <Image src={star} alt="Star" width={24} height={24} />
            <h2 className="text-xl font-semibold">All verified Academics</h2>
          </div>
          <CreatorGrid />
        <CreatorTable />
        </section>
      </main>
    </div>
  )
}

