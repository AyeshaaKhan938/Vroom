"use client";
import { useEffect, useState } from "react";
import VroomEvents from "./vroomEvents";
import VroomExperiences from "./vroomExperiences";
import VroomHero from "./vroomHero";

const Homepage = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrollHeight = window.innerHeight * 0.8; // scroll area for hero fade
      const currentScroll = Math.min(window.scrollY, scrollHeight);
      const progress = currentScroll / scrollHeight;
      setScrollProgress(progress);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* HERO SECTION - fades out and scales */}
      <div
        className="fixed inset-0 w-full z-10"
        style={{
          opacity: 1 - scrollProgress, // hero fades away
          transform: `scale(${1 - scrollProgress * 0.05})`,
          pointerEvents: scrollProgress > 0.95 ? "none" : "auto",
        }}
      >
        <VroomHero />
      </div>

      {/* SPACER to allow scroll over hero */}
      <div className="h-[80vh]" />

      {/* EVENTS SECTION - slides smoothly, no opacity change */}
      <div
        className="relative z-20 transition-transform duration-700 ease-out"
        style={{
          transform: `translateY(${scrollProgress < 1 ? (1 - scrollProgress) * 50 : 0}px)`,
          opacity: 1, // 👈 fixed (no fade)
        }}
      >
        <VroomEvents />
      </div>

      {/* EXPERIENCES SECTION - normal scroll */}
      <div className="relative z-30 bg-white">
        <VroomExperiences />
      </div>
    </>
  );
};

export default Homepage;
