"use client";
import { useSession } from 'next-auth/react'
import TaskList from "@/components/TaskList";

export default function Home() {

  const session = useSession();

  return (
    <>
      <h1 className="text-center text-5xl font-extrabold">{session?.data?.user?.name}</h1>
      <h1 className="text-center text-5xl font-extrabold">{session?.data?.user?.email}</h1>
      <TaskList/>
    </>
  );
}
