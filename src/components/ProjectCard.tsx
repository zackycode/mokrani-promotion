import Link from "next/link";
import type { Project } from "@/data/projects";
import ProjectVisual from "./ProjectVisual";
import { MapPinIcon, ArrowRightIcon } from "./icons";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl bg-white ring-1 ring-ink-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <Link
        href={`/projets/${project.slug}`}
        className="relative block overflow-hidden"
        aria-label={`Voir la ${project.nom}`}
      >
        <ProjectVisual project={project} className="aspect-[4/3]" />
        <span className="absolute left-4 top-4 rounded-full bg-ink-950/70 px-3 py-1.5 text-xs font-semibold text-cream backdrop-blur">
          {project.statut === "en_cours" ? "En cours" : "Livrée"}
        </span>
      </Link>

      <div className="flex flex-1 flex-col p-6">
        <p className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-gold-600">
          <MapPinIcon className="h-3.5 w-3.5" />
          {project.localite}, Alger
        </p>
        <h3 className="mt-2 font-serif text-2xl font-bold text-ink-950">
          <Link
            href={`/projets/${project.slug}`}
            className="transition-colors hover:text-gold-600"
          >
            {project.nom}
          </Link>
        </h3>
        <p className="mt-2 line-clamp-3 flex-1 text-sm leading-6 text-ink-500">
          {project.description}
        </p>

        <div className="mt-5 flex items-center justify-between border-t border-ink-100 pt-4 text-xs text-ink-400">
          <span>
            {project.typologies[0].code} →{" "}
            {project.typologies[project.typologies.length - 1].code}
          </span>
          <span className="font-medium text-ink-600">
            {project.surfaceMin}–{project.surfaceMax} m²
          </span>
        </div>

        {project.statut === "en_cours" && (
          <div className="mt-4 h-1.5 w-full overflow-hidden rounded-full bg-ink-100">
            <div
              className="h-full rounded-full bg-gradient-to-r from-gold-500 to-gold-700"
              style={{ width: `${project.progress}%` }}
            />
          </div>
        )}

        <Link
          href={`/projets/${project.slug}`}
          className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-ink-950 transition-colors hover:text-gold-600"
        >
          Découvrir la résidence
          <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </article>
  );
}
