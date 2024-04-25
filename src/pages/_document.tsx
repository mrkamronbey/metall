import { Html, Head, Main, NextScript } from "next/document";
import { unbounded } from "@/fonts/fonts";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta httpEquiv="Content_Type" content="text/html" charSet="UTF-8" />
        <meta name="google-site-verification"  content="EVSoAgA6tcA0NDW1cEVogQAPdomutUQK9uAHMPjzNIc"/>
        <meta name="yandex-verification"  content="92a6c68f0aab0eac"/>
        <link href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
          rel="stylesheet" />
      </Head>
      <body className={unbounded.className}>
        Verification: 91fab66f8d2b49f7
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
