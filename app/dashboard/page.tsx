import { auth } from "@/app/auth";
import { redirect } from "next/navigation";
import { getProfile } from "../lib/github";
import { ProfileCard } from "../ui/profileCard";

export default async function Page() {
    const session = await auth()

  if (!session?.user) {
    redirect("/")
  }

  const username = session.user.login
  const profile = await getProfile(username)

  return (
    <main className="min-h-screen p-8">
      <ProfileCard profile={profile} />
    </main>
  );
}
