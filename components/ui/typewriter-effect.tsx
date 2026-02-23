"use client";

import { cn } from "@/lib/utils";
import { motion, stagger, useAnimate, useInView } from "motion/react";
import { useEffect } from "react";

/* ========================= */
/*      TYPEWRITER EFFECT    */
/* ========================= */

export const TypewriterEffect = ({
  words,
  className,
  cursorClassName,
}: {
  words: {
    text: string;
    className?: string;
  }[];
  className?: string;
  cursorClassName?: string;
}) => {
  const wordsArray = words.map((word) => ({
    ...word,
    text: word.text.split(""),
  }));

  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);

  useEffect(() => {
    if (isInView) {
      animate(
        "span",
        {
          display: "inline-block",
          opacity: 1,
          width: "fit-content",
        },
        {
          duration: 0.3,
          delay: stagger(0.05),
          ease: "easeInOut",
        },
      );
    }
  }, [isInView]);

  return (
    <div
      className={cn(
        "text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-center",
        className,
      )}
    >
      <motion.div ref={scope} className="inline">
        {wordsArray.map((word, idx) => (
          <div key={`word-${idx}`} className="inline-block">
            {word.text.map((char, index) => (
              <motion.span
                key={`char-${index}`}
                className={cn(
                  "dark:text-white text-black opacity-0 hidden",
                  word.className,
                )}
              >
                {char}
              </motion.span>
            ))}
            &nbsp;
          </div>
        ))}
      </motion.div>

      {/* Cursor */}
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className={cn(
          "inline-block ml-2 rounded-sm w-[4px] h-6 sm:h-8 md:h-10 lg:h-12 xl:h-14 bg-blue-500",
          cursorClassName,
        )}
      />
    </div>
  );
};

/* ============================== */
/*   TYPEWRITER EFFECT SMOOTH    */
/* ============================== */

export const TypewriterEffectSmooth = ({
  words,
  className,
  cursorClassName,
}: {
  words: {
    text: string;
    className?: string;
  }[];
  className?: string;
  cursorClassName?: string;
}) => {
  const wordsArray = words.map((word) => ({
    ...word,
    text: word.text.split(""),
  }));

  const renderWords = () => (
    <>
      {wordsArray.map((word, idx) => (
        <div key={`word-${idx}`} className="inline-block">
          {word.text.map((char, index) => (
            <span
              key={`char-${index}`}
              className={cn("dark:text-white text-black", word.className)}
            >
              {char}
            </span>
          ))}
          &nbsp;
        </div>
      ))}
    </>
  );

  return (
    <div className={cn("flex items-center justify-center my-6", className)}>
      <motion.div
        className="overflow-hidden"
        initial={{ width: "0%" }}
        whileInView={{ width: "fit-content" }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          delay: 0.5,
        }}
      >
        <div className="text-xl sm:text-3xl md:text-3xl lg:text-3xl xl:text-5xl font-bold whitespace-nowrap">
          {renderWords()}
        </div>
      </motion.div>

      {/* Cursor */}
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className={cn(
          "ml-2 rounded-sm w-[4px] h-6 sm:h-8 md:h-10 lg:h-12 xl:h-14 bg-blue-500",
          cursorClassName,
        )}
      />
    </div>
  );
};
