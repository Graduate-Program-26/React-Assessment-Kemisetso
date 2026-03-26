import { auth } from '@/app/auth'
import { getProfile, getRepos, getEvents } from '@/app/lib/github'
import { ActivityFeed } from '@/app/ui/activityFeed'
import { ContributionCalendar } from '@/app/ui/contributionCalender'
import { ProfileCard } from '@/app/ui/profileCard'
import { TopRepos } from '@/app/ui/topRepos'
import { redirect } from 'next/navigation'

interface PageProps {
  params: Promise<{ username: string }>
}

export default async function Page({ params }: PageProps) {
  const session = await auth()

  if (!session?.user) {
    redirect('/')
  }

  const { username } = await params

  const [profile, repos, events] = await Promise.all([
    getProfile(username),
    getRepos(username),
    getEvents(username),
  ])

  return (
    <main className="p-8 max-w-5xl mx-auto flex flex-col gap-10">
      <ProfileCard profile={profile} />
      <TopRepos repos={repos} />
      <ActivityFeed events={events} />
      <ContributionCalendar username={username} />
    </main>
  )
}
