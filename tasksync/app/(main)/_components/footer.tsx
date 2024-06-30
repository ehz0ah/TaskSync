import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-black w-full text-slate-500 text-center flex justify-between items-center">
      <p className="text-l ml-10 pt-11">
        Copyright &copy; 2024 TaskSync. All rights reserved.
      </p>
      <nav className="text-l hidden md:flex gap-x-16 mr-24 pr-20 pt-11">
        <Link href="/">Privacy</Link>
        <Link href="/">Terms of Use</Link>
        <Link href="/">Contact</Link>
      </nav>
      <p className="mr-10 text-l pt-11">Singapore | English</p>
    </footer>
  );
};

export default Footer;
