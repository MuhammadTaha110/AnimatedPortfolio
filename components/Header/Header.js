import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { Howl } from "howler";
import SoundBar from "./SoundBar/SoundBar";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import Menu from "./Menu/Menu";
import { useTheme } from "@/context/ThemeContext";
import { cn } from "@/utils/cn";

const multiPop = new Howl({
  src: ["/sounds/multi-pop.mp3"],
});

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isDark } = useTheme();

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen((open) => {
      if (!open) {
        multiPop.play();
      }
      return !open;
    });
  }, []);

  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === "Escape" && isMenuOpen) {
        closeMenu();
      }
    },
    [closeMenu, isMenuOpen]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <>
      <Menu isOpen={isMenuOpen} onClose={closeMenu} />

      <nav className="relative w-full fixed top-0 z-[250] select-none bg-gradient-to-b from-gray-light-1/95 to-transparent pt-4 dark:from-black dark:to-transparent transition-all duration-300">
        <div className="flex justify-between items-center section-container">
          <a href="#home" className="link relative z-[210] shrink-0">
            <Image
              src={isDark ? "/darkmodelogo.png.png" : "/lightmodelogo.png"}
              alt="Muhammad Taha Talib"
              width={180}
              height={102}
              priority
              className="h-14 w-auto object-contain sm:h-16"
            />
          </a>

          <div className="relative z-[300] flex shrink-0 items-center gap-4">
            <SoundBar />
            <div className="flex items-center gap-2">
              <ThemeToggle />
              <button
                type="button"
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={isMenuOpen}
                onClick={toggleMenu}
                className={cn(
                  "link relative z-[300] flex h-9 w-9 shrink-0 flex-col items-center justify-center gap-1 rounded-full bg-purple text-white shadow-lg transition-all duration-300 hover:bg-indigo-dark",
                  {
                    "rotate-0": isMenuOpen,
                  }
                )}
              >
                <span
                  className={cn("block h-0.5 w-3 bg-white transition-transform duration-300", {
                    "translate-y-2 rotate-45": isMenuOpen,
                  })}
                />
                <span
                  className={cn("block h-0.5 w-3 bg-white transition-opacity duration-300", {
                    "opacity-0": isMenuOpen,
                  })}
                />
                <span
                  className={cn("block h-0.5 w-3 bg-white transition-transform duration-300", {
                    "-translate-y-2 -rotate-45": isMenuOpen,
                  })}
                />
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
