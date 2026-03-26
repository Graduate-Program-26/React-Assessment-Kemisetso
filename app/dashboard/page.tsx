import { auth } from '@/app/auth'
import { redirect } from 'next/navigation'
import { getEvents, getProfile, getRepos } from '../lib/github'
import { ProfileCard } from '../ui/profileCard'
import { TopRepos } from '../ui/topRepos'
import { ActivityFeed } from '../ui/activityFeed'
import { ContributionCalendar } from '../ui/contributionCalender'

export default async function Page() {
  const session = await auth()

  if (!session?.user) {
    redirect('/')
  }

  const username = session.user.login
  const [profile, repos, events] = await Promise.all([
    getProfile(username),
    getRepos(username),
    getEvents(username),
  ])

  return (
    <main className="min-h-screen p-8">
      <ProfileCard profile={profile} />
      <TopRepos repos={repos} />
      <ActivityFeed events={events} />
      <ContributionCalendar username={username} />
    </main>
  )
}
