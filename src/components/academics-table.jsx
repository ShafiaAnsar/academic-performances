import { cn } from "@/lib/utils"
import { academics } from "@/db"
import { Award, BookOpen, ExternalLink, FlaskRound, Lightbulb, Users } from "lucide-react"
import Image from "next/image"
import { badge, us, gold, silver, bronze } from "../../public/images"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const AcademicsTable = () => {
  return (
    <>
      {/* Desktop Table */}
      <div className="sm:block hidden w-full overflow-auto">
        <div className="overflow-x-auto">
          <Table className="w-full min-w-[1000px] table-fixed">
            <TableHeader className="bg-white sticky top-0">
              <TableRow className="text-left">
                <TableHead className="py-4 px-4 text-[13px] font-medium w-[5%] text-gray-500">Ranking</TableHead>
                <TableHead className="py-4 px-4 text-[13px] font-medium w-[18%] text-gray-500">Academic</TableHead>
                <TableHead className="py-4 px-4 text-[13px] font-medium w-[10%] text-gray-500">Country</TableHead>
                <TableHead className="py-4 px-4 text-[13px] font-medium w-[12%] text-gray-500">Score</TableHead>
                <TableHead className="py-4 px-4 text-[13px] font-medium w-[18%] text-gray-500">Indicators</TableHead>
                <TableHead className="py-4 px-4 text-[13px] font-medium w-[7%] text-gray-500">Growth</TableHead>
                <TableHead className="py-4 px-4 text-[13px] font-medium w-[20%] text-gray-500">Area of Study</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {academics.map((academic, index) => (
                <TableRow 
                  key={academic.id} 
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
                        {academic.rank <= 3 ? (
                          <Image
                            src={
                              academic.rank === 1
                                ? gold
                                : academic.rank === 2
                                  ? silver
                                  : bronze
                            }
                            alt={`Rank ${academic.rank}`}
                            width={32}
                            height={32}
                          />
                        ) : (
                          <div className="text-gray-500 font-bold">{academic.rank}#</div>
                        )}
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="py-4 px-4">
                    <div className="flex items-start gap-3">
                      <Image
                        src={academic.avatar || "/placeholder.svg"}
                        alt={academic.name}
                        width={40}
                        height={40}
                        className="rounded-full"
                      />
                      <div className="min-w-0">
                        <div className="flex items-center gap-2">
                          <h4 className="font-bold truncate">{academic.name}</h4>
                        </div>
                        <p className="text-sm text-gray-600 truncate">{academic.title}</p>
                        <p className="text-xs text-gray-500 truncate">{academic.description.slice(0, 40)}...</p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="py-4 px-4">
                    <div className="flex flex-col items-center gap-2">
                      <Image src={us} alt="us" width={20} height={20} />
                      <span>{academic.country}</span>
                    </div>
                  </TableCell>
                  <TableCell className="py-4 px-4 border-r border-gray-100">
                    <div className="flex items-center gap-2">
                      <Image src={badge} alt="badge" width={35} height={35} />
                      <span className="text-md">{academic.score.toLocaleString()}</span>
                    </div>
                  </TableCell>
                  <TableCell className="py-4 px-4">
                    <div className="flex items-center gap-3">
                      {academic.indicators.research && (
                        <div className="flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full">
                          <FlaskRound className="h-4 w-4 text-blue-600" />
                        </div>
                      )}
                      {academic.indicators.teaching && (
                        <div className="flex items-center justify-center w-8 h-8 bg-green-100 rounded-full">
                          <BookOpen className="h-4 w-4 text-green-600" />
                        </div>
                      )}
                      {academic.indicators.contribution && (
                        <div className="flex items-center justify-center w-8 h-8 bg-purple-100 rounded-full">
                          <Users className="h-4 w-4 text-purple-600" />
                        </div>
                      )}
                      {academic.indicators.awards && (
                        <div className="flex items-center justify-center w-8 h-8 bg-amber-100 rounded-full">
                          <Award className="h-4 w-4 text-amber-600" />
                        </div>
                      )}
                      {academic.indicators.influence && (
                        <div className="flex items-center justify-center w-8 h-8 bg-red-100 rounded-full">
                          <Lightbulb className="h-4 w-4 text-red-600" />
                        </div>
                      )}
                    </div>
                  </TableCell>
                  <TableCell className="py-4 px-4">
                    <span className={`${academic.growth.startsWith("+") ? "text-green-600" : "text-red-600"}`}>
                      {academic.growth}
                    </span>
                  </TableCell>
                  <TableCell className="py-4 px-4">
                    <div className="flex flex-col bg-white rounded-md border border-gray-200 p-2 gap-2">
                      <span className="text-gray-700 text-[12px] truncate">{academic.areaOfStudy}</span>
                      
                      <div className="flex items-center w-fit gap-2">
                        <span className="text-gray-700 bg-white p-2 w-full rounded-full border border-gray-200 text-[12px] truncate">
                          🔬 {academic.specialization}
                        </span>
                        <span className="ml-2 bg-purple-100 text-[var(--color-primary)] text-xs font-medium px-2 py-0.5 rounded-full">
                          {academic.fieldRanking}
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
          {academics.map((academic) => (
            <div key={academic.id} className="bg-white rounded-md border border-gray-200 p-4">
              <div className="flex items-start justify-between">
                <div className="flex gap-3">
                  <Image
                    src={academic.avatar || "/placeholder.svg"}
                    alt={academic.name}
                    width={100}
                    height={100}
                    className="rounded-full w-10 h-10"
                  />
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-md font-semibold">{academic.name}</h3>
                      <a href="#" className="text-gray-400">
                        <ExternalLink className="h-4 w-4 text-gray-400" />
                      </a>
                    </div>
                    <p className="text-sm text-gray-600">{academic.title}</p>
                    <p className="text-xs text-gray-600 ">{academic.description.slice(0,25)}...</p>
                    <div className="flex items-center mt-1">
                      {/* <span className="text-xs text-gray-500">
                        {academic.[0]} • {academic.niches[0]}
                      </span> */}
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-end">
                  <div className="text-amber-600 font-bold text-xl">
                    {academic.rank}
                    <span className="text-amber-600 text-lg">#</span>
                  </div>
                </div>
              </div>
              
              <div className="mt-4 flex gap-2 flex-col ">
                  <div className="flex items-center gap-2">
                    <Image src={badge} alt="badge" width={35} height={35} />
                    <span className="text-md">{academic.score.toLocaleString()}</span>
                  </div>
                
                <div className="flex items-center gap-3">
                      {academic.indicators.research && (
                        <div className="flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full">
                          <FlaskRound className="h-4 w-4 text-blue-600" />
                        </div>
                      )}
                      {academic.indicators.teaching && (
                        <div className="flex items-center justify-center w-8 h-8 bg-green-100 rounded-full">
                          <BookOpen className="h-4 w-4 text-green-600" />
                        </div>
                      )}
                      {academic.indicators.contribution && (
                        <div className="flex items-center justify-center w-8 h-8 bg-purple-100 rounded-full">
                          <Users className="h-4 w-4 text-purple-600" />
                        </div>
                      )}
                      {academic.indicators.awards && (
                        <div className="flex items-center justify-center w-8 h-8 bg-amber-100 rounded-full">
                          <Award className="h-4 w-4 text-amber-600" />
                        </div>
                      )}
                      {academic.indicators.influence && (
                        <div className="flex items-center justify-center w-8 h-8 bg-red-100 rounded-full">
                          <Lightbulb className="h-4 w-4 text-red-600" />
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

export default AcademicsTable 