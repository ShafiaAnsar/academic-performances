import {img2, img3, img4, img5, img6, img7, onboarding } from "@/public/images";
import Image from "next/image";

export function HeroImage() {
  // Left side images
  const leftImages = [
    { src: img3, alt: "Profile", width: 450, height: 250, top: "55%", left: "5%", },
    { src: img5, alt: "Analytics", width: 160, height: 130, top: "25%", left: "5%", },
  ];

  // Right side images
  const rightImages = [
    { src: img2, alt: "Rankings", width: 500, height: 250, top: "70%", right: "10%" },
    { src: img4, alt: "Social Media", width: 230, height: 170, top: "40%", right: "25%" },
    { src: img6, alt: "Metrics", width: 210, height: 150, top: "25%", right: "5%" },
    { src: img7, alt: "Leaderboard", width: 190, height: 140, top: "15%", right: "40%" },
  ];

  return (
    <div className="w-full md:w-[50%] bg-[var(--color-primary)] relative overflow-hidden">
      <div className="absolute inset-0 bg-[var(--color-primary)]"></div>
      <div className="relative h-full p-8">
        <div className="max-w-xl">
          <h2 className="text-4xl font-bold text-white mb-8">
            Advancing Knowledge,
            <br />
            Inspiring Innovation
          </h2>
          {/* Left side images */}
          {leftImages.map((img, index) => (
            <div
              key={`left-${index}`}
              className="absolute rounded-xl overflow-hidden shadow-lg animate-slide-in-left hidden lg:block"
              style={{ 
                top: img.top, 
                left: img.left,
                zIndex: 10 - index,
                animationDelay: `${index * 0.2}s`
              }}
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={img.width}
                height={img.height}
                className="rounded-lg"
              />
            </div>
          ))}
          
          {/* Right side images */}
          {rightImages.map((img, index) => (
            <div
              key={`right-${index}`}
              className="absolute rounded-xl overflow-hidden shadow-lg animate-slide-in-right hidden lg:block"
              style={{ 
                top: img.top, 
                right: img.right,
                zIndex: 10 - index,
                animationDelay: `${index * 0.2}s`
              }}
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={img.width}
                height={img.height}
                className="rounded-lg"
              />
            </div>
          ))}
          <div className=" rounded-xl bg-white/10 p-6 lg:hidden backdrop-blur-sm">
                  <div className="relative">
                    <Image
                      src={onboarding}
                      alt="Academic Rankings Dashboard"
                      width={800}
                      height={500}
                      className="rounded-lg"
                    />
                    <div className="absolute inset-0 rounded-lg bg-black/10"></div>
                  </div>
                </div>
        </div>
      </div>
    </div>
  )
}

