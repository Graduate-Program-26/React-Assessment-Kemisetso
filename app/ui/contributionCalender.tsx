'use client'
import { GitHubCalendar } from 'react-github-calendar'

interface ContributionCalendarProps {
  username: string
}

const purpleTheme = {
  light: ['#f3f0ff', '#d8b4fe', '#a855f7', '#7c3aed', '#4c1d95'],
}

export function ContributionCalendar({ username }: ContributionCalendarProps) {
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
          colorScheme="light"
          theme={purpleTheme}
          blockRadius={3}
          blockSize={12}
          fontSize={12}
        />
      </div>
    </section>
  )
}
