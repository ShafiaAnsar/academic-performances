"use client";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Slider from "react-slick";
import { spotlights } from "@/db";
import { posBadge, star, us } from "../../../../public/images";
import { RiSeedlingLine } from "react-icons/ri";

// Define color schemes with their corresponding background, text, and accent colors
const colorSchemes = [
  {
    bg: "bg-blue-100",
    text: "text-blue-900",
    accent: "text-blue-700",
    border: "border-blue-200"
  },
  {
    bg: "bg-green-100",
    text: "text-green-900",
    accent: "text-green-700",
    border: "border-green-200"
  },
  {
    bg: "bg-purple-100",
    text: "text-purple-900",
    accent: "text-purple-700",
    border: "border-purple-200"
  },
  {
    bg: "bg-yellow-100",
    text: "text-yellow-900",
    accent: "text-yellow-700",
    border: "border-yellow-200"
  },
  {
    bg: "bg-orange-100",
    text: "text-orange-900",
    accent: "text-orange-700",
    border: "border-orange-200"
  }
];

export function Spotlight({}) {
  const NextArrow = (props) => {
    const { onClick } = props;
    return (
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-md shadow-md cursor-pointer z-10"
        onClick={onClick}
      >
        <ArrowRight className="text-gray-600" />
      </div>
    );
  };

  const PrevArrow = (props) => {
    const { onClick } = props;
    return (
      <div
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-md shadow-md cursor-pointer z-10"
        onClick={onClick}
      >
        <ArrowLeft className="text-gray-600" />
      </div>
    );
  };

  const settings = {
    className: "center",
    centerMode: true,
    centerPadding: "50px",
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="relative mt-6 md:max-w-[85%] max-w-[95%] mx-auto">
      {/* Left shadow overlay */}
      <div className="absolute left-0 top-0 bottom-0 w-6 z-10 pointer-events-none" 
           style={{ 
             background: 'linear-gradient(to right, rgba(249, 250, 251, 0.9), rgba(249, 250, 251, 0))' 
           }}>
      </div>
      {/* Right shadow overlay */}
      <div className="absolute right-0 top-0 bottom-0 w-6 z-10 pointer-events-none" 
           style={{ 
             background: 'linear-gradient(to left, rgba(249, 250, 251, 0.9), rgba(249, 250, 251, 0))' 
           }}>
      </div>
      
      <Slider {...settings}>
        {spotlights.map((spotlight) => {
          // Get a random color scheme
          const colorScheme = colorSchemes[Math.floor(Math.random() * colorSchemes.length)];
          
          return (
            <div key={spotlight.id} className="px-2 ">
              <div className={`flex flex-col md:flex-row items-center justify-center gap-4 h-[400px] md:h-[250px] my-3 ${colorScheme.bg} rounded-lg p-4 shadow-lg`}>
                <span className="relative flex-shrink-0">
                  <Image 
                    src={spotlight.image} 
                    className="rounded-full w-[80px] h-[80px] sm:w-[130px] sm:h-[130px] lg:w-[200px] lg:h-[200px]" 
                    alt={spotlight.name} 
                    width={200} 
                    height={200} 
                  />
                  <Image 
                    src={star} 
                    alt="Star" 
                    width={100} 
                    height={100} 
                    className="sm:w-[32px] sm:h-[32px] w-[20px] h-[20px] absolute bottom-3 right-0" 
                  />
                </span>
                <div className="flex flex-col gap-2">
                  <span className={`text-xl md:text-3xl lg:text-4xl lg:text-[48px] font-[800] ${colorScheme.text}`}>
                    {spotlight.name}
                  </span>
                  <span className={`text-base md:text-[20px] font-[600] ${colorScheme.accent}`}>
                    {spotlight.description.slice(0,30)}...
                  </span>
                  <div className="flex flex-wrap items-center gap-2">
                    <Image src={us} alt="Country" width={24} height={24} />
                    <span className={`bg-white rounded-full text-sm flex items-center justify-center py-1 px-3 ${colorScheme.accent}`}>
                      <Image src={posBadge} alt="Badge" width={24} height={24} />
                      {spotlight.authority}
                    </span>
                    {/* Spotlight Button */}
                    <button
                      className="flex items-center cursor-pointer justify-center gap-2 rounded-md py-2 px-4 text-sm border border-transparent"
                      style={{ 
                        background: 'linear-gradient(white, white) padding-box, linear-gradient(to right, #f42c51, #ffc501) border-box' 
                      }}
                    >
                      <RiSeedlingLine className="[&>path]:fill-[url(#gradient)]" />
                      <svg width="0" height="0">
                        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" style={{ stopColor: '#f42c51' }} />
                          <stop offset="100%" style={{ stopColor: '#ffc501' }} />
                        </linearGradient>
                      </svg>
                      <span className="text-gray-600">Spotlight</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}
