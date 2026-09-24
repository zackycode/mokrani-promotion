"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const STORAGE_KEY = "mokrani-cookies";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(STORAGE_KEY)) setVisible(true);
    } catch {
      setVisible(true);
    }
  }, []);

  const decide = (accepted: boolean) => {
    try {
      localStorage.setItem(STORAGE_KEY, accepted ? "accept" : "decline");
    } catch {
      /* ignore */
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Gestion des cookies"
      className="fixed inset-x-0 bottom-0 z-[60] p-4"
    >
      <div className="mx-auto flex max-w-4xl flex-col gap-4 rounded-2xl border border-ink-100 bg-white p-5 shadow-2xl sm:flex-row sm:items-center">
        <div className="flex-1">
          <p className="text-sm leading-6 text-ink-800">
            Nous utilisons des cookies pour améliorer votre expérience de navigation,
            analyser le trafic du site et personnaliser le contenu, conformément à la loi
            algérienne 18-07 et au règlement européen GDPR.{" "}
            <Link
              href="/politique-de-confidentialite"
              className="font-medium text-gold-600 underline underline-offset-2"
            >
              En savoir plus
            </Link>
          </p>
        </div>
        <div className="flex shrink-0 gap-3">
          <button
            type="button"
            onClick={() => decide(false)}
            className="rounded-full border border-ink-300 px-5 py-2.5 text-sm font-medium text-ink-700 transition-colors hover:bg-ink-100"
          >
            Refuser
          </button>
          <button
            type="button"
            onClick={() => decide(true)}
            className="rounded-full bg-ink-950 px-5 py-2.5 text-sm font-semibold text-cream transition-colors hover:bg-gold-600"
          >
            Tout accepter
          </button>
        </div>
      </div>
    </div>
  );
}