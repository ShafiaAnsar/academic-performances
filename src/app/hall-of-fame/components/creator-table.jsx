import Image from "next/image"
import { creators } from "@/db"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { badge, us } from "../../../../public/images"
import { CheckCircle } from "lucide-react"
export function CreatorTable() {
  return (
    <div className="mt-8 overflow-x-auto w-full rounded-lg border bg-white">
      <Table className="w-full overflow-x-auto" >
        <TableHeader>
          <TableRow>
            <TableHead className="w-[300px]">Creators 20/9748</TableHead>
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
                    <Avatar>
                      <AvatarImage src={creator.avatar.src} />
                      <AvatarFallback>{creator.name[0]}</AvatarFallback>
                    </Avatar>
                    <span className="absolute -right-1 -top-1 text-purple-500">★</span>
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
                <div className="flex items-center gap-1">
                  <div className="flex -space-x-1">
                    <div className="h-6 w-6 rounded-full bg-blue-100" />
                    <div className="h-6 w-6 rounded-full bg-purple-100" />
                    <div className="h-6 w-6 rounded-full bg-yellow-100" />
                    <div className="h-6 w-6 rounded-full bg-cyan-100" />
                  </div>
                  <span>{creator.totalBadges}</span>
                </div>
              </TableCell>
              <TableCell className="p-4">
                <div className="flex gap-2">
                  {Object.entries(creator.badgesByRarity).map(([rarity, count]) => (
                    <div key={rarity} className="flex items-center gap-1 rounded-lg border px-2 py-1 text-sm">
                      <span
                        className={`h-2 w-2 rounded-full ${
                          rarity === "common"
                            ? "bg-orange-400"
                            : rarity === "rare"
                              ? "bg-gray-400"
                              : rarity === "epic"
                                ? "bg-yellow-400"
                                : "bg-cyan-400"
                        }`}
                      />
                      <span>{count}</span>
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
                <button className="flex items-center gap-2 rounded-md border px-4 py-2 text-sm hover:bg-gray-50">
                  <Image src="/placeholder.svg" alt="Spotlight" width={16} height={16} />
                  Spotlight
                </button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

