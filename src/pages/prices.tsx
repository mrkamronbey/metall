import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import PriceAll from "@/components/price_all/price_all";
import Process from "@/components/process/process";
import Limited from "@/components/limited/limited";
import Layout from "@/layout/layout";
import { CategoryQuery } from "@/services/category.query";
import { CategoryType } from "@/interfaces/category.interface";

const Prices = ({categories}: PriceProps) => {
  return (
    <>
      <Head>
        <title>Цены</title>
        <meta name="description" content="Metallom Moscow" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout categories={categories}>
        <div className="pt-20">
          <PriceAll categories={categories} />
        </div>
        <hr/>
        <Process />
        <Limited />
      </Layout>
    </>
  );
};

export default Prices;

export const getServerSideProps: GetServerSideProps<PriceProps> = async () => {
  const categories = await CategoryQuery.getAllCategory()
  return {
    props: {
      categories
    }
  }
}

interface PriceProps {
  categories: CategoryType[]
}
