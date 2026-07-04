import { useEffect, useRef } from "react";
import gsap from "gsap";

const Cursor = ({ isDesktop }) => {
  const cursor = useRef(null);
  const follower = useRef(null);

  useEffect(() => {
    if (!isDesktop || document.body.clientWidth <= 767) {
      return undefined;
    }

    const cursorEl = cursor.current;
    const followerEl = follower.current;

    cursorEl.classList.remove("hidden");
    followerEl.classList.remove("hidden");

    gsap.set([cursorEl, followerEl], {
      xPercent: -50,
      yPercent: -50,
    });

    const moveCircle = (e) => {
      gsap.to(cursorEl, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
        ease: "none",
      });
      gsap.to(followerEl, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.3,
        ease: "none",
      });
    };

    const hover = () => {
      gsap.to(cursorEl, {
        scale: 0.5,
        duration: 0.3,
      });
      gsap.to(followerEl, {
        scale: 3,
        duration: 0.3,
      });
    };

    const unHover = () => {
      gsap.to(cursorEl, {
        scale: 1,
        duration: 0.3,
      });
      gsap.to(followerEl, {
        scale: 1,
        duration: 0.3,
      });
    };

    document.addEventListener("mousemove", moveCircle);

    const linkElements = document.querySelectorAll(".link");

    linkElements.forEach((el) => {
      el.addEventListener("mouseenter", hover);
      el.addEventListener("mouseleave", unHover);
    });

    return () => {
      document.removeEventListener("mousemove", moveCircle);

      linkElements.forEach((el) => {
        el.removeEventListener("mouseenter", hover);
        el.removeEventListener("mouseleave", unHover);
      });
    };
  }, [isDesktop]);

  return (
    <>
      <div
        ref={cursor}
        className="pointer-events-none fixed left-0 top-0 z-50 hidden h-8 w-8 select-none rounded-full bg-purple dark:bg-white dark:mix-blend-difference"
      />
      <div
        ref={follower}
        className="pointer-events-none fixed left-0 top-0 z-50 hidden h-20 w-20 select-none rounded-full border-2 border-purple/25 bg-purple/5 dark:border-white/20 dark:bg-white/[0.02]"
      />
    </>
  );
};

export default Cursor;
