import Link from "next/link";
import { Moon } from "lucide-react";

import { LogoMark } from "@/components/shared/logo-mark";
import { navigation } from "@/data/navigation";
import { headerContent } from "@/data/sections";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 bg-canvas/95">
      <div className="container flex h-16 items-center justify-center gap-3 border-b border-border-muted">
        <LogoMark />
        <p className="text-lg font-semibold text-foreground sm:text-2xl">
          {headerContent.styleTitle}
        </p>
      </div>

      <div className="container flex h-14 items-center justify-between border-b border-border-muted">
        <Link
          href="#home"
          className="rounded-md font-mono text-lg font-semibold text-accent transition hover:text-accent-hover focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-canvas"
          aria-label="Md Imran Hasan Shuvo home"
        >
          {headerContent.logoText}
        </Link>

        <nav
          aria-label={headerContent.mainNavLabel}
          className="hidden items-center gap-5 md:flex"
        >
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-md px-1 py-2 text-xs font-medium text-foreground-muted transition hover:text-accent focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-canvas"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <a
          href="#contact"
          className="flex size-9 items-center justify-center rounded-md text-foreground-muted transition hover:bg-surface-inset hover:text-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-canvas"
          aria-label={headerContent.contactLabel}
        >
          <Moon className="size-4" aria-hidden="true" />
        </a>
      </div>
    </header>
  );
}
