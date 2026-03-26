import { ProfileCardSkeleton } from '../ui/skeletons/profileCardSkeleton'
import { TopReposSkeleton } from '../ui/skeletons/topRepoSkeleton'
import { ActivityFeedSkeleton } from '../ui/skeletons/activityFeedSkeleton'

export default function Loading() {
  return (
    <main className="min-h-screen p-8">
      <ProfileCardSkeleton />
      <TopReposSkeleton />
      <ActivityFeedSkeleton />
    </main>
  )
}
