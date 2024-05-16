import Top from "./_parts/top";

const PlatformLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-gradient-to-r from-purple-400 via-teal-400 to-pink-400 h-full flex items-center w-full justify-center">
      <Top />
      <main>
        {children}
      </main>
      {/*<Footer />*/}
    </div>
  );
};

export default PlatformLayout;

// h-[calc(100%-2.75rem)] relative
// fixed top-0 z-[-2] h-[calc(100%-2.75rem)] w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_70%_at_50%_-10%,rgba(200,119,198,0.2),rgba(255,255,255,0))]
// h-[calc(100%-2.75rem)] pt-[15vh] pb-20 