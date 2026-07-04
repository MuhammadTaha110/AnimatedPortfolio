import { useEffect, useLayoutEffect, useMemo, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Tabs from "./Tabs/Tabs";
import StickyScroll from "./StickyScroll/StickyScroll";
import LeftPattern from "../Pattern/LeftPattern";
import { MENULINKS, WORK_CONTENTS } from "../../constants";

const Work = ({ isDesktop }) => {
  const sectionRef = useRef(null);

  const tabItems = useMemo(
    () => [
      {
        title: "Geeks of Kolachi",
        value: "geeksOfKolachi",
        content: (
          <StickyScroll
            isDesktop={isDesktop}
            contentItems={WORK_CONTENTS.GEEKSOFKOLACHI}
          />
        ),
      },
      {
        title: "Freelance",
        value: "freelance",
        content: (
          <StickyScroll
            isDesktop={isDesktop}
            contentItems={WORK_CONTENTS.FREELANCE}
          />
        ),
      },
      {
        title: "SMIT",
        value: "smit",
        content: (
          <StickyScroll
            isDesktop={isDesktop}
            contentItems={WORK_CONTENTS.SMIT}
          />
        ),
      },
    ],
    [isDesktop]
  );

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap
        .timeline({ defaults: { ease: "none" } })
        .from(
          sectionRef.current.querySelectorAll(".staggered-reveal"),
          { opacity: 0, duration: 0.5, stagger: 0.5 },
          "<"
        );

      ScrollTrigger.create({
        trigger: sectionRef.current.querySelector(".work-wrapper"),
        start: "100px bottom",
        end: "center center",
        scrub: 0,
        animation: tl,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id={MENULINKS[3].ref}
      className="w-full relative select-none xs:mt-40 sm:mt-72 mb-96"
    >
      <LeftPattern className="absolute hidden left-0 -top-1/4 w-1/12 max-w-xs md:block h-auto" />
      <div className="section-container py-16 flex flex-col justify-center">
        <div className="flex flex-col work-wrapper">
          <div className="flex flex-col">
            <p className="uppercase tracking-widest text-gray-dark-3 dark:text-gray-light-1 staggered-reveal">
              WORK
            </p>
            <h1 className="text-6xl mt-2 font-medium text-gradient w-fit staggered-reveal">
              Experience
            </h1>
            <h2 className="text-[1.65rem] font-medium md:max-w-2xl w-full mt-2 staggered-reveal">
              2+ years across agency, freelance, and training — shipping
              production apps with measurable impact.{" "}
            </h2>
          </div>
          <Tabs tabItems={tabItems} />
        </div>
      </div>
    </section>
  );
};

export default Work;
