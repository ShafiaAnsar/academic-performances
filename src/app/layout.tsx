import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Uniranks Academics",
  description: "Uniranks Academics is a platform that helps students find the best universities and courses for their needs.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SidebarProvider 
          className="flex min-h-screen w-full overflow-hidden"
          style={{
            "--sidebar-width": "16rem",
            "--sidebar-width-mobile": "18rem",
          } as React.CSSProperties}
        >
          <AppSidebar />
          <main className="flex-1 w-full bg-[#f6f8fb]">
            {children}
          </main>
        </SidebarProvider>
      </body>
    </html>
  )
}

