import type { GitHubUser } from "../types/gitTypes";

const BASE_URL = "https://api.github.com"

const headers = {
  Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
  Accept: "application/vnd.github+json",
}

export async function getProfile(username: string): Promise<GitHubUser> {
  const res = await fetch(`${BASE_URL}/users/${username}`, { headers })
  if (!res.ok) throw new Error(`User not found: ${username}`)
  return res.json() as Promise<GitHubUser>
}

