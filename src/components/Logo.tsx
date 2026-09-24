import Link from "next/link";

interface LogoProps {
  dark?: boolean;
  size?: "sm" | "md";
}

export default function Logo({ dark = false, size = "md" }: LogoProps) {
  return (
    <Link href="/" className="group inline-flex flex-col leading-none">
      <span
        className={`font-serif font-bold tracking-[0.16em] transition-colors group-hover:text-gold-500 ${
          size === "md" ? "text-2xl" : "text-lg"
        } ${dark ? "text-cream" : "text-ink-950"}`}
      >
        MOKRANI
      </span>
      <span
        className={`mt-1 text-[0.6rem] font-bold uppercase tracking-[0.45em] ${
          dark ? "text-gold-400" : "text-gold-600"
        }`}
      >
        Promotion
      </span>
    </Link>
  );
}