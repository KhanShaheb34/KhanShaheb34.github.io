import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../components/global/globalStyles";
import { useDarkMode } from "../hooks/useDarkMode";
import { darkTheme, lightTheme } from "../themes";

function MyApp({ Component, pageProps }: AppProps) {
  const { theme, toggleTheme, mountedComponent } = useDarkMode();

  const themeMode = theme === "light" ? lightTheme : darkTheme;

  if (!mountedComponent) return <div />;

  return (
    <>
      <ThemeProvider theme={themeMode}>
        <GlobalStyle />
        <button onClick={() => toggleTheme()}>Toggle Theme</button>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
