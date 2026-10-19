"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { setLenis } from "@/lib/scroll";

gsap.registerPlugin(ScrollTrigger, SplitText);

/**
 * Smooth scrolling (Lenis) + scroll animations (GSAP), mounted once on the page.
 *  - [data-split]   headline: words rise in one after another
 *  - [data-reveal]  element fades up when it scrolls into view
 *  - [data-stagger] direct children fade up one after another
 *  - [data-parallax] element drifts slower than the scroll (value = strength, e.g. "0.15")
 *  - [data-draw]     line grows from left to right while scrolling through it
 *  - [data-magnetic] button leans towards the cursor
 */
export function Motion() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const lenis = new Lenis({ duration: 1.1, smoothWheel: true });
    setLenis(lenis);
    lenis.on("scroll", ScrollTrigger.update);
    const tick = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    const ctx = gsap.context(() => {
      document.querySelectorAll<HTMLElement>("[data-split]").forEach(el => {
        const split = SplitText.create(el, { type: "words", mask: "words" });
        gsap.from(split.words, { yPercent: 110, duration: 0.9, ease: "power4.out", stagger: 0.06, delay: 0.1 });
      });

      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach(el => {
        gsap.from(el, {
          y: 28, autoAlpha: 0, duration: 0.8, ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 88%", once: true },
        });
      });

      gsap.utils.toArray<HTMLElement>("[data-stagger]").forEach(el => {
        gsap.from(el.children, {
          y: 32, autoAlpha: 0, duration: 0.7, ease: "power3.out", stagger: 0.08,
          scrollTrigger: { trigger: el, start: "top 85%", once: true },
        });
      });

      gsap.utils.toArray<HTMLElement>("[data-parallax]").forEach(el => {
        const strength = parseFloat(el.dataset.parallax || "0.15");
        gsap.to(el, {
          yPercent: -strength * 100, ease: "none",
          scrollTrigger: { trigger: el, start: "top bottom", end: "bottom top", scrub: true },
        });
      });

      gsap.utils.toArray<HTMLElement>("[data-draw]").forEach(el => {
        gsap.fromTo(el, { scaleX: 0 }, {
          scaleX: 1, ease: "none", transformOrigin: "left center",
          scrollTrigger: { trigger: el, start: "top 85%", end: "top 35%", scrub: true },
        });
      });
    });

    // Magnetic buttons (mouse only)
    const cleanups: (() => void)[] = [];
    if (window.matchMedia("(pointer: fine)").matches) {
      document.querySelectorAll<HTMLElement>("[data-magnetic]").forEach(el => {
        const xTo = gsap.quickTo(el, "x", { duration: 0.5, ease: "power3.out" });
        const yTo = gsap.quickTo(el, "y", { duration: 0.5, ease: "power3.out" });
        const move = (e: PointerEvent) => {
          const r = el.getBoundingClientRect();
          xTo((e.clientX - (r.left + r.width / 2)) * 0.3);
          yTo((e.clientY - (r.top + r.height / 2)) * 0.3);
        };
        const leave = () => { xTo(0); yTo(0); };
        el.addEventListener("pointermove", move);
        el.addEventListener("pointerleave", leave);
        cleanups.push(() => {
          el.removeEventListener("pointermove", move);
          el.removeEventListener("pointerleave", leave);
        });
      });
    }

    return () => {
      cleanups.forEach(fn => fn());
      ctx.revert();
      gsap.ticker.remove(tick);
      lenis.destroy();
      setLenis(null);
    };
  }, []);

  return null;
}
