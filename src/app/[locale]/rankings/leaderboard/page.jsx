"use client"

import { useState } from "react"
import Image from "next/image"
import { FilterDropdown } from "@/components/filter-dropdown"
import { Button } from "@/components/ui/button"
import { ExternalLink, Eye, RefreshCw } from "lucide-react"
import { areasOfStudy, indicators, countries, genders, risingStar, bestCountry, bestAreaOfStudy } from "@/db"
import { Navbar } from "@/components/navbar"
import AcademicsTable from "@/components/academics-table"
import { badge, us } from "@/../public/images"
import { NavigationTabs } from "@/components/navigation-tabs";

export default function RankingsPage() {
  // Extract just the names for the dropdown
  const areaNames = areasOfStudy.map(area => area.name);
  
  const [selectedArea, setSelectedArea] = useState(areaNames[0])
  const [selectedSubcategories, setSelectedSubcategories] = useState([])
  const [selectedIndicator, setSelectedIndicator] = useState(indicators[0])
  const [selectedCountry, setSelectedCountry] = useState("Worldwide")
  const [selectedGender, setSelectedGender] = useState(genders[0])

  // Get subcategories for the selected area of study
  const subcategories = selectedArea !== "All Areas of Study" 
    ? areasOfStudy.find(area => area.name === selectedArea)?.subcategories || []
    : []

  const handleAreaChange = (area) => {
    setSelectedArea(area)
    setSelectedSubcategories([])
  }

  const toggleSubcategory = (subcategory) => {
    if (selectedSubcategories.includes(subcategory)) {
      setSelectedSubcategories(selectedSubcategories.filter(s => s !== subcategory))
    } else {
      setSelectedSubcategories([...selectedSubcategories, subcategory])
    }
  }

  const resetFilters = () => {
    setSelectedArea(areaNames[0])
    setSelectedSubcategories([])
    setSelectedIndicator(indicators[0])
    setSelectedCountry("Worldwide")
    setSelectedGender(genders[0])
  }

  return (
    <div className="min-h-screen pl-2">
      <Navbar title="Rankings" />
      <NavigationTabs/>
      <main className="container max-w-[98%] mx-auto px-4 pt-32 py-8">
        <div className="flex items-center justify-center mb-8">
          <h1 className="sm:text-2xl text-lg font-semibold sm:font-bold"> 🏆 Top 100 Academics · Worldwide</h1>
        </div>

        <div className="grid gap-6">
          {/* Filters */}
          <div className="flex xl:flex-row flex-col bg-white p-3 w-full rounded-md gap-3">
            <div className="grid grid-cols-2 xl:order-1 order-2 sm:flex sm:flex-wrap w-full gap-2">
              <FilterDropdown 
                label="Areas of Study" 
                className="text-xs" 
                options={areaNames} 
                selected={selectedArea} 
                onSelect={handleAreaChange} 
              />
              <FilterDropdown 
                label="Indicators" 
                className="text-xs" 
                options={indicators}  
                selected={selectedIndicator} 
                onSelect={setSelectedIndicator}
              />
              <FilterDropdown 
                label="Country" 
                className="text-xs"
                options={["Worldwide", ...countries]} 
                selected={selectedCountry}
                onSelect={setSelectedCountry}
                icon={<span className="text-xs md:text-sm">🌎</span>} 
              />
              <FilterDropdown 
                label="Gender" 
                className="text-xs"
                options={genders} 
                selected={selectedGender}
                onSelect={setSelectedGender}
              />
            </div>
            <div className="flex xl:order-2 order-1 xl:justify-end justify-start items-center gap-2">
              <Button 
                variant="outline" 
                className="flex items-center gap-1 text-xs h-9 px-2 py-1"
                onClick={resetFilters}
              >
                <RefreshCw className="h-3 w-3" />
                Reset Filters
              </Button>
            </div>
          </div>

          {/* Subcategories (if any) */}
          {subcategories.length > 0 && (
            <div className="flex flex-wrap gap-2 bg-white p-3 rounded-md">
              {subcategories.map((subcategory) => (
                <Button
                  key={subcategory}
                  variant={selectedSubcategories.includes(subcategory) ? "default" : "outline"}
                  className="text-xs h-8 px-3"
                  onClick={() => toggleSubcategory(subcategory)}
                >
                  {subcategory}
                </Button>
              ))}
            </div>
          )}

          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 bg-white rounded-xl p-4 md:p-6">
            {/* Rising Academic */}
            <div className="space-y-2 sm:border-r border-gray-200 pr-2 md:pr-4">
              <h3 className="text-sm text-gray-500">Rising Academic</h3>
              <div className="flex items-start gap-2 md:gap-3">
                <Image src={risingStar.avatar || "/placeholder.svg"} alt={risingStar.name}
                  width={50} height={50} className="rounded-full w-10 h-10 md:w-12 md:h-12" />
                <div className="min-w-0">
                  <div className="flex items-start gap-1">
                    <h4 className="text-base md:text-lg font-semibold truncate">{risingStar.name}</h4>
                    <ExternalLink className="h-3 w-3 md:h-4 md:w-4 text-gray-400 flex-shrink-0" />
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <div className="flex items-center gap-1">
                      <Image src={us} alt="us" width={16} height={16} className="w-4 h-4" />
                      <span className="text-xs truncate">{risingStar.country}</span>
                    </div>
                    <span className="text-[10px] text-green-600 truncate">{risingStar.growth}</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Avg. Academic Score */}
            <div className="space-y-2 sm:border-r border-gray-200 pr-2 md:pr-4">
              <h3 className="text-sm text-gray-500">Avg. Academic Score</h3>
              <div className="flex items-center gap-2 md:gap-3">
                <Image src={badge} alt="badge" width={35} height={35} className="w-8 h-8 md:w-10 md:h-10" />
                <div className="text-base md:text-lg font-semibold">8 475</div>
              </div>
            </div>

            {/* Best Country */}
            <div className="space-y-2 sm:border-r border-gray-200 pr-2 md:pr-4">
              <h3 className="text-sm text-gray-500">Best Country</h3>
              <div className="flex flex-col min-w-0">
                <div className="flex items-center gap-2">
                  <Image src={us} alt="us" width={20} height={20} className="w-5 h-5 flex-shrink-0" />
                  <h4 className="text-base md:text-lg font-semibold truncate">United States</h4>
                </div>
                <span className="text-xs md:text-sm text-gray-500">42 / 100</span>
              </div>
            </div>

            {/* Best Area of Study */}
            <div className="space-y-2">
              <h3 className="text-sm text-gray-500">Best Area of Study</h3>
              <div className="flex items-start gap-2 md:gap-3">
                <div className="text-base md:text-lg flex-shrink-0">🔬</div>
                <div className="min-w-0">
                  <h4 className="text-base md:text-lg font-semibold truncate">Computer Science</h4>
                  <span className="text-xs md:text-sm text-gray-500">28 / 100</span>
                </div>
              </div>
            </div>
          </div>

          {/* Academics Table */}
          <AcademicsTable/>
        </div>
      </main>
    </div>
  )
}

