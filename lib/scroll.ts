import type Lenis from "lenis";

let lenis: Lenis | null = null;

export function setLenis(instance: Lenis | null) {
  lenis = instance;
}

// Smooth-scroll to a section id (or the top when id is omitted), through Lenis when it's running.
export function scrollToId(id?: string) {
  const target = id ? document.getElementById(id) : null;
  if (id && !target) return;
  if (lenis) {
    lenis.scrollTo(target ?? 0, { offset: id ? -72 : 0 });
  } else if (target) {
    target.scrollIntoView({ behavior: "smooth" });
  } else {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}
