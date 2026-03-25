import { auth } from '@/app/auth'
import { NextRequest, NextResponse } from 'next/server'
import type { GitHubSearchResponse } from '@/app/types/gitTypes'

export async function GET(req: NextRequest) {
  const session = await auth()
  if (!session?.user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const query = req.nextUrl.searchParams.get('q')
  if (!query || query.trim().length < 2) {
    return NextResponse.json({ total_count: 0, items: [] })
  }

  const res = await fetch(
    `https://api.github.com/search/users?q=${encodeURIComponent(query)}&per_page=6`,
    {
      headers: {
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        Accept: 'application/vnd.github+json',
      },
    },
  )

  if (!res.ok) {
    return NextResponse.json(
      { error: 'GitHub API error' },
      { status: res.status },
    )
  }

  const data = (await res.json()) as GitHubSearchResponse
  return NextResponse.json(data)
}
