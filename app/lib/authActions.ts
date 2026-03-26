// app/actions/authActions.ts
'use server'

import { signIn } from '@/app/auth'

export async function signInWithGitHub() {
  await signIn('github', { redirectTo: '/dashboard' })
}
