import { useState, useRef } from "react";
import { useMotionValueEvent, useScroll, motion } from "framer-motion";
import DotPattern from "../DotPattern/DotPattern";
import { cn } from "@/utils/cn";

const StickyScroll = ({ contentItems }) => {
  const [activeCard, setActiveCard] = useState(0);
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    container: containerRef,
    offset: ["start start", "end start"],
  });

  const cardLength = contentItems.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = contentItems.map(
      (_, index) => index / cardLength - 0.1
    );

    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0
    );
    setActiveCard(closestBreakpointIndex);
  });

  return (
    <div className="relative">
      <DotPattern
        width={20}
        height={20}
        cx={1}
        cy={1}
        cr={1}
        className={cn(
          "pointer-events-none rounded-2xl fill-gray-dark-3/20 py-3 dark:fill-gray-light-3/15 [mask-image:linear-gradient(to_bottom_left,white,transparent,transparent)] md:px-0"
        )}
      />
      <div
        ref={containerRef}
        className="no-scrollbar flex h-[24rem] justify-center gap-6 overflow-y-auto rounded-2xl border border-gray-light-2 bg-white/90 p-4 shadow-lg backdrop-blur-sm dark:border-gray-dark-1 dark:bg-gray-dark-2/95 md:gap-10 md:p-6"
      >
        <div className="flex items-start px-2 md:px-4">
          <div className="max-w-2xl">
            {contentItems.map((item, index) => (
              <div key={item.title + index} className="my-8">
                <motion.h2
                  animate={{
                    opacity: activeCard === index ? 1 : 0.35,
                  }}
                  className="text-2xl font-bold text-gray-dark-1 dark:text-white"
                >
                  {item.title}
                </motion.h2>
                <motion.p
                  animate={{
                    opacity: activeCard === index ? 1 : 0.35,
                  }}
                  className="mt-4 max-w-sm text-lg text-gray-dark-3 dark:text-gray-light-2"
                >
                  {item.description}
                </motion.p>
              </div>
            ))}
            <div className="h-40" />
          </div>
        </div>
        <div className="sticky top-10 hidden h-64 w-80 shrink-0 overflow-hidden rounded-xl border border-gray-light-2 shadow-xl dark:border-gray-dark-1 lg:block">
          {contentItems[activeCard].content ?? null}
        </div>
      </div>
    </div>
  );
};

export default StickyScroll;
