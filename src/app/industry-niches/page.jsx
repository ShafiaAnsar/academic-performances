import Link from "next/link"
import { Search, Grid, BarChart2, Activity, Network } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import CategoryCard from "./components/category-card"
import {NavigationTabs} from "@/components/navigation-tabs"
import { categories } from "../../db"
export default function IndustriesNichesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="border-b bg-white">
        <div className="container mx-auto flex items-center justify-between p-4">
          <h1 className="text-xl font-semibold text-gray-800">Industries & Niches</h1>
          <div className="flex items-center gap-4">
            <Link href="/sign-in" className="text-indigo-600 hover:text-indigo-800">
              Sign in
            </Link>
            <Button className="bg-indigo-600 hover:bg-indigo-700">Register for free</Button>
            <Link href="/tutorial" className="text-indigo-600 hover:text-indigo-800">
              Tutorial
            </Link>
          </div>
        </div>
      </header>

      {/* Navigation Tabs */}
      <NavigationTabs/>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <h2 className="mb-8 text-center text-2xl font-bold text-gray-800">Browse over 600+ Niches</h2>

        {/* Search Bar */}
        <div className="mb-12 flex justify-center ">
          <div className="relative w-full max-w-2xl bg-white">
            <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
            <Input type="text" placeholder="Search for an Industry or a niche" className="h-10 pl-10 pr-4" />
          </div>
        </div>

        {/* Tracked Rankings Section */}
        <section className="mb-8">
          <div className="flex w-full items-center">
          <h3 className=" text-xl font-semibold w-[20%] text-gray-800">Your Tracked Rankings</h3>
          <div className="h-0.5  w-[80%]  bg-gray-200"/>
          </div>
          <div className="py-8">{/* Empty state or tracked rankings would go here */}</div>
        </section>

        {/* All Industries Section */}
        <section>
          <div className="flex items-center w-full">
          <h3 className=" text-xl w-[20%] font-semibold text-gray-800">All Industries & Niches</h3>
          <div className="h-[1px]  w-[80%]  bg-gray-200"/>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 mt-6 xl:grid-cols-3 gap-6">
            {categories.map((category) => (
              <CategoryCard
                key={category.id}
                icon={category.icon}
                title={category.title}
                bgColor={category.bgColor}
                tags={category.tags}
              />
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}

