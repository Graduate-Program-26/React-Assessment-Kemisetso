export interface GitHubUser {
  login: string
  name: string | null
  avatar_url: string
  bio: string | null
  followers: number
  following: number
  public_repos: number
  html_url: string
}

export interface GitHubRepo {
  id: number
  name: string
  description: string | null
  html_url: string
  stargazers_count: number
  language: string | null
  updated_at: string
  fork: boolean
}

interface PushPayload {
  ref: string
  commits?: { message: string }[]
}

interface PullRequestPayload {
  action: string
  pull_request: { title: string; html_url: string }
}

interface IssuesPayload {
  action: string
  issue: { title: string; html_url: string }
}

interface CreatePayload {
  ref_type: string
  ref: string | null
}

interface ForkPayload {
  forkee: { full_name: string; html_url: string }
}

type GitHubEventPayload =
  | { type: 'PushEvent'; payload: PushPayload }
  | { type: 'PullRequestEvent'; payload: PullRequestPayload }
  | { type: 'IssuesEvent'; payload: IssuesPayload }
  | { type: 'CreateEvent'; payload: CreatePayload }
  | { type: 'ForkEvent'; payload: ForkPayload }
  | { type: string; payload: Record<string, unknown> }

export interface GitHubEventRepo {
  id: number
  name: string
  url: string
}

export type GitHubEvent = GitHubEventPayload & {
  id: string
  repo: GitHubEventRepo
  created_at: string
}
