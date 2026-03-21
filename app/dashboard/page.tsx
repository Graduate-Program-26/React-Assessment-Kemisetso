import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { getProfile } from "../lib/github";

export default async function Page() {
    const session = await auth()

  if (!session?.user) {
    redirect("/")
  }

  const username = session.user.name as string
  const profile = await getProfile(username)

  return (
    <main className="min-h-screen p-8">
      <h1 className="text-2xl font-bold">`{profile.name}</h1>
      <p className="text-gray-500">{profile.login}</p>
      <p>{profile.bio}</p>
      <p>Followers: {profile.followers}</p>
      <p>Following: {profile.following}</p>
      <p>Public repos: {profile.public_repos}</p>
    </main>
  );
}
