import type { Metadata } from "next";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description: `Politique de confidentialité du site ${siteConfig.nameFull}.`,
  alternates: { canonical: "/politique-de-confidentialite" },
};

const sections = [
  {
    title: "1. Responsable du traitement",
    body: `Le site ${siteConfig.url} est exploité par ${siteConfig.nameFull} (${siteConfig.addresses.siege}), contact : ${siteConfig.email} / ${siteConfig.phone}.`,
  },
  {
    title: "2. Données collectées",
    body: "Lorsque vous utilisez notre formulaire de contact ou demandez un rendez-vous, nous collectons uniquement les informations que vous nous transmettez volontairement : nom, prénom, téléphone, adresse e-mail et le contenu de votre message. Aucun cookie de suivi publicitaire n'est déposé sans votre consentement.",
  },
  {
    title: "3. Finalités du traitement",
    body: "Vos données sont utilisées exclusivement pour : répondre à votre demande, planifier un rendez-vous ou une visite, assurer le suivi de votre projet d'acquisition, et, avec votre accord, vous envoyer des informations sur nos résidences.",
  },
  {
    title: "4. Durée de conservation",
    body: "Les données issues du formulaire de contact sont conservées pendant une durée maximale de 36 mois à compter du dernier contact, sauf obligation légale contraire.",
  },
  {
    title: "5. Destinataires",
    body: "Les données restent strictement internes à MOKRANI Promotion. Elles ne sont ni vendues, ni louées, ni cédées à des tiers à des fins commerciales.",
  },
  {
    title: "6. Vos droits",
    body: "Conformément à la réglementation applicable, vous disposez d'un droit d'accès, de rectification, d'effacement, de limitation, d'opposition et de portabilité de vos données. Pour l'exercer, écrivez-nous à " + siteConfig.email + " en précisant « Données personnelles » en objet.",
  },
  {
    title: "7. Cookies",
    body: "Ce site n'utilise aucun cookie de mesure ou publicitaire par défaut. Un bandeau vous informe lors de votre première visite ; votre choix est conservé localement sur votre navigateur.",
  },
];

export default function ConfidentialitePage() {
  return (
    <section className="border-b border-ink-100 bg-cream">
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <span className="text-xs font-bold uppercase tracking-[0.3em] text-gold-600">
          Protection des données
        </span>
        <h1 className="mt-4 font-serif text-4xl font-bold text-ink-950">
          Politique de confidentialité
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
              <p className="mt-3 text-base leading-7 text-ink-600">{s.body}</p>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}