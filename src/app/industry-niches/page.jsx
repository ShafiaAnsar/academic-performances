import { Search,  } from "lucide-react"
import { Input } from "@/components/ui/input"
import CategoryCard from "./components/category-card"
import {NavigationTabs} from "@/components/navigation-tabs"
import { categories } from "../../db"
import { Navbar } from "@/components/navbar"
export default function IndustriesNichesPage() {
  return (
    <div className="min-h-screen bg-gray-50 ">
      {/* Header */}
      <Navbar title="Industries & Niches"/>
      {/* Navigation Tabs */}
      <NavigationTabs/>

      {/* Main Content */}
      <main className="container mx-auto p-8">
        <h2 className="mb-8 text-center text-lg sm:text-2xl font-semibold sm:font-bold text-gray-800">Browse over 600+ Niches</h2>

        {/* Search Bar */}
        <div className="mb-12 flex justify-center ">
          <div className="relative w-full max-w-2xl bg-white">
            <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
            <Input type="text" placeholder="Search for an Industry or a niche" className="h-10 pl-10 pr-4" />
          </div>
        </div>

        {/* Tracked Rankings Section */}
        <section className="mb-8">
          <div className="flex flex-col md:flex-row items-center justify-center w-full ">
          <h3 className=" md:text-xl text-lg font-semibold md:w-[25%] w-full text-gray-800">Your Tracked Rankings</h3>
          <div className="h-0.5  md:w-[80%] w-full  bg-gray-200"/>
          </div>
          {/* <div className="py-8">Empty state or tracked rankings would go here</div> */}
        </section>

        {/* All Industries Section */}
        <section>
          <div className="flex flex-col md:flex-row w-full items-center">
          <h3 className=" md:text-xl text-lg   md:w-[20%] w-full font-semibold text-gray-800">All Industries & Niches</h3>
          <div className="h-[1px]  md:w-[80%] w-full  bg-gray-200"/>
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

