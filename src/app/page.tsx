import { AppSidebar } from "@/components/app-sidebar"
import { Navbar } from "@/components/navbar"
import { NavigationTabs } from "@/components/navigation-tabs"

export default function Home({children}:{children:React.ReactNode}) {
  return (
    <div className="flex min-h-screen w-full ">
      <AppSidebar />
      <main className="flex-1 p-6">
        <Navbar title="Home" />
        <NavigationTabs/>
        {children}
      </main>
    </div>
  )
}

