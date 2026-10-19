"use client";

import { scrollToId } from "@/lib/scroll";

export function CTA() {
  return (
    <section className="py-16">
      <div
        data-reveal
        className="relative overflow-hidden rounded-3xl border border-[#1e293b] bg-gradient-to-br from-[#0f1d3d] via-[#0d1630] to-[#0b1120] px-8 py-16 md:px-16 text-center"
      >
        <div aria-hidden className="absolute -top-32 left-1/2 -translate-x-1/2 w-[520px] h-[320px] rounded-full bg-[#3b82f6]/25 blur-[110px]" />
        <div className="relative">
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-4">
            Have a project in mind?
          </h2>
          <p className="text-gray-400 text-base md:text-lg max-w-xl mx-auto mb-9">
            Send me a few lines about it. I&apos;ll tell you what I would build, how long it takes and what it costs.
          </p>
          <button
            data-magnetic
            onClick={() => scrollToId("contact")}
            className="px-8 py-4 rounded-full bg-white text-[#0b1120] font-semibold text-[15px] hover:bg-[#dbeafe] transition-colors"
          >
            Start the conversation
          </button>
        </div>
      </div>
    </section>
  );
}
