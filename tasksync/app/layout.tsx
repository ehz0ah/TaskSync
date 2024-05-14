import type { Metadata } from "next";
import { Bitter } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/config/site";

const inter = Bitter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,  // Workspace | TaskSync shortcut
  },
  description: siteConfig.description,
  icons: [
    {
      url: "/logo2.svg",
      href: "/logo2.svg",
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
