"use client";
import Header from "@/components/Header";
import Image from "next/image";
import { handleSignUp, handleLogin, handleLogout } from "./handlers/authHandlers";
import { userAuth } from "./contexts/authCtx";

export default function Home() {
  const userInfo = userAuth();

  function handleCHECK() {
    console.log(userInfo);
  }

  return (
    <div className="bg-black h-screen">
      <Header />
      {userInfo === false && <h1>LOADING.</h1>}

      <button className="min-w-44 bg-red-300 h-20" onClick={() => handleSignUp({email:'newAccount@test.io',password:'password'})}>
        CREATE
      </button>
      <button className="min-w-44 bg-red-300 h-20" onClick={() => handleLogin({email:'email@test.com',password:'password'})}>
        LÅGIN
      </button>
      <button className="min-w-44 bg-green-600-300 h-20" onClick={handleCHECK}>
        CHECK
      </button>
      <button
        className="min-w-44 bg-fuchsia-500-600-300 h-20"
        onClick={handleLogout}
      >
        UUUUUT
      </button>
    </div>
  );
}
