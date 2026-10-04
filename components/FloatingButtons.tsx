"use client";
import { useEffect, useState } from "react";
import { ArrowUp, Instagram } from "lucide-react";
import { contact } from "@/data/site";

export default function FloatingButtons() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <a
        href={contact.instagram}
        target="_blank"
        rel="noreferrer"
        aria-label="Instagram"
        className="fixed bottom-20 right-4 z-[60] flex h-[46px] w-[46px] items-center justify-center rounded-full border-2 border-ink shadow-[3px_3px_0_#1a1a1a]"
        style={{ background: "linear-gradient(45deg,#f9ce34,#ee2a7b,#6228d7)" }}
      >
        <Instagram size={22} className="text-white" />
      </a>
      {show && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Yukarı çık"
          className="fixed bottom-6 right-4 z-[60] flex h-[46px] w-[46px] items-center justify-center rounded-full border-2 border-ink bg-ink text-white shadow-[3px_3px_0_#073066]"
        >
          <ArrowUp size={22} />
        </button>
      )}
    </>
  );
}
