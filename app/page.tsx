import { signIn } from "@/app/auth";
export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <div className="flex flex-col items-center gap-6 text-center">
        <nav>
          <div>GitDash</div>
          <span>Personal Dashboard</span>
        </nav>

        <form
          action={async () => {
            "use server";
            await signIn("github", { redirectTo: "/dashboard" });
          }}
        >
          <button
            type="submit"
            className="bg-gray-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-700 transition-colors"
          >
            {" "}
            Sign in with Github
          </button>
        </form>
      </div>
    </main>
  );
}
