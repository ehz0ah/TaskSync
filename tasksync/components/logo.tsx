import Link from "next/link";
import Image from "next/image";
import { getClient } from "@/app/(platform)/_info/clientInfo";

// Logo component
export const Logo = async ({ textColour = "text-black", dir = "/" }) => {
  //const session = await getClient();
  return (
    <Link href={dir}>
      <div className="transition items-center hidden md:flex mr-0">
        {/* hidden by default, visible on medium screens and above */}
        <Image src="/logo2.svg" alt="logo2" height={70} width={70} />
        <p className={`text-xl ${textColour} pb-2 ml-5 mt-2 font-semibold`}>
          TaskSync
        </p>
      </div>
    </Link>
  );
};

export default Logo;

// {session ? '/workspace' : '/'}
