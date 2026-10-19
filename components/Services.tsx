"use client";

import React from "react";
import { Globe, ShoppingCart, Cpu, BarChart2, Workflow, Bot } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { SpotlightCard } from "@/components/SpotlightCard";

const services = [
  {
    icon: Globe,
    title: "Landing pages & business websites",
    desc: "A clear, fast site that explains what you do and makes it easy for people to call, message or book you.",
    features: ["Works well on phones", "Basic SEO", "Contact or booking form"],
  },
  {
    icon: ShoppingCart,
    title: "Online stores",
    desc: "Sell your products online with a catalog, cart and payment. You manage orders and stock from a simple admin page.",
    features: ["Card or cash on delivery", "Order management", "Stock tracking"],
  },
  {
    icon: Workflow,
    title: "Automation",
    desc: "If you copy the same data from one place to another every day, that can usually be automated. New leads go to your sheet or CRM, you get a WhatsApp or email alert, reports go out on their own.",
    features: ["Forms to Google Sheets or CRM", "Email and WhatsApp alerts", "Scheduled reports", "n8n, Make or Zapier"],
  },
  {
    icon: Bot,
    title: "Chatbots",
    desc: "A bot on WhatsApp or your website that answers common questions and collects the customer's details for you.",
    features: ["WhatsApp or website", "Answers FAQs", "Collects leads"],
  },
  {
    icon: Cpu,
    title: "Custom web apps",
    desc: "When off-the-shelf tools don't fit how you work: booking systems, client portals, internal tools, with logins and a proper database behind them.",
    features: ["User accounts and roles", "Database", "APIs"],
  },
  {
    icon: BarChart2,
    title: "Dashboards & redesigns",
    desc: "See your numbers in one place, or get your old website rebuilt so it loads fast and looks right on a phone.",
    features: ["Charts and KPIs", "Mobile-friendly rebuild"],
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 w-full">
      <SectionHeader label="Services" title="What I can do for you">
        Most of my work is websites. More and more of it is automation: small tools that save you a few hours every week.
      </SectionHeader>

      <div data-stagger className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
        {services.map(svc => {
          const Icon = svc.icon;
          return (
            <SpotlightCard key={svc.title}>
              <div className="p-6 flex flex-col h-full">
                <Icon className="w-6 h-6 text-[#60a5fa] mb-4" />
                <h3 className="text-[17px] font-semibold text-white mb-2">{svc.title}</h3>
                <p className="text-gray-400 text-[14px] leading-relaxed mb-5 flex-1">{svc.desc}</p>
                <ul className="space-y-1.5 text-[13px] text-gray-300">
                  {svc.features.map(f => (
                    <li key={f} className="flex gap-2">
                      <span className="text-[#60a5fa]">•</span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </SpotlightCard>
          );
        })}
      </div>
    </section>
  );
}
