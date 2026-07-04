import { createContext, useCallback, useContext, useEffect, useState } from "react";

const THEME_STORAGE_KEY = "portfolio-theme";

export const THEME = {
  LIGHT: "light",
  DARK: "dark",
};

const ThemeContext = createContext({
  theme: THEME.DARK,
  toggleTheme: () => {},
  isDark: true,
});

const applyTheme = (theme) => {
  const root = document.documentElement;

  if (theme === THEME.DARK) {
    root.classList.add("dark");
  } else {
    root.classList.remove("dark");
  }
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(THEME.DARK);

  useEffect(() => {
    const storedTheme = localStorage.getItem(THEME_STORAGE_KEY);
    const initialTheme =
      storedTheme === THEME.LIGHT || storedTheme === THEME.DARK
        ? storedTheme
        : THEME.DARK;

    setTheme(initialTheme);
    applyTheme(initialTheme);
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme((currentTheme) => {
      const nextTheme =
        currentTheme === THEME.DARK ? THEME.LIGHT : THEME.DARK;

      localStorage.setItem(THEME_STORAGE_KEY, nextTheme);
      applyTheme(nextTheme);

      return nextTheme;
    });
  }, []);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
        isDark: theme === THEME.DARK,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
