"use client";

import React, { useState } from "react";
import { SectionHeader } from "@/components/SectionHeader";
import { SpotlightCard } from "@/components/SpotlightCard";
import { scrollToId } from "@/lib/scroll";

const FILTERS = ["All", "Landing Page", "E-Commerce", "Full-Stack", "Dashboard"];

const projects = [
  {
    title: "Happy Hostel",
    category: "Full-Stack",
    tags: ["Laravel 12", "React 18", "SQLite"],
    desc: "Room booking and guest management for a hostel. Staff see who's arriving, which rooms are free and how much came in this month.",
  },
  {
    title: "Email Intelligence Tool",
    category: "Full-Stack",
    tags: ["React", "Node.js", "IMAP"],
    desc: "Connects to a real mailbox, reads the email headers and sorts messages using rules you set.",
  },
  {
    title: "IT Asset Management",
    category: "Dashboard",
    tags: ["Spring Boot", "React", "MySQL"],
    desc: "Keeps track of a company's computers and equipment: who has what, when it was bought, and open incidents.",
  },
  {
    title: "Najah Access",
    category: "Full-Stack",
    tags: ["Node.js", "React", "PostgreSQL", "Prisma"],
    desc: "Platform for an education services business, with user accounts and an admin panel to manage the offers.",
  },
  {
    title: "Auraluna",
    category: "E-Commerce",
    tags: ["Next.js", "Stripe"],
    desc: "Online perfume shop with a product catalog, cart and Stripe payments. Designed for phones first.",
  },
  {
    title: "Developer Portfolio",
    category: "Landing Page",
    tags: ["Next.js", "Tailwind", "Framer Motion"],
    desc: "My earlier personal portfolio, with a terminal look and a working contact form.",
  },
];

export function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered = activeFilter === "All"
    ? projects
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="portfolio" className="py-24 w-full">
      <SectionHeader label="Portfolio" title="Some things I've built">
        A mix of client work and my own projects.
      </SectionHeader>

      <div className="flex items-center gap-2 flex-wrap mb-10">
        {FILTERS.map(f => (
          <button
            key={f}
            onClick={() => setActiveFilter(f)}
            className={`px-4 py-1.5 rounded-full text-[13px] transition-colors ${
              activeFilter === f
                ? "bg-[#60a5fa]/15 border border-[#60a5fa]/40 text-[#93c5fd]"
                : "border border-[#1e293b] text-gray-400 hover:border-[#2b3a55] hover:text-gray-200"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
        {filtered.map(proj => (
          <SpotlightCard key={proj.title}>
            <div className="p-6 flex flex-col h-full">
              <span className="text-[12px] text-gray-500 mb-2">{proj.category}</span>
              <h3 className="text-[17px] font-semibold text-white mb-2">{proj.title}</h3>
              <p className="text-gray-400 text-[14px] leading-relaxed mb-5 flex-1">{proj.desc}</p>
              <p className="text-[12px] text-gray-500">{proj.tags.join(" · ")}</p>
            </div>
          </SpotlightCard>
        ))}
      </div>

      <p className="mt-10 text-gray-400 text-sm">
        Want to see something closer to what you need?{" "}
        <button
          onClick={() => scrollToId("contact")}
          className="text-[#60a5fa] hover:underline"
        >
          Ask me
        </button>{" "}
        and I&apos;ll send you examples.
      </p>
    </section>
  );
}
