'use client'
import { useDispatch, useSelector } from 'react-redux'

import { X, Info } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { removeFilter, setSocialMediaMetric, toggleSocialMediaActiveOnly } from '@/redux/slices/filtersSlice'
import { instagram, tiktok, youtube, twitter, linkedin, message, snapchat } from '@/public/images'
import FiltersBar from './FiltersBar'

// Define social media platforms
const socialMediaPlatforms = [
  { 
    id: 'instagram', 
    img: instagram, 
    bgColor: 'bg-pink-100',
    textColor: 'text-pink-600'
  },
  { 
    id: 'tiktok', 
    img: tiktok, 
    bgColor: 'bg-gray-100',
    textColor: 'text-gray-800'
  },
  { 
    id: 'youtube', 
    img: youtube, 
    bgColor: 'bg-red-100',
    textColor: 'text-red-600'
  },
  { 
    id: 'twitter', 
    img: twitter, 
    bgColor: 'bg-gray-100',
    textColor: 'text-gray-800'
  },
  { 
    id: 'linkedin', 
    img: linkedin, 
    bgColor: 'bg-blue-100',
    textColor: 'text-blue-600'
  },
  { 
    id: 'twitch', 
    img: message, 
    bgColor: 'bg-purple-100',
    textColor: 'text-purple-600'
  },
  { 
    id: 'snapchat', 
    img: snapchat, 
    bgColor: 'bg-yellow-100',
    textColor: 'text-yellow-600'
  }
]

// Helper function to format range values
const formatRangeValue = (min, max, unit = '') => {
  if (min !== null && max !== null) {
    return `${min} to ${max}${unit}`
  } else if (min !== null) {
    if (min < 0) {
      return `${min}${unit}`
    } else {
      return `${min}${unit}`
    }
  } else if (max !== null) {
    return `0 to ${max}${unit}`
  }
  return ''
}

