import { cn } from "@/lib/utils"
import { creators } from "@/db"
import { Linkedin, Youtube, Instagram, Twitter, Trophy, ExternalLink } from "lucide-react"
import Image from "next/image"
import { badge, us, gold, silver, bronze } from "../../public/images"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const CreatorsTable = () => {
  return (
    <>
      {/* Desktop Table */}
      <div className="sm:block hidden w-full overflow-auto">
        <div className="overflow-x-auto">
          <Table className="w-full min-w-[1000px]">
            <TableHeader className="bg-white sticky top-0">
              <TableRow className="text-left">
                <TableHead className="py-4 px-4 text-[13px] font-medium w-[5%] text-gray-500">Ranking</TableHead>
                <TableHead className="py-4 px-4 text-[13px] font-medium w-[25%] text-gray-500">Creator</TableHead>
                <TableHead className="py-4 px-4 text-[13px] font-medium w-[15%] text-gray-500">Country</TableHead>
                <TableHead className="py-4 px-4 text-[13px] font-medium w-[10%] text-gray-500">Authority</TableHead>
                <TableHead className="py-4 px-4 text-[13px] font-medium w-[10%] text-gray-500">Followers</TableHead>
                <TableHead className="py-4 px-4 text-[13px] font-medium w-[10%] text-gray-500">Growth</TableHead>
                <TableHead className="py-4 px-4 text-[13px] font-medium w-[20%] text-gray-500">Industries</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {creators.map((creator, index) => (
                <TableRow 
                  key={creator.id} 
                  className={cn(
                    "border-t hover:bg-gray-50",
                    index === 0 && "bg-[#fefae5]",
                    index === 1 && "bg-[#f9f8f9]",
                    index === 2 && "bg-[#faf2ea]",
                    index > 2 && "bg-white"
                  )}
                >
                  <TableCell className="py-4 px-4">
                    <div className="flex items-start gap-2">
                      <div className="relative">
                        {creator.rank <= 3 ? (
                          <Image
                            src={
                              creator.rank === 1
                                ? gold
                                : creator.rank === 2
                                  ? silver
                                  : bronze
                            }
                            alt={`Rank ${creator.rank}`}
                            width={32}
                            height={32}
                          />
                        ) : (
                          <div className="text-gray-500 font-bold">{creator.rank}#</div>
                        )}
                      </div>
                      {creator.rankChange > 0 && (
                        <span className="text-xs text-green-600">+{creator.rankChange}</span>
                      )}
                    </div>
                  </TableCell>
                  <TableCell className="py-4 px-4">
                    <div className="flex items-start gap-3">
                      <Image
                        src={creator.avatar || "/placeholder.svg"}
                        alt={creator.name}
                        width={50}
                        height={50}
                        className="rounded-full"
                      />
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="font-bold">{creator.name}</h4>
                          {creator.socialLinks.linkedin && <Linkedin className="h-4 w-4 text-blue-600" />}
                          {creator.socialLinks.youtube && <Youtube className="h-4 w-4 text-red-600" />}
                          {creator.socialLinks.instagram && <Instagram className="h-4 w-4 text-pink-600" />}
                        </div>
                        <p className="text-sm text-gray-600">{creator.description.slice(0, 15)}...</p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="py-4 px-4">
                    <div className="flex items-center flex-col gap-2">
                      <Image src={us} alt="us" width={20} height={20} />
                      <span>{creator.country}</span>
                    </div>
                  </TableCell>
                  <TableCell className="py-4 px-4">
                    <div className="flex items-center gap-2">
                      <Image src={badge} alt="badge" width={40} height={40} />
                      <span className="text-md">{creator.authority.toLocaleString()}</span>
                    </div>
                  </TableCell>
                  <TableCell className="py-4 px-4">
                    <div className="space-y-1">
                      {creator.followers.youtube && (
                        <div className="flex items-center gap-2">
                          <Youtube className="h-4 w-4 text-red-600" />
                          <span>{creator.followers.youtube}</span>
                        </div>
                      )}
                      {creator.followers.tiktok && (
                        <div className="flex items-center gap-2">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M19.321 5.562a5.124 5.124 0 0 1-3.414-1.267 5.124 5.124 0 0 1-1.537-2.542H10.5v10.47c0 1.342-1.088 2.43-2.43 2.43s-2.43-1.088-2.43-2.43 1.088-2.43 2.43-2.43c.271 0 .53.046.773.127v-3.82a6.308 6.308 0 0 0-.773-.046C4.325 6.054 1.5 8.879 1.5 12.454s2.825 6.4 6.3 6.4 6.3-2.825 6.3-6.4V9.995c1.463 1.045 3.211 1.643 5.1 1.643h.121V7.777h-.121c-.2 0-.398-.01-.596-.03l.717-2.184Z" />
                          </svg>
                          <span>{creator.followers.tiktok}</span>
                        </div>
                      )}
                      {creator.followers.instagram && (
                        <div className="flex items-center gap-2">
                          <Instagram className="h-4 w-4 text-pink-600" />
                          <span>{creator.followers.instagram}</span>
                        </div>
                      )}
                      {creator.followers.twitter && (
                        <div className="flex items-center gap-2">
                          <Twitter className="h-4 w-4 text-blue-400" />
                          <span>{creator.followers.twitter}</span>
                        </div>
                      )}
                    </div>
                  </TableCell>
                  <TableCell className="py-4 px-4">
                    <span className={`${creator.growth.startsWith("+") ? "text-green-600" : "text-red-600"}`}>
                      {creator.growth}
                    </span>
                  </TableCell>
                  <TableCell className="py-4 px-4">
                    <div className="flex flex-col bg-white rounded-md border border-gray-200 p-2 gap-2">
                      <span className="text-gray-700 text-[12px]">{creator.industries[0]}</span>
                      
                      <div className="flex items-center w-fit gap-2">
                        <span className="text-gray-700 bg-white p-2 w-full rounded-full border border-gray-200 text-[12px]"> ⭐{creator.niches[0]}</span>
                        <span className="ml-2 bg-purple-100 text-[var(--color-primary)] text-xs font-medium px-2 py-0.5 rounded-full">
                          {creator.industryBadges[0]}
                        </span>
                      </div>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
      
      {/* Mobile Cards */}
      <div className="sm:hidden">
        <div className="flex flex-col gap-4 w-full">
          {creators.map((creator) => (
            <div key={creator.id} className="bg-white rounded-md border border-gray-200 p-4">
              <div className="flex items-start justify-between">
                <div className="flex gap-3">
                  <Image
                    src={creator.avatar || "/placeholder.svg"}
                    alt={creator.name}
                    width={100}
                    height={100}
                    className="rounded-full w-10 h-10"
                  />
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-lg font-semibold">{creator.name}</h3>
                      <a href="#" className="text-gray-400">
                        <ExternalLink className="h-4 w-4 text-gray-400" />
                      </a>
                    </div>
                    <p className="text-sm text-gray-600">{creator.description}</p>
                    <div className="flex items-center mt-1">
                      <span className="text-xs text-gray-500">
                        {creator.industries[0]} • {creator.niches[0]}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-end">
                  <div className="text-amber-600 font-bold text-xl">
                    {creator.rank}
                    <span className="text-amber-600 text-lg">#</span>
                  </div>
                </div>
              </div>
              
              <div className="mt-4 flex flex-col ">
                <div className="flex items-center gap-2">
                  <Image src={badge} alt="badge" width={30} height={30} />
                  <span className="font-medium">{creator.authority.toLocaleString()}</span>
                </div>
                
                <div className="flex gap-4">
                  {creator.followers.youtube && (
                    <div className="flex items-center gap-1">
                      <Youtube className="h-4 w-4 text-red-600" />
                      <span className="text-sm font-medium">{creator.followers.youtube}</span>
                    </div>
                  )}
                  {creator.followers.tiktok && (
                    <div className="flex items-center gap-1">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M19.321 5.562a5.124 5.124 0 0 1-3.414-1.267 5.124 5.124 0 0 1-1.537-2.542H10.5v10.47c0 1.342-1.088 2.43-2.43 2.43s-2.43-1.088-2.43-2.43 1.088-2.43 2.43-2.43c.271 0 .53.046.773.127v-3.82a6.308 6.308 0 0 0-.773-.046C4.325 6.054 1.5 8.879 1.5 12.454s2.825 6.4 6.3 6.4 6.3-2.825 6.3-6.4V9.995c1.463 1.045 3.211 1.643 5.1 1.643h.121V7.777h-.121c-.2 0-.398-.01-.596-.03l.717-2.184Z" />
                      </svg>
                      <span className="text-sm font-medium">{creator.followers.tiktok}</span>
                    </div>
                  )}
                  {creator.followers.instagram && (
                    <div className="flex items-center gap-1">
                      <Instagram className="h-4 w-4 text-pink-600" />
                      <span className="text-sm font-medium">{creator.followers.instagram}</span>
                    </div>
                  )}
                  {creator.followers.twitter && (
                    <div className="flex items-center gap-1">
                      <Twitter className="h-4 w-4 text-blue-400" />
                      <span className="text-sm font-medium">{creator.followers.twitter}</span>
                    </div>
                  )}
                  {creator.rankChange > 0 && (
                    <div className="flex items-center gap-1 text-green-600">
                      <span className="text-xs">+{creator.rankChange}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default CreatorsTable