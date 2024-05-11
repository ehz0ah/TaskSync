import { Medal } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const MainPage = () => {
    return (
        <div className="flex items-center justify-center flex-col">
            <div className="flex items-center justify-center flex-col">
                <div className="mb-4 flex items-center border shadow-sm p-4 bg-sky-200 rounded-full uppercase" >
                    <Medal className="h-6 w-6 mr-2"/>
                        No 1 collaborative platform
                </div>
                <h1 className="text-4xl font-bold text-center text-slate-900 mb-6">
                    Welcome to TaskSync
                </h1>
                <div>   
                    <p className="text-3xl md:text-5xl bg-gradient-to-r from-yellow-600 to-pink-600 text-white px-4 p-2 rounded-md pb-4 w-fit">
                        Empowering Collaboration, One Sync at a Time
                    </p>
                    <p className="text-sm md:text-xl text-neutral-400 mt-4 max-w-xs md:max-w-2xl text-center mx-auto">
                        Unlock Your Potential with Effortless Task Management Now.
                    </p>
                </div>
            </div>
            <Button className="mt-6" size="sm" asChild>
                <Link href="/sign-up">
                    Get TaskSync For Free
                </Link>
            </Button>
        </div>
    );
};

export default MainPage;