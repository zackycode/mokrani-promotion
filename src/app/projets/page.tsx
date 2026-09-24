import type { Metadata } from "next";
import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";
import ProjectFilters from "@/components/ProjectFilters";
import { ArrowRightIcon } from "@/components/icons";
import {
  projects,
  localites,
  listLocalites,
  listTypologies,
  getLocalite,
} from "@/data/projects";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Nos résidences — Appartements haut standing à Alger",
  description:
    "Découvrez les résidences haut standing de " +
    siteConfig.nameFull +
    " à Alger : Hydra, Chéraga, Birkhadem, El Achour, Dely Ibrahim, Kouba. Appartements F2 à F5, en cours ou livrés.",
  alternates: { canonical: "/projets" },
};

export default function ProjetsPage() {
  const localiteList = listLocalites();
  const typologieList = listTypologies();

  return (
    <>
      <section className="border-b border-ink-100 bg-cream">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-gold-600">
            Nos résidences
          </span>
          <h1 className="mt-4 max-w-3xl font-serif text-4xl font-bold leading-tight text-ink-950 sm:text-5xl">
            Des adresses d&apos;exception, du F2 au F5
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-ink-500 sm:text-lg">
            Parcourez nos résidences en cours de construction ou déjà livrées,
            dans les communes les plus prisées d&apos;Alger.
          </p>
        </div>
      </section>

      <ProjectFilters
        projects={projects}
        localites={localiteList}
        typologies={typologieList}
      />

      <section className="border-t border-ink-100 bg-cream/60">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-gold-600">
                Nos localités
              </span>
              <h2 className="mt-3 font-serif text-3xl font-bold text-ink-950">
                Où installer votre projet ?
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-6 text-ink-500">
              Des quartiers choisis avec exigence : valeur sûre, cadre de vie,
              accessibilité et potentiel de valorisation.
            </p>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {localiteList.map((nom) => {
              const l = getLocalite(nom);
              const count = projects.filter((p) => p.localite === nom).length;
              return (
                <Link
                  key={nom}
                  href={`/projets?localite=${encodeURIComponent(nom)}`}
                  className="group rounded-2xl border border-ink-100 bg-white p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-gold-300 hover:shadow-lg"
                >
                  <div className="flex items-start justify-between">
                    <h3 className="font-serif text-xl font-bold text-ink-950 group-hover:text-gold-600">
                      {nom}
                    </h3>
                    <span className="mt-1 text-xs font-semibold text-gold-600">
                      {count} {count > 1 ? "projets" : "projet"}
                    </span>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-ink-500">
                    {l?.description}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-gold-700 group-hover:gap-3">
                    Voir les projets
                    <ArrowRightIcon className="h-4 w-4" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}