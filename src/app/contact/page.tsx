import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";
import { mapIcons } from "@/components/icons";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contactez MOKRANI Promotion : rendez-vous en showroom à El Achour (Alger), WhatsApp, téléphone ou formulaire. Réponse rapide pour vos projets d'achat d'appartement.",
  alternates: { canonical: "/contact" },
};

const contactCards = [
  {
    icon: "phone",
    label: "Téléphone",
    value: siteConfig.phone,
    href: `tel:${siteConfig.phoneHref}`,
  },
  {
    icon: "whatsapp",
    label: "WhatsApp / Viber",
    value: siteConfig.phone,
    href: `https://wa.me/${siteConfig.whatsapp}`,
  },
  {
    icon: "mail",
    label: "E-mail",
    value: siteConfig.email,
    href: `mailto:${siteConfig.emailHref}`,
  },
] as const;

export default function ContactPage() {
  return (
    <>
      <section className="border-b border-ink-100 bg-cream">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-gold-600">
            Contact
          </span>
          <h1 className="mt-4 font-serif text-4xl font-bold text-ink-950 sm:text-5xl">
            Parlons de votre projet
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-ink-500 sm:text-lg">
            Prenez rendez-vous dans notre showroom, écrivez-nous sur WhatsApp ou
            déposez votre demande : notre équipe vous répond sous 24h ouvrées.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="space-y-6">
            {contactCards.map((c) => {
              const Icon = mapIcons[c.icon];
              return (
                <Reveal key={c.label}>
                  <a
                    href={c.href}
                    target={c.href.startsWith("http") ? "_blank" : undefined}
                    rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="flex items-start gap-4 rounded-2xl border border-ink-100 bg-white p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-gold-300 hover:shadow-lg"
                  >
                    <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gold-100 text-gold-700">
                      <Icon className="h-4 w-4" />
                    </span>
                    <span>
                      <span className="text-xs font-bold uppercase tracking-wider text-ink-400">
                        {c.label}
                      </span>
                      <span className="mt-1 block font-serif text-lg font-bold text-ink-950">
                        {c.value}
                      </span>
                    </span>
                  </a>
                </Reveal>
              );
            })}

            <Reveal>
              <div className="rounded-2xl bg-ink-950 p-6 text-cream">
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-gold-400">
                  Showroom commercial
                </p>
                <p className="mt-3 font-serif text-lg font-bold">
                  {siteConfig.addresses.commercial}
                </p>
                <p className="mt-4 text-sm leading-6 text-cream/70">
                  {siteConfig.hours}
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal delay={120}>
            <ContactForm />
          </Reveal>
        </div>
      </section>

      <section className="border-t border-ink-100 bg-cream/60">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-3xl">
            <Reveal>
              <iframe
                title="Showroom MOKRANI Promotion — El Achour, Alger"
                src="https://www.openstreetmap.org/export/embed.html?bbox=2.98%2C36.71%2C3.06%2C36.77&layer=mapnik&marker=36.74%2C3.02"
                className="h-[420px] w-full border-0"
                loading="lazy"
              />
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}