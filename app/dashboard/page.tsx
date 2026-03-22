import { auth } from '@/app/auth'
import { redirect } from 'next/navigation'
import { getProfile, getRepos } from '../lib/github'
import { ProfileCard } from '../ui/profileCard'
import { TopRepos } from '../ui/topRepos'

export default async function Page() {
  const session = await auth()

  if (!session?.user) {
    redirect('/')
  }

  const username = session.user.login
  const [profile, repos] = await Promise.all([
    getProfile(username),
    getRepos(username),
  ])

  return (
    <main className="min-h-screen p-8">
      <ProfileCard profile={profile} />
      <TopRepos repos={repos} />
    </main>
  )
}
