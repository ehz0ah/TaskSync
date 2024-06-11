"use client"
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ShowError({message = "Oops! Something went wrong!" , dir = "/workspace"}) {
    return (
        <div className="h-full place-content-center">
        <div className="flex flex-col gap-3 align-center text-center text-white font-semibold">
          {message}
          <Button className=" border rounded-full self-center hover:text-indigo-400 hover:bg-white w-min">
            <Link href={dir}>Back to Home</Link>
          </Button>
        </div>
      </div>
    );
}