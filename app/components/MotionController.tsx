"use client";

import { useEffect } from "react";

const REVEAL_SELECTOR = "[data-motion-reveal], [data-motion-item]";
const PARALLAX_SELECTOR = "[data-motion-parallax]";

export function MotionController() {
  useEffect(() => {
    const root = document.documentElement;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const revealItems = [...document.querySelectorAll<HTMLElement>(REVEAL_SELECTOR)];

    if (reducedMotion.matches) {
      root.classList.add("motion-reduced");
      revealItems.forEach((item) => item.classList.add("is-visible"));

      return () => root.classList.remove("motion-reduced");
    }

    root.classList.add("motion-ready");

    document.querySelectorAll<HTMLElement>("[data-motion-group]").forEach((group) => {
      group.querySelectorAll<HTMLElement>("[data-motion-item]").forEach((item, index) => {
        item.style.setProperty("--motion-delay", `${Math.min(index * 85, 425)}ms`);
      });
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      {
        rootMargin: "0px 0px -10% 0px",
        threshold: 0.12,
      },
    );

    revealItems.forEach((item) => observer.observe(item));

    const parallaxItems = [...document.querySelectorAll<HTMLElement>(PARALLAX_SELECTOR)];
    let animationFrame = 0;

    const updateParallax = () => {
      animationFrame = 0;
      const viewportCenter = window.innerHeight / 2;

      parallaxItems.forEach((item) => {
        const bounds = item.getBoundingClientRect();
        const itemCenter = bounds.top + bounds.height / 2;
        const distance = (itemCenter - viewportCenter) / (window.innerHeight + bounds.height);
        const progress = Math.max(-1, Math.min(1, distance * 2));

        item.style.setProperty("--motion-parallax", progress.toFixed(3));
      });
    };

    const scheduleParallax = () => {
      if (animationFrame) return;
      animationFrame = window.requestAnimationFrame(updateParallax);
    };

    updateParallax();
    window.addEventListener("scroll", scheduleParallax, { passive: true });
    window.addEventListener("resize", scheduleParallax);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", scheduleParallax);
      window.removeEventListener("resize", scheduleParallax);
      if (animationFrame) window.cancelAnimationFrame(animationFrame);
      root.classList.remove("motion-ready");
    };
  }, []);

  return <span className="motion-controller" data-motion-controller="jarid" aria-hidden="true" />;
}
