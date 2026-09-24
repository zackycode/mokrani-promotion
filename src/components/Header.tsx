"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig, navLinks } from "@/data/site";
import Logo from "./Logo";
import {
  PhoneIcon,
  MailIcon,
  WhatsappIcon,
  MenuIcon,
  CloseIcon,
} from "./icons";

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50">
      <div className="bg-ink-950 text-cream">
        <div className="mx-auto flex h-10 max-w-7xl items-center justify-between gap-4 px-4 text-xs sm:px-6 lg:px-8">
          <div className="flex items-center gap-5">
            <a
              href={`tel:${siteConfig.phoneHref}`}
              className="flex items-center gap-1.5 text-cream/80 transition-colors hover:text-gold-400"
            >
              <PhoneIcon className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">{siteConfig.phone}</span>
              <span className="sm:hidden">Appeler</span>
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              className="hidden items-center gap-1.5 text-cream/80 transition-colors hover:text-gold-400 md:flex"
            >
              <MailIcon className="h-3.5 w-3.5" />
              {siteConfig.email}
            </a>
          </div>
          <div className="flex items-center gap-4">
            <span className="hidden text-cream/60 lg:inline">{siteConfig.hours}</span>
            <a
              href={`https://wa.me/${siteConfig.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-gold-400 transition-colors hover:text-gold-300"
            >
              <WhatsappIcon className="h-3.5 w-3.5" />
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      <div className="border-b border-ink-100 bg-cream/95 backdrop-blur supports-[backdrop-filter]:bg-cream/85">
        <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <Logo />

          <nav className="hidden items-center gap-8 lg:flex" aria-label="Navigation principale">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  isActive(link.href)
                    ? "text-gold-600"
                    : "text-ink-700 hover:text-gold-600"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="hidden rounded-full bg-ink-950 px-5 py-2.5 text-sm font-semibold text-cream transition-colors hover:bg-gold-600 sm:inline-flex"
            >
              Prendre rendez-vous
            </Link>
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-ink-200 text-ink-800 lg:hidden"
              aria-label="Ouvrir le menu"
            >
              <MenuIcon className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-ink-950/60 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />
          <div className="absolute top-0 right-0 flex h-full w-72 flex-col bg-cream shadow-xl">
            <div className="flex items-center justify-between border-b border-ink-100 px-6 py-4">
              <Logo size="sm" />
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full text-ink-800 hover:bg-ink-100"
                aria-label="Fermer le menu"
              >
                <CloseIcon className="h-5 w-5" />
              </button>
            </div>
            <nav className="flex flex-col px-2 py-4" aria-label="Navigation mobile">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`rounded-lg px-4 py-3 text-base font-medium transition-colors ${
                    isActive(link.href)
                      ? "bg-gold-100 text-gold-700"
                      : "text-ink-800 hover:bg-ink-100"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="mt-auto border-t border-ink-100 p-6">
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="flex w-full items-center justify-center rounded-full bg-ink-950 px-5 py-3 text-sm font-semibold text-cream transition-colors hover:bg-gold-600"
              >
                Prendre rendez-vous
              </Link>
              <a
                href={`https://wa.me/${siteConfig.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 flex w-full items-center justify-center gap-2 rounded-full border border-gold-400 px-5 py-3 text-sm font-semibold text-gold-700"
              >
                <WhatsappIcon className="h-4 w-4" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}