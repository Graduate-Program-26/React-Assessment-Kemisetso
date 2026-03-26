'use client'
import { Skeleton } from '@heroui/react'

export function ActivityFeedSkeleton() {
  return (
    <section>
      <Skeleton className="h-6 w-40 rounded-lg mb-4" />
      <ol className="flex flex-col gap-2">
        {[...Array(5)].map((_, i) => (
          <li
            key={i}
            className="flex items-center gap-4 p-4 bg-white border border-purple-100 rounded-xl"
          >
            <Skeleton className="w-6 h-6 rounded-full shrink-0" />
            <div className="flex flex-col gap-1.5 flex-1">
              <Skeleton className="h-3.5 w-40 rounded-lg" />
              <Skeleton className="h-3 w-28 rounded-lg" />
            </div>
            <Skeleton className="h-3 w-16 rounded-lg shrink-0" />
          </li>
        ))}
      </ol>
    </section>
  )
}
