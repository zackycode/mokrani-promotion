"use client";

import { useState, type FormEvent, type ChangeEvent } from "react";
import { projects } from "@/data/projects";
import { siteConfig } from "@/data/site";
import { CheckIcon } from "@/components/icons";

const projectNames = projects.map((p) => p.nom);
const initialForm = {
  nom: "",
  telephone: "",
  email: "",
  projet: "",
  message: "",
};

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState(initialForm);

  function handleChange(
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const sel = form.projet ? `Mes conseillers MOKRANI Promotion 🏠\n\n` : "";
    const msg = [
      `Bonjour ${siteConfig.nameFull} 👋`,
      sel,
      `Je souhaite être recontacté(e) concernant un projet d'achat d'appartement.`,
      ``,
      `▸ Nom : ${form.nom}`,
      `▸ Téléphone : ${form.telephone}`,
      form.email ? `▸ E-mail : ${form.email}` : "",
      form.projet ? `▸ Résidence : ${form.projet}` : "",
      ``,
      form.message ? `${form.message}` : `Merci de me recontacter.`,
    ]
      .filter((l) => l !== "")
      .join("\n");

    window.open(
      `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(msg)}`,
      "_blank",
      "noopener,noreferrer"
    );
    setSent(true);
  }

  if (sent) {
    return (
      <div className="flex h-full flex-col items-center justify-center rounded-3xl border border-emerald-200 bg-emerald-50 p-10 text-center">
        <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-emerald-600 text-white">
          <CheckIcon className="h-7 w-7" />
        </span>
        <h2 className="mt-6 font-serif text-2xl font-bold text-emerald-900">
          Demande envoyée
        </h2>
        <p className="mt-3 max-w-sm text-sm leading-6 text-emerald-800/80">
          WhatsApp s&apos;est ouvert avec votre message pré-rempli : ajoutez vos
          photos si besoin, puis envoyez. Notre équipe vous répond sous 24h
          ouvrées.
        </p>
        <button
          type="button"
          onClick={() => {
            setForm(initialForm);
            setSent(false);
          }}
          className="mt-8 rounded-full border border-emerald-300 px-6 py-2.5 text-sm font-bold text-emerald-800 transition-colors hover:bg-emerald-100"
        >
          Nouvelle demande
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="space-y-1.5">
          <label
            htmlFor="nom"
            className="text-xs font-bold uppercase tracking-wider text-ink-700"
          >
            Nom complet <span className="text-gold-600">*</span>
          </label>
          <input
            id="nom"
            name="nom"
            type="text"
            required
            autoComplete="name"
            placeholder="Votre nom et prénom"
            value={form.nom}
            onChange={handleChange}
            className="w-full rounded-xl border border-ink-200 bg-cream/40 px-4 py-3 text-sm text-ink-950 outline-none transition-colors placeholder:text-ink-400 focus:border-gold-500 focus:bg-white focus:ring-2 focus:ring-gold-200"
          />
        </div>

        <div className="space-y-1.5">
          <label
            htmlFor="telephone"
            className="text-xs font-bold uppercase tracking-wider text-ink-700"
          >
            Téléphone <span className="text-gold-600">*</span>
          </label>
          <input
            id="telephone"
            name="telephone"
            type="tel"
            required
            autoComplete="tel"
            placeholder="05 55 00 00 00"
            value={form.telephone}
            onChange={handleChange}
            className="w-full rounded-xl border border-ink-200 bg-cream/40 px-4 py-3 text-sm text-ink-950 outline-none transition-colors placeholder:text-ink-400 focus:border-gold-500 focus:bg-white focus:ring-2 focus:ring-gold-200"
          />
        </div>
      </div>

      <div className="space-y-1.5">
        <label
          htmlFor="email"
          className="text-xs font-bold uppercase tracking-wider text-ink-700"
        >
          E-mail <span className="text-gold-600">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="vous@exemple.fr"
          value={form.email}
          onChange={handleChange}
          className="w-full rounded-xl border border-ink-200 bg-cream/40 px-4 py-3 text-sm text-ink-950 outline-none transition-colors placeholder:text-ink-400 focus:border-gold-500 focus:bg-white focus:ring-2 focus:ring-gold-200"
        />
      </div>

      <div className="space-y-1.5">
        <label
          htmlFor="projet"
          className="text-xs font-bold uppercase tracking-wider text-ink-700"
        >
          Résidence qui vous intéresse
        </label>
        <select
          id="projet"
          name="projet"
          value={form.projet}
          onChange={handleChange}
          className="w-full appearance-none rounded-xl border border-ink-200 bg-cream/40 px-4 py-3 text-sm text-ink-950 outline-none transition-colors focus:border-gold-500 focus:bg-white focus:ring-2 focus:ring-gold-200"
        >
          <option value="">Sélectionnez une résidence</option>
          {projectNames.map((n) => (
            <option key={n} value={n}>
              {n}
            </option>
          ))}
        </select>
      </div>

      <div className="space-y-1.5">
        <label
          htmlFor="message"
          className="text-xs font-bold uppercase tracking-wider text-ink-700"
        >
          Votre message <span className="text-gold-600">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          placeholder="Décrivez votre projet : type d'appartement recherché, budget, date de visite souhaitée…"
          value={form.message}
          onChange={handleChange}
          className="w-full resize-none rounded-xl border border-ink-200 bg-cream/40 px-4 py-3 text-sm text-ink-950 outline-none transition-colors placeholder:text-ink-400 focus:border-gold-500 focus:bg-white focus:ring-2 focus:ring-gold-200"
        />
      </div>

      <button
        type="submit"
        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold-600 px-8 py-4 text-sm font-bold text-ink-950 transition-colors hover:bg-gold-500 sm:w-auto"
      >
        Envoyer via WhatsApp
      </button>
      <p className="text-xs leading-5 text-ink-400">
        En envoyant, vous acceptez d&apos;être recontacté(e) concernant votre
        demande. Vos données restent strictement confidentielles.
      </p>
    </form>
  );
}