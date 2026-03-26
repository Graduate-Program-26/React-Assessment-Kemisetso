'use client'
import { Button } from '@heroui/react'

import Link from 'next/link'
import { ThemeToggle } from '../themeToggle'

interface NavbarProps {
  userLogin: string | null
  onSignOut: () => Promise<void>
}

export function Navbar({ userLogin, onSignOut }: NavbarProps) {
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

        <div className="flex items-center gap-2">
          <ThemeToggle />
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
      </div>
    </header>
  )
}
