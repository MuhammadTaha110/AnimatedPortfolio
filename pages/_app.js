import { poppins } from "public/fonts";
import { GoogleAnalytics } from "@next/third-parties/google";
import Meta from "@/components/Meta/Meta";
import { ThemeProvider } from "@/context/ThemeContext";
import "../styles/globals.scss";
import { GTAG } from "constants";

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Meta />
      <ThemeProvider>
        <main
          className={`${poppins.variable} font-sans`}
        >
          <Component {...pageProps} />
          <GoogleAnalytics gaId="GTM-59XN3PF4" />
        </main>
      </ThemeProvider>
    </>
  );
};

export default App;
