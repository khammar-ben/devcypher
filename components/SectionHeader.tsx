import React from "react";

export function SectionHeader({ label, title, children }: { label: string; title: string; children?: React.ReactNode }) {
  return (
    <div data-reveal className="mb-12 max-w-2xl">
      <p className="text-[13px] font-medium text-[#60a5fa] mb-2">{label}</p>
      <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">{title}</h2>
      {children && <p className="text-gray-400 text-base leading-relaxed">{children}</p>}
    </div>
  );
}
