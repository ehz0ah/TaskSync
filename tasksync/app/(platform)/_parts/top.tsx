import Logo from "@/components/logo";
import { authOptions } from "@/lib/authOptions";
import { getServerSession } from "next-auth";
import HandleSignOut from "./handleSignOut";

export default async function Top() {
  const session = await getServerSession(authOptions);
  return (
    <header className="absolute top-0 left-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Logo textColour="text-white"/>
        <div className="text-black items-center justify-between font-bold">
          {session && (
            <>
              Hello, {session?.user?.name}
              <HandleSignOut />
            </>
          )}
        </div>
      </div>
    </header>
  );
}
