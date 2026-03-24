import { Card, CardBody, Skeleton } from '@heroui/react'

export function ProfileCardSkeleton() {
  return (
    <Card className="max-w-md mx-auto bg-purple-50 border border-purple-100 shadow-sm rounded-2xl">
      <CardBody className="flex flex-col items-center gap-5 p-8">
        <Skeleton className="w-24 h-24 rounded-full" />

        <div className="flex flex-col items-center gap-2 w-full">
          <Skeleton className="h-5 w-36 rounded-lg" />
          <Skeleton className="h-4 w-24 rounded-lg" />
        </div>

        <div className="flex flex-col gap-2 w-full">
          <Skeleton className="h-3 w-full rounded-lg" />
          <Skeleton className="h-3 w-3/4 rounded-lg mx-auto" />
        </div>

        <div className="w-full grid grid-cols-3 gap-4 pt-4 border-t border-purple-100">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="flex flex-col items-center gap-2">
              <Skeleton className="h-7 w-12 rounded-lg" />
              <Skeleton className="h-3 w-16 rounded-lg" />
            </div>
          ))}
        </div>
      </CardBody>
    </Card>
  )
}
