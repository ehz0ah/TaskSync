import { authOptions } from "@/lib/authOptions";
import { getServerSession } from "next-auth";
import dynamic from "next/dynamic";
import Alert from "../_parts/alert";
import React from "react";
import { redirect } from "next/navigation";

const Carousel = dynamic(() => import("../_parts/carousel"), { ssr: false });

export default async function Home() {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/")
  }
  return (
    <div className="container mx-auto">
      {session && <Alert message={`Hello, ${session?.user?.name}`} />}
      <main className="flex flex-col items-center justify-center min-h-screen py-2">
        <h1 className="text-white text-4xl font-bold mb-8 pr-5">Welcome Back!</h1>
        <Carousel />
      </main>
    </div>
  );
}
