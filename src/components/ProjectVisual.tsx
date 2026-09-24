import type { Project } from "@/data/projects";

interface ProjectVisualProps {
  project: Project;
  className?: string;
}

const gradients: Record<string, string> = {
  "residence-saphir": "from-[#0b3d5c] via-[#145e8a] to-[#2f8fb8]",
  "residence-jade": "from-[#0d4a3a] via-[#1b6e56] to-[#3fa37f]",
  "residence-grenat": "from-[#4a1628] via-[#7a2540] to-[#b04a63]",
  "residence-onyx": "from-[#22252d] via-[#3b404b] to-[#636b79]",
  "residence-topaze": "from-[#4a3412] via-[#7a5a1e] to-[#b08a3a]",
  "residence-cuivre": "from-[#5b2c14] via-[#8a4a22] to-[#c0783a]",
};

export default function ProjectVisual({
  project,
  className = "",
}: ProjectVisualProps) {
  const gradient = gradients[project.slug] ?? "from-ink-800 via-ink-700 to-ink-600";
  const initial = project.nom.replace("Résidence ", "").charAt(0);

  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden bg-gradient-to-br ${gradient} ${className}`}
    >
      <span
        className="font-serif text-transparent select-none bg-clip-text opacity-90"
        style={{
          backgroundImage: "linear-gradient(120deg, rgba(255,255,255,0.85), rgba(255,255,255,0.3))",
          fontSize: "min(34vh, 9rem)",
        }}
      >
        {initial}
      </span>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.12),transparent_55%)]" />
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/35 to-transparent" />
    </div>
  );
}