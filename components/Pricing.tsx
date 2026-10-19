"use client";

import React from "react";
import { Check } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { scrollToId } from "@/lib/scroll";

const plans = [
  {
    id: "website",
    name: "Website",
    desc: "For a business that needs to look professional online and get contacted.",
    features: [
      "1 to 5 pages",
      "Looks good on phones",
      "Contact or booking form",
      "Basic SEO setup",
      "Usually ready in 1 to 2 weeks",
    ],
  },
  {
    id: "store",
    name: "Online store or web app",
    desc: "For selling online, taking bookings, or anything with user accounts.",
    features: [
      "Everything in Website",
      "Payments or booking system",
      "Admin page to manage orders and content",
      "One automation included (for example, new order to WhatsApp)",
    ],
  },
  {
    id: "custom",
    name: "Automation & custom work",
    desc: "Chatbots, workflows, dashboards and internal tools, priced by what they need to do.",
    features: [
      "Connect the tools you already use",
      "WhatsApp or website chatbot",
      "Dashboards and reports",
      "Can be added to an existing site",
    ],
  },
];

export function Pricing() {
  const scrollToContact = () => scrollToId("contact");

  return (
    <section id="pricing" className="py-24 w-full">
      <SectionHeader label="Pricing" title="What it costs">
        Every project is a bit different, so I quote each one after we talk. Here&apos;s roughly what each type of project includes.
      </SectionHeader>

      <div data-stagger className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {plans.map(plan => (
          <div key={plan.id} className="flex flex-col rounded-xl border border-[#1e293b] bg-[#0f172a] p-6">
            <h3 className="text-white font-semibold text-lg mb-2">{plan.name}</h3>
            <p className="text-gray-400 text-[14px] leading-relaxed mb-6">{plan.desc}</p>

            <ul className="flex flex-col gap-2.5 mb-8 flex-1">
              {plan.features.map(f => (
                <li key={f} className="flex items-start gap-2.5 text-[14px] text-gray-300">
                  <Check className="w-4 h-4 mt-0.5 shrink-0 text-[#60a5fa]" />
                  {f}
                </li>
              ))}
            </ul>

            <button
              onClick={scrollToContact}
              className="w-full py-2.5 rounded-lg border border-[#2b3a55] hover:border-[#60a5fa]/60 text-gray-200 text-sm transition-colors"
            >
              Ask for a price
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
