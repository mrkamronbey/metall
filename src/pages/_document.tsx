import { Html, Head, Main, NextScript } from "next/document";
import { unbounded } from "@/fonts/fonts";

export default function Document() {
  return (
    <Html lang="en">
       <Head>
        <link  href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
          rel="stylesheet" />
      </Head>
      <body className={unbounded.className}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
