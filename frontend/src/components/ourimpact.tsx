
"use client";

import React, { forwardRef, useRef } from "react";
import { cn } from "@/lib/utils";
import { AnimatedBeam } from "./magicui/animated-beam";
import { FlickeringGrid } from "./magicui/flickering-grid";
import { Link } from "@tanstack/react-router";

const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => (
  <div
    ref={ref}
    className={cn(
      "z-20 flex size-20 items-center justify-center rounded-full border-2 bg-white p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
      className
    )}
  >
    {children}
  </div>
));
Circle.displayName = "Circle";

export function OurImpact() {
  const containerRef = useRef<HTMLDivElement>(null);
  const centerRef = useRef<HTMLDivElement>(null);
  const topRef = useRef<HTMLDivElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  return (
    <section className="relative w-full py-20 bg-indigo-900 text-white overflow-hidden">
      {/* Flickering Grid Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <FlickeringGrid
          className="w-full h-full"
          squareSize={4}
          gridGap={6}
          color="#6B7280"
          maxOpacity={0.5}
          flickerChance={0.1}
        />
      </div>

      {/* Header */}
      <div className="relative z-10 text-center mb-12 px-4">
        <h2 className="text-4xl font-bold mb-4">Our Impact</h2>
        <p className="text-lg max-w-3xl mx-auto">
          Explore VikaCodes’ curated showcase of digital innovation. From robust
          applications to client-centered digital platforms, each product
          reflects our unwavering dedication to transforming visions into
          real-world success.
        </p>
      </div>

      {/* Impact Grid */}
      <div
        ref={containerRef}
        className="relative z-10 mx-auto flex h-[420px] w-full max-w-5xl items-center justify-center"
      >
        {/* Animated Beams Behind */}
        <div className="absolute inset-0 z-0">
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={topRef}
            toRef={centerRef}
            curvature={60}
            startXOffset={10}
          />
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={leftRef}
            toRef={centerRef}
            curvature={40}
            startXOffset={10}
          />
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={rightRef}
            toRef={centerRef}
            curvature={-40}
            startXOffset={10}
          />
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={bottomRef}
            toRef={centerRef}
            curvature={-60}
            startXOffset={10}
            endYOffset={12}
          />
        </div>

        {/* Center Icon - VikaCodes */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
          <Circle ref={centerRef}>
            <Link to="/about">
              <img
                src="/vikacodes.png"
                alt="VikaCodes"
                className="h-12 w-auto"
              />
            </Link>
          </Circle>
        </div>

        {/* Top Product */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 z-20">
          <Circle ref={topRef}>
            <Link to="/about">
              <img
                src="/vikaPOS.png"
                alt="vikaPOS"
                className="h-20 w-auto"
              />
            </Link>
          </Circle>
        </div>

        {/* Left Product */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 z-20">
          <Circle ref={leftRef}>
            <Link to="/about">
              <img
                src="/karisma.png"
                alt="Karisma"
                className="h-12 w-auto"
              />
            </Link>
          </Circle>
        </div>

        {/* Right Product */}
        <div className="absolute top-1/2 right-0 -translate-y-1/2 z-20">
          <Circle ref={rightRef}>
            <Link to="/about">
              <img
                src="/e-soko.png"
                alt="eSoko"
                className="h-12 w-auto"
              />
            </Link>
          </Circle>
        </div>

        {/* Bottom Product */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-20">
          <Circle ref={bottomRef}>
            <Link to="/about">
              <img
                src="/progress.png"
                alt="Progress Tracker"
                className="h-12 w-auto"
              />
            </Link>
          </Circle>
        </div>
      </div>
    </section>
  );
}
