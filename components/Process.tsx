import React from "react";
import { SectionHeader } from "@/components/SectionHeader";

const steps = [
  {
    title: "We talk",
    desc: "You tell me what you need, on WhatsApp, email or a quick call. I ask questions until I understand the business, not just the website.",
  },
  {
    title: "You get a plan and a price",
    desc: "I send you what I'll build, how long it takes and what it costs. No work starts until you agree.",
  },
  {
    title: "I build, you follow along",
    desc: "You get a preview link early on, so you can see the real thing and tell me what to change while it's still easy.",
  },
  {
    title: "Launch and handover",
    desc: "I put it online, set up the domain and email, and show you how to manage it. The accounts and the code are yours.",
  },
];

export function Process() {
  return (
    <section id="process" className="py-24 w-full">
      <SectionHeader label="Process" title="How working with me looks" />

      <div className="relative">
        <div aria-hidden data-draw className="hidden lg:block absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-[#60a5fa] via-[#22d3ee] to-[#60a5fa] z-10" />
        <ol data-stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((step, i) => (
          <li key={step.title} className="border-t border-[#2b3a55] pt-5">
            <span className="block text-[#60a5fa] font-semibold text-sm mb-3">Step {i + 1}</span>
            <h3 className="text-white font-semibold text-[17px] mb-2">{step.title}</h3>
            <p className="text-gray-400 text-[14px] leading-relaxed">{step.desc}</p>
          </li>
        ))}
        </ol>
      </div>
    </section>
  );
}
