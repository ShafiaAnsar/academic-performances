"use client"
import {useSelector } from 'react-redux'
import { Navbar } from "@/components/navbar"
import FilterTags from "@/components/discovery/FilterTags"
import EmptyState from "@/components/discovery/EmptyState"
import { AcademicCard } from '@/components/discovery/academic-card'
import { academics_data } from '@/db'

export default function Discovery() {
  const { activeFilters, isFiltersOpen } = useSelector((state) => state.filters)
  // Count total active filters
  const totalFilters = Object.entries(activeFilters)
    .filter(([key]) => key !== 'sort' && key !== 'socialMedia')
    .reduce((count, [_, values]) => {
      // Handle array values
      if (Array.isArray(values)) {
        return count + values.length;
      }
      // Handle non-array values
      return count + (values ? 1 : 0);
    }, 0) + 
    // Count social media filters separately
    Object.entries(activeFilters.socialMedia || {})
      .filter(([key]) => key !== 'selected')
      .reduce((count, [platform, settings]) => {
        if (!activeFilters.socialMedia.selected.includes(platform)) return count;
        
        let platformCount = 0;
        if (settings.followers?.min !== null) platformCount++;
        if (settings.followers?.max !== null) platformCount++;
        if (settings.growth?.min !== null) platformCount++;
        if (settings.engagementRate?.min !== null) platformCount++;
        if (settings.avgEngagement?.min !== null) platformCount++;
        if (settings.avgViews?.min !== null) platformCount++;
        if (settings.postsPerMonth?.min !== null) platformCount++;
        if (settings.activeOnly) platformCount++;
        
        return count + platformCount;
      }, 0);

  return (
    <div className="min-h-screen ">
      {/* Header */}
      <Navbar title="Discovery"/>

      {/* Main Content */}
      <main className="container mx-auto p-8 mt-16">
        <h1 className="mb-8 text-center text-2xl font-bold text-gray-800">
          Find the right academics according to your needs
        </h1>

        {/* Filter Tags */}
        <FilterTags />
        {
          totalFilters > 0 ? (
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-4'>
              {academics_data.map((academic) => (
                <AcademicCard key={academic.id} {...academic} />
              ))}
            </div> 
            )
            :
            <EmptyState />
         
        }
      </main>
    </div>
  )
}

