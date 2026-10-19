"use client";

import React from "react";
import { MapPin, Clock, Languages } from "lucide-react";
import { InstagramIcon, INSTAGRAM_URL, INSTAGRAM_HANDLE } from "@/components/InstagramIcon";
import { scrollToId } from "@/lib/scroll";
import { DotField } from "@/components/DotField";

const STACK = ["Laravel", "React", "Next.js", "Node.js", "Spring Boot"];

export function Hero() {
  const scrollTo = scrollToId;

  return (
    <section id="home" className="min-h-[92vh] pt-28 pb-20 flex items-center relative overflow-hidden">
      <DotField className="absolute inset-0 w-full h-full" />
      <div aria-hidden className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-b from-transparent to-[#0b1120] pointer-events-none" />

      <div className="relative w-full max-w-7xl mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center justify-between gap-14">

        {/* LEFT — Headline */}
        <div data-parallax="0.08" className="flex-1 max-w-xl">
          <h1 data-split className="text-[34px] sm:text-5xl lg:text-[56px] font-bold text-white tracking-tight leading-[1.1] mb-6">
            Websites and automations for{" "}
            <span className="text-[#60a5fa]">small businesses.</span>
          </h1>

          <p data-reveal className="text-base md:text-lg text-gray-400 leading-relaxed mb-8">
            I&apos;m a developer based in Morocco. I build websites, online stores and
            small tools that take the repetitive work off your plate. You deal with me directly,
            from the first message to launch day.
          </p>

          <div data-reveal className="flex flex-col sm:flex-row gap-3">
            <button
              data-magnetic
              onClick={() => scrollTo("contact")}
              className="px-6 py-3.5 rounded-lg bg-[#60a5fa] hover:bg-[#3b82f6] text-[#0b1120] font-semibold text-[15px] transition-colors"
            >
              Tell me about your project
            </button>
            <button
              onClick={() => scrollTo("portfolio")}
              className="px-6 py-3.5 rounded-lg border border-[#2b3a55] hover:border-[#3d5175] text-gray-200 text-[15px] transition-colors"
            >
              See my work
            </button>
          </div>

          <p data-reveal className="mt-10 text-[13px] text-gray-500">
            I usually work with {STACK.join(", ")}.
          </p>
        </div>

        {/* RIGHT — Intro card */}
        <div data-parallax="0.18" className="w-full max-w-[420px] mx-auto lg:mx-0">
          <div data-reveal className="glow-border rounded-2xl border border-[#1e293b] bg-[#0f172a]/80 backdrop-blur-md p-7 shadow-[0_30px_80px_-20px_rgba(37,99,235,0.35)]">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-full bg-[#131d35] border border-[#2b3a55] flex items-center justify-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/logo-mark.svg" alt="" className="h-8 w-auto" />
              </div>
              <div>
                <div className="text-white font-semibold text-[17px]">devcypher</div>
                <div className="text-gray-400 text-sm">Web & automation</div>
              </div>
            </div>

            <ul className="space-y-3.5 text-[14px] text-gray-300 mb-7">
              <li className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-[#60a5fa] shrink-0" />
                Morocco, working with clients remotely
              </li>
              <li className="flex items-center gap-3">
                <Languages className="w-4 h-4 text-[#60a5fa] shrink-0" />
                Arabic, French and English
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-[#60a5fa] shrink-0" />
                I reply within a day
              </li>
            </ul>

            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 rounded-lg border border-[#2b3a55] hover:border-[#60a5fa]/60 text-gray-200 text-sm transition-colors"
            >
              <InstagramIcon className="w-4 h-4" />
              {INSTAGRAM_HANDLE} on Instagram
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
