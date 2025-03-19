"use client"

import { useState } from "react"
import Image from "next/image"
import { FilterDropdown } from "@/components/filter-dropdown"
import { Button } from "@/components/ui/button"
import {  ExternalLink, Eye, } from "lucide-react"
import {  industries, socialMedias, genders, risingStar, bestCountry, bestIndustry } from "@/db"
import { Navbar } from "@/components/navbar"
import CreatorsTable from "@/components/creators-table"
import { badge, us } from "@/../public/images"
import { NavigationTabs } from "@/components/navigation-tabs";
export default function RankingsPage() {
  const [selectedIndustry, setSelectedIndustry] = useState(industries[0])
  const [selectedSocialMedia, setSelectedSocialMedia] = useState(socialMedias[0])
  const [selectedGender, setSelectedGender] = useState(genders[0])

  return (
    <div className="min-h-screen pl-2">
      <Navbar title="Rankings" />
      <NavigationTabs/>
      <main className="container max-w-[98%]  mx-auto px-4 py-8">
        <div className="flex items-center justify-center mb-8">
          <h1 className="sm:text-2xl text-lg font-semibold sm:font-bold"> 🏆 Top 200 Creators · Worldwide</h1>
        </div>

        <div className="grid gap-6">
          {/* Filters */}
          <div className="flex xl:flex-row flex-col bg-white p-3 w-full   rounded-md gap-3">
            <div className="grid grid-cols-2 xl:order-1 order-2 sm:flex sm:flex-wrap w-full gap-2">
              <FilterDropdown 
                label="Industries" 
                className="text-xs" 
                options={industries} 
                selected={selectedIndustry} 
                onSelect={setSelectedIndustry} 
              />
              <FilterDropdown 
                label="Social Media" 
                className="text-xs" 
                options={socialMedias}  
                selected={selectedSocialMedia} 
                onSelect={setSelectedSocialMedia}
              />
              <FilterDropdown 
                label="Location" 
                className="text-xs"
                options={["Worldwide"]} 
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
            <div className="flex sm:flex-row flex-col  w-full sm:w-auto xl:order-2 order-1 items-center gap-2 mt-2 sm:mt-0">
              <Button variant="outline" className="flex items-center gap-1 text-xs h-9 px-2 py-1">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M12 5V19M5 12H19"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Select creators
              </Button>
              <Button className="bg-[var(--color-primary)] cursor-pointer text-white flex items-center gap-1 text-xs h-9 px-2 py-1">
                <Eye className="h-3 w-3" />
                Track this LeaderBoard
              </Button>
            </div>
          </div>
          {/* Stats Cards */}
          <div className="sm:grid hidden grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 w-full bg-white rounded-xl p-4 md:p-6">
            {/* Rising Star */}
            <div className="space-y-2 sm:border-r border-gray-200 pr-2 md:pr-4">
              <h3 className="text-sm text-gray-500">Rising Star</h3>
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
            
            {/* Avg. Creator Score */}
            <div className="space-y-2 sm:border-r border-gray-200 pr-2 md:pr-4">
              <h3 className="text-sm text-gray-500">Avg. Creator Score</h3>
              <div className="flex items-center gap-2 md:gap-3">
                <Image src={badge} alt="badge" width={35} height={35} className="w-8 h-8 md:w-10 md:h-10" />
                <div className="text-base md:text-lg font-semibold">9 852</div>
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
                <span className="text-xs md:text-sm text-gray-500">56 / 200</span>
              </div>
            </div>

            {/* Best Industry */}
            <div className="space-y-2">
              <h3 className="text-sm text-gray-500">Best Industry</h3>
              <div className="flex items-start gap-2 md:gap-3">
                <div className="text-base md:text-lg flex-shrink-0">📺</div>
                <div className="min-w-0">
                  <h4 className="text-base md:text-lg font-semibold truncate">TV, Movies & Entertainment</h4>
                  <span className="text-xs md:text-sm text-gray-500">74 / 200</span>
                </div>
              </div>
            </div>
          </div>

          {/* Creators Table */}
          <CreatorsTable/>

        </div>
      </main>
    </div>
  )
}

