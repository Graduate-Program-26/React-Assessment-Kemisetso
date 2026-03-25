'use client'

import { Avatar, Button } from '@heroui/react'
import { SearchForm } from '../searchForm'
import Link from 'next/link'

interface NavbarProps {
  userImage: string | null
  userLogin: string | null
  onSignOut: () => Promise<void>
}

export function Navbar({ userImage, userLogin, onSignOut }: NavbarProps) {
  return (
    <header className="w-full border-b border-purple-100 bg-white sticky top-0 z-10">
      <div className="max-w-5xl mx-auto px-8 py-3 flex items-center justify-between gap-4">
        <Link
          href="/dashboard"
          className="text-purple-700 font-bold text-lg tracking-tight shrink-0"
          aria-label="Go to your dashboard"
        >
          GitDash
        </Link>

        <div className="flex-1 max-w-sm">
          <SearchForm />
        </div>

        <form action={onSignOut}>
          <Button
            type="submit"
            size="sm"
            variant="bordered"
            className="border-purple-200 text-purple-700 hover:border-purple-400"
          >
            Sign out
          </Button>
        </form>
      </div>
    </header>
  )
}
