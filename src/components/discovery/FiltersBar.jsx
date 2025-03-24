'use client'
import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import FiltersSheet from "./FiltersSheet"
import { useDispatch } from 'react-redux'
import { addFilter } from '@/redux/slices/filtersSlice'

export default function FiltersBar() {
  const dispatch = useDispatch()

  const handleTabChange = (value) => {
    if (value === "all") {
      dispatch(addFilter({ category: "profileType", value: "All" }))
    } else if (value === "academics") {
      dispatch(addFilter({ category: "profileType", value: "Academics" }))
    } else if (value === "institutions") {
      dispatch(addFilter({ category: "profileType", value: "Institutions" }))
    }
  }

  return (
    <div className="mb-8 flex items-center flex-wrap gap-2  justify-center">
      <FiltersSheet />

      <div className="w-auto">
        <div className="flex items-center gap-2">
          <button onClick={() => handleTabChange("all")} className="px-2 py-1 rounded-md border bg-white text-[12px] cursor-pointer">All</button>
          <button onClick={() => handleTabChange("academics")} className="px-2 py-1 rounded-md border bg-white text-[12px] cursor-pointer">Academics</button>
          <button onClick={() => handleTabChange("institutions")} className="px-2 py-1 rounded-md border bg-white text-[12px] cursor-pointer">Institutions</button>
        </div>
      </div>

      <div className="relative ml-2">
        <input type="text" placeholder="Add a keyword" className="w-40 text-[12px] border rounded-md p-1 bg-white" />
      </div>

        <button className="flex items-center bg-[var(--color-primary)] text-white px-2 py-1 text-[12px] rounded-md   hover:bg-[var(--color-primary)]/80 cursor-pointer gap-2">
          <Search size={16} />
          Refresh Search
      </button>
    </div>
  )
} 