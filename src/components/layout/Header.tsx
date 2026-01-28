"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { navLinks, companyInfo } from "@/lib/data";
import { cn } from "@/lib/utils";

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-primary">
      {/* Top bar avec téléphone */}
      <div className="border-b border-primary-foreground/10 bg-primary">
        <div className="container mx-auto flex items-center justify-between px-4 py-2 text-sm">
          <div className="hidden text-primary-foreground/70 md:block">
            Artisan certifié RGE - Assurance décennale
          </div>
          <a
            href={`tel:${companyInfo.phone.replace(/\s/g, "")}`}
            className="flex items-center gap-2 font-medium text-primary-foreground"
          >
            <Phone className="h-4 w-4" />
            {companyInfo.phone}
          </a>
        </div>
      </div>

      {/* Navigation principale */}
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center border-2 border-accent bg-accent">
            <span className="text-xl font-bold text-white">P</span>
          </div>
          <div>
            <span className="text-xl font-bold text-primary-foreground">PLOMBIPRO</span>
            <span className="hidden text-xs text-primary-foreground/60 md:block">
              Plomberie & Chauffage
            </span>
          </div>
        </Link>

        {/* Navigation desktop */}
        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-medium uppercase tracking-wide transition-colors",
                pathname === link.href
                  ? "text-accent"
                  : "text-primary-foreground/80 hover:text-accent"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA Urgence desktop */}
        <div className="hidden items-center gap-4 lg:flex">
          <Button
            asChild
            className="border-2 border-accent bg-accent px-6 font-semibold uppercase tracking-wide text-white hover:bg-accent/90"
          >
            <Link href="/urgence">
              Urgence 24/7
            </Link>
          </Button>
        </div>

        {/* Menu mobile */}
        <div className="flex items-center gap-3 lg:hidden">
          <Button
            asChild
            size="sm"
            className="border-2 border-accent bg-accent font-semibold text-white hover:bg-accent/90"
          >
            <a href={`tel:${companyInfo.phone.replace(/\s/g, "")}`}>
              <Phone className="mr-1 h-4 w-4" />
              Appeler
            </a>
          </Button>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-primary-foreground">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] border-l-0 bg-primary p-0">
              {/* Header du menu */}
              <div className="flex items-center gap-3 border-b border-primary-foreground/10 px-6 py-4">
                <div className="flex h-10 w-10 items-center justify-center bg-accent">
                  <span className="text-xl font-bold text-white">P</span>
                </div>
                <div>
                  <SheetTitle className="text-lg font-bold text-primary-foreground">
                    PLOMBIPRO
                  </SheetTitle>
                  <span className="text-xs text-primary-foreground/60">Plomberie & Chauffage</span>
                </div>
              </div>

              {/* Navigation */}
              <nav className="flex flex-col px-4 py-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "rounded px-4 py-3 text-sm font-medium uppercase tracking-wide transition-colors",
                      pathname === link.href
                        ? "bg-accent/20 text-accent"
                        : "text-primary-foreground/80 hover:bg-primary-foreground/5 hover:text-accent"
                    )}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>

              {/* CTA Urgence */}
              <div className="mt-auto border-t border-primary-foreground/10 p-4">
                <Button
                  asChild
                  className="w-full border-2 border-accent bg-accent py-6 font-semibold uppercase tracking-wide text-white hover:bg-accent/90"
                >
                  <Link href="/urgence" onClick={() => setIsOpen(false)}>
                    <Phone className="mr-2 h-4 w-4" />
                    Urgence 24/7
                  </Link>
                </Button>
                <a
                  href={`tel:${companyInfo.phone.replace(/\s/g, "")}`}
                  className="mt-3 flex items-center justify-center gap-2 text-sm text-primary-foreground/70"
                >
                  <Phone className="h-4 w-4" />
                  {companyInfo.phone}
                </a>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
