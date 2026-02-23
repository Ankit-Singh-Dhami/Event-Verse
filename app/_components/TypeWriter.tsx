"use client";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";

export function TypewriterEffectSmoothDemo() {
  const words = [
    { text: "Discover" },
    { text: "College" },
    { text: "Events" },
    { text: "with" },
    {
      text: "Event Verse.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center h-[20rem]">
      <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-base">
        Your campus. Your events. One powerful platform.
      </p>

      <TypewriterEffectSmooth words={words} />

      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4 mt-6">
        <button className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm">
          Explore Events
        </button>

        <button className="w-40 h-10 rounded-xl bg-white text-black border border-black text-sm">
          Sign Up
        </button>
      </div>
    </div>
  );
}
