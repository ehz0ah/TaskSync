"use client";
import { Medal } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { signIn } from "next-auth/react";

export default function MainPage() {
  return (
    <div className="flex items-center justify-center flex-col">
      <div className="flex items-center justify-center flex-col">
        <div className="relative rounded-2xl py-2 px-4">
          <div
            className="absolute -inset-px bg-gradient-to-r from-yellow-400 to-pink-400 rounded-2xl"
            aria-hidden="true"
          ></div>
          <div
            className="absolute inset-0 bg-zinc-900 rounded-2xl"
            aria-hidden="true"
          />
          <div className="relative text-white flex">
            <Medal className="h-6 w-6 mr-2 text-orange-500" />
            No. 1 Collaborative Platform
          </div>
        </div>
        <div>
          <p className="text-transparent mt-7 ml-5 text-3xl md:text-5xl bg-gradient-to-r from-yellow-600 to-pink-600 bg-clip-text px-4 p-2 rounded-md pb-4 w-fit font-extrabold">
            Empowering Collaboration, One Sync at a Time
          </p>
          <p className="text-sm md:text-xl text-neutral-400 mt-8 max-w-xs md:max-w-2xl text-center mx-auto">
            Unlock Your Potential with Effortless Task Management Now.
          </p>
        </div>
      </div>
      <Button
        onClick={() => signIn("google", { callbackUrl: "/secure" })}
        className="mt-8 "
        size="sm"
      >
        <div>Get TaskSync For Free</div>
      </Button>

      <div className="mt-10">
        <Image src="/home2.svg" alt="home2" width={"400"} height={"600"} />
      </div>
    </div>
  );
}
