"use client";

import { FC, ReactNode, useRef } from "react";
import { motion, MotionValue, useScroll, useTransform } from "framer-motion";

import { cn } from "@/lib/utils";

interface TextRevealByWordProps {
  text: string[];
  className?: string;
}

export const TextRevealByWord: FC<TextRevealByWordProps> = ({
  text,
  className,
}) => {
  const targetRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const words = text.flatMap(line => line.split(" "));

  return (
    <div ref={targetRef} className={cn("relative z-0 h-[200vh]", className)}>
      <div
        className={
          "sticky top-1/2 -translate-y-1/2 mx-auto flex h-auto max-w-4xl items-center bg-transparent px-[1rem] py-[5rem]"
        }
      >
        <p
          ref={targetRef}
          className={
            "flex flex-col items-center justify-center p-5 text-3xl font-semibold tracking-tight text-foreground/20"
          }
        >
          {text.map((line, lineIndex) => {
             const wordsInLine = line.split(" ");
             const lineStartIndex = text.slice(0, lineIndex).reduce((acc, curr) => acc + curr.split(" ").length, 0);

            return (
              <span key={lineIndex} className="flex flex-wrap justify-center">
                 {wordsInLine.map((word, wordIndex) => {
                    const i = lineStartIndex + wordIndex;
                    const start = i / words.length;
                    const end = start + 1 / words.length;
                    return (
                        <Word key={i} progress={scrollYProgress} range={[start, end]}>
                        {word}
                        </Word>
                    );
                })}
              </span>
            )
          })}
        </p>
      </div>
    </div>
  );
};

interface WordProps {
  children: ReactNode;
  progress: MotionValue<number>;
  range: [number, number];
}

const Word: FC<WordProps> = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span className="relative mx-1">
      <span className={"absolute opacity-20"}>{children}</span>
      <motion.span
        style={{ opacity: opacity }}
        className={"text-foreground"}
      >
        {children}
      </motion.span>
    </span>
  );
};
