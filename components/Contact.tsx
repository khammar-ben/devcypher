"use client";

import React, { useState } from "react";
import { MapPin, Clock, MessageSquare } from "lucide-react";
import { InstagramIcon, INSTAGRAM_URL, INSTAGRAM_HANDLE } from "@/components/InstagramIcon";
import { SectionHeader } from "@/components/SectionHeader";

const inputClass =
  "w-full bg-[#0b1120] border border-[#1e293b] rounded-lg px-4 py-2.5 text-[15px] text-white placeholder:text-gray-500 outline-none focus:border-[#60a5fa]/60 transition-colors";
const labelClass = "block text-[13px] text-gray-300 mb-1.5";

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("idle");
    const form = e.currentTarget;
    const formData = new FormData(form);
    try {
      const res = await fetch("https://formsubmit.co/ajax/benalilou.elkhamar@gmail.com", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });
      const data = await res.json().catch(() => null);
      if (!res.ok || String(data?.success) !== "true") throw new Error("send failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 w-full mb-16">
      <SectionHeader label="Contact" title="Let's talk about your project">
        Tell me a bit about what you need. I&apos;ll reply within a day, usually with a few questions.
      </SectionHeader>

      <div className="flex flex-col lg:flex-row gap-10 w-full">

        {/* LEFT — Contact info */}
        <div className="w-full lg:w-5/12 flex flex-col gap-6">
          {[
            { icon: InstagramIcon, label: "Instagram", value: INSTAGRAM_HANDLE, href: INSTAGRAM_URL },
            { icon: MessageSquare, label: "Also on", value: "WhatsApp or Zoom" },
            { icon: MapPin, label: "Based in", value: "Morocco, working remotely" },
            { icon: Clock, label: "Reply time", value: "Within a day" },
          ].map(item => {
            const Icon = item.icon;
            return (
              <div key={item.label} className="flex items-start gap-4">
                <Icon className="w-5 h-5 mt-0.5 text-[#60a5fa] shrink-0" />
                <div>
                  <div className="text-[13px] text-gray-500">{item.label}</div>
                  {item.href ? (
                    <a href={item.href} target="_blank" rel="noopener noreferrer" className="text-[15px] text-white hover:text-[#60a5fa] transition-colors">{item.value}</a>
                  ) : (
                    <div className="text-[15px] text-white">{item.value}</div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* RIGHT — Form */}
        <form
          onSubmit={handleSubmit}
          className="w-full lg:w-7/12 bg-[#0f172a] border border-[#1e293b] rounded-xl p-6 md:p-8 flex flex-col gap-5"
        >
          <input type="text" name="_honey" style={{ display: "none" }} />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_subject" value="New project request (devcypher)" />

          <div className="flex flex-col sm:flex-row gap-4">
            <div className="w-full">
              <label htmlFor="c-name" className={labelClass}>Your name</label>
              <input id="c-name" type="text" name="name" required className={inputClass} />
            </div>
            <div className="w-full">
              <label htmlFor="c-email" className={labelClass}>Email</label>
              <input id="c-email" type="email" name="email" required className={inputClass} />
            </div>
          </div>

          <div>
            <label htmlFor="c-service" className={labelClass}>What do you need?</label>
            <select id="c-service" name="service" required className={inputClass}>
              <option value="">Choose one</option>
              <option>Website or landing page</option>
              <option>Online store</option>
              <option>Automation</option>
              <option>Chatbot</option>
              <option>Custom web app</option>
              <option>Dashboard or redesign</option>
              <option>Not sure yet</option>
            </select>
          </div>

          <div>
            <label htmlFor="c-budget" className={labelClass}>Budget (optional)</label>
            <select id="c-budget" name="budget" className={inputClass}>
              <option value="">I don&apos;t know yet</option>
              <option>Under 200€</option>
              <option>200€ to 500€</option>
              <option>500€ to 1000€</option>
              <option>1000€+</option>
            </select>
          </div>

          <div>
            <label htmlFor="c-message" className={labelClass}>About the project</label>
            <textarea
              id="c-message"
              name="message"
              required
              rows={5}
              placeholder="What does your business do, and what should the website or tool do for you?"
              className={`${inputClass} resize-none`}
            />
          </div>

          {status === "success" && (
            <p role="status" className="px-4 py-3 rounded-lg border border-[#4ade80]/30 bg-[#4ade80]/5 text-[#4ade80] text-sm">
              Thanks, I got your message. I&apos;ll get back to you within a day.
            </p>
          )}
          {status === "error" && (
            <p role="alert" className="px-4 py-3 rounded-lg border border-[#f87171]/30 bg-[#f87171]/5 text-[#f87171] text-sm">
              Something went wrong and your message wasn&apos;t sent. You can send me a message on Instagram at @devcypher_.
            </p>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="self-start px-6 py-3 rounded-lg bg-[#60a5fa] hover:bg-[#3b82f6] text-[#0b1120] font-semibold text-[15px] transition-colors disabled:opacity-60"
          >
            {isSubmitting ? "Sending..." : "Send message"}
          </button>
        </form>
      </div>
    </section>
  );
}
