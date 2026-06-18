import Link from "next/link";
import { siteSettings } from "@/lib/settings/site";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b-4 border-black bg-[#fff7df]/90 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
        <Link href="/" className="font-title text-2xl font-black tracking-tight">
          {siteSettings.name}
        </Link>
        <div className="hidden items-center gap-2 md:flex">
          {siteSettings.navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="rounded-full border-2 border-black bg-white px-4 py-2 text-sm font-bold shadow-retroSm transition hover:-translate-y-1 hover:bg-[#b8f26d]">
              {link.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
