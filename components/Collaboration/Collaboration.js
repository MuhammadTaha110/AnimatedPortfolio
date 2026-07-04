import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { cn } from "@/utils/cn";

const TOP_MARQUEE_ITEMS = [
  { text: "Next.js", className: "text-white/70 dark:text-white/80" },
  { text: "React", className: "text-indigo-light" },
  { text: "TypeScript", className: "text-purple" },
  { text: "Node.js", className: "text-green" },
  { text: "PostgreSQL", className: "text-indigo-light" },
  { text: "REST APIs", className: "text-white/60 dark:text-white/70" },
];

const BOTTOM_MARQUEE_ITEMS = [
  { text: "Full-Stack Development", className: "text-purple" },
  { text: "Software Architecture", className: "text-indigo-light" },
  { text: "API Design", className: "text-green" },
  { text: "Tailwind CSS", className: "text-indigo-light" },
];

const MarqueeLine = ({ items, repeats = 5 }) => (
  <>
    {Array.from({ length: repeats }).map((_, repeatIndex) =>
      items.map((item, itemIndex) => (
        <span
          key={`${repeatIndex}-${itemIndex}-${item.text}`}
          className={cn("mx-2", item.className)}
        >
          {item.text}
        </span>
      ))
    )}
  </>
);

const Collaboration = ({ clientHeight }) => {
  const sectionRef = useRef(null);
  const quoteRef = useRef(null);

  useEffect(() => {
    const smallScreen = document.body.clientWidth < 767;

    const timeline = gsap.timeline({
      defaults: { ease: "none" },
    });

    timeline
      .from(quoteRef.current, { opacity: 0, duration: 2 })
      .to(quoteRef.current.querySelector(".text-strong"), {
        backgroundPositionX: "100%",
        duration: 1,
      });

    const slidingTl = gsap.timeline({ defaults: { ease: "none" } });

    slidingTl
      .to(sectionRef.current.querySelector(".ui-left"), {
        xPercent: smallScreen ? -500 : -150,
      })
      .from(
        sectionRef.current.querySelector(".ui-right"),
        { xPercent: smallScreen ? -500 : -150 },
        "<"
      );

    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "center bottom",
      end: "center center",
      scrub: 1,
      animation: timeline,
    });

    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top bottom",
      end: "bottom top",
      scrub: 1,
      animation: slidingTl,
    });

    return () => {
      timeline.kill();
      slidingTl.kill();
    };
  }, [quoteRef, sectionRef]);

  return (
    <section ref={sectionRef} className="relative my-40 w-full select-none">
      <div
        className={`${
          clientHeight > 650 ? "py-36" : "py-48"
        } section-container flex flex-col`}
      >
        <p className="ui-left transform-gpu whitespace-nowrap text-6xl font-semibold sm:text-7xl">
          <MarqueeLine items={TOP_MARQUEE_ITEMS} />
        </p>

        <h1
          ref={quoteRef}
          className="mt-6 text-center text-4xl font-medium md:mt-8 md:text-5xl"
        >
          Interested in{" "}
          <span className="text-strong text-gradient-interactive font-semibold">
            Collaboration
          </span>
          ?
        </h1>

        <p className="ui-right mt-6 transform-gpu whitespace-nowrap text-6xl font-semibold sm:mt-8 sm:text-7xl">
          <MarqueeLine items={BOTTOM_MARQUEE_ITEMS} />
        </p>
      </div>
    </section>
  );
};

export default Collaboration;
