"use client"

import type React from "react"

import { useState } from "react"
import { ChevronDown, ChevronUp, Check } from "lucide-react"
import { cn } from "@/lib/utils"
import { regions } from "@/db"


type RegionSelectProps = {
  selectedRegions: string[]
  selectedCountries: string[]
  onSelectRegion: (region: string) => void
  onSelectCountry: (region: string, country: string) => void
}
export function RegionSelect({
  selectedCountries = [],
  onSelectCountry,
}: RegionSelectProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [expandedRegion, setExpandedRegion] = useState<string | null>(null)

  // Get display text for the select button
  const getDisplayText = () => {
    if (selectedCountries.length > 0) {
      return selectedCountries.join(", ")
    }
    return "Select a Region"
  }

  const toggleRegion = (regionName: string) => {
    if (expandedRegion === regionName) {
      setExpandedRegion(null)
    } else {
      setExpandedRegion(regionName)
    }
  }

  const handleCountrySelect = (region: string, country: string) => {
    onSelectCountry(region, country)
  }

  return (
    <div className="relative w-full">
      {/* Select button */}
      <button
        type="button"
        className={cn(
          "flex w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background",
          "focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
          isOpen ? "border-indigo-500" : "",
        )}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-left truncate">{getDisplayText()}</span>
        {isOpen ? <ChevronUp className="h-4 w-4 opacity-50" /> : <ChevronDown className="h-4 w-4 opacity-50" />}
      </button>

      {/* Dropdown */}
      {isOpen && (
        <div className="absolute z-50 mt-1 w-full rounded-md border border-gray-200 bg-white shadow-lg">
          <div className="p-2 text-sm text-gray-500">Select a Region</div>
          <div className="max-h-[300px] overflow-y-auto">
            {regions.map((region) => (
              <div key={region.name} className="border-t border-gray-100">
                <button
                  type="button"
                  className={cn(
                    "flex w-full items-center justify-between px-3 py-2 text-left text-sm hover:bg-gray-50",
                    expandedRegion === region.name ? "bg-indigo-50" : "",
                  )}
                  onClick={() => toggleRegion(region.name)}
                >
                  <div className="flex items-center gap-2">
                    <span>{region.icon}</span>
                    <span>{region.name}</span>
                  </div>
                  {expandedRegion === region.name ? (
                    <ChevronUp className="h-4 w-4" />
                  ) : (
                    <ChevronDown className="h-4 w-4" />
                  )}
                </button>

                {/* Countries dropdown */}
                {expandedRegion === region.name && (
                  <div className="bg-gray-50 pl-8">
                    {region.countries.map((country) => (
                      <button
                        key={country.code}
                        type="button"
                        className={cn(
                          "flex w-full items-center justify-between px-3 py-2 text-left text-sm hover:bg-gray-100",
                          selectedCountries.includes(country.name) ? "text-indigo-600" : "",
                        )}
                        onClick={() => handleCountrySelect(region.name, country.name)}
                      >
                        <div className="flex items-center gap-2">
                          <span className="text-xs text-gray-500">{country.code}</span>
                          <span>{country.name}</span>
                        </div>
                        {selectedCountries.includes(country.name) && <Check className="h-4 w-4 text-indigo-600" />}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

