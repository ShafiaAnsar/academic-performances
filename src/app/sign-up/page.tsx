import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { HeroImage } from "@/components/hero-image"
import { Button } from "@/components/ui/button"
import { FcGoogle } from "react-icons/fc";
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"

export default function SignUp() {
  return (
    <div className=" min-h-screen bg-white w-full">
      <main className=" flex flex-col w-full">
        <Navbar title="Sign up" />

        <div className="flex flex-col md:flex-row  ">
          <div className=" mx-auto w-full px-6 py-8 md:w-[50%] ">
            <h2 className="text-2xl font-bold mb-8 text-center">Sign up to Favikon</h2>

            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="firstName" className="text-sm font-medium">
                    First Name
                  </label>
                  <Input id="firstName" placeholder="First name" className="w-full" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="lastName" className="text-sm font-medium">
                    Last Name
                  </label>
                  <Input id="lastName" placeholder="Last name" className="w-full" />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <Input id="email" type="email" placeholder="example@gmail.com" className="w-full" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium">
                    Phone number (optional)
                </label>
                <div className="flex">
                  <div className="flex items-center justify-center border rounded-l-md px-3 bg-muted">+33</div>
                  <Input id="phone" type="tel" className="rounded-l-none" />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="company" className="text-sm font-medium">
                  Company
                </label>
                <Input id="company" placeholder="Company name" className="w-full" />
              </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="country" className="text-sm font-medium">
                    Country
                  </label>
                  <div className="relative">
                    <select
                      id="country"
                      className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm appearance-none"
                    >
                      <option>Country</option>
                    </select>
                    <div className="absolute right-3 top-3 pointer-events-none">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-chevron-down"
                      >
                        <path d="m6 9 6 6 6-6" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="language" className="text-sm font-medium">
                    Language
                  </label>
                  <div className="relative">
                    <select
                      id="language"
                      className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm appearance-none"
                    >
                      <option>English</option>
                    </select>
                    <div className="absolute right-3 top-3 pointer-events-none">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-chevron-down"
                      >
                        <path d="m6 9 6 6 6-6" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-2 pt-2">
                <Checkbox id="terms" className="mt-1" />
                <label htmlFor="terms" className="text-sm leading-none">
                  Accept our{" "}
                  <Link href="/terms" className="text-[#6542ea] hover:underline">
                    Terms and Conditions
                  </Link>
                </label>
              </div>

              <div className="flex items-start space-x-2">
                <Checkbox id="newsletter" className="mt-1" />
                <label htmlFor="newsletter" className="text-sm leading-none">
                  Subscribe to our newsletter and commercial offers
                </label>
              </div>

              <Button className="w-full cursor-pointer bg-[#6542ea] hover:bg-[#5a3bd3] text-white rounded-md">Create account for Free</Button>

              <div className="relative my-4">
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
                  Already have an account?{" "}
                  <Link href="/sign-in" className="text-[#6542ea] hover:underline">
                    Sign in
                  </Link>
                </p>
              </div>
            </div>
          </div>

          <HeroImage />
        </div>
      </main>
    </div>
  )
}

