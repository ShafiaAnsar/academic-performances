"use client"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Slider from "react-slick"
import { spotlights } from "@/db"

export function Spotlight() {
    const NextArrow = (props) => {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, display: "block", background: "red" }}
            onClick={onClick}
          />
        );
      };
      const PrevArrow = (props) => {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, display: "block", background: "blue" }}
            onClick={onClick}
          />
        );
      };
      
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
      };
  return (
    <div className="relative mt-6">
      <Slider {...settings}>
        {spotlights.map((spotlight) => (
          <div key={spotlight.id}>
            <Image src={spotlight.image} alt={spotlight.name} width={100} height={100} />
          </div>
        ))}
      </Slider>
    </div>
  )
}

