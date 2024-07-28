import Top from "./_parts/top";

const PlatformLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    // <div style={{ backgroundImage: `url(${'/Ronaldo.jpg'})` }}>
    <div className="fixed top-0 z-0 h-full w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_70%_at_50%_-10%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
      {/* <div className="bg-black h-full"> */}
      <Top />
      {children}
      {/*<Footer />*/}
    </div>
    // </div>
  );
};

export default PlatformLayout;
