import { ProfileCardSkeleton } from '../ui/skeletons/profileCardSkeleton'
import { TopReposSkeleton } from '../ui/skeletons/topRepoSkeleton'

export default function Loading() {
  return (
    <main className="min-h-screen p-8">
      <ProfileCardSkeleton />
      <TopReposSkeleton />
    </main>
  )
}
