'use client'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@heroui/react'

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#f9f7ff] flex flex-col items-center justify-center px-8 text-center gap-6">
      <Image
        src="/404.svg"
        alt="A friendly monster holding a 404 sign"
        width={400}
        height={400}
        priority
      />

      <div className="flex flex-col items-center gap-2">
        <h1 className="text-3xl font-semibold text-[#1a1523]">
          Page not found
        </h1>
        <p className="text-sm text-purple-900/50 max-w-sm leading-relaxed">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
      </div>

      <Link href="/">
        <Button className="bg-purple-600 text-white font-medium px-8 shadow-lg shadow-purple-200">
          Back to home
        </Button>
      </Link>
    </main>
  )
}
