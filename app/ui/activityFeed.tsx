import type { GitHubEvent } from '../types/gitTypes'

interface ActivityFeedProps {
  events: GitHubEvent[]
}

function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString('en-ZA', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  })
}

function getEventLabel(event: GitHubEvent): string {
  switch (event.type) {
    case 'PushEvent': {
      const payload = event.payload as { commits?: { message: string }[] }
      const count = payload.commits?.length ?? 1
      return `Pushed ${count} commit${count !== 1 ? 's' : ''}`
    }
    case 'PullRequestEvent': {
      const payload = event.payload as { action: string }
      return `${capitalise(payload.action)} a pull request`
    }
    case 'IssuesEvent': {
      const payload = event.payload as { action: string }
      return `${capitalise(payload.action)} an issue`
    }
    case 'CreateEvent': {
      const payload = event.payload as { ref_type: string; ref: string | null }
      return `Created ${payload.ref_type}${payload.ref ? ` "${payload.ref}"` : ''}`
    }
    case 'ForkEvent':
      return 'Forked a repository'
    case 'WatchEvent':
      return 'Starred a repository'
    case 'DeleteEvent':
      return 'Deleted a branch or tag'
    case 'IssueCommentEvent':
      return 'Commented on an issue'
    case 'PullRequestReviewEvent':
      return 'Reviewed a pull request'
    default:
      return event.type.replace('Event', '')
  }
}

function capitalise(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1)
}
