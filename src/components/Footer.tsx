import Link from "next/link";
import { siteConfig } from "@/data/site";
import { projects } from "@/data/projects";
import Logo from "./Logo";
import {
  PhoneIcon,
  MailIcon,
  MapPinIcon,
  ClockIcon,
  WhatsappIcon,
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  YoutubeIcon,
  TiktokIcon,
} from "./icons";

const socials = [
  { name: "Facebook", href: siteConfig.social.facebook, Icon: FacebookIcon },
  { name: "Instagram", href: siteConfig.social.instagram, Icon: InstagramIcon },
  { name: "LinkedIn", href: siteConfig.social.linkedin, Icon: LinkedinIcon },
  { name: "YouTube", href: siteConfig.social.youtube, Icon: YoutubeIcon },
  { name: "TikTok", href: siteConfig.social.tiktok, Icon: TiktokIcon },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink-950 text-cream">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <Logo dark />
            <p className="text-sm leading-6 text-cream/60">
              Promoteur immobilier haut standing à Alger depuis {siteConfig.stats.experience}{" "}
              ans. Résidences d&apos;exception, appartements de qualité et accompagnement
              complet jusqu&apos;à la remise des clés.
            </p>
            <div className="flex gap-3">
              {socials.map(({ name, href, Icon }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={name}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-cream/15 text-cream/70 transition-colors hover:border-gold-400 hover:text-gold-400"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-serif text-lg text-gold-400">Navigation</h3>
            <ul className="mt-4 space-y-2.5 text-sm text-cream/70">
              <li>
                <Link href="/" className="transition-colors hover:text-gold-400">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="/#apropos" className="transition-colors hover:text-gold-400">
                  À propos
                </Link>
              </li>
              <li>
                <Link href="/projets" className="transition-colors hover:text-gold-400">
                  Nos résidences
                </Link>
              </li>
              <li>
                <Link href="/contact" className="transition-colors hover:text-gold-400">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-lg text-gold-400">Résidences</h3>
            <ul className="mt-4 space-y-2.5 text-sm text-cream/70">
              {projects.slice(0, 6).map((p) => (
                <li key={p.slug}>
                  <Link
                    href={`/projets/${p.slug}`}
                    className="transition-colors hover:text-gold-400"
                  >
                    {p.nom} — {p.localite}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-lg text-gold-400">Contact</h3>
            <ul className="mt-4 space-y-3 text-sm text-cream/70">
              <li className="flex items-start gap-2.5">
                <MapPinIcon className="mt-0.5 h-4 w-4 shrink-0 text-gold-500" />
                <span>
                  <span className="block font-medium text-cream">Siège social</span>
                  {siteConfig.addresses.siege}
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPinIcon className="mt-0.5 h-4 w-4 shrink-0 text-gold-500" />
                <span>
                  <span className="block font-medium text-cream">Showroom</span>
                  {siteConfig.addresses.commercial}
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <PhoneIcon className="mt-0.5 h-4 w-4 shrink-0 text-gold-500" />
                <a
                  href={`tel:${siteConfig.phoneHref}`}
                  className="transition-colors hover:text-gold-400"
                >
                  {siteConfig.phone}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MailIcon className="mt-0.5 h-4 w-4 shrink-0 text-gold-500" />
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="transition-colors hover:text-gold-400"
                >
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <ClockIcon className="mt-0.5 h-4 w-4 shrink-0 text-gold-500" />
                <span>{siteConfig.hours}</span>
              </li>
              <li>
                <a
                  href={`https://wa.me/${siteConfig.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-gold-600 px-4 py-2 text-sm font-semibold text-cream transition-colors hover:bg-gold-500"
                >
                  <WhatsappIcon className="h-4 w-4" />
                  Écrire sur WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-5 text-xs text-cream/50 sm:flex-row sm:px-6 lg:px-8">
          <p>
            © {year} {siteConfig.nameFull}. Tous droits réservés.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/mentions-legales" className="transition-colors hover:text-gold-400">
              Mentions légales
            </Link>
            <Link
              href="/politique-de-confidentialite"
              className="transition-colors hover:text-gold-400"
            >
              Politique de confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}