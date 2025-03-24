"use client"

import { Plus } from "lucide-react"

interface CrmPopupProps {
  isOpen: boolean
  onClose: () => void
  onAddToCrm: () => void
  onAddToLists: () => void
}

export function CrmPopup({ isOpen, onClose, onAddToCrm, onAddToLists }: CrmPopupProps) {
  if (!isOpen) return null

  return (
    <div className="absolute right-0 -top-22 z-50 mt-1 w-[150px] rounded-md border border-gray-200 bg-[#1E2029] p-2 shadow-lg">
      <div className="flex flex-col w-full gap-2">
        <button
          className="w-full justify-between bg-[var(--color-primary)] text-[12px] py-1 px-2 rounded-md flex text-white hover:bg-[var(--color-primary)]/70 cursor-pointer"
          onClick={() => {
            onAddToCrm()
            onClose()
          }}
        >
          <span>Add to CRM</span>
          <Plus size={14} />
        </button>

        <button
          className="w-full justify-between bg-white text-[12px] py-1 px-2 rounded-md flex text-gray-700 cursor-pointer hover:bg-gray-50"
          onClick={() => {
            onAddToLists()
            onClose()
          }}
        >
          <span>Add to lists</span>
          <Plus className="h-4 w-4" />
        </button>
      </div>

      {/* Triangle pointer */}
      <div className="absolute -top-2 right-4 h-0 w-0 border-8 border-transparent border-b-[#1E2029]"></div>
    </div>
  )
}

