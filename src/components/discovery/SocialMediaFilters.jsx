'use client'
import { useDispatch, useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import { Input } from "@/components/ui/input"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"
import { 
  toggleSocialMedia, 
  setSocialMediaMetric, 
  toggleSocialMediaActiveOnly
} from '@/redux/slices/filtersSlice'
import { instagram, tiktok, youtube, twitter, linkedin, message, snapchat } from '@/public/images'
import Image from 'next/image'

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

// Helper function to count filters for a platform
const countPlatformFilters = (platformData) => {
  if (!platformData) return 0;
  
  let count = 0;
  if (platformData.followers?.min !== null) count++;
  if (platformData.followers?.max !== null) count++;
  if (platformData.growth?.min !== null) count++;
  if (platformData.growth?.max !== null) count++;
  if (platformData.engagementRate?.min !== null) count++;
  if (platformData.engagementRate?.max !== null) count++;
  if (platformData.avgEngagement?.min !== null) count++;
  if (platformData.avgEngagement?.max !== null) count++;
  if (platformData.avgViews?.min !== null) count++;
  if (platformData.avgViews?.max !== null) count++;
  if (platformData.postsPerMonth?.min !== null) count++;
  if (platformData.postsPerMonth?.max !== null) count++;
  if (platformData.activeOnly) count++;
  
  return count;
}

export default function SocialMediaFilters() {
  const dispatch = useDispatch()
  const { socialMedia = { selected: [] } } = useSelector((state) => state.filters.activeFilters || { socialMedia: { selected: [] } })
  const selectedPlatforms = socialMedia?.selected || []
  
  // Get the currently active platform (first in the selected array)
  const [activePlatform, setActivePlatform] = useState(selectedPlatforms[0] || 'instagram')
  
  // Get the data for the active platform
  const platformData = socialMedia[activePlatform] || {
    followers: { min: null, max: null },
    growth: { min: null, max: null },
    engagementRate: { min: null, max: null },
    avgEngagement: { min: null, max: null },
    avgViews: { min: null, max: null },
    postsPerMonth: { min: null, max: null },
    activeOnly: false
  }
  
  // Calculate filter counts for each platform
  const filterCounts = {}
  socialMediaPlatforms.forEach(platform => {
    filterCounts[platform.id] = countPlatformFilters(socialMedia[platform.id])
  })
  
  // Update active platform when selected platforms change
  useEffect(() => {
    if (selectedPlatforms.length > 0 && !selectedPlatforms.includes(activePlatform)) {
      setActivePlatform(selectedPlatforms[0])
    } else if (selectedPlatforms.length === 0 && activePlatform !== 'instagram') {
      setActivePlatform('instagram')
    }
  }, [selectedPlatforms, activePlatform])

  const handleTogglePlatform = (platformId) => {
    dispatch(toggleSocialMedia(platformId))
    
    // If we're toggling on a platform, make it active
    if (!selectedPlatforms.includes(platformId)) {
      setActivePlatform(platformId)
    } 
    // If we're removing the active platform, switch to another one
    else if (platformId === activePlatform && selectedPlatforms.length > 1) {
      const newActivePlatform = selectedPlatforms.find(p => p !== platformId)
      setActivePlatform(newActivePlatform)
    }
  }

  const handleMetricChange = (metric, minMax, value) => {
    // Convert empty string to null, otherwise convert to number
    const numValue = value === '' ? null : Number(value)
    dispatch(setSocialMediaMetric({ 
      platform: activePlatform, 
      metric, 
      minMax, 
      value: numValue 
    }))
  }

  const handleClearMetric = (metric, minMax) => {
    dispatch(setSocialMediaMetric({ 
      platform: activePlatform, 
      metric, 
      minMax, 
      value: null 
    }))
  }

  const handleToggleActiveOnly = (checked) => {
    dispatch(toggleSocialMediaActiveOnly(activePlatform))
  }

  return (
    <div className="space-y-4 border-t pt-6">
      <h3 className="text-sm font-bold">Filters for specific social media</h3>
      
      {/* Social Media Icons */}
      <div className="flex gap-2 justify-evenly overflow-x-auto py-2">
        {socialMediaPlatforms.map((platform) => (
          <div 
            key={platform.id}
            className={`relative cursor-pointer border-b-2 ${
              selectedPlatforms.includes(platform.id) ? 'border-[var(--color-primary)]' : ''
            } ${
              activePlatform === platform.id ? 'bg-[var(--color-primary)]/10' : ''
            }`}
            onClick={() => handleTogglePlatform(platform.id)}
          >
            <Image width={100} height={100} src={platform.img.src} alt={platform.id} className="h-9 w-9 hover:scale-130 transition-all duration-300" />
            {filterCounts[platform.id] > 0 && (
              <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-[var(--color-primary)] text-xs text-white">
                {filterCounts[platform.id]}
              </span>
            )}
          </div>
        ))}
      </div>

      {/* Metrics for selected platform */}
      <div className="space-y-4">
        <div className="space-y-2">
          <Label>Followers</Label>
          <div className="flex items-center gap-2">
            <div className="relative flex-1">
              <Input 
                type="number" 
                placeholder="Min" 
                value={platformData.followers?.min === null ? '' : platformData.followers?.min}
                onChange={(e) => handleMetricChange('followers', 'min', e.target.value)}
              />
              {platformData.followers?.min !== null && (
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="absolute right-0 top-0 h-full px-3 py-0 text-gray-400 hover:text-gray-900"
                  onClick={() => handleClearMetric('followers', 'min')}
                >
                  <X className="h-4 w-4" />
                </Button>
              )}
            </div>
            <Input 
              type="number" 
              placeholder="Max" 
              className="flex-1"
              value={platformData.followers?.max === null ? '' : platformData.followers?.max}
              onChange={(e) => handleMetricChange('followers', 'max', e.target.value)}
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label>Growth (%)</Label>
          <div className="flex items-center gap-2">
            <div className="relative flex-1">
              <Input 
                type="number" 
                placeholder="Min"
                value={platformData.growth?.min === null ? '' : platformData.growth?.min}
                onChange={(e) => handleMetricChange('growth', 'min', e.target.value)}
              />
              {platformData.growth?.min !== null && (
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="absolute right-0 top-0 h-full px-3 py-0 text-gray-400 hover:text-gray-900"
                  onClick={() => handleClearMetric('growth', 'min')}
                >
                  <X className="h-4 w-4" />
                </Button>
              )}
            </div>
            <Input 
              type="number" 
              placeholder="Max" 
              className="flex-1"
              value={platformData.growth?.max === null ? '' : platformData.growth?.max}
              onChange={(e) => handleMetricChange('growth', 'max', e.target.value)}
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label>Engagement Rate (%)</Label>
          <div className="flex items-center gap-2">
            <div className="relative flex-1">
              <Input 
                type="number" 
                placeholder="Min"
                value={platformData.engagementRate?.min === null ? '' : platformData.engagementRate?.min}
                onChange={(e) => handleMetricChange('engagementRate', 'min', e.target.value)}
              />
              {platformData.engagementRate?.min !== null && (
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="absolute right-0 top-0 h-full px-3 py-0 text-gray-400 hover:text-gray-900"
                  onClick={() => handleClearMetric('engagementRate', 'min')}
                >
                  <X className="h-4 w-4" />
                </Button>
              )}
            </div>
            <Input 
              type="number" 
              placeholder="Max" 
              className="flex-1"
              value={platformData.engagementRate?.max === null ? '' : platformData.engagementRate?.max}
              onChange={(e) => handleMetricChange('engagementRate', 'max', e.target.value)}
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label>Avg. Engagement Per Post</Label>
          <div className="flex items-center gap-2">
            <div className="relative flex-1">
              <Input 
                type="number" 
                placeholder="Min"
                value={platformData.avgEngagement?.min === null ? '' : platformData.avgEngagement?.min}
                onChange={(e) => handleMetricChange('avgEngagement', 'min', e.target.value)}
              />
              {platformData.avgEngagement?.min !== null && (
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="absolute right-0 top-0 h-full px-3 py-0 text-gray-400 hover:text-gray-900"
                  onClick={() => handleClearMetric('avgEngagement', 'min')}
                >
                  <X className="h-4 w-4" />
                </Button>
              )}
            </div>
            <Input 
              type="number" 
              placeholder="Max" 
              className="flex-1"
              value={platformData.avgEngagement?.max === null ? '' : platformData.avgEngagement?.max}
              onChange={(e) => handleMetricChange('avgEngagement', 'max', e.target.value)}
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label>Avg. Views Per Post</Label>
          <div className="flex items-center gap-2">
            <div className="relative flex-1">
              <Input 
                type="number" 
                placeholder="Min"
                value={platformData.avgViews?.min === null ? '' : platformData.avgViews?.min}
                onChange={(e) => handleMetricChange('avgViews', 'min', e.target.value)}
              />
              {platformData.avgViews?.min !== null && (
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="absolute right-0 top-0 h-full px-3 py-0 text-gray-400 hover:text-gray-900"
                  onClick={() => handleClearMetric('avgViews', 'min')}
                >
                  <X className="h-4 w-4" />
                </Button>
              )}
            </div>
            <Input 
              type="number" 
              placeholder="Max" 
              className="flex-1"
              value={platformData.avgViews?.max === null ? '' : platformData.avgViews?.max}
              onChange={(e) => handleMetricChange('avgViews', 'max', e.target.value)}
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label>Posts/month</Label>
          <div className="flex items-center gap-2">
            <div className="relative flex-1">
              <Input 
                type="number" 
                placeholder="Min"
                value={platformData.postsPerMonth?.min === null ? '' : platformData.postsPerMonth?.min}
                onChange={(e) => handleMetricChange('postsPerMonth', 'min', e.target.value)}
              />
              {platformData.postsPerMonth?.min !== null && (
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="absolute right-0 top-0 h-full px-3 py-0 text-gray-400 hover:text-gray-900"
                  onClick={() => handleClearMetric('postsPerMonth', 'min')}
                >
                  <X className="h-4 w-4" />
                </Button>
              )}
            </div>
            <Input 
              type="number" 
              placeholder="Max" 
              className="flex-1"
              value={platformData.postsPerMonth?.max === null ? '' : platformData.postsPerMonth?.max}
              onChange={(e) => handleMetricChange('postsPerMonth', 'max', e.target.value)}
            />
          </div>
        </div>

        <div className="flex items-center justify-between">
          <Label htmlFor="active-social" className="flex-1">
            Only show active accounts (posted last month)
          </Label>
          <Switch 
            id="active-social" 
            checked={platformData.activeOnly || false}
            onCheckedChange={handleToggleActiveOnly}
          />
        </div>
      </div>
    </div>
  )
} 