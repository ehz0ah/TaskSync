import { Header } from "./_components/header";
import { Footer } from "./_components/footer";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full">
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      <Header />
      <main className="pt-40 pb-20 ">{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
