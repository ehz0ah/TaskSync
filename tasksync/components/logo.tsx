import Link from "next/link"
import Image from "next/image"

// Logo component
export const Logo = () => {
    return (
        <Link href="/">
            <div className="hover:opacity-75 transition items-center hidden md:flex mr-0">  {/* hidden by default, visible on medium screens and above */}
                <Image 
                    src="/logo.svg"
                    alt="logo"
                    height={100}
                    width={100}
                />
                <p className="text-xl text-neutral-700 pb-2 mr-0">
                    TaskSync
                </p>
            </div>
        </Link>
    );
};

export default Logo;