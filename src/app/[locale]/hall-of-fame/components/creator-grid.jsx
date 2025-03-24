import Image from "next/image"
import { academics } from "@/db"
import { badge, star, us } from "@/public/images"
import { RiSeedlingLine } from "react-icons/ri";
import { PiHexagonDuotone } from "react-icons/pi";

export function CreatorGrid() {
  return (
    <div className="mt-6 flex flex-wrap gap-4 items-center justify-center max-w-[90vw]">
      {academics.slice(0, 5).map((creator) => (
        <div key={creator.id} className="relative bg-white shadow-lg rounded-xl p-4 sm:w-[200px]  w-full text-center border flex flex-col gap-4">
          
          {/* Avatar and Rank */}
          <div className="flex items-center -mt-8">  
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
            <div className="relative w-14 ml-[35%] sm:ml-[20%] h-14">
              <Image
                src={creator.avatar || "/placeholder.svg"}
                alt={creator.name}
                width={100}
                height={100}
                className="rounded-full w-14 h-14 object-cover border-2 border-white shadow"
              />
              {/* Star Badge */}
              <div className="absolute bottom-0 right-0">
                <Image src={star} alt="Star" width={16} height={16} />
              </div>
            </div>
          </div>

          {/* Name & Description */}
          <div className="mt-2">
            <h3 className="font-semibold text-center break-words max-w-[90%] truncate mx-auto">
              {creator.name.slice(0, 15)}
            </h3>
            <p className="text-sm text-gray-500 truncate">{creator.description.slice(0, 20)}...</p>
          </div>

          {/* Authority & Growth */}
          <div className="flex items-center justify-center gap-2">
            <div className="flex items-center gap-1">
              <Image src={badge} alt="Authority" width={20} height={20} />
              <span className="text-sm font-medium">{creator.authority}</span>
            </div>
            <Image src={us} alt="Country" width={20} height={20} className="rounded-sm" />
            <span className="text-green-500 bg-[#dcfce7] px-2 py-1 text-xs rounded-full">
              {creator.growth}
            </span>
          </div>

          {/* Badges Section */}
          <div className="flex items-center justify-center ">
            <div className="flex items-center gap-3">
              <div className="flex relative -rotate-12">
                <PiHexagonDuotone className="absolute top-0 left-0" size={10} style={{ color: '#3fe4fc' }} />
                <PiHexagonDuotone className="absolute top-0 right-0" size={10} style={{ color: '#fdcc47' }} />
                <PiHexagonDuotone className="absolute bottom-0 left-0" size={10} style={{ color: '#9cb6dc' }} />
                <PiHexagonDuotone className="absolute bottom-0 right-0" size={10} style={{ color: '#ffae75' }} />

              </div>
            <span className="text-sm font-medium">{creator.totalBadges}</span>
            </div>
            {creator.badgesByRarity && Object.entries(creator.badgesByRarity).map(([rarity, count]) => (
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

          {/* Spotlight Button */}
          <button 
            className="w-full flex items-center cursor-pointer justify-center gap-2 rounded-md py-2 text-sm border border-transparent"
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

        </div>
      ))}
    </div>
  )
}
