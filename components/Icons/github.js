import Image from "next/image";
import { useTheme } from "@/context/ThemeContext";
import { GITHUB_ICON_SRC } from "@/constants";

const IconGithub = () => {
  const { isDark } = useTheme();

  return (
    <Image
      src={isDark ? GITHUB_ICON_SRC.dark : GITHUB_ICON_SRC.light}
      alt=""
      width={24}
      height={24}
      className="h-6 w-6 object-contain"
      aria-hidden="true"
    />
  );
};

export default IconGithub;
