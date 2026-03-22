'use client'
import { Avatar, Card, CardBody } from "@heroui/react"
import type { GitHubUser } from "../types/gitTypes"

interface ProfileCardProps {
  profile: GitHubUser
}

interface StatItemProps {
  label: string
  value: number
}

function StatItem({ label, value }: StatItemProps) {
  return (
    <div className="flex flex-col items-center gap-1">
      <span className="text-2xl font-bold text-purple-700">
        {value.toLocaleString()}
      </span>
      <span className="text-sm text-gray-500">{label}</span>
    </div>
  )
}

export function ProfileCard({ profile }: ProfileCardProps) {
  return (
    <Card className="max-w-md mx-auto bg-purple-50 border border-purple-100 shadow-sm rounded-2xl">
      <CardBody className="flex flex-col items-center gap-5 p-8">

        <Avatar
          src={profile.avatar_url}
          alt={`${profile.login}'s GitHub avatar`}
          className="w-24 h-24 ring-4 ring-purple-200"
          size="lg"
          isBordered
          color="secondary"
        />

        <div className="text-center">
          <h1 className="text-xl font-bold text-gray-900">
            {profile.name ?? profile.login}
          </h1>
          <a
            href={profile.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-purple-500 hover:text-purple-700 transition-colors"
            aria-label={`View ${profile.login}'s GitHub profile`}
          >
            @{profile.login}
          </a>
        </div>

        {profile.bio && (
          <p className="text-sm text-gray-600 text-center leading-relaxed">
            {profile.bio}
          </p>
        )}

        <div
          className="w-full grid grid-cols-3 gap-4 pt-4 border-t border-purple-100"
          role="list"
          aria-label="GitHub statistics"
        >
          <div role="listitem">
            <StatItem label="Followers" value={profile.followers} />
          </div>
          <div role="listitem">
            <StatItem label="Following" value={profile.following} />
          </div>
          <div role="listitem">
            <StatItem label="Repos" value={profile.public_repos} />
          </div>
        </div>

      </CardBody>
    </Card>
  )
}