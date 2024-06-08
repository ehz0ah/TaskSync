import { authOptions } from "@/lib/authOptions";
import { getServerSession } from "next-auth";
import dynamic from "next/dynamic";
import Alert from "../_parts/alert";
import React, { Suspense } from "react";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";
import HomeContent from "../_parts/idk";
import ShowError from "../_parts/error";

const Carousel = dynamic(() => import("../_parts/carousel"), { ssr: false });

export default async function Home() {
  const session = await getServerSession(authOptions);
  if (!session) {
    return <ShowError dir="/" />;
  }

  return (
    <div className="container mx-auto">
      {session && <Alert message={`Hello, ${session?.user?.name}`} />}
      <main className="flex flex-col items-center justify-center min-h-screen py-2">
        <h1 className="text-white text-4xl font-bold mb-8 pr-5">
          Welcome Back!
        </h1>
        <Suspense fallback={<div>Loading...</div>}>
          <Carousel />
        </Suspense>
      </main>
    </div>
  );
}

// return <HomeContent session={session} />;
