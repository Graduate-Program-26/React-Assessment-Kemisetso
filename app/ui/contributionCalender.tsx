'use client'

import { useTheme } from 'next-themes'
import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react'

const GitHubCalendar = dynamic(
  () => import('react-github-calendar').then((mod) => mod.GitHubCalendar),
  {
    ssr: false,
    loading: () => (
      <div className="h-32 animate-pulse bg-purple-50 rounded-xl" />
    ),
  },
)
interface ContributionCalendarProps {
  username: string
}

const purpleThemeLight = {
  light: ['#f3f0ff', '#d8b4fe', '#a855f7', '#7c3aed', '#4c1d95'],
}

const purpleThemeDark = {
  dark: ['#1e1b2e', '#3b1f6e', '#6d28d9', '#a855f7', '#d8b4fe'],
}

export function ContributionCalendar({ username }: ContributionCalendarProps) {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  const isDark = theme === 'dark'

  return (
    <section aria-labelledby="calendar-heading">
      <h2
        id="calendar-heading"
        className="text-lg font-semibold text-gray-800 mb-4"
      >
        Contribution Calendar
      </h2>
      <div className="bg-white border border-purple-100 rounded-2xl p-6 overflow-x-auto">
        <GitHubCalendar
          username={username}
          colorScheme={isDark ? 'dark' : 'light'}
          theme={isDark ? purpleThemeDark : purpleThemeLight}
          blockRadius={3}
          blockSize={12}
          fontSize={12}
        />
      </div>
    </section>
  )
}
