/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import { Fade } from "react-reveal";
import { Howl } from "howler";
import Button from "../Button/Button";
import FooterBg from "./FooterBg/FooterBg";
import FooterCurve from "./FooterCurve/FooterCurve";
import Profiles from "../Profiles/Profiles";
import { useTheme } from "@/context/ThemeContext";
import { theme } from "tailwind.config";
import { MENULINKS } from "../../constants";

const Footer = () => {
  const { isDark } = useTheme();
  const [playbackRate, setPlaybackRate] = useState(0.75);

  const heartClickSound = new Howl({
    src: ["/sounds/glug-a.mp3"],
    rate: playbackRate,
    volume: 0.5,
  });

  const handleClick = () => {
    setPlaybackRate((rate) => rate + 0.1);
    heartClickSound.play();
  };

  return (
    <footer className="relative w-full select-none">
      <div
        className="w-full bg-cover"
        style={{
          backgroundImage: `linear-gradient(to right, ${theme.colors.indigo.light}, ${theme.colors.indigo.dark})`,
        }}
      >
        <FooterBg />
        <Fade bottom distance={"4rem"}>
          <div className="w-full pt-32">
            <div className="section-container z-10 flex flex-col items-center justify-end py-12">
              <h1 className="seq text-center text-3xl font-medium text-white md:text-4xl">
                Feel free to connect on social media.
              </h1>
              <div className="seq text-center [&_a]:border-white/40 [&_a]:bg-white/15 [&_a]:text-white [&_svg]:stroke-white">
                <Profiles />
              </div>
              <div className="seq pt-4 text-center">
                <Button
                  href={`#${MENULINKS[4].ref}`}
                  classes="link"
                  type="secondary"
                >
                  Let&apos;s Talk
                </Button>
              </div>
            </div>
          </div>
        </Fade>
        <FooterCurve />
      </div>
      <div className="bg-white px-4 py-10 dark:bg-black">
        <div className="section-container flex flex-col items-center">
          <div className="seq mb-6 flex justify-center">
            <img
              src={isDark ? "/darkmodelogo.png.png" : "/lightmodelogo.png"}
              alt="Muhammad Taha Talib"
              className="h-20 w-auto max-w-[280px] object-contain"
            />
          </div>
          <p className="seq text-center text-sm font-medium tracking-wide text-gray-dark-1 dark:text-white sm:text-base">
            Developed with{" "}
            <button onClick={handleClick} className="link cursor-none">
              <span className="block animate-bounce">❤️</span>
            </button>{" "}
            by{" "}
            <span className="text-gray-dark-1 dark:text-white">
              Muhammad Taha Talib
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
