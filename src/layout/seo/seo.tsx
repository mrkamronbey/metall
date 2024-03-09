import React from "react";
import { SeoProps } from "./seo.props";
import Head from "next/head";

const Seo = ({
  children,
  metaDescription,
  metaKeywords,
  metaTitle,
}: SeoProps) => {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{metaTitle}</title>
        <meta httpEquiv="X-UA-Compatible" content="ie-edge" />
        <meta name="keyword" content={metaKeywords} />
        <meta name="description" content={metaDescription} />
        <link rel="shortcut icon" href={"/favicon.svg"} type="image/x-icon" />
      </Head>
      {children}
    </>
  );
};

export default Seo;
