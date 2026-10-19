"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Ahmed Bennani",
    role: "Founder, BioMed Supplies",
    initials: "AB",
    color: "#60a5fa",
    quote: "devcypher delivered our e-commerce platform in under 2 weeks — clean code, fast performance, and the design exceeded our expectations. Our conversion rate jumped 40% in the first month.",
    project: "E-Commerce Store",
    stars: 5,
  },
  {
    name: "Sarah Lefranc",
    role: "Marketing Director, TechPath",
    initials: "SL",
    color: "#22d3ee",
    quote: "The landing page we got was absolutely stunning. I gave a rough idea and he delivered something 10x better. Responsive, fast, SEO-ready. Will definitely come back for more projects.",
    project: "Landing Page",
    stars: 5,
  },
  {
    name: "Karim Lahlou",
    role: "CEO, Nexora Logistics",
    initials: "KL",
    color: "#7cc0ff",
    quote: "Our internal dashboard was a mess before devcypher took over. He redesigned and rebuilt the entire app from scratch — now it's fast, beautiful, and the team actually enjoys using it.",
    project: "Dashboard Rebuild",
    stars: 5,
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 relative z-10 w-full">
      <p className="font-mono text-xs text-[#60a5fa] uppercase tracking-widest mb-3">// 05 — reviews</p>
      <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">What Clients Say</h2>
      <p className="text-gray-400 text-base mb-16 max-w-2xl">
        Feedback from people we have worked with.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.12 }}
            className="group bg-[#0f172a] border border-[#1e293b] rounded-xl p-6 flex flex-col hover:border-[#2b3a55] transition-colors relative overflow-hidden"
          >
            {/* Quote mark decoration */}
            <div className="absolute top-4 right-5 text-6xl font-sans text-[#1e293b] select-none pointer-events-none leading-none">"</div>

            {/* Stars */}
            <div className="flex gap-1 mb-4">
              {Array.from({ length: t.stars }).map((_, si) => (
                <Star key={si} className="w-4 h-4 fill-[#fef08a] text-[#fef08a]" />
              ))}
            </div>

            <p className="text-gray-400 text-[14px] leading-relaxed mb-6 flex-1 italic">"{t.quote}"</p>

            {/* Project badge */}
            <div
              className="inline-flex items-center gap-1.5 text-[11px] font-mono px-2.5 py-1 rounded-full border w-fit mb-5"
              style={{ color: t.color, borderColor: `${t.color}30`, background: `${t.color}08` }}
            >
              ✓ {t.project}
            </div>

            {/* Author */}
            <div className="flex items-center gap-3 pt-4 border-t border-[#1e293b]">
              <div
                className="w-10 h-10 rounded-full border-2 flex items-center justify-center font-bold text-sm font-mono shrink-0"
                style={{ borderColor: `${t.color}50`, background: `${t.color}15`, color: t.color }}
              >
                {t.initials}
              </div>
              <div>
                <div className="text-white font-bold text-[14px]">{t.name}</div>
                <div className="text-gray-500 text-[12px] font-mono">{t.role}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Stats bar */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4"
      >
        {[
          { val: "15+", label: "Projects Delivered" },
          { val: "100%", label: "Client Satisfaction" },
          { val: "< 14d", label: "Avg. Turnaround" },
          { val: "5.0 ★", label: "Average Rating" },
        ].map((s, i) => (
          <div key={i} className="bg-[#0f172a] border border-[#1e293b] rounded-xl p-5 text-center hover:border-[#2b3a55] transition-colors">
            <div className="text-2xl font-bold text-white mb-1">{s.val}</div>
            <div className="text-[11px] font-mono text-gray-500 uppercase tracking-wider">{s.label}</div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
