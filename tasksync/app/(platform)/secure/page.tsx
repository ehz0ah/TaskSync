import dynamic from 'next/dynamic';

const Carousel = dynamic(() => import('../_parts/carousel'), { ssr: false });

export default function Home() {
  return (
    <div className="container mx-auto">
      <main className="flex flex-col items-center justify-center min-h-screen py-2">
        <h1 className="text-4xl font-bold mb-8 pr-5">Welcome Back!</h1>
        <Carousel />
      </main>
    </div>
  );
}

