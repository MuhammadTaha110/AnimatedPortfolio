/* eslint-disable @next/next/no-img-element */
import { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import RightPattern from "../Pattern/RightPattern";
import { useTheme } from "@/context/ThemeContext";
import { cn } from "@/utils/cn";
import { MENULINKS, SKILLS, getSkillIconSrc } from "../../constants";

const SkillIcon = ({ skill, isDark }) => (
  <Image
    src={getSkillIconSrc(skill, isDark)}
    alt={skill}
    width={50}
    height={50}
    className={cn("size-[50px] shrink-0 object-contain", {
      "scale-[1.45]": skill === "sql",
    })}
  />
);

const Skills = () => {
  const sectionRef = useRef(null);
  const { isDark } = useTheme();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap
        .timeline({ defaults: { ease: "none" } })
        .from(
          sectionRef.current.querySelectorAll(".staggered-reveal"),
          { opacity: 0, duration: 0.5, stagger: 0.5 },
          "<"
        );

      ScrollTrigger.create({
        trigger: sectionRef.current.querySelector(".skills-wrapper"),
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
      id={MENULINKS[1].ref}
      className="w-full relative select-none mt-44"
    >
      <div className="section-container py-16 flex flex-col justify-center">
        <RightPattern className="absolute hidden right-0 bottom-2/4 w-2/12 max-w-xs md:block h-auto" />
        <div className="flex flex-col skills-wrapper">
          <div className="flex flex-col">
            <p className="uppercase tracking-widest text-gray-dark-3 dark:text-gray-light-1 staggered-reveal">
              SKILLS
            </p>
            <h1 className="text-6xl mt-2 font-medium text-gradient w-fit staggered-reveal">
              My Skills
            </h1>
            <h2 className="text-[1.65rem] font-medium md:max-w-2xl w-full mt-2 staggered-reveal">
              TypeScript, Next.js, React, Node.js, PostgreSQL, MongoDB, and
              RESTful API design — with a focus on accessible, performant UIs.{" "}
            </h2>
          </div>
          <div className="mt-10">
            <h3 className="uppercase tracking-widest text-gray-dark-3 dark:text-gray-light-2 font-medium text-base mb-4 staggered-reveal">
              LANGUAGES AND TOOLS
            </h3>
            <div className="flex items-center flex-wrap gap-6 staggered-reveal">
              {SKILLS.languagesAndTools.map((skill) => (
                <SkillIcon key={skill} skill={skill} isDark={isDark} />
              ))}
            </div>
          </div>
          <div className="mt-10">
            <h3 className="uppercase tracking-widest text-gray-dark-3 dark:text-gray-light-2 font-medium text-base mb-4 staggered-reveal">
              LIBRARIES AND FRAMEWORKS
            </h3>
            <div className="flex items-center flex-wrap gap-6 staggered-reveal">
              {SKILLS.librariesAndFrameworks.map((skill) => (
                <SkillIcon key={skill} skill={skill} isDark={isDark} />
              ))}
            </div>
          </div>
          <div className="mt-10">
            <h3 className="uppercase tracking-widest text-gray-dark-3 dark:text-gray-light-2 font-medium text-base mb-4 staggered-reveal">
              TOOLS & PLATFORMS
            </h3>
            <div className="flex flex-wrap gap-6 transform-gpu staggered-reveal">
              {SKILLS.other.map((skill) => (
                <SkillIcon key={skill} skill={skill} isDark={isDark} />
              ))}
            </div>
          </div>

          <div className="flex flex-wrap mt-10">
            <div className="staggered-reveal">
              <h3 className="uppercase tracking-widest text-gray-dark-3 dark:text-gray-light-2 font-medium text-base mb-4">
                DATABASES
              </h3>
              <div className="flex flex-wrap gap-6 transform-gpu">
                {SKILLS.databases.map((skill) => (
                  <SkillIcon key={skill} skill={skill} isDark={isDark} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
