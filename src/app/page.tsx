import type { Metadata } from "next";
import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";
import ProjectVisual from "@/components/ProjectVisual";
import Reveal from "@/components/Reveal";
import {
  ArrowRightIcon,
  CheckIcon,
  MapPinIcon,
  WhatsappIcon,
  ShieldIcon,
  GemIcon,
  HomeIcon,
  BuildingIcon,
  ChevronDownIcon,
} from "@/components/icons";
import { projects, featuredProjects, listLocalites, listTypologies, getProject } from "@/data/projects";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.nameFull} — Promoteur immobilier haut standing à Alger`,
    template: `%s | ${siteConfig.nameFull}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.seo.keywords,
  alternates: { canonical: "/" },
  openGraph: {
    title: `${siteConfig.nameFull} — Promoteur immobilier haut standing à Alger`,
    description: siteConfig.description,
    url: siteConfig.url,
    locale: "fr_FR",
    type: "website",
  },
};

const stats = [
  { label: "Années d'expérience", value: siteConfig.stats.experience },
  { label: "Résidences livrées", value: siteConfig.stats.delivered },
  { label: "Communes desservies", value: siteConfig.stats.communes },
  { label: "Typologies", value: siteConfig.stats.typologies },
];

const processus = [
  {
    title: "01 — Découverte",
    text: "Découvrez nos résidences et recevez la documentation détaillée de chaque programme.",
  },
  {
    title: "02 — Visite du showroom",
    text: "Rencontrez nos conseillers au showroom d'El Achour et visitez l'appartement témoin.",
  },
  {
    title: "03 — Achat accompagné",
    text: "Nous vous accompagnons de la sélection jusqu'à la remise des clés, en toute transparence.",
  },
];

