import { AppSidebar } from "@/components/ui/app-sidebar"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { Outlet } from "react-router-dom"

export const LayoutDashboard = () => {
    return (
        <SidebarProvider>
            <AppSidebar />
            <div className="flex flex-col grow min-h-screen" >
                <header className="flex border-b p-4 w-full bg-card justify-between">
                    <SidebarTrigger />
                    <div>
                        Logo
                    </div>
                </header>
                <main className="flex-1 bg-muted p-5 overflow-y-auto flex BG-R">
                    <div className="bg-white rounded-lg shadow-sm flex-1">
                        <Outlet />
                    </div>
                </main>
            </div>
        </SidebarProvider>
    )
}
