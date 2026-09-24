"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import type { Project } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import { ChevronDownIcon } from "./icons";

interface ProjectFiltersProps {
  projects: Project[];
  localites: string[];
  typologies: string[];
}

type StatusFilter = "tous" | "en_cours" | "livre";

export default function ProjectFilters({
  projects: allProjects,
  localites: localiteOptions,
  typologies: typologieOptions,
}: ProjectFiltersProps) {
  const [status, setStatus] = useState<StatusFilter>("tous");
  const [localite, setLocalite] = useState("toutes");
  const [typologie, setTypologie] = useState("toutes");

  const filtered = useMemo(() => {
    return allProjects.filter((p) => {
      if (status !== "tous" && p.statut !== status) return false;
      if (localite !== "toutes" && p.localite !== localite) return false;
      if (
        typologie !== "toutes" &&
        !p.typologies.some((t) => t.code === typologie)
      )
        return false;
      return true;
    });
  }, [allProjects, status, localite, typologie]);

  const selectCls =
    "w-full appearance-none rounded-xl border border-ink-100 bg-white py-3 pl-4 pr-10 text-sm font-medium text-ink-800 outline-none transition-colors focus:border-gold-400 focus:ring-2 focus:ring-gold-200";

  return (
    <div>
      <div className="mx-auto max-w-7xl px-4 pt-12 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-ink-100 bg-white p-4 shadow-sm sm:p-6">
          <div className="flex flex-wrap items-center gap-2">
            {(
              [
                { value: "tous", label: "Tous les projets" },
                { value: "en_cours", label: "En cours" },
                { value: "livre", label: "Livrés" },
              ] as const
            ).map((s) => (
              <button
                key={s.value}
                type="button"
                onClick={() => setStatus(s.value)}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                  status === s.value
                    ? "bg-ink-950 text-cream"
                    : "bg-ink-100 text-ink-600 hover:bg-ink-200"
                }`}
              >
                {s.label}
              </button>
            ))}
          </div>

          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <label className="relative block">
              <span className="sr-only">Filtrer par localité</span>
              <select
                value={localite}
                onChange={(e) => setLocalite(e.target.value)}
                className={selectCls}
              >
                <option value="toutes">Toutes les localités</option>
                {localiteOptions.map((l) => (
                  <option key={l} value={l}>
                    {l}
                  </option>
                ))}
              </select>
              <ChevronDownIcon className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-400" />
            </label>

            <label className="relative block">
              <span className="sr-only">Filtrer par typologie</span>
              <select
                value={typologie}
                onChange={(e) => setTypologie(e.target.value)}
                className={selectCls}
              >
                <option value="toutes">Toutes les typologies</option>
                {typologieOptions.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
              <ChevronDownIcon className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-400" />
            </label>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 pb-10 pt-8 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <p className="text-sm text-ink-500">
            {filtered.length} {filtered.length > 1 ? "projets" : "projet"}
            {status !== "tous" &&
              (status === "en_cours" ? " en cours" : " livré")}
            {localite !== "toutes" && ` — ${localite}`}
          </p>
          {(status !== "tous" || localite !== "toutes" || typologie !== "toutes") && (
            <button
              type="button"
              onClick={() => {
                setStatus("tous");
                setLocalite("toutes");
                setTypologie("toutes");
              }}
              className="text-sm font-semibold text-gold-600 underline-offset-4 hover:underline"
            >
              Réinitialiser
            </button>
          )}
        </div>

        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.length > 0 ? (
            filtered.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))
          ) : (
            <div className="col-span-full rounded-2xl border border-dashed border-ink-200 bg-white p-12 text-center">
              <p className="font-serif text-xl font-bold text-ink-900">
                Aucune résidence ne correspond à ces critères.
              </p>
              <p className="mt-2 text-sm text-ink-500">
                Essayez d&apos;élargir votre recherche.
              </p>
            </div>
          )}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-gold-600 px-8 py-3.5 text-sm font-bold text-cream transition-colors hover:bg-gold-700"
          >
            Nous contacter pour un projet sur mesure
          </Link>
        </div>
      </div>
    </div>
  );
}
