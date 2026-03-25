import { NavbarWrapper } from '../ui/navbar/navbarWrapper'
import { Sidebar } from '../ui/sideBar'

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar />
      <div className="flex flex-col flex-1 min-w-0">
        <NavbarWrapper />
        <main className="flex-1">{children}</main>
      </div>
    </div>
  )
}
