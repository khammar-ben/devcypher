const TOOLS = [
  "Next.js", "React", "Laravel", "Node.js", "Spring Boot", "PostgreSQL",
  "MySQL", "Tailwind CSS", "Stripe", "n8n", "Make", "Zapier", "WhatsApp API",
];

export function TechMarquee() {
  const row = TOOLS.map(t => (
    <span key={t} className="flex items-center gap-10 text-gray-500 text-[15px] font-medium whitespace-nowrap">
      {t}
      <span className="w-1 h-1 rounded-full bg-[#2b3a55]" />
    </span>
  ));

  return (
    <div className="relative z-10 border-y border-[#1e293b]/70 py-6 overflow-hidden marquee-mask">
      <div className="flex gap-10 w-max marquee-tech">
        {row}
        <div aria-hidden className="flex gap-10">{row}</div>
      </div>
    </div>
  );
}
