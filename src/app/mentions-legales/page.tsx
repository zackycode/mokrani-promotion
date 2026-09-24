import type { Metadata } from "next";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Mentions légales",
  description: `Mentions légales du site ${siteConfig.nameFull}.`,
  alternates: { canonical: "/mentions-legales" },
};

const sections = [
  {
    title: "Éditeur du site",
    body: [
      `Le site ${siteConfig.url} est édité par ${siteConfig.nameFull}, promoteur immobilier basé à Alger (${siteConfig.addresses.siege}).`,
      `Téléphone : ${siteConfig.phone} — E-mail : ${siteConfig.email}`,
    ],
  },
  {
    title: "Directeur de la publication",
    body: [
      "La direction de la publication est assurée par la société MOKRANI Promotion, prise en la personne de son représentant légal (contenus provisoires en cours de validation).",
    ],
  },
  {
    title: "Hébergement",
    body: [
      "Le site est hébergé par Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis. Le nom de domaine « mokranipromotion.com » est l'identifiant officiel de la marque sur Internet.",
    ],
  },
  {
    title: "Propriété intellectuelle",
    body: [
      "L'ensemble des contenus (textes, visuels, logos, illustrations) du présent site est la propriété exclusive de MOKRANI Promotion, sauf mention contraire. Toute reproduction, représentation ou diffusion, partielle ou totale, sans autorisation écrite préalable est interdite et constitutive de contrefaçon.",
    ],
  },
  {
    title: "Données personnelles",
    body: [
      "Les informations recueillies via le formulaire de contact font l'objet d'un traitement destiné exclusivement à la gestion des demandes et du suivi commercial. Conformément à la réglementation applicable, vous disposez d'un droit d'accès, de rectification et de suppression de vos données.",
      "Pour en savoir plus : voir notre politique de confidentialité.",
    ],
  },
  {
    title: "Responsabilité",
    body: [
      "Les informations, prix, surfaces et délais de livraison mentionnés sur ce site sont fournis à titre indicatif et sont susceptibles d'évoluer. Ils ne constituent pas un engagement contractuel. Pour toute information ferme et personnalisée, contactez notre showroom.",
    ],
  },
];

export default function MentionsLegalesPage() {
  return (
    <section className="border-b border-ink-100 bg-cream">
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <span className="text-xs font-bold uppercase tracking-[0.3em] text-gold-600">
          Informations légales
        </span>
        <h1 className="mt-4 font-serif text-4xl font-bold text-ink-950">
          Mentions légales
        </h1>
        <p className="mt-4 text-base leading-7 text-ink-500">
          Dernière mise à jour : février 2026
        </p>
        <div className="mt-12 space-y-10">
          {sections.map((s) => (
            <section key={s.title}>
              <h2 className="font-serif text-2xl font-bold text-ink-950">
                {s.title}
              </h2>
              {s.body.map((p, i) => (
                <p key={i} className="mt-3 text-base leading-7 text-ink-600">
                  {p}
                </p>
              ))}
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}