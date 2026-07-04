import { Html, Head, Main, NextScript } from "next/document";

const themeScript = `
  (function () {
    try {
      document.documentElement.classList.add("dark");
    } catch (e) {}
  })();
`;

const Document = () => {
  return (
    <Html lang="en" className="dark">
      <Head />
      <body>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
