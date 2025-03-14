import Image from "next/image";

export function HeroImage() {
  return (
    <div className="w-full md:w-[50%] bg-[#f83e7b] relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#f83e7b] to-[#f83e7b]/90"></div>
      <div className="relative h-full flex items-center justify-center p-12">
        <div className="max-w-xl">
          <h2 className="text-4xl font-bold text-white mb-8">
            Empowering Businesses,
            <br />
            Elevating Creators
          </h2>
          <div className="mt-8">
            <Image
              width={500}
              height={400}
              src="/placeholder.svg?height=400&width=500"
              alt="Dashboard Preview"
              className="w-full h-auto rounded-xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

