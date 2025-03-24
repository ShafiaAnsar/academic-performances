import { person1, person2, person3, person4, person5, person6 ,person7, person8, person9, person10} from "../public/images"
import { BookOpen, FlaskRoundIcon as Flask, Microscope, Atom, Globe, Brain } from "lucide-react"
export const creators = [
    {
      id: 1,
      name: "Jimmy Donaldson",
      alias: "MrBeast",
      rank: 1,
      title: "Professor",
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
  export const academics = [
    {
      id: 1,
      name: "Dr. Alan Turing",
      rank: 1,
      rankChange: 0,
      avatar: person1,
      title: "Professor of Computer Science",
      description: "Pioneer in artificial intelligence and computational theory",
      country: "United States",
      categoryIcon: <BookOpen className="h-4 w-4 text-blue-500" />,
      countryCode: "US",
      score: 9850,
      growth: "+3.2%",
      areaOfStudy: "Computer Science",
      specialization: "Artificial Intelligence",
      fieldRanking: "#1",
      indicators: {
        research: true,      // Strong in research
        teaching: false,
        contribution: false,  // Strong in contribution
        awards: true,        // Has awards
        influence: false      // Influential
      }
    },
    {
      id: 2,
      name: "Dr. Marie Curie",
      rank: 2,
      rankChange: 1,
      avatar: person2,
      title: "Professor of Physics and Chemistry",
      description: "Pioneering researcher in radioactivity and discoverer of radium and polonium",
      country: "France",
      countryCode: "FR",
      score: 9720,
      growth: "+2.8%",
      areaOfStudy: "Physics",
      specialization: "Quantum Physics",
      fieldRanking: "#1",
      indicators: {
        research: true,      // Strong in research
        teaching: false,
        contribution: false,  // Strong in contribution
        awards: true,        // Has awards
        influence: false      // Influential
      }
    },
    {
      id: 3,
      name: "Dr. Albert Einstein",
      rank: 3,
      rankChange: -1,
      avatar: person3,
      title: "Theoretical Physicist",
      description: "Developer of the theory of relativity and contributor to quantum mechanics",
      country: "Germany",
      countryCode: "DE",
      score: 9680,
      growth: "+1.5%",
      areaOfStudy: "Physics",
      specialization: "Theoretical Physics",
      fieldRanking: "#2",
      indicators: {
        research: true,      // Strong in research
        teaching: false,
        contribution: false,
        awards: true,        // Has awards
        influence: false      // Influential
      }
    },
    {
      id: 4,
      name: "Dr. Jane Goodall",
      rank: 4,
      rankChange: 2,
      avatar: person4,
      title: "Primatologist and Anthropologist",
      description: "World's foremost expert on chimpanzees and advocate for conservation",
      country: "United Kingdom",
      countryCode: "UK",
      score: 9450,
      growth: "+4.2%",
      areaOfStudy: "Biology",
      specialization: "Primatology",
      fieldRanking: "#1",
      indicators: {
        research: false,      // Strong in research
        teaching: false,
        contribution: true,  // Strong in contribution
        awards: false,
        influence: true      // Influential
      }
    },
    {
      id: 5,
      name: "Dr. Stephen Hawking",
      rank: 5,
      rankChange: 0,
      avatar: person5,
      title: "Theoretical Physicist and Cosmologist",
      description: "Researcher on black holes and author of 'A Brief History of Time'",
      country: "United Kingdom",
      countryCode: "UK",
      score: 9320,
      growth: "+1.8%",
      areaOfStudy: "Physics",
      specialization: "Astrophysics",
      fieldRanking: "#1",
      indicators: {
        research: true,      // Strong in research
        teaching: true,      // Good teacher
        contribution: false,
        awards: true,        // Has awards
        influence: true      // Influential
      }
    },
    {
      id: 6,
      name: "Dr. Yoshua Bengio",
      rank: 6,
      rankChange: 3,
      avatar: person6,
      title: "Professor of Computer Science",
      description: "Pioneer in deep learning and neural networks research",
      country: "Canada",
      countryCode: "CA",
      score: 9180,
      growth: "+5.3%",
      areaOfStudy: "Computer Science",
      specialization: "Machine Learning",
      fieldRanking: "#1",
      indicators: {
        research: true,      // Strong in research
        teaching: true,      // Good teacher
        contribution: true,  // Strong in contribution
        awards: false,
        influence: false
      }
    },
    {
      id: 7,
      name: "Dr. Jennifer Doudna",
      rank: 7,
      rankChange: 5,
      avatar: person7,
      title: "Professor of Chemistry and Molecular Biology",
      description: "Co-inventor of CRISPR-Cas9 gene editing technology",
      country: "United States",
      countryCode: "US",
      score: 9050,
      growth: "+6.7%",
      areaOfStudy: "Biology",
      specialization: "Molecular Biology",
      fieldRanking: "#1",
      indicators: {
        research: true,      // Strong in research
        teaching: false,
        contribution: true,  // Strong in contribution
        awards: true,        // Has awards
        influence: false
      }
    },
    {
      id: 8,
      name: "Dr. Amartya Sen",
      rank: 8,
      rankChange: -2,
      avatar: person8,
      title: "Professor of Economics and Philosophy",
      description: "Economist known for work on welfare economics and social choice theory",
      country: "India",
      countryCode: "IN",
      score: 8920,
      growth: "+0.9%",
      areaOfStudy: "Economics",
      specialization: "Welfare Economics",
      fieldRanking: "#1",
      indicators: {
        research: false,
        teaching: true,      // Good teacher
        contribution: true,  // Strong in contribution
        awards: true,        // Has awards
        influence: true      // Influential
      }
    },
    {
      id: 9,
      name: "Dr. Shinya Yamanaka",
      rank: 9,
      rankChange: 1,
      avatar: person9,
      title: "Professor of Stem Cell Biology",
      description: "Pioneer in induced pluripotent stem cell research",
      country: "Japan",
      countryCode: "JP",
      score: 8850,
      growth: "+2.4%",
      areaOfStudy: "Medicine",
      specialization: "Stem Cell Research",
      fieldRanking: "#1",
      indicators: {
        research: true,      // Strong in research
        teaching: false,
        contribution: true,  // Strong in contribution
        awards: true,        // Has awards
        influence: false
      }
    },
    {
      id: 10,
      name: "Dr. Esther Duflo",
      rank: 10,
      rankChange: 4,
      avatar: person10,
      title: "Professor of Poverty Alleviation and Development Economics",
      description: "Researcher on economic development and poverty reduction strategies",
      country: "France",
      countryCode: "FR",
      score: 8780,
      growth: "+4.8%",
      areaOfStudy: "Economics",
      specialization: "Development Economics",
      fieldRanking: "#1",
      indicators: {
        research: true,      // Strong in research
        teaching: true,      // Good teacher
        contribution: false,
        awards: true,        // Has awards
        influence: false
      }
    }
  ];
  export const academics_data= [
    {
      id: "1",
      name: "Nick Brooks",
      country: "US",
      title: "Author and Filmmaker",
      
      category: "Literature & Poetry",
      categoryIcon: <BookOpen className="h-4 w-4 text-blue-500" />,
      citations: 3793,
      instagramStats: "32/100",
      growthPercentage: -0.55,
      bio: "Nick Brooks is an award-winning author and filmmaker from Washington, DC. He is known for his innovative storytelling and cross-disciplinary approach to literature and film.",
      profileImage:person5,
      socialMedia: {
        instagram: true,
        twitter: true,
        youtube: true,
      },
    },
    {
      id: "2",
      name: "Sarah Johnson",
      country: "UK",
      title: "Professor of Chemistry",
      category: "Chemistry",
      categoryIcon: <Flask className="h-4 w-4 text-green-500" />,
      citations: 12458,
      instagramStats: "45/100",
      growthPercentage: 2.34,
      bio: "Dr. Sarah Johnson is a leading researcher in organic chemistry with a focus on sustainable materials. Her work has been published in Nature and Science.",
      profileImage: person6,
      socialMedia: {
        instagram: true,
        twitter: true,
        youtube: false,
      },
    },
    {
      id: "3",
      name: "Raj Patel",
      country: "IN",
      title: "Biologist",
      category: "Biology",
      categoryIcon: <Microscope className="h-4 w-4 text-purple-500" />,
      citations: 5621,
      instagramStats: "78/100",
      growthPercentage: 4.12,
      bio: "Dr. Raj Patel specializes in molecular biology and genetics. His research on gene editing technologies has contributed to significant advancements in the field.",
      profileImage: person7,
      socialMedia: {
        instagram: true,
        twitter: false,
        youtube: true,
      },
    },
    {
      id: "4",
      name: "Elena Rodriguez",
      country: "ES",
      title: "Theoretical Physicist",
      category: "Physics",
      categoryIcon: <Atom className="h-4 w-4 text-blue-500" />,
      citations: 8932,
      instagramStats: "22/100",
      growthPercentage: -1.23,
      bio: "Dr. Elena Rodriguez works on quantum field theory and its applications to cosmology. She has made significant contributions to our understanding of the early universe.",
      profileImage: person8,
      socialMedia: {
        instagram: false,
        twitter: true,
        youtube: true,
      },
    },
    {
      id: "5",
      name: "James Wilson",
      country: "AU",
      title: "Climate Scientist",
      category: "Environmental Science",
      categoryIcon: <Globe className="h-4 w-4 text-green-500" />,
      citations: 6745,
      instagramStats: "56/100",
      growthPercentage: 3.87,
      bio: "Dr. James Wilson studies climate change impacts on marine ecosystems. His research has informed international policy on ocean conservation and sustainability.",
      profileImage: person9,
      socialMedia: {
        instagram: true,
        twitter: true,
        youtube: true,
      },
    },
    {
      id: "6",
      name: "Aisha Mohammed",
      country: "NG",
      title: "Neuroscientist",
      category: "Neuroscience",
      categoryIcon: <Brain className="h-4 w-4 text-purple-500" />,
      citations: 4231,
      instagramStats: "41/100",
      growthPercentage: 1.45,
      bio: "Dr. Aisha Mohammed researches neural mechanisms of learning and memory. Her work has applications in education and treating cognitive disorders.",
      profileImage: person10,
      socialMedia: {
        instagram: true,
        twitter: false,
        youtube: false,
      },
    },
  ]
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
  export const indicators = ["All Indicators", "Research", "Teaching", "Contribution", "Awards", "Influence"]

  export const languages = ['English', 'Spanish', 'French', 'German', 'Italian', 'Portuguese', 'Russian', 'Arabic', 'Chinese', 'Japanese', 'Korean', 'Vietnamese', 'Thai', 'Indonesian', 'Malay', 'Filipino', 'Dutch', 'Turkish', 'Hebrew', 'Polish', ]
export const bestAreaOfStudy = {
  name: "Computer Science",
  count: "28 / 100"
}
  // Areas of study with subcategories
export const areasOfStudy = [
  { name: "All Areas of Study", subcategories: [] },
  { 
    name: "Computer Science", 
    subcategories: ["Artificial Intelligence", "Machine Learning", "Computer Vision", "Natural Language Processing", "Cybersecurity"] 
  },
  { 
    name: "Medicine", 
    subcategories: ["Neurology", "Cardiology", "Oncology", "Immunology", "Public Health"] 
  },
  { 
    name: "Physics", 
    subcategories: ["Quantum Physics", "Astrophysics", "Particle Physics", "Condensed Matter", "Optics"] 
  },
  { 
    name: "Engineering", 
    subcategories: ["Mechanical", "Electrical", "Civil", "Chemical", "Biomedical"] 
  },
  { 
    name: "Economics", 
    subcategories: ["Macroeconomics", "Microeconomics", "Behavioral Economics", "Development Economics", "Finance"] 
  }
]
  export const socialMedias = [
    "All Social Media",
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
  
  export const countries = [ "United States", "Portugal", "Argentina","Peru"]
  
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
  
export const regions = [
  {
    name: "Europe",
    icon: "🌍",
    countries: [
      { name: "Albania", code: "AL" },
      { name: "Aland", code: "AX" },
      { name: "Andorra", code: "AD" },
      { name: "Austria", code: "AT" },
      { name: "Belarus", code: "BY" },
      { name: "Belgium", code: "BE" },
      { name: "Bosnia and Herzegovina", code: "BA" },
      { name: "Bulgaria", code: "BG" },
      { name: "Croatia", code: "HR" },
      { name: "Cyprus", code: "CY" },
      { name: "Czech Republic", code: "CZ" },
      { name: "Denmark", code: "DK" },
      { name: "Estonia", code: "EE" },
      { name: "Finland", code: "FI" },
      { name: "France", code: "FR" },
      { name: "Germany", code: "DE" },
      { name: "Greece", code: "GR" },
      { name: "Hungary", code: "HU" },
      { name: "Iceland", code: "IS" },
      { name: "Ireland", code: "IE" },
      { name: "Italy", code: "IT" },
      { name: "Latvia", code: "LV" },
      { name: "Liechtenstein", code: "LI" },
      { name: "Lithuania", code: "LT" },
      { name: "Luxembourg", code: "LU" },
      { name: "Malta", code: "MT" },
      { name: "Moldova", code: "MD" },
      { name: "Monaco", code: "MC" },
      { name: "Montenegro", code: "ME" },
      { name: "Netherlands", code: "NL" },
      { name: "North Macedonia", code: "MK" },
      { name: "Norway", code: "NO" },
      { name: "Poland", code: "PL" },
      { name: "Portugal", code: "PT" },
      { name: "Romania", code: "RO" },
      { name: "Russia", code: "RU" },
      { name: "San Marino", code: "SM" },
      { name: "Serbia", code: "RS" },
      { name: "Slovakia", code: "SK" },
      { name: "Slovenia", code: "SI" },
      { name: "Spain", code: "ES" },
      { name: "Sweden", code: "SE" },
      { name: "Switzerland", code: "CH" },
      { name: "Ukraine", code: "UA" },
      { name: "United Kingdom", code: "UK" },
      { name: "Vatican City", code: "VA" }
    ]
  },
  {
    name: "North America",
    icon: "🌎",
    countries: [
      { name: "United States", code: "US" },
      { name: "Canada", code: "CA" },
      { name: "Mexico", code: "MX" },
      { name: "Greenland", code: "GL" },
      { name: "Bermuda", code: "BM" },
      { name: "Saint Pierre and Miquelon", code: "PM" }
    ]
  },
  {
    name: "South America",
    icon: "🌎",
    countries: [
      { name: "Argentina", code: "AR" },
      { name: "Bolivia", code: "BO" },
      { name: "Brazil", code: "BR" },
      { name: "Chile", code: "CL" },
      { name: "Colombia", code: "CO" },
      { name: "Ecuador", code: "EC" },
      { name: "Falkland Islands", code: "FK" },
      { name: "French Guiana", code: "GF" },
      { name: "Guyana", code: "GY" },
      { name: "Paraguay", code: "PY" },
      { name: "Peru", code: "PE" },
      { name: "Suriname", code: "SR" },
      { name: "Uruguay", code: "UY" },
      { name: "Venezuela", code: "VE" }
    ]
  },
  {
    name: "Asia",
    icon: "🌏",
    countries: [
      { name: "Afghanistan", code: "AF" },
      { name: "Armenia", code: "AM" },
      { name: "Azerbaijan", code: "AZ" },
      { name: "Bahrain", code: "BH" },
      { name: "Bangladesh", code: "BD" },
      { name: "Bhutan", code: "BT" },
      { name: "Brunei", code: "BN" },
      { name: "Cambodia", code: "KH" },
      { name: "China", code: "CN" },
      { name: "Georgia", code: "GE" },
      { name: "Hong Kong", code: "HK" },
      { name: "India", code: "IN" },
      { name: "Indonesia", code: "ID" },
      { name: "Iran", code: "IR" },
      { name: "Iraq", code: "IQ" },
      { name: "Israel", code: "IL" },
      { name: "Japan", code: "JP" },
      { name: "Jordan", code: "JO" },
      { name: "Kazakhstan", code: "KZ" },
      { name: "Kuwait", code: "KW" },
      { name: "Kyrgyzstan", code: "KG" },
      { name: "Laos", code: "LA" },
      { name: "Lebanon", code: "LB" },
      { name: "Macao", code: "MO" },
      { name: "Malaysia", code: "MY" },
      { name: "Maldives", code: "MV" },
      { name: "Mongolia", code: "MN" },
      { name: "Myanmar", code: "MM" },
      { name: "Nepal", code: "NP" },
      { name: "North Korea", code: "KP" },
      { name: "Oman", code: "OM" },
      { name: "Pakistan", code: "PK" },
      { name: "Palestine", code: "PS" },
      { name: "Philippines", code: "PH" },
      { name: "Qatar", code: "QA" },
      { name: "Saudi Arabia", code: "SA" },
      { name: "Singapore", code: "SG" },
      { name: "South Korea", code: "KR" },
      { name: "Sri Lanka", code: "LK" },
      { name: "Syria", code: "SY" },
      { name: "Taiwan", code: "TW" },
      { name: "Tajikistan", code: "TJ" },
      { name: "Thailand", code: "TH" },
      { name: "Timor-Leste", code: "TL" },
      { name: "Turkey", code: "TR" },
      { name: "Turkmenistan", code: "TM" },
      { name: "United Arab Emirates", code: "AE" },
      { name: "Uzbekistan", code: "UZ" },
      { name: "Vietnam", code: "VN" },
      { name: "Yemen", code: "YE" }
    ]
  },
  {
    name: "Africa",
    icon: "🌍",
    countries: [
      { name: "Algeria", code: "DZ" },
      { name: "Angola", code: "AO" },
      { name: "Benin", code: "BJ" },
      { name: "Botswana", code: "BW" },
      { name: "Burkina Faso", code: "BF" },
      { name: "Burundi", code: "BI" },
      { name: "Cabo Verde", code: "CV" },
      { name: "Cameroon", code: "CM" },
      { name: "Central African Republic", code: "CF" },
      { name: "Chad", code: "TD" },
      { name: "Comoros", code: "KM" },
      { name: "Congo", code: "CG" },
      { name: "Côte d'Ivoire", code: "CI" },
      { name: "Djibouti", code: "DJ" },
      { name: "Egypt", code: "EG" },
      { name: "Equatorial Guinea", code: "GQ" },
      { name: "Eritrea", code: "ER" },
      { name: "Eswatini", code: "SZ" },
      { name: "Ethiopia", code: "ET" },
      { name: "Gabon", code: "GA" },
      { name: "Gambia", code: "GM" },
      { name: "Ghana", code: "GH" },
      { name: "Guinea", code: "GN" },
      { name: "Guinea-Bissau", code: "GW" },
      { name: "Kenya", code: "KE" },
      { name: "Lesotho", code: "LS" },
      { name: "Liberia", code: "LR" },
      { name: "Libya", code: "LY" },
      { name: "Madagascar", code: "MG" },
      { name: "Malawi", code: "MW" },
      { name: "Mali", code: "ML" },
      { name: "Mauritania", code: "MR" },
      { name: "Mauritius", code: "MU" },
      { name: "Morocco", code: "MA" },
      { name: "Mozambique", code: "MZ" },
      { name: "Namibia", code: "NA" },
      { name: "Niger", code: "NE" },
      { name: "Nigeria", code: "NG" },
      { name: "Rwanda", code: "RW" },
      { name: "Sao Tome and Principe", code: "ST" },
      { name: "Senegal", code: "SN" },
      { name: "Seychelles", code: "SC" },
      { name: "Sierra Leone", code: "SL" },
      { name: "Somalia", code: "SO" },
      { name: "South Africa", code: "ZA" },
      { name: "South Sudan", code: "SS" },
      { name: "Sudan", code: "SD" },
      { name: "Tanzania", code: "TZ" },
      { name: "Togo", code: "TG" },
      { name: "Tunisia", code: "TN" },
      { name: "Uganda", code: "UG" },
      { name: "Zambia", code: "ZM" },
      { name: "Zimbabwe", code: "ZW" }
    ]
  },
  {
    name: "Oceania",
    icon: "🌏",
    countries: [
      { name: "Australia", code: "AU" },
      { name: "Fiji", code: "FJ" },
      { name: "Kiribati", code: "KI" },
      { name: "Marshall Islands", code: "MH" },
      { name: "Micronesia", code: "FM" },
      { name: "Nauru", code: "NR" },
      { name: "New Zealand", code: "NZ" },
      { name: "Palau", code: "PW" },
      { name: "Papua New Guinea", code: "PG" },
      { name: "Samoa", code: "WS" },
      { name: "Solomon Islands", code: "SB" },
      { name: "Tonga", code: "TO" },
      { name: "Tuvalu", code: "TV" },
      { name: "Vanuatu", code: "VU" }
    ]
  }
];
  