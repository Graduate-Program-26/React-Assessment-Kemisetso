'use client'
import { signInWithGitHub } from './lib/authActions'
import { Button, Chip } from '@heroui/react'

function GitHubIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 16 16" fill="currentColor">
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
    </svg>
  )
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f9f7ff]">
      <nav className="flex items-center justify-between px-12 py-5 bg-white/80 backdrop-blur-md border-b border-purple-100">
        <div className="flex items-center gap-2 font-semibold text-[15px]">
          <div className="w-2 h-2 rounded-full bg-purple-600" />
          Github dashboard
        </div>
        <Chip size="sm" className="bg-purple-50 text-purple-600">
          Personal Dashboard
        </Chip>
      </nav>

      <section className="flex flex-col items-center text-center px-12 pt-20 pb-16 gap-6">
        <Chip
          size="sm"
          className="bg-purple-50 text-purple-400 border border-purple-200 uppercase tracking-widest text-[11px]"
        >
          Next.js App Router · GitHub OAuth · Typescript · HeroUI · Vercel
          Deployment
        </Chip>

        <h1 className="text-5xl font-serif font-normal leading-tight max-w-xl text-[#1a1523]">
          GitHub Personal Dashboard Assessment,{' '}
          <em className="italic text-purple-600">Grads 2026</em>
        </h1>

        <p className="text-base text-purple-900/50 max-w-md leading-relaxed">
          Demonstrating real GitHub activity and top work to recruiters and
          interviewers.
        </p>

        <div className="flex flex-col items-center gap-3 mt-2">
          <Button
            type="submit"
            onClick={signInWithGitHub}
            size="lg"
            className="bg-purple-600 text-white font-medium px-8 shadow-lg shadow-purple-200"
            startContent={<GitHubIcon />}
          >
            Sign in with Github
          </Button>
          <p className="text-xs text-purple-300">
            View Profile· Search Users · See stats
          </p>
        </div>
      </section>

      <div className="grid grid-cols-3 bg-blue gap-4"></div>
    </main>
  )
}
