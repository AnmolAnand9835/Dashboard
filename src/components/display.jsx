import { SidebarTrigger } from "@/components/ui/sidebar"
import { SidebarProvider } from "@/components/ui/sidebar"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <main className="flex min-h-screen w-full">
        {/* Your Sidebar Component Goes Here */}
        
        <div className="flex-1">
          <header className="flex h-16 items-center px-4 border-b">
            {/* This is the toggle button */}
            <SidebarTrigger /> 
          </header>
          
          <div className="p-6">
            {children}
          </div>
        </div>
      </main>
    </SidebarProvider>
  )
}
