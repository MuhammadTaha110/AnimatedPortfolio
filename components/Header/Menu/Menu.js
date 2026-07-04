import { useEffect } from "react";
import { MENULINKS } from "../../../constants";
import { cn } from "@/utils/cn";

const Menu = ({ isOpen, onClose }) => {
  useEffect(() => {
    const anchorNodes = document.querySelectorAll('a[href^="#"]');

    const handleAnchorClick = () => {
      onClose();
    };

    anchorNodes.forEach((el) => {
      el.addEventListener("click", handleAnchorClick);
    });

    return () => {
      anchorNodes.forEach((el) => {
        el.removeEventListener("click", handleAnchorClick);
      });
    };
  }, [onClose]);

  return (
    <div
      className={cn(
        "menu fixed top-0 left-0 w-full h-full overflow-hidden flex items-center justify-center",
        {
          "is-open pointer-events-auto visible": isOpen,
          "pointer-events-none invisible": !isOpen,
        }
      )}
    >
      <div className="flex-none overflow-hidden flex items-center justify-center">
        <div
          className={cn(
            "text-center overflow-y-auto overflow-x-hidden flex flex-none justify-center items-center max-h-screen transition-opacity duration-300",
            {
              "opacity-100 delay-300": isOpen,
              "opacity-0": !isOpen,
            }
          )}
        >
          <ul className="list-none py-4 px-0 m-0 block max-h-screen">
            {MENULINKS.map((el) => (
              <li key={el.name} className="p-0 m-6 text-2xl block">
                <a
                  className="link relative inline font-mono font-bold text-5xl duration-300 hover:no-underline"
                  href={`#${el.ref}`}
                >
                  {el.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Menu;
