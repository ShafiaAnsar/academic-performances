'use client'
import { useDispatch, useSelector } from 'react-redux'
import { Input } from "@/components/ui/input"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { addFilter, removeFilter, setSort } from '@/redux/slices/filtersSlice'
import { areasOfStudy, languages } from '@/db'
import { useState } from 'react';
import { RegionSelect } from './RegionSelect'
import SocialMediaFilters from './SocialMediaFilters'

export default function FilterOptions() {
  const dispatch = useDispatch()
  const { activeFilters } = useSelector((state) => state.filters)
  const [selectedArea, setSelectedArea] = useState(null);

  const handleSelectRegion = (region) => {
    dispatch(addFilter({ category: "region", value: region }))
  }

  const handleSelectCountry = (region, country) => {
    if (activeFilters.countries?.includes(country)) {
      dispatch(removeFilter({ category: "region", value: country }))
    } else {
      dispatch(addFilter({ category: "region", value: country }))
    }
  }

  const handleAddFilter = (category, value) => {
    dispatch(addFilter({ category, value }))
  }

  const handleRemoveFilter = (category, value) => {
    dispatch(removeFilter({ category, value }))
  }

  const handleToggleFilter = (category, value) => {
    if (activeFilters[category]?.includes(value)) {
      handleRemoveFilter(category, value)
    } else {
      handleAddFilter(category, value)
    }
  }

  return (
    <div className="mt-6 flex flex-col gap-6 overflow-y-auto pr-2" style={{ maxHeight: 'calc(100vh - 180px)' }}>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <Label htmlFor="hide-crm" className="flex-1">
            Hide academics already in your CRM
          </Label>
          <Switch id="hide-crm" />
        </div>
        <div className="flex items-center justify-between">
          <Label htmlFor="active-accounts" className="flex-1">
            Only show active accounts (published last month)
          </Label>
          <Switch id="active-accounts" />
        </div>
        <div className="flex items-center justify-between">
          <Label htmlFor="with-email" className="flex-1">
            Only show profiles with an email
          </Label>
          <Switch id="with-email" />
        </div>
        <div className="flex items-center justify-between">
          <Label htmlFor="verified" className="flex-1">
            Only show verified academics
          </Label>
          <Switch id="verified" />
        </div>
      </div>

      <div className="space-y-3">
        <h3 className="text-sm font-[400]">Areas of Study</h3>
        <Select 
          onValueChange={(value) => {
            if (value !== "All Areas of Study") {
              handleAddFilter("areasOfStudy", value);
              const area = areasOfStudy.find(a => a.name === value);
              setSelectedArea(area);
            } else {
              setSelectedArea(null);
            }
          }}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select an area of study" />
          </SelectTrigger>
          <SelectContent>
            {areasOfStudy.map((area) => (
              <SelectItem key={area.name} value={area.name}>{area.name}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {selectedArea && selectedArea.subcategories && selectedArea.subcategories.length > 0 && (
        <div className="space-y-3">
          <h3 className="text-sm font-medium">Research Niches for {selectedArea.name}</h3>
          <Select
            onValueChange={(value) => {
              handleAddFilter("researchNiches", `${selectedArea.name}:${value}`);
            }}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select a research niche" />
            </SelectTrigger>
            <SelectContent>
              {selectedArea.subcategories.map((subcategory) => (
                <SelectItem key={subcategory} value={subcategory}>
                  {subcategory}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <div className="flex items-center gap-2">
            <Checkbox id="primary-niche" />
            <Label htmlFor="primary-niche" className="text-xs">
              Show only creators with this niche as Primary
            </Label>
          </div>
        </div>
      )}

      <div className="space-y-3">
        <h3 className="text-sm font-medium">Academic Platforms</h3>
        <Select onValueChange={(value) => handleAddFilter("platforms", value)}>
          <SelectTrigger>
            <SelectValue placeholder="Select an academic platform" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="google-scholar">Google Scholar</SelectItem>
            <SelectItem value="researchgate">ResearchGate</SelectItem>
            <SelectItem value="academia">Academia.edu</SelectItem>
            <SelectItem value="orcid">ORCID</SelectItem>
            <SelectItem value="scopus">Scopus</SelectItem>
            <SelectItem value="web-of-science">Web of Science</SelectItem>
            <SelectItem value="pubmed">PubMed</SelectItem>
            <SelectItem value="arxiv">arXiv</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-3">
        <h3 className="text-sm font-medium">Regions</h3>
        <RegionSelect
          selectedRegions={activeFilters.regions || []}
          selectedCountries={activeFilters.countries || []}
          onSelectRegion={handleSelectRegion}
          onSelectCountry={handleSelectCountry}
        />
      </div>

      <div className="space-y-3">
        <h3 className="text-sm font-medium">City</h3>
        <Input 
          onKeyDown={(e) => {
            if (e.key === 'Enter' && e.target.value.trim()) {
              handleAddFilter("city", e.target.value.trim());
              e.target.value = ''; // Clear the input after adding
            }
          }} 
          type="text" 
          placeholder="Type a city name and press Enter" 
        />
      </div>

      <div className="space-y-3">
        <h3 className="text-sm font-medium">Languages</h3>
        <Select onValueChange={(value) => handleAddFilter("languages", value)}>
          <SelectTrigger>
            <SelectValue placeholder="Select a language" />
          </SelectTrigger>
          <SelectContent>
            {languages.map((language) => (
              <SelectItem key={language} value={language}>{language}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-3">
        <h3 className="text-sm font-medium">Gender</h3>
        <div className="flex gap-2">
          <Button variant={activeFilters.profileType?.includes("All") ? "default" : "outline"} 
            className={`flex-1 cursor-pointer hover:bg-[var(--color-primary)]/20 ${activeFilters.otherFilters?.includes("All") ? "bg-[var(--color-primary)]" : ""}`}
            onClick={() => handleToggleFilter("otherFilters", "All")}>All</Button>
          <Button variant={activeFilters.profileType?.includes("All") ? "default" : "outline"} 
            className={`flex-1 cursor-pointer hover:bg-[var(--color-primary)]/20 ${activeFilters.otherFilters?.includes("Male") ? "bg-[var(--color-primary)] text-white" : ""}`}
            onClick={() => handleToggleFilter("otherFilters", "Male")}>Male</Button>
          <Button variant={activeFilters.profileType?.includes("All") ? "default" : "outline"} 
            className={`flex-1 cursor-pointer hover:bg-[var(--color-primary)]/20 ${activeFilters.otherFilters?.includes("Female") ? "bg-[var(--color-primary)] text-white" : ""}`}
            onClick={() => handleToggleFilter("otherFilters", "Female")}>Female</Button>
        </div>
      </div>

      <div className="space-y-3">
        <h3 className="text-sm font-medium">Institution</h3>
        <Input  onKeyDown={(e) => {
            if (e.key === 'Enter' && e.target.value.trim()) {
              handleAddFilter("institutions", e.target.value.trim());
              e.target.value = ''; // Clear the input after adding
            }
          }}  type="text" placeholder="Type an institution name" />
      </div>

      <div className="space-y-3 border-t pt-4">
        <h3 className="text-sm font-medium">Premium Filters</h3>
        <div className="flex items-center gap-2">
         <Select onValueChange={(value) => handleAddFilter("otherFilters", value)}>
          <SelectTrigger>
            <SelectValue placeholder="Select a premium filter" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="has-podcast">Has a podcast</SelectItem>
            <SelectItem value="has-newsletter">Has a Newsletter</SelectItem>
            <SelectItem value="published-papers">Has Published Papers</SelectItem>
            <SelectItem value="published-books">Has Published Books</SelectItem>
            <SelectItem value="linkedin-top-voice">LinkedIn Top Voice</SelectItem>
          </SelectContent>
         </Select>
        </div>
      </div>

      <div className="space-y-3">
        <h3 className="text-sm font-medium">Profile Type</h3>
        <div className="flex gap-2">
          <Button 
            variant={activeFilters.profileType?.includes("All") ? "default" : "outline"} 
            className={`flex-1 cursor-pointer hover:bg-[var(--color-primary)]/20 ${activeFilters.profileType?.includes("All") ? "bg-[var(--color-primary)]" : ""}`}
            onClick={() => handleToggleFilter("profileType", "All")}
          >
            All
          </Button>
          <Button 
            variant={activeFilters.profileType?.includes("Academics") ? "default" : "outline"} 
              className={`flex-1 cursor-pointer hover:bg-[var(--color-primary)]/20 ${activeFilters.profileType?.includes("Academics") ? "bg-[var(--color-primary)]" : ""}`}
            onClick={() => handleToggleFilter("profileType", "Academics")}
          >
            Academics
          </Button>
          <Button 
            variant={activeFilters.profileType?.includes("Institutions") ? "default" : "outline"} 
            className={`flex-1 cursor-pointer hover:bg-[var(--color-primary)]/20 ${activeFilters.profileType?.includes("Institutions") ? "bg-[var(--color-primary)]" : ""}`}
            onClick={() => handleToggleFilter("profileType", "Institutions")}
          >
            Institutions
          </Button>
        </div>
      </div>

      <SocialMediaFilters />

      <div className="space-y-3">
        <h3 className="text-sm font-medium">Sort</h3>
        <div className="flex gap-2">
          <Button 
            variant="outline" 
            className="flex-1 flex items-center gap-1"
            onClick={() => dispatch(setSort("Random"))}
          >
            Random
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 9L7 5M7 5L11 9M7 5V14C7 15.1046 7.89543 16 9 16H13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M21 15L17 19M17 19L13 15M17 19V10C17 8.89543 16.1046 8 15 8H11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Button>
        </div>
      </div>
    </div>
  )
} 