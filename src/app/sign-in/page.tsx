import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { FcGoogle } from "react-icons/fc"
import { HeroImage } from "@/components/hero-image"

export default function SignIn() {
  return (
    <div className=" min-h-screen bg-white w-full">
        <Navbar title="Sign in" />

        <div className="flex flex-col w-full md:flex-row ">
          <div className=" mx-auto w-full md:w-[50%] px-12 py-8">
            <h2 className="text-2xl font-bold mb-8 text-center">Sign in to Favikon</h2>

            <div className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <Input id="email" type="email" placeholder="example@gmail.com" className="w-full rounded-lg" />
              </div>

              <div className="space-y-2">
                <label htmlFor="password" className="text-sm font-medium">
                  Password
                </label>
                <Input id="password" type="password" placeholder="password" className="w-full rounded-lg" />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Checkbox id="remember" />
                  <label
                    htmlFor="remember"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Remember me
                  </label>
                </div>
                <Link href="/forgot-password" className="text-sm text-[var(--color-primary)] hover:underline">
                  Forgot password?
                </Link>
              </div>

              <Button className="w-full bg-[var(--color-primary)] cursor-pointer hover:bg-[var(--color-primary)]/80 text-white rounded-lg">Sign in</Button>

              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t"></span>
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-background px-2 text-muted-foreground">or</span>
                </div>
              </div>

              <button className="w-full flex cursor-pointer  items-center justify-between gap-2 border p-2 border-black rounded-full">
               <FcGoogle/>
               <span className="text-sm font-medium w-full text-center" >Sign up with Google</span>
              </button>

              <div className="text-center mt-6">
                <p className="text-sm text-gray-600">
                  You don&apos;t have an account?{" "}
                  <Link href="/sign-up" className="text-[var(--color-primary)] hover:underline">
                    Register for free
                  </Link>
                </p>
              </div>
            </div>
          </div>

          <HeroImage />
        </div>
    </div>
  )
}

