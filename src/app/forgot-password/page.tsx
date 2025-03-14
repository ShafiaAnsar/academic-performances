import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { HeroImage } from "@/components/hero-image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function ForgotPassword() {
  return (
    <div className=" min-h-screen bg-white w-full">
      <main className="flex-1 flex flex-col">
        <Navbar title="👋 Welcome" />
        <div className="flex flex-col md:flex-row flex-1">
          <div className="flex-1 w-full px-6 py-8">
            <h2 className="text-2xl font-bold mb-4 text-center">Don&apos;t worry, it happens to everyone!</h2>

            <div className="space-y-6 mt-8">
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <Input id="email" type="email" placeholder="example@gmail.com" className="w-full" />
              </div>

              <Button className="w-full bg-[#6542ea] text-white hover:bg-[#6542ea]/90 cursor-pointer">Reset my password</Button>

              <div className="text-center mt-4">
                <Link href="/sign-in" className="text-[#6542ea] text-sm hover:underline">
                  Sign in
                </Link>
              </div>
            </div>
          </div>

          <HeroImage />
        </div>
      </main>
    </div>
  )
}

