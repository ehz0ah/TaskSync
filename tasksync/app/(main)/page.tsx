"use client";
import { Medal } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { signIn } from "next-auth/react";
import { WavyBackground } from "@/components/ui/wave";

// This is the main page component for the application.
// It displays a welcome message and a button to sign in with Google.
// The button links to the "/workspace" page after signing in.
export default function MainPage() {
  return (
    // The main page is a flex container with a column layout.
    <div className="flex items-center justify-center flex-col">
      <div className="flex items-center justify-center flex-col">
        {/* The welcome message is a container with a rounded background. */}
        <div className="relative rounded-2xl py-2 px-4">
          {/* The background gradient is positioned behind the container. */}
          <div
            className="absolute -inset-px bg-gradient-to-r from-yellow-400 to-pink-400 rounded-2xl"
            aria-hidden="true"
          ></div>
          {/* The background color is positioned in front of the container. */}
          <div
            className="absolute inset-0 bg-zinc-900 rounded-2xl"
            aria-hidden="true"
          />
          {/* The welcome message is displayed in the center of the container. */}
          <div className="relative text-white flex">
            {/* The Medal component displays a medal icon. */}
            <Medal className="h-6 w-6 mr-2 text-orange-500" />
            {/* The text displayed is "No. 1 Collaborative Platform". */}
            No. 1 Collaborative Platform
          </div>
        </div>
        {/* The text below the welcome message is displayed in a paragraph tag. */}
        <div>
          {/* The text is styled with a gradient background. */}
          <p className="text-transparent mt-7 ml-5 text-3xl md:text-5xl bg-gradient-to-r from-yellow-600 to-pink-600 bg-clip-text px-4 p-2 rounded-md pb-4 w-fit font-extrabold">
            Empowering Collaboration, One Sync at a Time
          </p>
          {/* The text below the heading is displayed in a smaller font and centered. */}
          <p className="text-sm md:text-xl text-neutral-300 mt-5 max-w-xs md:max-w-2xl text-center mx-auto">
            Unlock Your Potential with Effortless Task Management Now.
          </p>
        </div>
      </div>
      {/* The sign in button is a Button component with a Google sign in action. */}
      <Button
        onClick={() => signIn("google", { callbackUrl: "/workspace" })}
        className="mt-8 outline rounded-lg outline-violet-300 hover:bg-white hover:text-black hover:border-transparent"
        size="sm"
      >
        <div>Get TaskSync For Free</div>
      </Button>

      {/* The image below the button is displayed using the Image component. */}
      <div className="mt-10">
        <Image src="/home2.svg" alt="home2" width={"400"} height={"600"} />
      </div>
    </div>
  );
}
