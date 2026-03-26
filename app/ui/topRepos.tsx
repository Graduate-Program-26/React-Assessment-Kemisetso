import type { GitHubRepo } from '../types/gitTypes'
import { RepoCard } from './repoCard'

interface TopReposProps {
  repos: GitHubRepo[]
}

export function TopRepos({ repos }: TopReposProps) {
  if (repos.length === 0) {
    return (
      <p className="text-sm text-gray-400 text-center py-8">
        No public repositories found.
      </p>
    )
  }

  return (
    <section aria-labelledby="repos-heading">
      <h2
        id="repos-heading"
        className="text-lg font-semibold text-gray-800 mb-4"
      >
        Top Repositories
      </h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {repos.map((repo) => (
          <li key={repo.id}>
            <RepoCard repo={repo} />
          </li>
        ))}
      </ul>
    </section>
  )
}
