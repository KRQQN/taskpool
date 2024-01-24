"use client";
import { signIn } from "next-auth/react";

export default function Login() {
  return (
    <button
      className="border-4 border-lightRed rounded-full px-2 m-2"
      onClick={() => signIn("google")}
    >
      Login
    </button>
  );
}
