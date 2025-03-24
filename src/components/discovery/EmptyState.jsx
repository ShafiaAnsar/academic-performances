'use client'
import { useDispatch } from 'react-redux'
import { SlidersHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { discovery } from "@/public/images"
import { setFiltersOpen } from '@/redux/slices/filtersSlice'

export default function EmptyState() {
  const dispatch = useDispatch()

  return (
    <div className="flex flex-col items-center justify-center rounded-lg border border-gray-200 bg-white p-12 text-center">
      <div className="mb-8 ">
        <Image src={discovery} alt="discovery" />
      </div>
      <h2 className="mb-2 text-xl font-semibold text-gray-800">
        The entire creator community is at your fingertips.
      </h2>
      <p className="mb-6 text-gray-600">Start by selecting some filters.</p>
      <Button 
        className="flex items-center bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary)]/80 cursor-pointer gap-2" 
        onClick={() => dispatch(setFiltersOpen(true))}
      >
        <SlidersHorizontal className="h-4 w-4" />
        Search with filters
      </Button>
    </div>
  )
} 