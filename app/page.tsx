import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Portfolio } from "@/components/Portfolio";
import { Process } from "@/components/Process";
import { Pricing } from "@/components/Pricing";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Motion } from "@/components/Motion";
import { Background } from "@/components/Background";
import { TechMarquee } from "@/components/TechMarquee";
import { CTA } from "@/components/CTA";

// Testimonials are hidden until there are real client quotes to show.
// To bring the section back: import { Testimonials } from "@/components/Testimonials" and add <Testimonials /> before <Contact />.

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#0b1120] text-gray-300 overflow-x-hidden">
      <Motion />
      <Background />
      <Navbar />
      <div className="relative z-10">
        <Hero />
        <TechMarquee />
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <Services />
          <Portfolio />
          <Process />
          <Pricing />
          <CTA />
          <Contact />
        </div>
        <Footer />
      </div>
    </main>
  );
}
