"use client";

import React, { useEffect, useState } from "react";
import { scrollToId } from "@/lib/scroll";

const navLinks = [
  { id: "services",     label: "Services" },
  { id: "portfolio",    label: "Portfolio" },
  { id: "process",      label: "Process" },
  { id: "pricing",      label: "Pricing" },
  { id: "contact",      label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
      let cur = "";
      let maxV = 0;
      navLinks.forEach(({ id }) => {
        const el = document.getElementById(id);
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const vh = window.innerHeight;
        const vis = Math.max(0, Math.min(vh, rect.bottom) - Math.max(0, rect.top));
        if (vis > maxV) { maxV = vis; cur = id; }
      });
      setActive(cur);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    scrollToId(id);
    setMenuOpen(false);
  };

  return (
    <header
      id="nav"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0d1427]/90 backdrop-blur-md border-b border-[#1e293b] shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => scrollToId()}
          className="flex items-center gap-2.5 group"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo-mark.svg"
            alt="devcypher logo"
            className="h-8 w-auto transition-transform group-hover:scale-105"
          />
          <span className="font-bold text-[#e2e8f0] text-[17px] tracking-tight">
            dev<span className="text-[#60a5fa]">cypher</span>
          </span>
        </button>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className={`px-4 py-2 rounded-lg text-[14px] transition-colors ${
                active === id
                  ? "text-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {label}
            </button>
          ))}
          <button
            onClick={() => scrollTo("contact")}
            className="ml-4 px-5 py-2 bg-[#60a5fa] text-[#0b1120] font-semibold text-[14px] rounded-lg hover:bg-[#3b82f6] transition-colors"
          >
            Contact me
          </button>
        </nav>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(m => !m)}
          className="lg:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-gray-300 transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-gray-300 transition-all ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-gray-300 transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-[#0f172a]/95 backdrop-blur-md border-b border-[#1e293b] px-6 py-4 flex flex-col gap-2">
          {navLinks.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className="text-left py-3 px-4 text-[15px] text-gray-300 hover:text-white hover:bg-white/5 rounded transition-colors"
            >
              {label}
            </button>
          ))}
          <button
            onClick={() => scrollTo("contact")}
            className="mt-2 px-5 py-3 bg-[#60a5fa] text-[#0b1120] font-semibold text-[15px] rounded-lg"
          >
            Contact me
          </button>
        </div>
      )}
    </header>
  );
}
