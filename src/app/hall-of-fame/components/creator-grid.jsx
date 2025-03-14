import Image from "next/image"
import { creators } from "@/db"
import { badge, us } from "../../../../public/images"
export function CreatorGrid() {
  return (
    <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
      {creators.map((creator) => (
        <div key={creator.id} className="overflow-hidden rounded-lg border bg-white p-4 shadow-sm">
          <div className="relative mb-4">
            <span
              className={`text-lg font-bold ${
                creator.rank === 1
                  ? "text-yellow-500"
                  : creator.rank === 2
                    ? "text-gray-400"
                    : creator.rank === 3
                      ? "text-amber-600"
                      : "text-gray-600"
              }`}
            >
              {creator.rank}#
            </span>
          </div>

          <div className="flex items-start gap-3">
            <div className="relative">
              <Image
                src={creator.avatar || "/placeholder.svg"}
                alt={creator.name}
                width={50}
                height={50}
                className="rounded-full"
              />
              <div className="absolute -right-1 -top-1 text-sm text-purple-500">★</div>
            </div>
            <div>
              <h3 className="font-semibold">{creator.name}</h3>
              <p className="text-sm text-gray-600">{creator.description.slice(0, 20)}...</p>
            </div>
          </div>

          <div className="mt-4 flex items-center gap-2">
            <div className="flex items-center gap-1">
              <Image src={badge} alt="Authority" width={30} height={30}  />
              <span>{creator.authority}</span>
            </div>
            <Image src={us} alt="Country" width={30} height={30}  />
            <span className="text-green-500">{creator.growth}</span>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {Object.entries(creator.badgesByRarity).map(([color, count]) => (
              <div key={color} className="flex items-center gap-1 rounded-full bg-gray-100 px-2 py-1 text-xs">
                <span className={`h-2 w-2 rounded-full bg-${color}-400`} />
                <span>{count}</span>
              </div>
            ))}
          </div>

          <button className="mt-4 flex w-full items-center justify-center gap-2 rounded-md border py-2 text-sm hover:bg-gray-50">
            <Image src="/placeholder.svg" alt="Spotlight" width={16} height={16} />
            Spotlight
          </button>
        </div>
      ))}
    </div>
  )
}

