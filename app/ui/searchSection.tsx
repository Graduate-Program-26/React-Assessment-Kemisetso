'use client'

import { useSearchParams, usePathname, useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import type { GitHubSearchUser } from '../types/gitTypes'

export function SearchSection() {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const { replace } = useRouter()
  const query = searchParams.get('query') ?? ''

  const [results, setResults] = useState<GitHubSearchUser[]>([])
  const [isLoading, setIsLoading] = useState(false)

  const handleSearch = (term: string) => {
    const params = new URLSearchParams(searchParams)
    if (term) {
      params.set('query', term)
    } else {
      params.delete('query')
    }
    replace(`${pathname}?${params.toString()}`)
  }

  useEffect(() => {
    if (query.trim().length < 2) {
      setResults([])
      return
    }

    setIsLoading(true)
    fetch(`/api/search-users?q=${encodeURIComponent(query)}`)
      .then((res) => res.json())
      .then((data) => setResults(data.items ?? []))
      .catch(() => setResults([]))
      .finally(() => setIsLoading(false))
  }, [query])

  return (
    <div className="flex flex-col gap-2">
      <div className="relative">
        <label htmlFor="search" className="sr-only">
          Search GitHub users
        </label>
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none text-sm">
          🔍
        </span>
        <input
          id="search"
          type="text"
          placeholder="Search GitHub users..."
          defaultValue={query}
          onChange={(e) => handleSearch(e.target.value)}
          className="w-full pl-9 pr-4 py-2 text-sm bg-purple-50 border border-purple-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent placeholder-gray-400 transition-all"
        />
      </div>

      {isLoading && (
        <p className="text-xs text-purple-400 px-2 animate-pulse">
          Searching...
        </p>
      )}

      {!isLoading && results.length > 0 && (
        <ul className="flex flex-col gap-1" aria-label="Search results">
          {results.map((user) => (
            <li key={user.id}>
              <Link
                href={`/dashboard/${user.login}`}
                className="flex items-center py-2 rounded-xl hover:bg-purple-50 "
                onClick={() => setResults([])}
              >
                <Image
                  src={user.avatar_url}
                  alt={`${user.login}'s avatar`}
                  width={28}
                  height={28}
                  className="rounded-full ring-1 ring-purple-100"
                />
                <span className="text-sm font-medium text-gray-800">
                  {user.login}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      )}

      {!isLoading && query.length >= 2 && results.length === 0 && (
        <p className="text-xs text-gray-400 px-2">
          No users found for "{query}"
        </p>
      )}
    </div>
  )
}
