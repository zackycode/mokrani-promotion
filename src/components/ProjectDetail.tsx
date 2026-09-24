import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import ProjectVisual from "@/components/ProjectVisual";
import Reveal from "@/components/Reveal";
import {
  projects,
  getProject,
  getLocalite,
  listTypologies as listTypologieHelpers,
} from "@/data/projects";
import { siteConfig } from "@/data/site";
import {
  MapPinIcon,
  ArrowRightIcon,
  CheckIcon,
  ChevronDownIcon,
  ShieldIcon,
  BuildingIcon,
  RulerIcon,
  CalendarIcon,
} from "./icons";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  const l = getLocalite(project.localite);
  return {
    title: `${project.nom} — ${project.localite}, Alger`,
    description: project.description,
    alternates: { canonical: `/projets/${project.slug}` },
    openGraph: {
      title: `${project.nom} — Appartements ${project.typologies[0].code} à ${project.typologies[project.typologies.length - 1].code}`,
      description: project.description,
      locale: "fr_FR",
      url: `${siteConfig.url}/projets/${project.slug}`,
      type: "website",
    },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const l = getLocalite(project.localite);
  const statusLabel = project.statut === "en_cours" ? "En cours" : "Livrée";

  return (
    <>
      <section className="relative overflow-hidden bg-ink-950">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <nav
            aria-label="Fil d'ariane"
            className="flex items-center gap-2 text-xs text-cream/50"
          >
            <Link href="/" className="transition-colors hover:text-gold-400">
              Accueil
            </Link>
            <span aria-hidden="true">/</span>
            <Link href="/projets" className="transition-colors hover:text-gold-400">
              Nos résidences
            </Link>
            <span aria-hidden="true">/</span>
            <span className="text-cream/80">{project.nom}</span>
          </nav>

          <div className="mt-10 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <div>
              <span
                className={`inline-block rounded-full px-3 py-1.5 text-xs font-bold ${
                  project.statut === "en_cours"
                    ? "bg-gold-500/20 text-gold-400"
                    : "bg-emerald-500/15 text-emerald-400"
                }`}
              >
                {statusLabel}
              </span>
              <h1 className="mt-5 font-serif text-4xl font-bold text-cream sm:text-5xl">
                {project.nom}
              </h1>
              <p className="mt-4 flex items-center gap-2 text-sm text-cream/70">
                <MapPinIcon className="h-4 w-4" />
                {project.adresse}
              </p>
              <p className="mt-6 max-w-xl text-base leading-7 text-cream/80">
                {project.description}
              </p>
            </div>

            <ProjectVisual project={project} className="aspect-[4/3] rounded-3xl" />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: BuildingIcon,
              label: "Blocs",
              value: String(project.blocs),
            },
            {
              icon: RulerIcon,
              label: "Surfaces",
              value: `${project.surfaceMin} – ${project.surfaceMax} m²`,
            },
            {
              icon: CalendarIcon,
              label: project.statut === "en_cours" ? "Livraison" : "Livrée en",
              value: project.anneeLivraison,
            },
            {
              icon: ShieldIcon,
              label: "Sécurité",
              value:
                "24h/24h",
            },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-ink-100 bg-white p-6"
            >
              <item.icon className="h-5 w-5 text-gold-600" />
              <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-ink-400">
                {item.label}
              </p>
              <p className="mt-1 font-serif text-xl font-bold text-ink-950">
                {item.value}
              </p>
            </div>
          ))}
        </div>

        {project.statut === "en_cours" && (
          <div className="mt-8 rounded-2xl border border-gold-200 bg-gold-50 p-6">
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold text-ink-800">
                Avancement des travaux
              </p>
              <span className="text-sm font-bold text-gold-700">
                {project.progress}%
              </span>
            </div>
            <div className="mt-3 h-2.5 w-full overflow-hidden rounded-full bg-white">
              <div
                className="h-full rounded-full bg-gradient-to-r from-gold-400 to-gold-600"
                style={{ width: `${project.progress}%` }}
              />
            </div>
          </div>
        )}

        <div className="mt-16 grid gap-12 lg:grid-cols-2">
          <Reveal>
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-gold-600">
              La résidence
            </span>
            <h2 className="mt-3 font-serif text-3xl font-bold text-ink-950">
              Tout ce qu&apos;il faut savoir
            </h2>
            <div className="mt-6 space-y-4">
              {project.longDescription.map((para, i) => (
                <p key={i} className="text-base leading-7 text-ink-500">
                  {para}
                </p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={150}>
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-gold-600">
              Prestations
            </span>
            <h2 className="mt-3 font-serif text-3xl font-bold text-ink-950">
              Équipements & prestations
            </h2>
            <ul className="mt-6 grid gap-3">
              {project.equipements.map((e) => (
                <li
                  key={e}
                  className="flex items-center gap-3 rounded-xl border border-ink-100 bg-white px-4 py-3 text-sm text-ink-700"
                >
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-gold-100 text-gold-700">
                    <CheckIcon className="h-3.5 w-3.5" />
                  </span>
                  {e}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-ink-100 bg-cream/60">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-gold-600">
                {project.localite}, Alger
              </span>
              <h2 className="mt-3 font-serif text-3xl font-bold text-ink-950">
                {l?.description ?? project.localite}
              </h2>
              <p className="mt-8 flex items-start gap-4 rounded-2xl border border-ink-100 bg-white p-6">
                <MapPinIcon className="mt-0.5 h-5 w-5 shrink-0 text-gold-600" />
                <span className="text-base text-ink-600">
                  {project.adresse}
                </span>
              </p>
            </div>
            <div className="mt-6 sm:mt-0">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-ink-950 px-8 py-4 text-sm font-bold text-cream transition-colors hover:bg-gold-700"
              >
                Réserver une visite
                <ArrowRightIcon className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {project.typologies.map((t) => (
              <div
                key={t.code}
                className="rounded-2xl border border-ink-100 bg-white p-6"
              >
                <p className="font-serif text-2xl font-bold text-gold-700">
                  {t.code}
                </p>
                <p className="mt-2 text-sm text-ink-500">{t.surfaces}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-between gap-3 rounded-2xl bg-ink-950 p-6 sm:p-8">
            <p className="font-serif text-xl font-bold text-cream">
              Intéressé par la {project.nom} ?
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-gold-600 px-6 py-3 text-sm font-bold text-ink-950 transition-colors hover:bg-gold-500"
            >
              Nous contacter
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}