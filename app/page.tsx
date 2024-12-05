"use client";

import React, { useState } from "react";
import confetti from "canvas-confetti";
import GradualSpacing from "@/components/ui/gradual-spacing";
import { NeonGradientCard } from "@/components/ui/neon-gradient-card";
import { Button } from "@/components/ui/button";

export default function Home() {
  const [showText, setShowText] = useState(false);

  const handleClick = () => {
    setShowText(true);
    const duration = 5 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    const randomInRange = (min: number, max: number) =>
      Math.random() * (max - min) + min;

    const interval = window.setInterval(() => {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
      });
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
      });
    }, 250);
  };

  return (
    <div className="mt-4 px-4">
      <GradualSpacing
        className="font-display text-center text-3xl font-bold -tracking-widest text-gray-600 dark:text-white sm:text-4xl md:text-6xl md:leading-[4rem] lg:text-7xl lg:leading-[5rem]"
        text="Happy       Birthday       Honey"
      />
      <div className="flex justify-center mt-6">
        <NeonGradientCard className="max-w-sm items-center justify-center text-center">
          <span className="pointer-events-none z-10 h-full whitespace-pre-wrap bg-gradient-to-br from-[#ff2975] from-35% to-[#00FFF1] bg-clip-text text-center text-2xl leading-none tracking-tighter text-transparent dark:drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]">
            Wishing you a day filled with laughter, love, and all the things
            that make you smile. 🎂🎉 May this year bring you closer to your
            dreams and surround you with endless joy and success. You're not
            just a wonderful batchmate but also an incredible person who lights
            up the room with your presence. Have an amazing day—you truly
            deserve it! 💫 Stay happy, stay blessed, and keep shining bright! ✨
          </span>
        </NeonGradientCard>
      </div>
      <div className="flex flex-col items-center mt-8">
        <Button
          onClick={handleClick}
          className="px-6 py-2 text-lg sm:text-xl bg-black text-white rounded-lg hover:bg-gray-800"
        >
          Open your gift
        </Button>
        {showText && (
          <div className="mt-4 text-center text-sm font-semibold text-gray-700 sm:text-base lg:text-lg">
            🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂 Itni mehnat kri h ab mai nhi
            janta party chahiye mujhe
          </div>
        )}
      </div>
    </div>
  );
}
