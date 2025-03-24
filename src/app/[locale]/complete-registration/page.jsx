import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { HeroImage } from "@/components/hero-image"
import { Button } from "@/components/ui/button"
import { FcGoogle } from "react-icons/fc";
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
const CompleteRegistration = () => {
  return (
    <div className=" min-h-screen bg-white w-full">
      <main className=" flex flex-col w-full">
        <Navbar title="Sign up" />

        <div className="flex flex-col md:flex-row mt-16  ">
          <div className=" mx-auto w-full p-8 md:w-[50%] ">
            <h2 className="text-2xl font-bold mb-8 text-center">Sign up to Favikon</h2>

            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                  <Link href="#" className="text-[var(--color-primary)] hover:underline">
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

              <Button className="w-full cursor-pointer bg-[var(--color-primary)] hover:bg-[var(--color-primary)]/70 text-white rounded-md">Finish Registration</Button>
            </div>
          </div>

          <HeroImage />
        </div>
      </main>
    </div>
  )
}

export default CompleteRegistration