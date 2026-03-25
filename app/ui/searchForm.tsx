'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Input, Button } from '@heroui/react'

export function SearchForm() {
  const [query, setQuery] = useState('')
  const router = useRouter()

  function handleSearch() {
    const trimmed = query.trim()
    if (!trimmed) return
    router.push(`/dashboard/${trimmed}`)
    setQuery('')
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter') handleSearch()
  }

  return (
    <div className="flex items-center gap-2">
      <Input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Search GitHub user..."
        aria-label="Search GitHub username"
        size="sm"
        classNames={{
          input: 'text-sm',
          inputWrapper: 'border-purple-200 hover:border-purple-400 bg-white',
        }}
      />
      <Button
        onPress={handleSearch}
        size="sm"
        className="bg-purple-600 text-white hover:bg-purple-700"
        aria-label="Search"
      >
        Search
      </Button>
    </div>
  )
}
