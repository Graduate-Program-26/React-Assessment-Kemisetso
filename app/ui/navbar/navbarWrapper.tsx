import { auth, signOut } from '@/app/auth'
import { Navbar } from './navbar'

export async function NavbarWrapper() {
  const session = await auth()

  async function handleSignOut() {
    'use server'
    await signOut({ redirectTo: '/' })
  }

  return (
    <Navbar
      userLogin={session?.user?.login ?? null}
      onSignOut={handleSignOut}
    />
  )
}
