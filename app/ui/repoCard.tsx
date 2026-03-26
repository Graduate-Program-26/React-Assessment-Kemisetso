'use client'
import { Card, CardBody } from '@heroui/react'
import type { GitHubRepo } from '../types/gitTypes'
import { FiStar } from 'react-icons/fi'

interface RepoCardProps {
  repo: GitHubRepo
}

const languageColors: Record<string, string> = {
  TypeScript: 'bg-blue-100 text-blue-700',
  JavaScript: 'bg-yellow-100 text-yellow-700',
  Python: 'bg-green-100 text-green-700',
  CSS: 'bg-pink-100 text-pink-700',
  HTML: 'bg-orange-100 text-orange-700',
}

function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString('en-ZA', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  })
}

export function RepoCard({ repo }: RepoCardProps) {
  const languageClass =
    languageColors[repo.language ?? ''] ?? 'bg-gray-100 text-gray-600'

  return (
    <a
      href={repo.html_url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`View ${repo.name} on GitHub`}
      className="block h-full focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 rounded-2xl"
    >
      <Card className="h-full bg-white border border-purple-100 shadow-sm hover:shadow-md hover:border-purple-300 transition-all duration-200 rounded-2xl">
        <CardBody className="flex flex-col gap-3 p-5">
          <h2 className="text-sm font-semibold text-gray-900 truncate">
            {repo.name}
          </h2>

          {repo.description && (
            <p className="text-xs text-gray-500 leading-relaxed line-clamp-2 flex-1">
              {repo.description}
            </p>
          )}

          <div className="flex items-center justify-between mt-auto pt-2 border-t border-purple-50">
            <div className="flex items-center gap-2">
              {repo.language && (
                <span
                  className={`text-xs px-2 py-0.5 rounded-full font-medium ${languageClass}`}
                >
                  {repo.language}
                </span>
              )}
              <span
                className="text-xs text-gray-400 flex items-center gap-1"
                aria-label={`${repo.stargazers_count} stars`}
              >
                <FiStar className="text-yellow-400 text-[13px] " />{' '}
                {repo.stargazers_count}
              </span>
            </div>
            <span className="text-xs text-gray-400">
              {formatDate(repo.updated_at)}
            </span>
          </div>
        </CardBody>
      </Card>
    </a>
  )
}
