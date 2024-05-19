"use client";
import { Button } from "@/components/ui/button";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { signOut } from "next-auth/react";

export default function HandleSignOut() {
  return (
    <Button
      onClick={() => signOut({ callbackUrl: "/" })}
      size="sm"
      className="ml-3 items-center gap-1 border border-white hover:bg-white hover:text-black"
    >
      Log Out
      <FontAwesomeIcon icon={faArrowRightFromBracket} />
    </Button>
  );
}
