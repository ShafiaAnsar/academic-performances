"use client"

import { useDispatch, useSelector } from 'react-redux'
import { SlidersHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
  SheetClose,
} from "@/components/ui/sheet"
import FilterOptions from "./FilterOptions"
import { CiSliderHorizontal } from "react-icons/ci";
import { clearFilters, setFiltersOpen } from '@/redux/slices/filtersSlice'

export default function FiltersSheet() {
  const dispatch = useDispatch()
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
    <Sheet open={isFiltersOpen} onOpenChange={(value) => dispatch(setFiltersOpen(value))}>
      <SheetTrigger asChild>
        <button variant="outline" className="gap-2 w-fit flex items-center border px-2 py-1 rounded-md bg-white text-[12px] cursor-pointer">
          <CiSliderHorizontal size={16} />
          Filters
          <Badge
            variant="secondary"
            className="ml-1 rounded-full bg-indigo-100 px-2 py-0 text-xs text-[var(--color-primary)]"
          >
            {totalFilters}
          </Badge>
        </button>
      </SheetTrigger>
      <SheetContent className="w-[90%] overflow-y-auto px-4 sm:w-[540px]">
        <SheetHeader>
          <div className="flex items-center justify-between">
            <SheetTitle>Filters</SheetTitle>
            <Button variant="ghost" size="sm" onClick={() => dispatch(clearFilters())}>
              Clear All
            </Button>
          </div>
        </SheetHeader>
        
        <FilterOptions />
        
        <SheetFooter className="mt-6 flex flex-row gap-2">
          <SheetClose asChild>
            <Button variant="outline" className="flex-1 cursor-pointer">
              Close
            </Button>
          </SheetClose>
          <Button className="flex-1 bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary)]/80 cursor-pointer gap-2">
            Refresh Search
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
} 