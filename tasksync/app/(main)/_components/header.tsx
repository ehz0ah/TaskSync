import Link from 'next/link';
import Logo from '@/components/logo';
import { Button } from '@/components/ui/button';

export const Header = () => {
    return (
        <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
            <div className="container mx-auto flex justify-between items-center">
                <Logo />
                <nav className="text-xl hidden md:flex gap-x-16 mr-24 uppercase">
                    <Link href="/about">
                        About
                    </Link>
                    <Link href="/pricing">
                        Pricing
                    </Link>
                    <Link href="/features">
                        Features
                    </Link>
                </nav>
                <Button size="sm" asChild>
                    <Link href="/sign-up">
                        Login
                    </Link>
                </Button>
            </div>
        </header>
    );
};