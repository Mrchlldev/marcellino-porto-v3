import { siteSettings } from "@/lib/settings/site";

export function Footer() {
  return (
    <footer className="border-t-4 border-black bg-[#171717] px-5 py-10 text-[#fff7df]">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="font-title text-3xl font-black">{siteSettings.name}</h2>
          <p className="max-w-xl text-sm opacity-80">{siteSettings.description}</p>
        </div>
        <p className="text-sm opacity-80">© 2026 {siteSettings.name}. All rights reserved.</p>
      </div>
    </footer>
  );
}
