"use client";

import React, { useRef } from "react";

// Card with a soft light that follows the cursor (same idea as react-bits' SpotlightCard).
export function SpotlightCard({ className = "", children }: { className?: string; children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - r.left}px`);
    el.style.setProperty("--my", `${e.clientY - r.top}px`);
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      className={`group relative overflow-hidden rounded-xl border border-[#1e293b] bg-[#0f172a] transition-colors hover:border-[#2b3a55] ${className}`}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background: "radial-gradient(420px circle at var(--mx) var(--my), rgba(96,165,250,0.09), transparent 60%)" }}
      />
      <div className="relative h-full">{children}</div>
    </div>
  );
}
