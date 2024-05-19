import { Header } from "./_components/header";
import { Footer } from "./_components/footer";
import { WavyBackground } from "@/components/ui/wave";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-screen relative">
      <Header />
      <WavyBackground>
        <main className="pt-14">{children}</main>
      </WavyBackground>
      <Footer />
    </div>
  );
};

export default MainLayout;

// flex flex-col min-h-screen
// className="h-[calc(100%-2.75rem)] relative
// className="fixed top-0 z-[-2] h-[calc(100%-2.75rem)] w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_70%_at_50%_-10%,rgba(200,119,198,0.2),rgba(255,255,255,0))]"
// <div className="fixed top-0 z-[-2] h-[calc(100%-2.75rem)] w-screen"></div>
// h-[calc(100%-2.75rem)] pb-20 pt-[15vh]
