import { useEffect, useRef, useLayoutEffect } from "react";
import Typed from "typed.js";
import gsap from "gsap";
import Profiles from "../Profiles/Profiles";
import styles from "./Hero.module.scss";
import { CV_URL, HERO_EDUCATION, MENULINKS, METADATA, TYPED_STRINGS } from "../../constants";

const typedOptions = {
  strings: TYPED_STRINGS,
  typeSpeed: 45,
  startDelay: 900,
  backSpeed: 40,
  backDelay: 5000,
  loop: true,
  contentType: null,
  smartBackspace: true,
  showCursor: true,
  cursorChar: "|",
};

const WATERMARK_TEXT = "Software Engineer";

const Hero = () => {
  const sectionRef = useRef(null);
  const typedElementRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap
        .timeline({ defaults: { ease: "none" } })
        .to(sectionRef.current, { opacity: 1, duration: 1.2 })
        .from(
          sectionRef.current.querySelectorAll(".staggered-reveal"),
          { opacity: 0, y: 24, duration: 0.55, stagger: 0.12 },
          "<0.2"
        );
    });

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const typed = new Typed(typedElementRef.current, typedOptions);

    return () => typed.destroy();
  }, []);

  return (
    <section
      ref={sectionRef}
      id={MENULINKS[0].ref}
      className={`${styles.hero} relative mx-auto mb-12 w-full px-4 md:mb-20 md:px-12 xl:px-20 2xl:container`}
      style={{ opacity: 0 }}
    >
      <p className={styles.watermark} aria-hidden="true">
        {WATERMARK_TEXT.split("").map((char, index) => (
          <span key={`watermark-${index}`} className={styles.watermarkChar}>
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </p>
      <div className={styles.grid}>
        <div className={styles.leftColumn}>
          <h1 className={`${styles.heading} staggered-reveal text-gray-dark-1 dark:text-white`}>
            <span className={styles.headingIntro}>
           I&apos;m
           Muhammad{" "}
              <span className={styles.emphasize}>Taha</span> Talib,
            </span>
            <span className={styles.roleLine}>
              a{" "}
              <span
                ref={typedElementRef}
                className="text-indigo-light dark:text-indigo-light"
              />
            </span>
          </h1>

          <p className="staggered-reveal mt-6 max-w-md text-sm leading-relaxed text-gray-dark-3 dark:text-gray-light-3 md:text-base">
            {METADATA.description}
          </p>

          <div className={`${styles.leftWorkBlock} staggered-reveal`}>
            <p className={styles.sideLabel}>My Work</p>
            <p className={styles.leftSideText}>
              TestHub, ExBoard AI, Meerento, Medtrixo, and more — SaaS products
              and platforms built end-to-end with clean architecture.
            </p>
            <a
              href={`#${MENULINKS[2].ref}`}
              className={`${styles.sideLink} link`}
            >
              Browse Portfolio
              <span aria-hidden="true">→</span>
            </a>
          </div>

          <div className={`${styles.actionButtons} staggered-reveal`}>
            <a
              href={`#${MENULINKS[4].ref}`}
              className={`${styles.letsTalkButton} link`}
            >
              Let&apos;s Talk
            </a>
            <a
              href={CV_URL}
              className={`${styles.viewCvButton} link`}
              target="_blank"
              rel="noreferrer"
            >
              View CV
            </a>
          </div>
        </div>

        <div className={styles.rightColumn}>
          <div className="staggered-reveal">
            <p className={styles.sideLabel}>About Me</p>
            <p className={styles.sideText}>
              Full-Stack Software Engineer with 2+ years shipping production
              Next.js, React, and Node.js applications from Karachi, Pakistan.
            </p>
            <a
              href={`#${MENULINKS[1].ref}`}
              className={`${styles.sideLink} link`}
            >
              Learn More
              <span aria-hidden="true">→</span>
            </a>
          </div>

          <div className="staggered-reveal">
            <p className={styles.sideLabel}>Education</p>
            <p className={styles.sideText}>
              <span className="font-semibold text-gray-dark-1 dark:text-white">
                {HERO_EDUCATION.degree}
              </span>
              <br />
              {HERO_EDUCATION.institution} {HERO_EDUCATION.period}
            </p>
            <p className={`${styles.sideText} mt-3`}>{HERO_EDUCATION.focus}</p>
            <p className={`${styles.sideText} mt-3`}>{HERO_EDUCATION.capstone}</p>
          </div>

          <div className="staggered-reveal">
            <p className={styles.sideLabel}>Follow Me</p>
            <div className="text-gray-dark-1 dark:text-white">
              <Profiles />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
