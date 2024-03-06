import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import Layout from "@/layout/layout";
import Product from "@/components/product_content/product";
import Limited from "@/components/limited/limited";
import Process from "@/components/process/process";
import { PricesQuery } from "@/services/price.query";
import { PriceDetails } from "@/interfaces/price.interface";
import { CategoryQuery } from "@/services/category.query";
import { CategoryType } from "@/interfaces/category.interface";

const ProductDetails = ({priceDetails, categories}: PriceDetailsProps) => {
  return (
    <>
      <Head>
        <title>Подробная информация о цене</title>
        <meta name="description" content="Metallom Moscow" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout categories={categories}>
        <Product priceDetails={priceDetails}/>
        <hr/>
        <Process />
        <Limited />
      </Layout>
    </>
  );
};

export default ProductDetails;

export const getServerSideProps: GetServerSideProps<PriceDetailsProps> = async({query}) => {
  const categories = await CategoryQuery.getAllCategory();
  const priceDetails = await PricesQuery.getPriceDetails(query.slug as string)
  return {
    props: {
      priceDetails,
      categories
    }
  }
}

interface PriceDetailsProps{
  priceDetails: PriceDetails
  categories: CategoryType[]
}
