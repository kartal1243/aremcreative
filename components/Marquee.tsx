"use client";

const items = [
  "AREM CREATIVE",
  "SOSYAL MEDYA",
  "İÇERİK",
  "VİDEO",
  "MARKA",
  "STRATEJİ",
];

function Row() {
  return (
    <div className="flex shrink-0 items-center">
      {items.map((t) => (
        <span key={t} className="flex items-center whitespace-nowrap">
          <span className="px-5 font-display text-sm tracking-wide text-white md:text-base">
            {t}
          </span>
          <span className="text-sm text-white/90">✦</span>
        </span>
      ))}
    </div>
  );
}

export default function Marquee() {
  return (
    <div className="relative w-screen max-w-none overflow-hidden border-y-4 border-ink bg-accent py-3">
      <div className="marquee-track flex w-max">
        <Row />
        <Row />
        <Row />
        <Row />
      </div>
    </div>
  );
}
