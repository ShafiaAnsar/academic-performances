import Image from "next/image"
import {creators } from "@/db"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { badge, star, us } from "@/public/images"
import { CheckCircle } from "lucide-react"
import { RiSeedlingLine } from "react-icons/ri"
import { PiHexagonDuotone } from "react-icons/pi"
export function CreatorTable() {
  return (
    <div className="mt-8 overflow-x-auto max-w-[87vw]  rounded-lg border bg-white">
      <Table style={{scrollbarWidth: 'none'}} className="overflow-x-auto" >
        <TableHeader>
          <TableRow>
            <TableHead className="w-[300px]">Academics 20/9748</TableHead>
            <TableHead>Authority Score</TableHead>
            <TableHead>Total Badge</TableHead>
            <TableHead>Badge Per Rarity</TableHead>
            <TableHead>Country</TableHead>
            <TableHead>Available For Work</TableHead>
            <TableHead>Score Growth</TableHead>
            <TableHead>Spotlight</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
            {creators.map((creator) => (
            <TableRow key={creator.id} className="border-b">
              <TableCell className="p-4">
                <div className="flex items-center gap-3">
                  <span className="text-gray-500">{creator.rank}#</span>
                  <div className="relative">
                    <Avatar className="w-15 h-15">
                      <AvatarImage  src={creator.avatar.src} />
                      <AvatarFallback>{creator.name[0]}</AvatarFallback>
                    </Avatar>
                    <span className="absolute -right-1 -bottom-0 text-[var(--color-primary)]">
                      <Image src={star} alt="Star" width={16} height={16} />
                    </span>
                  </div>
                  <div>
                    <h4 className="font-medium">{creator.name}</h4>
                    <p className="text-sm text-gray-600">{creator.description.slice(0, 20)}...</p>
                  </div>
                </div>
              </TableCell>
              <TableCell className="p-4">
                <div className="flex items-center gap-2">
                  <Image src={badge} alt="Authority" width={30} height={30}  />
                  {creator.authority}
                </div>
              </TableCell>
              <TableCell className="p-4">
                <div className="flex items-center gap-2">
                <div className="flex">
                <PiHexagonDuotone className="-mr-2" size={16} style={{ color: '#3fe4fc' }} />
                <PiHexagonDuotone className="-mr-2" size={16} style={{ color: '#fdcc47' }} />
                <PiHexagonDuotone className="-mr-2" size={16} style={{ color: '#9cb6dc' }} />
                <PiHexagonDuotone className="-mr-2" size={16} style={{ color: '#ffae75' }} />
              </div>
                  <span>{creator.totalBadges}</span>
                </div>
              </TableCell>
              <TableCell className="p-4">
                <div className="flex gap-2">
                  {Object.entries(creator.badgesByRarity).map(([rarity, count]) => (
                   <div key={rarity} className="flex items-center">
                   <PiHexagonDuotone 
                     size={16}
                     style={{ color: rarity === 'common' ? '#ffae75' :
                       rarity === 'rare' ? '#9cb6dc' :
                       rarity === 'epic' ? '#fdcc47' :
                       '#3fe4fc' // legendary
                     }}
                   />
                   <span className="text-sm">{count}</span>
                 </div>
                  ))}
                </div>
              </TableCell>
              <TableCell className="p-4">
                <Image src={us} alt="Country" width={30} height={30}  />
              </TableCell>
              <TableCell className="p-4">{creator.socialLinks.instagram ?
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
              </div>
               : "-"}</TableCell>
              <TableCell className="p-4">
                <span className={creator.growth.startsWith("-") ? "text-red-500" : "text-green-500"}>
                  {creator.growth}
                </span>
              </TableCell>
              <TableCell className="p-4">
                  {/* Spotlight Button */}
          <button 
            className="w-full flex items-center justify-center gap-[4px] cursor-pointer rounded-md p-2 text-sm border border-transparent"
            style={{
              background: 'linear-gradient(white, white) padding-box, linear-gradient(to right, #f42c51, #ffc501) border-box'
            }}
          >
            <RiSeedlingLine className="[&>path]:fill-[url(#gradient)]" />
            <svg width="0" height="0">
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" style={{stopColor: '#f42c51'}} />
                <stop offset="100%" style={{stopColor: '#ffc501'}} />
              </linearGradient>
            </svg>
            <span className="text-gray-600">
              Spotlight
            </span>
          </button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

