import Link from "next/link";
import Image from "next/image";

// Logo component
export const Logo = () => {
  return (
    <Link href="/homepage">
      <div className="transition items-center hidden md:flex mr-0">
        {/* hidden by default, visible on medium screens and above */}
        <Image src="/logo2.svg" alt="logo2" height={70} width={70} />
        <p className="text-xl text-white pb-2 ml-5 mt-2 font-semibold">
          TaskSync
        </p>
      </div>
    </Link>
  );
};

export default Logo;
