import { signIn } from "@/app/auth";

export default function Home() {
  return (
    <main>
      <h1 className="text-3xl font-bold text-pink-500">Github dashboard</h1>

      <form
        action={async () => {
          "use server";
          await signIn("github", { redirectTo: "/dashboard" });
        }}
      >
        <button type="submit"> Sign in with Github</button>
      </form>
    </main>
  );
}
