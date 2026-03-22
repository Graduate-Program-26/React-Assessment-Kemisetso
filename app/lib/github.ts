import type { GitHubRepo, GitHubUser } from '../types/gitTypes'

const BASE_URL = 'https://api.github.com'

const headers = {
  Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
  Accept: 'application/vnd.github+json',
}

export async function getProfile(username: string): Promise<GitHubUser> {
  try {
    const res = await fetch(`${BASE_URL}/users/${username}`, { headers })
    if (!res.ok) {
      throw new Error(`User not found: ${username}`)
    }
    return await res.json()
  } catch (error) {
    console.error('Error fetching profile:', error)
    throw new Error('Failed to fetch GitHub profile')
  }
}

export async function getRepos(username: string): Promise<GitHubRepo[]> {
  try {
    const res = await fetch(
      `${BASE_URL}/users/${username}/repos?sort=updated&per_page=100`,
      { headers },
    )
    if (!res.ok) {
      throw new Error(`Could not fetch repos for: ${username}`)
    }

    const repos = (await res.json()) as GitHubRepo[]

    return repos.filter((repo) => !repo.fork).slice(0, 6)
  } catch (error) {
    console.error('Error fetching repos:', error)
    throw new Error('Failed to fetch GitHub repositories')
  }
}
