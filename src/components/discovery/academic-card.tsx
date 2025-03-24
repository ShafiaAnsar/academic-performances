"use client"

import type React from "react"

import Image from "next/image"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import { Users, BookOpen, BarChart2, ExternalLinkIcon } from "lucide-react"
import { FaInstagram, FaYoutube } from "react-icons/fa"
import { BsTwitterX } from "react-icons/bs"
import { useEffect, useRef, useState } from "react"
import { CrmPopup } from "./crm-popup"
import { person7 } from "@/public/images"

interface AcademicCardProps {
  id: string
  name: string
  country: string
  title: string
  category: string
  categoryIcon?: React.ReactNode
  citations: number
  instagramStats?: string
  growthPercentage: number
  bio: string
  profileImage: string
  socialMedia: {
    instagram?: boolean
    twitter?: boolean
    youtube?: boolean
  }
  onAddToCrm?: () => void
  onAddToLists?: () => void
  onShare?: () => void
}

export function AcademicCard({
  id,
  name,
  title,
  category,
  categoryIcon = <BookOpen className="h-4 w-4 text-[var(--color-primary)]" />,
  citations,
  instagramStats,
  growthPercentage,
  bio,
  profileImage,
  socialMedia,
  onAddToCrm = () => {},
  onAddToLists = () => {},
  onShare = () => {},
}: AcademicCardProps) {
  const isGrowthPositive = growthPercentage >= 0
  const [isCrmPopupOpen, setIsCrmPopupOpen] = useState(false)
  const crmButtonRef = useRef<HTMLButtonElement>(null)
  const popupRef = useRef<HTMLDivElement>(null)

  // Close popup when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        popupRef.current &&
        !popupRef.current.contains(event.target as Node) &&
        crmButtonRef.current &&
        !crmButtonRef.current.contains(event.target as Node)
      ) {
        setIsCrmPopupOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  return (
    <div className="rounded-lg border bg-white p-4 shadow-sm">
      <div className="flex items-start justify-between">
        <div className="flex items-start gap-2">
          <Checkbox id={`select-${id}`}  className="mt-1" />
            <Image src={profileImage || person7}  width={100} height={100} alt={name} className="object-cover rounded-full w-10 h-10" />
          <div>
            <div className="flex items-center gap-1.5">
              <h3 className="text-[14px] font-semibold text-gray-800">{name}</h3>
              <span className="">🌍</span>
            </div>
            <p className="text-[12px] text-gray-600">{title}</p>
            <div className="mt-1 flex items-center gap-1.5">
              {categoryIcon}
              <span className="text-[12px] font-medium text-[var(--color-primary)]">{category}</span>
            </div>
          </div>
        </div>

        <div className="flex gap-2">
        <div className="relative">
            <Button
              ref={crmButtonRef}
              variant="outline"
              size="sm"
              className="flex items-center gap-1.5 cursor-pointer text-[12px] text-gray-600"
              onClick={() => setIsCrmPopupOpen(!isCrmPopupOpen)}
            >
              <Users size={14}/>
              <span>CRM</span>
            </Button>

            <div ref={popupRef}>
              <CrmPopup
                isOpen={isCrmPopupOpen}
                onClose={() => setIsCrmPopupOpen(false)}
                onAddToCrm={onAddToCrm}
                onAddToLists={onAddToLists}
              />
            </div>
          </div>
          <Button variant="outline" size="icon" className="h-6 w-6 cursor-pointer text-gray-600" onClick={onShare}>
            <ExternalLinkIcon size={14}/>
          </Button>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-3">
        <div className="flex items-center gap-1.5 rounded-full bg-gray-100 px-2.5 py-1">
          <div className="flex h-5 w-5 items-center justify-center rounded-full bg-gray-200">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 14l9-5-9-5-9 5 9 5z" fill="#6B7280" />
              <path
                d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                fill="#6B7280"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                stroke="#6B7280"
                d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
              />
            </svg>
          </div>
          <span className=" text-[12px]">{citations.toLocaleString()}</span>
        </div>

        {instagramStats && (
          <div className="flex items-center gap-1.5 rounded-full bg-gradient-to-r from-purple-100 to-pink-100 px-2.5 py-1">
            <div className="flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-r from-purple-500 to-pink-500">
              <FaInstagram className="h-3 w-3 text-white" />
            </div>
            <span className="text-[12px]">{instagramStats}</span>
          </div>
        )}

        <div
          className={`flex items-center gap-1.5 rounded-full px-2.5 py-1 ${
            isGrowthPositive ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
          }`}
        >
          <span className="text-[12px]">
            {isGrowthPositive ? "+" : ""}
            {growthPercentage}%
          </span>
        </div>
      </div>

      <div className="mt-4">
        <p className="text-sm text-gray-700 line-clamp-2">{bio}</p>
      </div>

      <div className="mt-4 flex items-center justify-between">
        <div className="flex gap-2">
          {socialMedia.instagram && (
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100">
              <FaInstagram className="h-4 w-4 text-gray-700" />
            </div>
          )}
          {socialMedia.twitter && (
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100">
              <BsTwitterX className="h-3.5 w-3.5 text-gray-700" />
            </div>
          )}
          {socialMedia.youtube && (
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100">
              <FaYoutube className="h-4 w-4 text-gray-700" />
            </div>
          )}
        </div>

        <Button variant="ghost" size="sm" className="h-8 text-red-500">
          <BarChart2 className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}

