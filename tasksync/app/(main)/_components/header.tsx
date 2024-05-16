"use client"
import Link from "next/link";
import Logo from "@/components/logo";
import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";

export const Header = () => {
  return (
    <header className="absolute top-0 left-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Logo />
        <nav className="hover:opacity-90 text-md hidden md:flex gap-x-16 mr-24 text-white font-medium">
          <Link href="/about">About</Link>
          <Link href="/pricing">Pricing</Link>
          <Link href="/features">Features</Link>
        </nav>
        <Button 
        onClick={() => signIn("google", { callbackUrl: "/secure" })}
        size="sm">
          Login
          {/*<Link href="/secure">Login</Link>*/}
        </Button>
      </div>
    </header>
  );
};
