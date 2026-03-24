'use client'
import { Card, CardBody, Skeleton } from '@heroui/react'

function RepoCardSkeleton() {
  return (
    <Card className="h-full bg-white border border-purple-100 shadow-sm rounded-2xl">
      <CardBody className="flex flex-col gap-3 p-5">
        <Skeleton className="h-4 w-3/4 rounded-lg" />

        <Skeleton className="h-3 w-full rounded-lg" />
        <Skeleton className="h-3 w-2/3 rounded-lg" />

        <div className="flex items-center justify-between mt-auto pt-2 border-t border-purple-50">
          <div className="flex items-center gap-2">
            <Skeleton className="h-4 w-16 rounded-full" />
            <Skeleton className="h-4 w-8 rounded-lg" />
          </div>
          <Skeleton className="h-3 w-20 rounded-lg" />
        </div>
      </CardBody>
    </Card>
  )
}

export function TopReposSkeleton() {
  return (
    <section>
      <Skeleton className="h-6 w-40 rounded-lg mb-4" />
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {[...Array(6)].map((_, i) => (
          <li key={i}>
            <RepoCardSkeleton />
          </li>
        ))}
      </ul>
    </section>
  )
}
