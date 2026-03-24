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
      return 'Deleted a branch'
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

export function ActivityFeed({ events }: ActivityFeedProps) {
  if (events.length === 0) {
    return (
      <p className="text-sm text-gray-400 text-center py-8">
        No recent activity found.
      </p>
    )
  }

  return (
    <section aria-labelledby="activity-heading">
      <h2
        id="activity-heading"
        className="text-lg font-semibold text-gray-800 mb-4"
      >
        Recent Activity (last 10 commits, PRs, issues,etc)
      </h2>

      <ol className="flex flex-col gap-2" aria-label="Recent GitHub activity">
        {events.map((event) => (
          <li
            key={event.id}
            className="flex items-start gap-4 p-4 bg-white border border-purple-100 rounded-xl hover:border-purple-300 transition-colors"
          >
            <div className="flex flex-col gap-0.5 min-w-0">
              <span className="text-sm text-gray-800 font-medium">
                {getEventLabel(event)}
              </span>
              <span className="text-xs text-purple-500 truncate">
                {event.repo.name}
              </span>
            </div>

            <time
              dateTime={event.created_at}
              className="text-xs text-gray-400 ml-auto shrink-0 mt-0.5"
            >
              {formatDate(event.created_at)}
            </time>
          </li>
        ))}
      </ol>
    </section>
  )
}
