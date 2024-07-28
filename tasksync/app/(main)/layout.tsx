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
