"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import Image from "next/image"
import { onboarding } from "@/public/images"
import Link from "next/link"
export default function OnboardingPage() {
  const router = useRouter()
  const [step, setStep] = useState(1)
  const [userType, setUserType] = useState<string | null>(null)
  const [experience, setExperience] = useState<string | null>(null)

  const handleNext = () => {
    if (step === 2) {
      router.push("/discovery")
    } else {
      setStep(step + 1)
    }
  }

  return (
    <div className="flex min-h-screen">

      {/* Main content */}
      <div className="flex flex-1 flex-col">
        <div className="flex flex-1">
          {/* Left panel */}
          <div className="flex flex-1 flex-col items-center justify-center p-8">
            <div className="w-full max-w-md">
              <div className="mb-8 flex items-center gap-2">
                <div
                  className={`flex h-8 w-8 items-center justify-center rounded-full ${step >= 1 ? "bg-[var(--color-primary)] text-white" : "bg-gray-200"}`}
                >
                  {step > 1 ? <Check className="h-5 w-5" /> : 1}
                </div>
                <div className="h-1 w-16 bg-gray-200">
                  <div
                    className={`h-full ${step > 1 ? "bg-[var(--color-primary)]" : "bg-gray-200"}`}
                    style={{ width: step > 1 ? "100%" : "0%" }}
                  ></div>
                </div>
                <div
                  className={`flex h-8 w-8 items-center justify-center rounded-full ${step >= 2 ? "bg-[var(--color-primary)] text-white" : "bg-gray-200"}`}
                >
                  {step > 2 ? <Check className="h-5 w-5" /> : 2}
                </div>
              </div>

              {step === 1 && (
                <>
                  <h1 className="mb-8 text-center text-2xl font-bold">What is your role in academia?</h1>

                  <div className="space-y-4">
                    <Card
                      className={`cursor-pointer p-4 hover:border-[var(--color-primary)]/50 ${userType === "student" ? "border-2 border-[var(--color-primary)]" : ""}`}
                      onClick={() => setUserType("student")}
                    >
                      <div className="flex items-center gap-3">
                        <div className="rounded-full bg-indigo-100 p-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-graduation-cap text-[var(--color-primary)]"
                          >
                            <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                            <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="font-medium">Student</h3>
                          <p className="text-sm text-gray-500">Undergraduate, graduate, or doctoral student</p>
                        </div>
                      </div>
                    </Card>

                    <Card
                      className={`cursor-pointer p-4 hover:border-indigo-300 ${userType === "professor" ? "border-2 border-[var(--color-primary)]" : ""}`}
                      onClick={() => setUserType("professor")}
                    >
                      <div className="flex items-center gap-3">
                        <div className="rounded-full bg-indigo-100 p-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-book-open-text text-[var(--color-primary)]"
                          >
                            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                            <path d="M6 8h2" />
                            <path d="M6 12h2" />
                            <path d="M16 8h2" />
                            <path d="M16 12h2" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="font-medium">Academic Professor</h3>
                          <p className="text-sm text-gray-500">Professor, researcher, or academic staff</p>
                        </div>
                      </div>
                    </Card>
                  </div>
                </>
              )}

              {step === 2 && (
                <>
                  <h1 className="mb-8 text-center text-2xl font-bold">
                    {userType === "student"
                      ? "What is your academic experience level?"
                      : "What is your research experience level?"}
                  </h1>

                  <div className="space-y-4">
                    <Card
                      className={`cursor-pointer p-4 hover:border-indigo-300 ${experience === "beginner" ? "border-2 border-[var(--color-primary)]" : ""}`}
                      onClick={() => setExperience("beginner")}
                    >
                      {userType === "student" ? (
                        <div className="flex items-center gap-3">
                          <div className="rounded-full bg-indigo-100 p-2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="lucide lucide-sparkles text-[var(--color-primary)]"
                            >
                              <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
                              <path d="M5 3v4" />
                              <path d="M19 17v4" />
                              <path d="M3 5h4" />
                              <path d="M17 19h4" />
                            </svg>
                          </div>
                          <div>
                            <h3 className="font-medium">Undergraduate Student</h3>
                            <p className="text-sm text-gray-500">Early in my academic journey</p>
                          </div>
                        </div>
                      ) : (
                        <div className="flex items-center gap-3">
                          <div className="rounded-full bg-indigo-100 p-2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="lucide lucide-sparkles text-[var(--color-primary)]"
                            >
                              <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
                              <path d="M5 3v4" />
                              <path d="M19 17v4" />
                              <path d="M3 5h4" />
                              <path d="M17 19h4" />
                            </svg>
                          </div>
                          <div>
                            <h3 className="font-medium">Early Career Researcher</h3>
                            <p className="text-sm text-gray-500">Building my research portfolio</p>
                          </div>
                        </div>
                      )}
                    </Card>

                    <Card
                      className={`cursor-pointer p-4 hover:border-[var(--color-primary)]/50 ${experience === "intermediate" ? "border-2 border-[var(--color-primary)]" : ""}`}
                      onClick={() => setExperience("intermediate")}
                    >
                      {userType === "student" ? (
                        <div className="flex items-center gap-3">
                          <div className="rounded-full bg-indigo-100 p-2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="lucide lucide-book-open text-[var(--color-primary)]"
                            >
                              <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                              <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                            </svg>
                          </div>
                          <div>
                            <h3 className="font-medium">Graduate Student</h3>
                            <p className="text-sm text-gray-500">Working on advanced studies</p>
                          </div>
                        </div>
                      ) : (
                        <div className="flex items-center gap-3">
                          <div className="rounded-full bg-indigo-100 p-2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="lucide lucide-book-open text-[var(--color-primary)]"
                            >
                              <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                              <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                            </svg>
                          </div>
                          <div>
                            <h3 className="font-medium">Associate Professor</h3>
                            <p className="text-sm text-gray-500">Established research presence</p>
                          </div>
                        </div>
                      )}
                    </Card>

                    <Card
                      className={`cursor-pointer p-4 hover:border-[var(--color-primary)]/50 ${experience === "advanced" ? "border-2 border-[var(--color-primary)]" : ""}`}
                      onClick={() => setExperience("advanced")}
                    >
                      {userType === "student" ? (
                        <div className="flex items-center gap-3">
                          <div className="rounded-full bg-indigo-100 p-2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                                className="lucide lucide-award text-[var(--color-primary)]"
                            >
                              <circle cx="12" cy="8" r="6" />
                              <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
                            </svg>
                          </div>
                          <div>
                            <h3 className="font-medium">Doctoral Candidate</h3>
                            <p className="text-sm text-gray-500">Conducting original research</p>
                          </div>
                        </div>
                      ) : (
                        <div className="flex items-center gap-3">
                          <div className="rounded-full bg-indigo-100 p-2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="lucide lucide-award text-[var(--color-primary)]"
                            >
                              <circle cx="12" cy="8" r="6" />
                              <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
                            </svg>
                          </div>
                          <div>
                            <h3 className="font-medium">Distinguished Professor</h3>
                            <p className="text-sm text-gray-500">Leading expert in my field</p>
                          </div>
                        </div>
                      )}
                    </Card>
                  </div>
                </>
              )}

              <div className="mt-8">
                <Button
                  className="w-full cursor-pointer bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary)]/80"
                  size="lg"
                  disabled={(step === 1 && !userType) || (step === 2 && !experience)}
                  onClick={handleNext}
                >
                  <Link href="/discovery">
                  {step === 2 ? "Go to Dashboard" : "Next step"}
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Right panel */}
          <div className="hidden bg-[var(--color-primary)] md:block md:w-1/2 lg:w-1/2">
            <div className="flex h-full flex-col items-center justify-center p-8 text-white">
              <div className="w-full">
                <h2 className="text-4xl font-bold">
                  {step === 1 ? "Analyze top academics across disciplines" : "Find leading researchers in your field"}
                </h2>
                <p className="mt-4 text-xl text-[var(--color-primary)]">
                  {step === 1
                    ? "Discover influential scholars and track academic rankings in your area of study."
                    : "Connect with peers, track citations, and benchmark your research impact."}
                </p>

                <div className=" rounded-xl bg-white/10 p-6 backdrop-blur-sm">
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
        </div>
      </div>
    </div>
  )
}

