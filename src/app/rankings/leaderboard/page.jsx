"use client"

import { useState } from "react"
import Image from "next/image"
import { FilterDropdown } from "@/components/filter-dropdown"
import { Button } from "@/components/ui/button"
import {  ExternalLink, Eye, } from "lucide-react"
import {  industries, socialMedias, genders, risingStar, bestCountry, bestIndustry } from "@/db"
import { Navbar } from "@/components/navbar"
import CreatorsTable from "../../../components/creators-table"
import { badge, us } from "../../../../public/images"
import { NavigationTabs } from "@/components/navigation-tabs";
export default function RankingsPage() {
  const [selectedIndustry, setSelectedIndustry] = useState(industries[0])
  const [selectedSocialMedia, setSelectedSocialMedia] = useState(socialMedias[0])
  const [selectedGender, setSelectedGender] = useState(genders[0])

  return (
    <div className="min-h-screen ">
      <Navbar title="Rankings" />
      <NavigationTabs/>
      <main className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-center mb-8">
          <h1 className="text-2xl font-bold"> 🏆 Top 200 Creators · Worldwide</h1>
        </div>

        <div className="grid gap-6">
          {/* Filters */}
          <div className="flex flex-wrap bg-white p-3 rounded-md gap-3">
            <FilterDropdown
              label="Industries"
              options={industries}
              selected={selectedIndustry}
              onSelect={setSelectedIndustry}
            />
            <FilterDropdown
              label="Social Media"
              options={socialMedias}
              selected={selectedSocialMedia}
              onSelect={setSelectedSocialMedia}
            />
            <FilterDropdown label="Location" options={["Worldwide"]} icon={<span className="text-lg">🌎</span>} />
            <FilterDropdown label="Gender" options={genders} selected={selectedGender} onSelect={setSelectedGender} />

            <div className="ml-auto flex items-center gap-2">
              <Button variant="outline" className="flex items-center gap-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
              <Button className="bg-[#6542ea] text-white flex items-center gap-2">
                <Eye className="h-4 w-4" />
                Track this LeaderBoard
              </Button>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 bg-white rounded-xl p-6">
            {/* Rising Star */}
            <div className="space-y-2 border-r border-gray-200 pr-4">
              <h3 className="text-sm text-gray-500">Rising Star</h3>
              <div className="flex items-start gap-3">
                <Image
                  src={risingStar.avatar || "/placeholder.svg"}
                  alt={risingStar.name}
                  width={60}
                  height={60}
                  className="rounded-full"
                />
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="text-xl font-bold">{risingStar.name}</h4>
                    <ExternalLink className="h-4 w-4 text-gray-400" />
                  </div>
                  <div className="flex  flex-col gap-1">
                    <span className="text-sm">{risingStar.country}</span>
                    <span className="text-xs text-green-600">{risingStar.growth}</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Avg. Creator Score */}
            <div className="space-y-2 border-r border-gray-200 pr-4">
              <h3 className="text-sm text-gray-500">Avg. Creator Score</h3>
              <div className="flex items-center gap-3">
                <Image src={badge} alt="badge" width={40} height={40} />
                <div className="text-2xl font-bold">{risingStar.score}</div>
              </div>
            </div>

            {/* Best Country */}
            <div className="space-y-2 border-r border-gray-200 pr-4">
              <h3 className="text-sm text-gray-500">Best Country</h3>
              <div className="flex flex-col ">
                <div className="flex items-center gap-2">
                <Image src={us} alt="us" width={100} className="w-5 h-5" height={100} />
                  <h4 className="text-xl font-bold">{bestCountry.name}</h4>
                </div>
                <span className="text-sm text-gray-500">{bestCountry.count}</span>

              </div>
            </div>

            {/* Best Industry */}
            <div className="space-y-2">
              <h3 className="text-sm text-gray-500">Best Industry</h3>
              <div className="flex items-center gap-3">
                <div className="text-2xl">📺</div>
                <div>
                  <h4 className="text-xl font-bold">{bestIndustry.name}</h4>
                  <span className="text-sm text-gray-500">{bestIndustry.count}</span>
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

