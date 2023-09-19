"use client";
// import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function SignOut() {
  const router = useRouter();

  return (
    <button
      className="text-stone-400 hover:text-stone-200 transition-all"
      onClick={() => router.push("/login")}
    >
      Sign me out!
    </button>
  );
}
