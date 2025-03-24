import React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "../globals.css"
import { SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { Providers } from "../providers"
import { Toaster } from "@/components/ui/sonner"
const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Uniranks Academics",
  description: "Uniranks Academics is a platform that helps students find the best universities and courses for their needs.",
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  // Get the locale from params
  const resolvedLocale = await(params.locale);
  const locale =  resolvedLocale;
  // Get messages for the locale
  const messages = await getMessages({ locale });
  
  return (
    <html lang={locale}>
      <body className={inter.className}>
        <NextIntlClientProvider messages={messages} locale={locale}>
          <Providers>
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
            <Toaster />
          </SidebarProvider>
          </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  )
} 