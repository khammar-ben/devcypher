"use client";

import React from "react";
import { scrollToId } from "@/lib/scroll";
import { InstagramIcon, INSTAGRAM_URL, INSTAGRAM_HANDLE } from "@/components/InstagramIcon";

const links = [
  { label: "Services", id: "services" },
  { label: "Portfolio", id: "portfolio" },
  { label: "Process", id: "process" },
  { label: "Pricing", id: "pricing" },
  { label: "Contact", id: "contact" },
];

export function Footer() {
  return (
    <footer className="w-full border-t border-[#1e293b] pt-12 pb-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        <div className="flex flex-col md:flex-row items-start justify-between gap-10 mb-10">
          {/* Brand */}
          <div className="flex flex-col gap-3 max-w-xs">
            <div className="flex items-center gap-3">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logo-mark.svg" alt="devcypher logo" className="h-9 w-auto" />
              <span className="font-bold text-[#e2e8f0] text-lg tracking-tight">
                dev<span className="text-[#60a5fa]">cypher</span>
              </span>
            </div>
            <p className="text-gray-400 text-[14px] leading-relaxed">
              Websites and automations for small businesses.
            </p>
          </div>

          {/* Nav links */}
          <nav className="flex flex-col gap-1">
            <span className="text-[13px] text-gray-500 mb-2">Pages</span>
            {links.map(l => (
              <button
                key={l.id}
                onClick={() => scrollToId(l.id)}
                className="text-left text-gray-300 text-[14px] hover:text-[#60a5fa] transition-colors py-1"
              >
                {l.label}
              </button>
            ))}
          </nav>

          {/* Contact */}
          <div className="flex flex-col gap-2">
            <span className="text-[13px] text-gray-500 mb-2">Contact</span>
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-300 text-[14px] hover:text-[#60a5fa] transition-colors">
              <InstagramIcon className="w-4 h-4" />
              {INSTAGRAM_HANDLE}
            </a>
            <span className="text-gray-300 text-[14px]">Morocco, working remotely</span>
          </div>
        </div>

        <div className="border-t border-[#1e293b] pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[13px] text-gray-500">
          <p>© {new Date().getFullYear()} devcypher</p>
          <p>Built with Next.js and Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}
