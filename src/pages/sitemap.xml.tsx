import { GetServerSideProps } from "next";
import { format } from "date-fns";
import { CategoryQuery } from "@/services/category.query";
import { CategoryType } from "@/interfaces/category.interface";
import { PricesQuery } from "@/services/price.query";
import { PricesType } from "@/interfaces/price.interface";

export default function Sitemap() {
  return null;
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  ctx.res.setHeader("Content-Type", "text/xml");
  const xml = await generateSitemap();
  ctx.res.write(xml);
  ctx.res.end();
  return { props: {} };
};

async function generateSitemap(): Promise<string> {
  const category = await CategoryQuery.getAllCategory();
  const product = await PricesQuery.getAllPrices();
  const formattedXml = `<?xml version="1.0" encoding="UTF-8"?>
      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <url>
        <loc>https://vtormetallmm.ru/</loc>
        <lastmod>${format(new Date(), "yyyy-MM-dd")}</lastmod>
        </url>
      <url>
        <loc>https://vtormetallmm.ru/prices</loc>
        <lastmod>${format(new Date(), "yyyy-MM-dd")}</lastmod>
        </url>
    
        ${product?.map(
            (elem: PricesType) => `
        <url>
        <loc>https://vtormetallmm.ru/products/${elem.slug}</loc>
        <lastmod>${format(new Date(), "yyyy-MM-dd")}</lastmod>
      </url>
        `).join("")}
        ${category
          .map(
            (category: CategoryType) => `
          <url>
            <loc>https://vtormetallmm.ru/categories/${category.slug}</loc>
            <lastmod>${format(new Date(), "yyyy-MM-dd")}</lastmod>
          </url>
        `
          )
          .join("")}
      </urlset>`;
  return formattedXml;
}
