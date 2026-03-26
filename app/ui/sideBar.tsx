import Link from 'next/link'
import { SearchSection } from './searchSection'
import { Suspense } from 'react'

export function Sidebar() {
  return (
    <aside className="hidden md:flex flex-col w-64 shrink-0 h-screen sticky top-0 border-r border-purple-100 bg-white px-5 py-6 gap-6">
      <Link
        href="/dashboard"
        className="text-purple-700 font-bold text-xl tracking-tight"
        aria-label="Go to your dashboard"
      >
        Git Dashboad
      </Link>

      <div>
        <p className="text-xs font-semibold text-gray-400 ">Search</p>
        <Suspense fallback={<p>Loading feed...</p>}>
          <SearchSection />
        </Suspense>
      </div>

      <nav aria-label="Dashboard navigation">
        <p className="text-xs font-semibold text-gray-400">Navigation</p>
        <ul className="flex flex-col gap-1">
          <li>
            <Link
              href="/dashboard"
              className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-700 transition-colors"
            >
              <span aria-hidden="true"></span> Go to your profile
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  )
}
