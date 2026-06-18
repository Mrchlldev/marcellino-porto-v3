import type { Metadata } from "next";
import { Poppins, Syne } from "next/font/google";
import { AosProvider } from "@/components/AosProvider";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { siteSettings } from "@/lib/settings/site";
import "aos/dist/aos.css";
import "./globals.css";

const syne = Syne({ subsets: ["latin"], variable: "--font-syne", weight: ["400", "500", "600", "700", "800"] });
const poppins = Poppins({ subsets: ["latin"], variable: "--font-poppins", weight: ["300", "400", "500", "600", "700", "800", "900"] });

export const metadata: Metadata = {
  title: siteSettings.title,
  description: siteSettings.description
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${syne.variable} ${poppins.variable} font-body`}>
        <AosProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </AosProvider>
      </body>
    </html>
  );
}
