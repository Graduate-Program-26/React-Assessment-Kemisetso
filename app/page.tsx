'use client'
import { signInWithGitHub } from './lib/authActions'
import { Button, Chip, Card, CardBody } from '@heroui/react'
import { title } from 'process'
import { FaGithub } from 'react-icons/fa'
import { FiStar, FiList, FiCalendar } from 'react-icons/fi'
import { Inter, Space_Grotesk, Sora, Quantico } from 'next/font/google'

const features = [
  {
    icons: FiStar,
    title: 'Top repositories',
    description: 'Best work ranked by lasted updated',
  },
  {
    icons: FiList,
    title: 'Activity Feed',
    description: 'Recent commits, PRs, issues,etc',
  },
  {
    icons: FiCalendar,
    title: 'Contributions Calender',
    description: 'Contribution Calender from github',
  },
]

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f9f7ff]">
      <nav className="flex items-center justify-between px-12 py-5 bg-white/80 backdrop-blur-md border-b border-purple-100">
        <div className="flex items-center gap-2 font-semibold text-[15px]">
          <div className="w-2 h-2 rounded-full bg-purple-600" />
          Github dashboard
        </div>
        <Chip size="sm" className="bg-purple-50 text-purple-600">
          Sign in to view your personal dashboard
        </Chip>
      </nav>

      <section className="flex flex-col items-center text-center px-12 pt-20 pb-4 gap-6">

  <Chip
    size="sm"
    className="bg-purple-50 text-purple-400 border border-purple-200 uppercase tracking-widest text-[11px]"
  >
    Next.js App Router · GitHub OAuth · Typescript · HeroUI · Vercel Deployment
  </Chip>

  <h1 className="text-4xl font-serif font-normal leading-tight max-w-xl text-[#1a1523]">
    GitHub Personal Dashboard Assessment{' '}
    <em className="italic text-purple-600">Grads 2026</em>
  </h1>

  <h2 className="text-4xl font-quantico font-normal leading-tight max-w-xl text-[#1a1523] pt-4">
    What you will see as a recruiter
  </h2>

  {/* 🟣 CARDS FIRST */}
  <div className="px-12 mt-10 w-full">
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto">
      {features.map((feat) => {
        const Icon = feat.icons;

        return (
          <Card key={feat.title} className="border border-purple-100 shadow-none">
            <CardBody className="gap-3 p-6">
              <div className="w-9 h-9 rounded-xl bg-purple-50 flex items-center justify-center">
                <Icon className="text-purple-600 text-[18px]" />
              </div>

              <p className="text-sm font-semibold text-[#1a1523]">
                {feat.title}
              </p>

              <p className="text-xs text-purple-900/50 leading-relaxed">
                {feat.description}
              </p>
            </CardBody>
          </Card>
        );
      })}
    </div>
  </div>

  {/* 🟣 BUTTON BELOW CARDS */}
  <div className="flex flex-col items-center gap-3 mt-6">
    <Button
      type="submit"
      onClick={signInWithGitHub}
      size="lg"
      className="bg-purple-600 text-white font-medium px-10 py-3 shadow-lg shadow-purple-200 flex items-center gap-2"
      startContent={<FaGithub className="text-[18px]" />}
    >
      Sign in with Github
    </Button>
    <p className="text-xs text-purple-300">
      View Profile · Search Users · See stats
    </p>
  </div>

</section>


      <footer className="text-center py-5 text-xs text-purple-300 border-t border-purple-200">
        Built running on the power of coffee and 2 hours of sleep
        <p className="text-base text-purple-900/50 max-w-md leading-relaxed">
          Demonstrating real GitHub activity and top work to recruiters and
          interviewers.
        </p>
      </footer>
    </main>
  )
}
