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
                        asdas
                    </div>
                </header>
            </div>
            <main className="bg-muted">
                <Outlet />
            </main>
        </SidebarProvider>
    )
}
