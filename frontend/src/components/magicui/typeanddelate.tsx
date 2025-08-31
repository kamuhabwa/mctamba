"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion"; // Assuming motion/react is framer-motion
import type { MotionProps } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface TypeAndDeleteAnimationProps extends MotionProps {
  words: string[];
  className?: string;
  duration?: number; // Duration per character (ms)
  delay?: number; // Initial delay before starting (ms)
  pauseDuration?: number; // Pause duration after typing before deleting (ms)
  as?: React.ElementType;
  startOnView?: boolean;
}

export function TypeAndDeleteAnimation({
  words,
  className,
  duration = 100,
  delay = 0,
  pauseDuration = 1000,
  as: Component = "div",
  startOnView = false,
  ...props
}: TypeAndDeleteAnimationProps) {
  const MotionComponent = motion.create(Component, {
    forwardMotionProps: true,
  });

  const [displayedText, setDisplayedText] = useState<string>("");
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [started, setStarted] = useState(false);
  const elementRef = useRef<HTMLElement | null>(null);

  // Handle startOnView and initial delay
  useEffect(() => {
    if (!startOnView) {
      const startTimeout = setTimeout(() => {
        setStarted(true);
      }, delay);
      return () => clearTimeout(startTimeout);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setStarted(true);
          }, delay);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [delay, startOnView]);

  // Handle typing and deleting animation
  useEffect(() => {
    if (!started) return;

    let timeout: NodeJS.Timeout;

    if (isTyping) {
      // Typing phase
      if (displayedText.length < words[currentWordIndex].length) {
        timeout = setTimeout(() => {
          setDisplayedText(
            words[currentWordIndex].slice(0, displayedText.length + 1)
          );
        }, duration);
      } else {
        // Pause before deleting
        timeout = setTimeout(() => {
          setIsTyping(false);
        }, pauseDuration);
      }
    } else {
      // Deleting phase
      if (displayedText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayedText(displayedText.slice(0, -1));
        }, duration / 2); // Faster deletion for smoother effect
      } else {
        // Move to next word
        setIsTyping(true);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayedText, isTyping, started, currentWordIndex, words, duration, pauseDuration]);

  return (
    <MotionComponent
      ref={elementRef}
      className={cn(
        "text-4xl font-bold leading-[5rem] tracking-[-0.02em]",
        className
      )}
      {...props}
    >
      {displayedText}
    </MotionComponent>
  );
}