export default function FilterTags() {
  const dispatch = useDispatch()
  const { activeFilters } = useSelector((state) => state.filters)

  // Create a flat array of all filter categories and their values for display
  const filterCategories = [
    { name: "Profile Type", key: "profileType", bg: "#f2f3f3", textColor: "#6b7280" },
    { name: "Areas of Study", key: "areasOfStudy", bg: "#fff3c6", textColor: "#d97706" },
    { name: "Languages", key: "languages", bg: "#fcebff", textColor: "#c026d3" },
    { name: "Region", key: "region", bg: "#e0f2fe", textColor: "#0284c7" },
    { name: "Countries", key: "countries", bg: "#dbeafe", textColor: "#2563eb" },
    { name: "City", key: "city", bg: "#ede9fe", textColor: "#7c3aed" },
    { name: "Platforms", key: "platforms", bg: "#fae8ff", textColor: "#a21caf" },
    { name: "Followers", key: "followers", bg: "#ddfce6", textColor: "#059669" },
    { name: "Engagement Rate", key: "engagementRate", bg: "#d1fae5", textColor: "#047857" },
    { name: "Post frequency", key: "postFrequency", bg: "#ecfdf5", textColor: "#10b981" },
    { name: "Research Niches", key: "researchNiches", bg: "#fef3c7", textColor: "#b45309" },
    { name: "Active Accounts", key: "activeAccounts", bg: "#e0f2fe", textColor: "#0369a1" },
    { name: "Other Filters", key: "otherFilters", bg: "#f3f4f6", textColor: "#4b5563" },
    { name: "Publications", key: "publications", bg: "#f0fdf4", textColor: "#16a34a" },
    { name: "Citations", key: "citations", bg: "#dcfce7", textColor: "#15803d" },
    { name: "H-Index", key: "hIndex", bg: "#d1fae5", textColor: "#065f46" },
    { name: "Regions", key: "regions", bg: "#e0f2fe", textColor: "#0284c7" },
    { name: "Institutions", key: "institutions", bg: "#f2e9ff", textColor: "#9a15fb" },
  ]

  // Check if any filters are active
  const hasActiveFilters = filterCategories.some(category => 
    activeFilters[category.key] && activeFilters[category.key].length > 0
  ) || (activeFilters.socialMedia && activeFilters.socialMedia.selected && activeFilters.socialMedia.selected.length > 0)

  if (!hasActiveFilters) {
    return null
  }

  // Group social media metrics by type
  const socialMediaMetrics = {
    followers: [],
    growth: [],
    engagementRate: [],
    avgEngagement: [],
    avgViews: [],
    postFrequency: []
  }

  // Populate social media metrics
  if (activeFilters.socialMedia && activeFilters.socialMedia.selected) {
    activeFilters.socialMedia.selected.forEach(platform => {
      const platformData = activeFilters.socialMedia[platform]
      if (!platformData) return
      
      const platformInfo = socialMediaPlatforms.find(p => p.id === platform)
      if (!platformInfo) return
      
      // Followers
      if (platformData.followers?.min !== null || platformData.followers?.max !== null) {
        socialMediaMetrics.followers.push({
          platform,
          platformInfo,
          value: formatRangeValue(platformData.followers.min, platformData.followers.max)
        })
      }
      
      // Growth
      if (platformData.growth?.min !== null || platformData.growth?.max !== null) {
        socialMediaMetrics.growth.push({
          platform,
          platformInfo,
          value: formatRangeValue(platformData.growth.min, platformData.growth.max, '%')
        })
      }
      
      // Engagement Rate
      if (platformData.engagementRate?.min !== null || platformData.engagementRate?.max !== null) {
        socialMediaMetrics.engagementRate.push({
          platform,
          platformInfo,
          value: formatRangeValue(platformData.engagementRate.min, platformData.engagementRate.max, '%')
        })
      }
      
      // Avg Engagement
      if (platformData.avgEngagement?.min !== null || platformData.avgEngagement?.max !== null) {
        socialMediaMetrics.avgEngagement.push({
          platform,
          platformInfo,
          value: formatRangeValue(platformData.avgEngagement.min, platformData.avgEngagement.max)
        })
      }
      
      // Avg Views
      if (platformData.avgViews?.min !== null || platformData.avgViews?.max !== null) {
        socialMediaMetrics.avgViews.push({
          platform,
          platformInfo,
          value: formatRangeValue(platformData.avgViews.min, platformData.avgViews.max)
        })
      }
      
      // Post Frequency
      if (platformData.postsPerMonth?.min !== null || platformData.postsPerMonth?.max !== null) {
        socialMediaMetrics.postFrequency.push({
          platform,
          platformInfo,
          value: formatRangeValue(platformData.postsPerMonth.min, platformData.postsPerMonth.max)
        })
      }
    })
  }

  // Define metric display names
  const metricDisplayNames = {
    followers: "Followers",
    growth: "Growth",
    engagementRate: "Engagement Rate",
    avgEngagement: "Avg. Engagement per post",
    avgViews: "Avg. Views per post",
    postFrequency: "Post frequency"
  }

  return (
    <div className="my-8 relative">
      <div className="sm:absolute sm:-top-9 lg:-top-4 sm:left-[50%] w-full   sm:translate-x-[-50%]">
        <FiltersBar/>
      </div>
      <div className="flex flex-wrap bg-white mt-4 p-4 rounded-md gap-2">
        {/* Regular filters */}
        {filterCategories.map(category => (
          activeFilters[category.key]?.length > 0 && (
            <div key={category.key} className="flex flex-col items-start gap-4">
              <span className="text-[12px] font-medium text-gray-600">{category.name}</span>
              <div className="flex flex-wrap gap-1">
                {activeFilters[category.key].map(value => (
                  <Badge 
                    key={value} 
                    variant="secondary" 
                    style={{ backgroundColor: category.bg, color: category.textColor }}
                    className="flex items-center gap-1 rounded-md px-2 py-1"
                  >
                    {value}
                    <button className='cursor-pointer' onClick={() => dispatch(removeFilter({ category: category.key, value }))}>
                      <X className="ml-1 h-3 w-3" />
                    </button>
                  </Badge>
                ))}
              </div>
            </div>
          )
        ))}

        {/* Social Media Filters - Grouped by metric type */}
        {Object.entries(socialMediaMetrics).map(([metric, items]) => (
          items.length > 0 && (
            <div key={`social-${metric}`} className="flex flex-col items-start gap-4">
              <span className="text-[12px] font-medium text-gray-600">{metricDisplayNames[metric]}</span>
              <div className="flex flex-wrap gap-1">
                {items.map((item, index) => (
                  <Badge 
                    key={`${item.platform}-${metric}-${index}`} 
                    variant="secondary" 
                    className={`flex items-center gap-1 rounded-md px-2 py-1 ${item.platformInfo.bgColor} ${item.platformInfo.textColor}`}
                  >
                    <img src={item.platformInfo.img.src} alt={item.platform} className='w-4 h-4 mr-1' />
                    {item.value}
                    <button className='cursor-pointer' onClick={() => {
                      // Clear both min and max values
                      dispatch(setSocialMediaMetric({ 
                        platform: item.platform, 
                        metric: metric, 
                        minMax: 'min', 
                        value: null 
                      }));
                      dispatch(setSocialMediaMetric({ 
                        platform: item.platform, 
                        metric: metric, 
                        minMax: 'max', 
                        value: null 
                      }));
                    }}>
                      <X className="ml-1 h-3 w-3" />
                    </button>
                  </Badge>
                ))}
              </div>
            </div>
          )
        ))}

        {/* Active Only filters */}
        {activeFilters.socialMedia && activeFilters.socialMedia.selected && 
          activeFilters.socialMedia.selected.some(platform => 
            activeFilters.socialMedia[platform]?.activeOnly
          ) && (
            <div className="flex flex-col items-start gap-4">
              <span className="text-[12px] font-medium text-gray-600">Active Accounts</span>
              <div className="flex flex-wrap gap-1">
                {activeFilters.socialMedia.selected.map(platform => {
                  if (!activeFilters.socialMedia[platform]?.activeOnly) return null;
                  const platformInfo = socialMediaPlatforms.find(p => p.id === platform);
                  if (!platformInfo) return null;
                  
                  return (
                    <Badge 
                      key={`${platform}-active-only`} 
                      variant="secondary" 
                      className={`flex items-center gap-1 rounded-md px-2 py-1 ${platformInfo.bgColor} ${platformInfo.textColor}`}
                    >
                      <img src={platformInfo.img.src} alt={platform} className='w-4 h-4 mr-1' />
                      Active Only
                      <button className='cursor-pointer' onClick={() => 
                        dispatch(toggleSocialMediaActiveOnly(platform))
                      }>
                        <X className="ml-1 h-3 w-3" />
                      </button>
                    </Badge>
                  );
                })}
              </div>
            </div>
          )
        }
         <div className='flex items-center justify-center w-full mt-4'>
            <span className='text-[12px] text-[#96a5b9] flex items-center gap-1'>
              <Info size={16} />
              <span>
                Your filters have been modified refresh your search to see results.
              </span>
            </span>
          </div>
      </div>
     
    </div>
  )
} 