import Logo from "@/components/logo";
import { authOptions } from "@/lib/authOptions";
import { getServerSession } from "next-auth";
import HandleSignOut from "./handleSignOut";
import ShowError from "./error";

export default async function Top() {
  const session = await getServerSession(authOptions);
  if (!session) {
    return <ShowError dir="/" />;
  }

  return (
    <header className="absolute top-0 left-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Logo textColour="text-white" dir="/workspace" />
        <div className="text-white items-center justify-between font-bold">
          Hello, {session?.user?.name}
          <HandleSignOut />
        </div>
      </div>
    </header>
  );
}
