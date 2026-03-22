import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import type { NextAuthConfig } from "next-auth"

const config = {
  providers: [GitHub],
  callbacks: {
    jwt({ token, profile }) {
      // profile is only present on the very first sign-in
      // grab the GitHub login (username) and stash it on the token
      if (profile) {
        token.login = profile.login as string
      }
      return token
    },
    session({ session, token }) {
      // surface the login on every auth() call
      if (token.login) {
        session.user.login = token.login as string
      }
      return session
    },
  },
} satisfies NextAuthConfig


export const { handlers, auth, signIn, signOut } = NextAuth(config)