export default function HomePage() {
  const featured = featuredProjects();
  const localites = listLocalites();
  const typologies = listTypologies();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.nameFull,
    url: siteConfig.url,
    logo: `${siteConfig.url}/logo.png`,
    sameAs: [
      siteConfig.social.facebook,
      siteConfig.social.instagram,
      siteConfig.social.linkedin,
      siteConfig.social.youtube,
      siteConfig.social.tiktok,
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: siteConfig.phoneHref,
      contactType: "sales",
      email: siteConfig.emailHref,
      availableLanguage: ["fr"],
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Alger",
      addressCountry: "DZ",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* HERO */}
      <section className="relative overflow-hidden bg-ink-950">
        <div
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            background:
              "radial-gradient(60% 60% at 20% 10%, rgba(187,139,69,.35), transparent 60%), radial-gradient(50% 50% at 85% 90%, rgba(187,139,69,.18), transparent 55%)",
          }}
        />
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-gold-300/40 bg-gold-300/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.3em] text-gold-200">
                <GemIcon className="h-3.5 w-3.5" />
                Promoteur haut standing
              </span>
              <h1 className="mt-6 font-serif text-4xl font-bold leading-tight text-cream sm:text-5xl lg:text-6xl">
                Des résidences qui reflètent{" "}
                <span className="text-gold-400">votre exigence</span>
              </h1>
              <p className="mt-6 max-w-xl text-base leading-7 text-cream/80 sm:text-lg">
                {siteConfig.tagline}. Appartements haut standing du F2 au F5
                dans les communes les plus prisées d&apos;Alger, accompagnement
                complet jusqu&apos;à la remise des clés.
              </p>
              <div className="mt-9 flex flex-wrap gap-4">
                <Link
                  href="/projets"
                  className="inline-flex items-center gap-2 rounded-full bg-gold-500 px-7 py-3.5 text-sm font-bold text-ink-950 transition-colors hover:bg-gold-400"
                >
                  Découvrir nos résidences
                  <ArrowRightIcon className="h-4 w-4" />
                </Link>
                <a
                  href={`https://wa.me/${siteConfig.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-cream/25 px-7 py-3.5 text-sm font-bold text-cream transition-colors hover:border-gold-300 hover:text-gold-300"
                >
                  <WhatsappIcon className="h-4 w-4" />
                  WhatsApp
                </a>
              </div>
            </Reveal>

            <Reveal delay={150}>
              <div className="rounded-3xl border border-cream/15 bg-cream/5 p-6 backdrop-blur">
                <div className="grid grid-cols-2 gap-4">
                  {stats.map((s) => (
                    <div
                      key={s.label}
                      className="rounded-2xl border border-cream/10 bg-white/5 px-5 py-6 text-center"
                    >
                      <p className="font-serif text-3xl font-bold text-gold-400">
                        {s.value}
                      </p>
                      <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-cream/70">
                        {s.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
        <ChevronDownIcon className="absolute bottom-6 left-1/2 hidden h-6 w-6 -translate-x-1/2 animate-bounce text-cream/40 sm:block" />
      </section>

      {/* À PROPOS */}
      <section id="apropos" className="border-b border-ink-100 bg-cream">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <Reveal>
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-gold-600">
                À propos
              </span>
              <h2 className="mt-4 font-serif text-3xl font-bold text-ink-950 sm:text-4xl">
                L&apos;exigence fait la différence
              </h2>
              <div className="mt-6 space-y-4 text-base leading-7 text-ink-500">
                <p>
                  {siteConfig.nameFull} est un promoteur immobilier privé basé à
                  Alger, fort de {siteConfig.stats.experience} d&apos;expérience
                  dans la promotion de résidences haut standing.
                </p>
                <p>
                  Nous concevons, construisons et livrons des appartements
                  modernes, lumineux et parfaitement finis, en intégrant
                  matériaux nobles, sécurité et espaces de vie pensés pour
                  durer.
                </p>
              </div>
              <ul className="mt-8 space-y-3">
                {[
                  "Matériaux haut de gamme et finitions soignées",
                  "Accompagnement administratif et financier complet",
                  "Showroom et rendez-vous WhatsApp en 24h ouvrées",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gold-100 text-gold-700">
                      <CheckIcon className="h-3.5 w-3.5" />
                    </span>
                    <span className="text-sm font-medium text-ink-700">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={150}>
              <div className="overflow-hidden rounded-3xl border border-ink-100 bg-white p-2 shadow-xl shadow-ink-950/5">
                <ProjectVisual
                  project={getProject(featured[0].slug) ?? featured[0]}
                  className="aspect-[4/5] rounded-2xl"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* RÉSIDENCES VEDETTES */}
      <section className="border-b border-ink-100 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
          <Reveal>
            <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-[0.3em] text-gold-600">
                  Nos résidences
                </span>
                <h2 className="mt-4 font-serif text-3xl font-bold text-ink-950 sm:text-4xl">
                  Des adresses d&apos;exception
                </h2>
              </div>
              <Link
                href="/projets"
                className="inline-flex items-center gap-2 text-sm font-bold text-gold-700 transition-colors hover:text-gold-800"
              >
                Toutes les résidences
                <ArrowRightIcon className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((project, i) => (
              <Reveal key={project.slug} delay={i * 90}>
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* LOCALITÉS */}
      <section className="border-b border-ink-100 bg-ink-950">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
          <Reveal>
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-gold-500">
              Localités
            </span>
            <h2 className="mt-4 max-w-2xl font-serif text-3xl font-bold text-cream sm:text-4xl">
              Des quartiers prisés, choisis avec exigence
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {localites.map((l, i) => {
              const count = projects.filter((p) => p.localite === l).length;
              return (
                <Reveal key={l} delay={i * 70}>
                  <Link
                    href={`/projets?localite=${encodeURIComponent(l)}`}
                    className="group flex items-center justify-between rounded-2xl border border-cream/10 bg-cream/5 px-6 py-5 transition-colors hover:border-gold-400/50 hover:bg-cream/10"
                  >
                    <span className="flex items-center gap-3">
                      <MapPinIcon className="h-5 w-5 text-gold-500" />
                      <span className="font-serif text-lg font-bold text-cream">
                        {l}
                      </span>
                    </span>
                    <span className="text-xs font-bold text-gold-400">
                      {count} résidence{count > 1 ? "s" : ""}
                    </span>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* TYPOLOGIES + PROCESS */}
      <section className="border-b border-ink-100 bg-cream">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <Reveal>
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-gold-600">
                Nos typologies
              </span>
              <h2 className="mt-4 font-serif text-3xl font-bold text-ink-950 sm:text-4xl">
                Le bon espace pour chaque étape de vie
              </h2>
              <p className="mt-5 text-base leading-7 text-ink-500">
                Du F2 optimisé au F5 généreux, chaque résidence propose des
                surfaces pensées pour la lumière, le rangement et le confort au
                quotidien.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                {typologies.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-gold-300/60 bg-gold-50 px-5 py-2 text-sm font-bold text-gold-800"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </Reveal>

            <div className="space-y-6">
              {processus.map((step, i) => (
                <Reveal key={step.title} delay={i * 90}>
                  <div className="flex gap-6 rounded-2xl border border-ink-100 bg-white p-7">
                    <span className="font-serif text-4xl font-bold text-gold-300">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="font-serif text-xl font-bold text-ink-950">
                        {step.title}
                      </h3>
                      <p className="mt-2 text-sm leading-7 text-ink-500">
                        {step.text}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* POURQUOI NOUS */}
      <section className="border-b border-ink-100 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
          <Reveal>
            <div className="text-center">
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-gold-600">
                Pourquoi MOKRANI
              </span>
              <h2 className="mx-auto mt-4 max-w-2xl font-serif text-3xl font-bold text-ink-950 sm:text-4xl">
                Nous sommes fiers de remettre vos clés
              </h2>
            </div>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {[
              {
                icon: ShieldIcon,
                title: "Sécurité & fiabibilité",
                text: "Chantiers maîtrisés, suivi régulier et livraison documentée.",
              },
              {
                icon: HomeIcon,
                title: "Confort de vie",
                text: "Matériaux nobles, espaces lumineux et prestations cohérentes.",
              },
              {
                icon: BuildingIcon,
                title: "Valeur patrimoniale",
                text: "Des emplacements recherchés, pensés pour durer dans le temps.",
              },
            ].map((c, i) => (
              <Reveal key={c.title} delay={i * 90}>
                <div className="h-full rounded-2xl border border-ink-100 bg-cream/50 p-8">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gold-100 text-gold-700">
                    <c.icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-6 font-serif text-xl font-bold text-ink-950">
                    {c.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-ink-500">{c.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA CONTACT */}
      <section className="bg-ink-950">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
          <Reveal>
            <div className="flex flex-col items-center gap-8 text-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-gold-400/40 bg-gold-400/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.3em] text-gold-300">
                <GemIcon className="h-3.5 w-3.5" />
                {siteConfig.nameFull}
              </span>
              <h2 className="max-w-3xl font-serif text-3xl font-bold text-cream sm:text-4xl">
                Votre résidence idéale vous attend à Alger
              </h2>
              <p className="max-w-xl text-base leading-7 text-cream/70">
                Prenez rendez-vous dans notre showroom d&apos;El Achour, posez
                vos questions sur WhatsApp ou demandez un rappel : notre équipe
                vous répond sous 24h ouvrées.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-gold-500 px-8 py-4 text-sm font-bold text-ink-950 transition-colors hover:bg-gold-400"
                >
                  Nous contacter
                  <ArrowRightIcon className="h-4 w-4" />
                </Link>
                <a
                  href={`https://wa.me/${siteConfig.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-cream/25 px-8 py-4 text-sm font-bold text-cream transition-colors hover:border-gold-300 hover:text-gold-300"
                >
                  <WhatsappIcon className="h-4 w-4" />
                  WhatsApp direct
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}