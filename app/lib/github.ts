import type { GitHubRepo, GitHubUser } from '../types/gitTypes'

const BASE_URL = 'https://api.github.com'

const headers = {
  Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
  Accept: 'application/vnd.github+json',
}

export async function getProfile(username: string): Promise<GitHubUser> {
  const res = await fetch(`${BASE_URL}/users/${username}`, { headers })
  if (!res.ok) throw new Error(`User not found: ${username}`)
  return res.json() as Promise<GitHubUser>
}

export async function getRepos(username: string): Promise<GitHubRepo[]> {
  const res = await fetch(
    `${BASE_URL}/users/${username}/repos?sort=updated&per_page=100`,
    { headers },
  )
  if (!res.ok) throw new Error(`Could not fetch repos for: ${username}`)

  const repos = (await res.json()) as GitHubRepo[]

  return repos.filter((repo) => !repo.fork).slice(0, 6)
}
