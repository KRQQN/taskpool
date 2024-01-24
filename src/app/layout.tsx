import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import AuthProvider from "@/providers/SessionProvider";
import Home from "./page";
import Header from "@/components/Header";
import NewTaskForm from "@/components/CreateNewTask/NewTaskForm";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Taskpool",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);

  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider session={session}>
          <Header />
          {!session ? (
            <NewTaskForm/>
          ) : (
            <Home />
          )}
        </AuthProvider>
      </body>
    </html>
  );
}
