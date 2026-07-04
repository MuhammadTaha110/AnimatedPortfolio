import { useTheme } from "@/context/ThemeContext";

const WorkLogoPanel = ({
  href,
  logoSrc,
  logoSrcLight,
  logoSrcDark,
  logoAlt,
  label,
}) => {
  const { isDark } = useTheme();
  const resolvedLogoSrc =
    logoSrcLight && logoSrcDark
      ? isDark
        ? logoSrcDark
        : logoSrcLight
      : logoSrc;

  return (
    <div className="flex h-full w-full flex-col overflow-hidden bg-white dark:bg-black">
      <div className="flex flex-1 items-center justify-center bg-white p-8 dark:bg-black">
        <a href={href} target="_blank" rel="noreferrer" className="link">
          <img
            src={resolvedLogoSrc}
            alt={logoAlt}
            className="h-44 w-auto max-w-[90%] object-contain sm:h-48"
          />
        </a>
      </div>
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className="link block bg-purple py-3 text-center text-sm font-medium text-white transition-colors duration-300 hover:bg-indigo-dark"
      >
        {label}
      </a>
    </div>
  );
};

export default WorkLogoPanel;
