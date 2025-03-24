import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  activeFilters: {
    profileType: [],
    areasOfStudy: [],
    region: [],
    city: [],
    platforms: [],
    institutions: [],
    languages: [],
    followers: [],
    engagementRate: [],
    postFrequency: [],
    activeAccounts: [],
    otherFilters: [],
    sort: 'Random',
    researchNiches: [],
    displayFilters: [],
    publications: [],
    citations: [],
    hIndex: [],
    socialMedia: {
      selected: ['instagram'],
      instagram: {
        followers: { min: null, max: null },
        growth: { min: null, max: null },
        engagementRate: { min: null, max: null },
        avgEngagement: { min: null, max: null },
        avgViews: { min: null, max: null },
        postsPerMonth: { min: null, max: null },
        activeOnly: false
      },
      tiktok: {
        followers: { min: null, max: null },
        growth: { min: null, max: null },
        engagementRate: { min: null, max: null },
        avgEngagement: { min: null, max: null },
        avgViews: { min: null, max: null },
        postsPerMonth: { min: null, max: null },
        activeOnly: false
      },
      youtube: {
        followers: { min: null, max: null },
        growth: { min: null, max: null },
        engagementRate: { min: null, max: null },
        avgEngagement: { min: null, max: null },
        avgViews: { min: null, max: null },
        postsPerMonth: { min: null, max: null },
        activeOnly: false
      },
      twitter: {
        followers: { min: null, max: null },
        growth: { min: null, max: null },
        engagementRate: { min: null, max: null },
        avgEngagement: { min: null, max: null },
        avgViews: { min: null, max: null },
        postsPerMonth: { min: null, max: null },
        activeOnly: false
      },
      linkedin: {
        followers: { min: null, max: null },
        growth: { min: null, max: null },
        engagementRate: { min: null, max: null },
        avgEngagement: { min: null, max: null },
        avgViews: { min: null, max: null },
        postsPerMonth: { min: null, max: null },
        activeOnly: false
      },
      twitch: {
        followers: { min: null, max: null },
        growth: { min: null, max: null },
        engagementRate: { min: null, max: null },
        avgEngagement: { min: null, max: null },
        avgViews: { min: null, max: null },
        postsPerMonth: { min: null, max: null },
        activeOnly: false
      },
      snapchat: {
        followers: { min: null, max: null },
        growth: { min: null, max: null },
        engagementRate: { min: null, max: null },
        avgEngagement: { min: null, max: null },
        avgViews: { min: null, max: null },
        postsPerMonth: { min: null, max: null },
        activeOnly: false
      }
    }
  },
  isFiltersOpen: false,
}

export const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    addFilter: (state, action) => {
      const { category, value } = action.payload
      if (!state.activeFilters[category].includes(value)) {
        state.activeFilters[category].push(value)
      }
    },
    removeFilter: (state, action) => {
      const { category, value } = action.payload
      state.activeFilters[category] = state.activeFilters[category].filter(
        (filter) => filter !== value
      )
    },
    clearFilters: (state) => {
      Object.keys(state.activeFilters).forEach(key => {
        if (key !== 'sort' && key !== 'socialMedia') {
          state.activeFilters[key] = []
        }
      })
      Object.keys(state.activeFilters.socialMedia).forEach(platform => {
        if (platform !== 'selected') {
          const platformData = state.activeFilters.socialMedia[platform]
          if (platformData) {
            Object.keys(platformData).forEach(metric => {
              if (metric === 'activeOnly') {
                platformData[metric] = false
              } else {
                platformData[metric] = { min: null, max: null }
              }
            })
          }
        }
      })
    },
    setFiltersOpen: (state, action) => {
      state.isFiltersOpen = action.payload
    },
    setSort: (state, action) => {
      state.activeFilters.sort = action.payload
    },
    toggleSocialMedia: (state, action) => {
      const platform = action.payload
      const index = state.activeFilters.socialMedia.selected.indexOf(platform)
      
      if (index === -1) {
        state.activeFilters.socialMedia.selected.push(platform)
      } else {
        state.activeFilters.socialMedia.selected.splice(index, 1)
      }
    },
    setSocialMediaFilter: (state, action) => {
      const { platform, metric, value } = action.payload
      state.activeFilters.socialMedia[platform][metric] = value
    },
    setSocialMediaMetric: (state, action) => {
      const { platform, metric, minMax, value } = action.payload
      state.activeFilters.socialMedia[platform][metric][minMax] = value
    },
    toggleSocialMediaActiveOnly: (state, action) => {
      const platform = action.payload
      state.activeFilters.socialMedia[platform].activeOnly = 
        !state.activeFilters.socialMedia[platform].activeOnly
    }
  },
})

export const { 
  addFilter, 
  removeFilter, 
  clearFilters, 
  setFiltersOpen, 
  setSort,
  toggleSocialMedia,
  setSocialMediaFilter,
  setSocialMediaMetric,
  toggleSocialMediaActiveOnly
} = filtersSlice.actions

export default filtersSlice.reducer

export const getFormattedFilters = (state) => {
  const formattedFilters = { ...state.filters.activeFilters };
  
  formattedFilters.displayFilters = [];
  
  formattedFilters.areasOfStudy.forEach(area => {
    const relatedNiches = formattedFilters.researchNiches
      .filter(niche => niche.startsWith(`${area}:`))
      .map(niche => niche.split(':')[1]);
    
    if (relatedNiches.length > 0) {
      relatedNiches.forEach(niche => {
        formattedFilters.displayFilters.push({
          category: area,
          value: niche
        });
      });
    } else {
      formattedFilters.displayFilters.push({
        category: 'Area of Study',
        value: area
      });
    }
  });
  
  return formattedFilters;
};

export const getSocialMediaFilterCount = (state, platform) => {
  const platformData = state.filters.activeFilters.socialMedia[platform]
  if (!platformData) return 0
  
  let count = 0
  
  if (platformData.followers.min !== null || platformData.followers.max !== null) count++
  if (platformData.growth.min !== null || platformData.growth.max !== null) count++
  if (platformData.engagementRate.min !== null || platformData.engagementRate.max !== null) count++
  if (platformData.avgEngagement.min !== null || platformData.avgEngagement.max !== null) count++
  if (platformData.avgViews.min !== null || platformData.avgViews.max !== null) count++
  if (platformData.postsPerMonth.min !== null || platformData.postsPerMonth.max !== null) count++
  if (platformData.activeOnly) count++
  
  return count
} 