"use client";
import { signOut } from "next-auth/react";

export default function Logout() {
  return (
    <button
      className="border-4 border-lightRed rounded-full px-2 m-2"
      onClick={() => signOut()}
    >
      Logout
    </button>
  );
}
