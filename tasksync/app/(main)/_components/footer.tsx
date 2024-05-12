import Link from "next/link";

export const Footer = () => {
    return (
        <footer className="fixed bottom-0 w-full text-slate-500 text-center py-8 flex justify-between items-center">
        <p className="text-sm ml-10">
            Copyright &copy; 2024 TaskSync. All rights reserved.
        </p>
        <nav className="text-l hidden md:flex gap-x-16 mr-24 pr-10">
            <Link href="/privacy">Privacy</Link>
            <Link href="/termsofuse">Terms of Use</Link>
            <Link href="/contact">Contact</Link>
        </nav>
        <p className="mr-10 text-l">Singapore | English</p>
        </footer>
    );
};

export default Footer;
