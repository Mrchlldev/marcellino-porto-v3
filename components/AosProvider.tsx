"use client";

import AOS from "aos";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export function AosProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    AOS.init({ duration: 850, once: false, offset: 80, easing: "ease-out-cubic" });
  }, []);

  useEffect(() => {
    const timeout = window.setTimeout(() => AOS.refreshHard(), 120);
    return () => window.clearTimeout(timeout);
  }, [pathname]);

  return <>{children}</>;
}
