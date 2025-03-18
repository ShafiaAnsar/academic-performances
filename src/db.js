import { person1, person2, person3, person4, } from "../public/images"

export const creators = [
    {
      id: 1,
      name: "Jimmy Donaldson",
      alias: "MrBeast",
      rank: 1,
      rankChange: 0,
      avatar: person1,
      totalBadges: 121,
      description: "Philanthropist and Creator of Beast Games on Prime Video",
      longDescription: "Jimmy Donaldson, known as MrBeast, is a prominent YouTuber and philanthropist recognized for his extravagant challenges and charitable initiatives. His content often features large-scale competitions, generous giveaways, and ambitious projects.",
      country: "United States",
      countryCode: "US",
      authority: 10050,
      followers: {
        youtube: "370M",
        tiktok: "115.1M",
        instagram: "66.4M"
      },
      badgesByRarity: {
        common: 24,
        rare: 44,
        epic: 37,
        legendary: 16,
      },
      growth: "+2.90%",
      industries: ["Marketing & Sales"],
      niches: ["Creator Economy"],
      industryBadges: ["+4"],
      socialLinks: {
        linkedin: true,
        youtube: true,
        instagram: true
      }
    },
    {
      id: 2,
      name: "Cristiano Ronaldo",
      alias: "",
      rank: 2,
      rankChange: 0,
      totalBadges: 121,
      avatar: person2,
      description: "Global Football Icon and Influencer",
      longDescription: "Cristiano Ronaldo, a globally renowned footballer, uses his social media platforms to engage with fans through personal updates, family moments, and professional achievements.",
      country: "Portugal",
      countryCode: "PT",
      authority: 10000,
      followers: {
        instagram: "650.2M",
        twitter: "114.9M",
        youtube: "74.1M"
      },
      badgesByRarity: {
        common: 24,
        rare: 44,
        epic: 37,
        legendary: 16,
      },
      growth: "+0.35%",
      industries: ["Sports"],
      niches: ["Football Players"],
      industryBadges: ["+1"],
      socialLinks: {
        twitter: true
      }
    },
    {
      id: 3,
      name: "Kylie Jenner",
      alias: "",
      rank: 3,
      rankChange: 5,
      totalBadges: 121,
      avatar: person3,
      description: "Beauty Mogul and Fashion Influencer",
      longDescription: "Kylie Jenner is a prominent figure in the beauty and fashion industry, known for her successful brands Kylie Cosmetics and Kylie Skin. She leverages her massive social media following to promote her products and lifestyle.",
      country: "United States",
      countryCode: "US",
      authority: 10000,
      followers: {
        instagram: "394.4M",
        tiktok: "56.9M",
        twitter: "39.6M"
      },
      badgesByRarity: {
        common: 24,
        rare: 44,
        epic: 37,
        legendary: 16,
      },
      growth: "-0.07%",
      industries: ["Beauty"],
      niches: ["Beauty Industry"],
      industryBadges: ["+7"],
      socialLinks: {
        instagram: true
      }
    },
    {
      id: 4,
      name: "Lionel Messi",
      alias: "",
      rank: 4,
      rankChange: 3,
      totalBadges: 121,
      avatar: person4,
      description: "Legendary Footballer and Global Ambassador",
      longDescription: "Lionel Messi, an iconic Argentine footballer, is celebrated for his extraordinary skills and achievements in the sport. His social media presence showcases his professional career and personal life.",
      country: "Argentina",
      badgesByRarity: {
        common: 24,
        rare: 44,
        epic: 37,
        legendary: 16,
      },
      countryCode: "AR",
      authority: 10000,
      followers: {
        instagram: "505M",
        youtube: "4M"
      },
      growth: "+0.02%",
      industries: ["Sports"],
      niches: ["Football Players"],
      industryBadges: [],
      socialLinks: {}
    },
    {
      id: 5,
      name: "Dwayne Johnson",
      alias: "The Rock",
      rank: 5,
      rankChange: 0,
      totalBadges: 121,
      avatar: person2,
      description: "Actor, Producer, and Former Wrestler",
      longDescription: "Dwayne 'The Rock' Johnson is a multifaceted entertainer who transitioned from professional wrestling to become one of Hollywood's highest-grossing actors. He shares his fitness journey, movie projects, and motivational content.",
      country: "United States",
      countryCode: "US",
      authority: 9950,
      badgesByRarity: {
        common: 24,
        rare: 44,
        epic: 37,
        legendary: 16,
      },
      followers: {
        instagram: "394.9M",
        tiktok: "75M",
        youtube: "8M"
      },
      growth: "+1.15%",
      industries: ["TV, Movies & Video"],
      niches: ["Sports"],
      industryBadges: [],
      socialLinks: {}
    }
  ];
  export const spotlights = [
    {
      id: 1,
      name: "Felipe Dalcarobo",
      description: "Empowering Leader in Customer Success and Mental Health Advocate",
      image: person1,
      country: "🇧🇷",
      authority: "3,021",
      hasSpotlight: true,
    },
    {
      id: 2,
      name: "Cristiano Ronaldo",
      description: "Global Football Icon and Influencer",
      image: person2,
      country: "🇧🇷",
      authority: "3,021",
      hasSpotlight: true,
    },
    {
      id: 3,
      name: "Kylie Jenner",
      description: "Beauty Mogul and Fashion Influencer",
      image: person3,
      country: "🇧🇷",
      authority: "3,021",
      hasSpotlight: true,
    },
    {
      id: 4,
      name: "Lionel Messi",
      description: "Legendary Footballer and Global Ambassador",
      image: person4,
      country: "🇧🇷",
      authority: "3,021",
      hasSpotlight: true,
    },
    
      
  ]
  export const industries = [
    "All Industries",
    "Business & Startups",
    "Careers & Office",
    "Marketing & Sales",
    "Finance & Web 3",
    "IT & Tech",
    "Global Affairs & Diplomacy",
    "Arts & Culture",
    "Food & Nutrition",
    "Sports",
    "Beauty",
    "Creator Economy",
    "TV, Movies & Video"
  ];
  
  export const socialMedias = [
    "All Social Medias",
    "Instagram",
    "TikTok",
    "YouTube",
    "X",
    "LinkedIn"
  ];
  
  export const genders = [
    "All genders",
    "Male",
    "Female"
  ];
  
  export const countries = {
    "US": "United States",
    "PT": "Portugal",
    "AR": "Argentina",
    "PE": "Peru"
  };
  
  export const risingStar = {
    name: "De Panenka",
    country: "Peru",
    countryCode: "PE",
    growth: "+ 1230.98 % Global growth",
    avatar: person1,
    score: "9 844"
  };
  
  export const bestCountry = {
    name: "United States",
    countryCode: "US",
    count: "59 / 200"
  };
  
  export const bestIndustry = {
    name: "TV, Movies & Video",
    count: "71 / 200"
  };
  
  export const categories = [
    {
      id: 1,
      icon: "💰",
      title: "Business & Startups",
      bgColor: "bg-[#93ff8a]",
      tags: [
        { name: "Startups & Entrepreneurship", href: "#" },
        { name: "Venture Capital", href: "#" },
        { name: "Business Strategy & Motivation", href: "#" },
        { name: "Productivity & No Code", href: "#" },
        { name: "+5", href: "#", isBadge: true }
      ]
    },
    {
      id: 2,
      icon: "💼",
      title: "Careers & Office",
      bgColor: "bg-[#89b5f8]",
      tags: [
        { name: "HR Industry", href: "#" },
        { name: "Career Coaching", href: "#" },
        { name: "Remote Work & Digital Nomading", href: "#" },
        { name: "Workplace Well-Being", href: "#" },
        { name: "+7", href: "#", isBadge: true }
      ]
    },
    {
      id: 3,
      icon: "📱",
      title: "Marketing & Sales",
      bgColor: "bg-[#947bfe]",
      tags: [
        { name: "Youtube Growth & Video Marketing", href: "#" },
        { name: "SAAS", href: "#" },
        { name: "Sales", href: "#" },
        { name: "Digital Marketing", href: "#" },
        { name: "Growth & Lead Gen", href: "#" },
        { name: "TikTok Growth", href: "#" },
        { name: "Instagram Growth", href: "#" },
        { name: "+16", href: "#", isBadge: true }
      ]
    },
    {
      id: 4,
      icon: "💻",
      title: "Finance & Web 3",
      bgColor: "bg-[#ffc88b]",
      tags: [
        { name: "Financial Markets", href: "#" },
        { name: "Personal Finance & Investing", href: "#" },
        { name: "Economics & FineTech", href: "#" },
        { name: "Mortgage & Real Estate", href: "#" },
        { name: "Bitcoin & Crypto", href: "#" },
        { name: "Metaverse & VR", href: "#" },
        { name: "+4", href: "#", isBadge: true }
      ]
    },
    {
      id: 5,
      icon: "💡",
      title: "IT & Tech",
      bgColor: "bg-[#aefbff]",
      tags: [
        { name: "Computer Engineering", href: "#" },
        { name: "Cybersecurity", href: "#" },
        { name: "AI & Machine Learning", href: "#" },
        { name: "Data Science", href: "#" },
        { name: "High Tech & Hardware", href: "#" },
        { name: "+13", href: "#", isBadge: true }
      ]
    },
    {
      id: 6,
      icon: "📢",
      title: "Global Affairs & Diplomacy",
      bgColor: "bg-[#fdff56]",
      tags: [
        { name: "Global Leaders", href: "#" },
        { name: "NGOs", href: "#" },
        { name: "World news", href: "#" },
        { name: "Geopolitics & International Relations", href: "#" },
        { name: "Geography & Maps", href: "#" },
        { name: "+5", href: "#", isBadge: true }
      ]
    },
    {
      id: 7,
      icon: "🎨",
      title: "Arts & Culture",
      bgColor: "bg-[#93ff8a]",
      tags: [
        { name: "Dance & Choreography", href: "#" },
        { name: "Ballet & Opera", href: "#" },
        { name: "Literature & Poetry", href: "#" },
        { name: "Photography & Videography", href: "#" },
        { name: "Art, Painting & Sculpture", href: "#" },
        { name: "+26", href: "#", isBadge: true }
      ]
    },
    {
      id: 8,
      icon: "🩺",
      title: "Health & Medical",
      bgColor: "bg-[#aefbff]",
      tags: [
        { name: "Mental Health", href: "#" },
        { name: "CBD", href: "#" },
        { name: "Health Tech & Healthcare Experts", href: "#" },
        { name: "Epidemiology & Public Health", href: "#" },
        { name: "+23", href: "#", isBadge: true }
      ]
    },
    {
      id: 9,
      icon: "🧘‍♂️",
      title: "Fitness & Personal Growth",
      bgColor: "bg-[#fdff56]",
      tags: [
        { name: "Productivity & Personal Growth", href: "#" },
        { name: "Meditation & Hypnotherapy", href: "#" },
        { name: "Healthy Lifestyle", href: "#" },
        { name: "Fitness for Men", href: "#" },
        { name: "Yoga", href: "#" },
        { name: "Running", href: "#" },
        { name: "+6", href: "#", isBadge: true }
      ]
    },
    {
      id: 10,
      icon: "📚",
      title: "Education",
      bgColor: "bg-[#93ff8a]",
      tags: [
        { name: "Teaching & Education", href: "#" },
        { name: "EDTECH", href: "#" },
        { name: "Study Tips & Hack", href: "#" },
        { name: "Language Education", href: "#" },
        { name: "Higher Education", href: "#" },
        { name: "Edutainment", href: "#" },
        { name: "+2", href: "#", isBadge: true }
      ]
    },
    {
      id: 11,
      icon: "⚽",
      title: "Sports",
      bgColor: "bg-[#89b5f8]",
      tags: [
        { name: "Sport Journalists", href: "#" },
        { name: "American Football Players", href: "#" },
        { name: "Football Fans & Creators", href: "#" },
        { name: "Basketball Fans & Creators", href: "#" },
        { name: "+54", href: "#", isBadge: true }
      ]
    },
    {
      id: 12,
      icon: "🎮",
      title: "Gaming & Streaming",
      bgColor: "bg-[#947bfe]",
      tags: [
        { name: "Casino & Card Games", href: "#" },
        { name: "eSports", href: "#" },
        { name: "Board Games", href: "#" },
        { name: "Video Games & Streaming", href: "#" },
        { name: "Fortnite", href: "#" },
        { name: "Minecraft", href: "#" },
        { name: "Cosplaying", href: "#" },
        { name: "+25", href: "#", isBadge: true }
      ]
    },
    {
      id: 13,
      icon: "👨‍👩‍👦",
      title: "Relationships & Family",
      bgColor: "bg-[#947bfe]",
      tags: [
        { name: "Pregnancy & Parenting", href: "#" },
        { name: "Motherhood", href: "#" },
        { name: "Baby & Family Food", href: "#" },
        { name: "Baby & Kid Creators", href: "#" },
        { name: "Retirement & Senior Influencers", href: "#" },
        { name: "+7", href: "#", isBadge: true }
      ]
    },
    {
      id: 14,
      icon: "🐾",
      title: "Animals",
      bgColor: "bg-[#aefbff]",
      tags: [
        { name: "Cats", href: "#" },
        { name: "Dogs", href: "#" },
        { name: "Horses", href: "#" },
        { name: "Reptiles & Wild Animals", href: "#" },
        { name: "Pet Industry", href: "#" },
        { name: "Animal Activists", href: "#" },
        { name: "Veterinary", href: "#" },
        { name: "+2", href: "#", isBadge: true }
      ]
    },
    {
      id: 15,
      icon: "👗",
      title: "Fashion",
      bgColor: "bg-[#fdff56]",
      tags: [
        { name: "Fashion Artists & Designers", href: "#" },
        { name: "Models", href: "#" },
        { name: "Men's Fashion", href: "#" },
        { name: "Jewelry & Accessories", href: "#" },
        { name: "Luxury Fashion", href: "#" },
        { name: "Fashion Industry", href: "#" },
        { name: "+4", href: "#", isBadge: true }
      ]
    },
    {
      id: 16,
      icon: "💄",
      title: "Beauty",
      bgColor: "bg-[#fdff56]",
      tags: [
        { name: "Make up", href: "#" },
        { name: "Skincare", href: "#" },
        { name: "Hair care", href: "#" },
        { name: "Nail art / Manicure", href: "#" },
        { name: "Fragrance & Perfume", href: "#" },
        { name: "Beauty Bloggers", href: "#" },
        { name: "+2", href: "#", isBadge: true }
      ]
    },
    {
      id: 17,
      icon: "🤝",
      title: "Inclusion & Social Impact",
      bgColor: "bg-[#89b5f8]",
      tags: [
        { name: "Female Empowerment", href: "#" },
        { name: "LGBTQIA+ Allies", href: "#" },
        { name: "Racial Inequality & Discrimination Activists", href: "#" },
        { name: "Neurodiversity", href: "#" },
        { name: "Disability", href: "#" },
        { name: "+2", href: "#", isBadge: true }
      ]
    },
    {
      id: 18,
      icon: "🙏",
      title: "Religions & Spirituality",
      bgColor: "bg-[#947bfe]",
      tags: [
        { name: "Christianity", href: "#" },
        { name: "Islam", href: "#" },
        { name: "Judaism", href: "#" },
        { name: "Spirituality", href: "#" },
        { name: "Atheism", href: "#" },
        { name: "Transhumanism & Bio Hacking", href: "#" },
        { name: "Religious Studies", href: "#" },
        { name: "Mythology", href: "#" },
        { name: "+2", href: "#", isBadge: true }
      ]
    },
    {
      id: 19,
      icon: "🔬",
      title: "STEM",
      bgColor: "bg-[#ffc88b]",
      tags: [
        { name: "Science - General", href: "#" },
        { name: "Mathematics", href: "#" },
        { name: "Astronomy & Physics", href: "#" },
        { name: "Science Writers & Journalists", href: "#" },
        { name: "+5", href: "#", isBadge: true }
      ]
    },
    {
      id: 20,
      icon: "🌱",
      title: "Environment & Energy",
      bgColor: "bg-[#aefbff]",
      tags: [
        { name: "Climate Scientists", href: "#" },
        { name: "Sustainable Lifestyle", href: "#" },
        { name: "Nuclear Energy", href: "#" },
        { name: "Climate Skeptics", href: "#" },
        { name: "Climate Journalists", href: "#" },
        { name: "Energy Industry", href: "#" },
        { name: "+7", href: "#", isBadge: true }
      ]
    },
    {
      id: 21,
      icon: "🎧",
      title: "Music & Audio",
      bgColor: "bg-[#fdff56]",
      tags: [
        { name: "Musicians", href: "#" },
        { name: "DJ & Electronic Music", href: "#" },
        { name: "Music Producers & Music Industry", href: "#" },
        { name: "Rock Bands & Guitarists", href: "#" },
        { name: "K-POP", href: "#" },
        { name: "+17", href: "#", isBadge: true }
      ]
    },
    {
      id: 22,
      icon: "📺",
      title: "TV, Movies & Video",
      bgColor: "bg-[#93ff8a]",
      tags: [
        { name: "Lifestyle & Reality TV", href: "#" },
        { name: "Comedy & Standup", href: "#" },
        { name: "Video Entertainment", href: "#" },
        { name: "TV & Radio Personalities", href: "#" },
        { name: "Cinephiles & Movie Critics", href: "#" },
        { name: "Movie Actors", href: "#" },
        { name: "+8", href: "#", isBadge: true }
      ]
    },
    {
      id: 23,
      icon: "🏠",
      title: "Home & Indoor Activities",
      bgColor: "bg-[#89b5f8]",
      tags: [
        { name: "Gaming & Betting", href: "#" },
        { name: "DIY & Home Improvement", href: "#" },
        { name: "Construction & Building", href: "#" },
        { name: "Interior Design", href: "#" },
        { name: "Interior Design & Architecture", href: "#" },
        { name: "+3", href: "#", isBadge: true }
      ]
    },
    {
      id: 24,
      icon: "🌲",
      title: "Nature & Outdoor Activities",
      bgColor: "bg-[#f3eeff]",
      tags: [
        { name: "Fishing", href: "#" },
        { name: "Woodworking", href: "#" },
        { name: "Nature Photography", href: "#" },
        { name: "Gardening & Plants", href: "#" },
        { name: "Homesteading", href: "#" },
        { name: "Farming & Agriculture", href: "#" },
        { name: "+10", href: "#", isBadge: true }
      ]
    },
    {
      id: 25,
      icon: "⚖️",
      title: "Law, Medias & Politics",
      bgColor: "bg-[#fff4eb]",
      tags: [
        { name: "Political Reporters & Activists", href: "#" },
        { name: "European Union", href: "#" },
        { name: "Politicians", href: "#" },
        { name: "Political Science", href: "#" },
        { name: "Economics & Public Policy", href: "#" },
        { name: "+17", href: "#", isBadge: true }
      ]
    },
    {
      id: 26,
      icon: "🔮",
      title: "Magic & Paranormal",
      bgColor: "bg-[#aefbff]",
      tags: [
        { name: "Magicians & Mentalists", href: "#" },
        { name: "Astrology", href: "#" },
        { name: "Paranormal & Weird", href: "#" },
        { name: "Storytelling & True Crime", href: "#" },
        { name: "Tarot Reading", href: "#" },
        { name: "Occult", href: "#" }
      ]
    },
    {
      id: 27,
      icon: "🛍️",
      title: "Ecommerce & Retail",
      bgColor: "bg-[#eef4ff]",
      tags: [
        { name: "eCommerce & DTC", href: "#" },
        { name: "Retailers", href: "#" },
        { name: "Amazon FBA", href: "#" },
        { name: "Manufacturing Logistics & Supply Chain", href: "#" },
        { name: "Retail", href: "#" },
        { name: "Shopify", href: "#" },
        { name: "Shopping & Product Reviews", href: "#" }
      ]
    },
    {
      id: 28,
      icon: "🚗",
      title: "Cars & Urbanism",
      bgColor: "bg-[#93ff8a]",
      tags: [
        { name: "Cars News & Experts", href: "#" },
        { name: "Car Industry", href: "#" },
        { name: "Urban Planning", href: "#" },
        { name: "Mobility Industry", href: "#" },
        { name: "Autonomous Transportation", href: "#" },
        { name: "+3", href: "#", isBadge: true }
      ]
    },
    {
      id: 29,
      icon: "🎓",
      title: "Humanities & Social Sciences",
      bgColor: "bg-[#89b5f8]",
      tags: [
        { name: "History & Archaeology", href: "#" },
        { name: "Neuroscience", href: "#" },
        { name: "Philosophy", href: "#" },
        { name: "Behavior Science", href: "#" },
        { name: "Linguistics", href: "#" },
        { name: "Sociology", href: "#" },
        { name: "Gender Sign", href: "#" },
        { name: "Anthropology", href: "#" }
      ]
    }
  ];
  