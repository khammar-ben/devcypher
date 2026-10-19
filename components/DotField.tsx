"use client";

import { useEffect, useRef } from "react";

const GAP = 26;       // px between dots
const RADIUS = 150;   // cursor influence radius
const PUSH = 12;      // how far dots move away from the cursor

// Grid of dots that light up and move away from the cursor (similar to react-bits' Dot Grid).
export function DotField({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let w = 0, h = 0;
    let dots: { x: number; y: number; a: number }[] = [];
    const target = { x: -9999, y: -9999 };
    const mouse = { x: -9999, y: -9999 };
    let raf = 0;
    let visible = true;

    const resize = () => {
      const r = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = r.width; h = r.height;
      canvas.width = w * dpr; canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      dots = [];
      for (let y = GAP / 2; y < h; y += GAP) {
        for (let x = GAP / 2; x < w; x += GAP) {
          // fade dots out towards the edges and the bottom
          const nx = (x - w / 2) / (w / 2), ny = y / h;
          const a = Math.max(0, 1 - Math.hypot(nx * 0.9, ny * 1.1));
          if (a > 0.02) dots.push({ x, y, a });
        }
      }
      draw();
    };

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      for (const d of dots) {
        const dx = d.x - mouse.x, dy = d.y - mouse.y;
        const dist = Math.hypot(dx, dy) || 1;
        const t = Math.max(0, 1 - dist / RADIUS);
        const x = d.x + (dx / dist) * t * PUSH;
        const y = d.y + (dy / dist) * t * PUSH;
        ctx.beginPath();
        ctx.arc(x, y, 1.1 + t * 1.3, 0, Math.PI * 2);
        ctx.fillStyle = t > 0
          ? `rgba(96,165,250,${(0.2 + t * 0.75) * Math.max(d.a, 0.4)})`
          : `rgba(148,163,184,${0.24 * d.a})`;
        ctx.fill();
      }
    };

    const loop = () => {
      mouse.x += (target.x - mouse.x) * 0.15;
      mouse.y += (target.y - mouse.y) * 0.15;
      if (visible) draw();
      raf = requestAnimationFrame(loop);
    };

    const onMove = (e: PointerEvent) => {
      const r = canvas.getBoundingClientRect();
      target.x = e.clientX - r.left;
      target.y = e.clientY - r.top;
      if (mouse.x < -999) { mouse.x = target.x; mouse.y = target.y; }
    };
    const onLeave = () => { target.x = target.y = -9999; mouse.x = mouse.y = -9999; };

    const io = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; });
    io.observe(canvas);
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    resize();
    if (!reduce) {
      window.addEventListener("pointermove", onMove, { passive: true });
      document.addEventListener("pointerleave", onLeave);
      raf = requestAnimationFrame(loop);
    }

    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
      ro.disconnect();
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return <canvas ref={ref} aria-hidden className={`pointer-events-none ${className}`} />;
}
