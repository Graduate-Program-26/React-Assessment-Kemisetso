import { Navbar } from '../ui/navbar/navbar'
import { NavbarWrapper } from '../ui/navbar/navbarWrapper'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-gray-50">
      <NavbarWrapper />
      {children}
    </div>
  )
}
