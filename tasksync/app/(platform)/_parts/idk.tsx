"use client";
import Alert from "../_parts/alert";
import React from "react";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const Carousel = dynamic(() => import("../_parts/carousel"), { ssr: false });

export default function HomeContent({ session }: { session: any }) {
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    const alertShown = localStorage.getItem("alertShown");

    if (!alertShown && session) {
      setShowAlert(true);
      localStorage.setItem("alertShown", "true");
    }
  }, [session]);

  return (
    <div className="container mx-auto">
      {showAlert && <Alert message={`Hello, ${session?.user?.name}`} />}
      <main className="flex flex-col items-center justify-center min-h-screen py-2">
        <h1 className="text-white text-4xl font-bold mb-8 pr-5">
          Welcome Back!
        </h1>
        <Carousel />
      </main>
    </div>
  );
}

// Not ready to be used.
