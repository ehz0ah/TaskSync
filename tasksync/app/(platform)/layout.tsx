const PlatformLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full flex justify-between items-center bg-black">
      <main>{children}</main>
    </div>
  );
};

export default PlatformLayout;
