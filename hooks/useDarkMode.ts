import { useEffect, useState } from "react";

type Modes = "light" | "dark";

export const useDarkMode = (): {
  theme: Modes;
  toggleTheme: () => void;
  mountedComponent: boolean;
} => {
  const [theme, setTheme] = useState<Modes>("light");
  const [mountedComponent, setMountedComponent] = useState(false);

  const setMode = (mode: Modes) => {
    window.localStorage.setItem("theme", mode);
    setTheme(mode);
  };

  const toggleTheme = () => {
    theme === "light" ? setMode("dark") : setMode("light");
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme") as Modes;
    localTheme && setTheme(localTheme);
    setMountedComponent(true);
  }, []);
  return { theme, toggleTheme, mountedComponent };
};
