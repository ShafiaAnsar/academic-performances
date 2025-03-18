"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Check, ChevronDown, ChevronUp } from "lucide-react"

interface FilterDropdownProps {
  label: string
  options: string[]
  icon?: React.ReactNode
  selected?: string
  onSelect?: (option: string) => void
}

export function FilterDropdown({  options, icon, selected = options[0], onSelect }: FilterDropdownProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedOption, setSelectedOption] = useState(selected)

  const handleSelect = (option: string) => {
    setSelectedOption(option)
    if (onSelect) {
      onSelect(option)
    }
    setIsOpen(false)
  }

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="flex items-center gap-2 bg-white border rounded-md px-3 py-2 h-10">
          {icon && <span className="mr-1">{icon}</span>}
          {selectedOption}
          {isOpen ? <ChevronUp className="h-4 w-4 opacity-50" /> : <ChevronDown className="h-4 w-4 opacity-50" />}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="w-[200px]">
        {options.map((option) => (
          <DropdownMenuItem key={option} className="flex items-center gap-2 py-2" onClick={() => handleSelect(option)}>
            {selectedOption === option && <Check className="h-4 w-4 text-primary" />}
            <span className={selectedOption === option ? "font-medium" : ""}>{option}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

