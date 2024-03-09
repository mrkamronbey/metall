import type { NextPage } from "next";
import Head from "next/head";
import Layout from "@/layout/layout";
import Seo from "@/layout/seo/seo";
import { GetServerSideProps } from "next";

// import { CompanyInfo, Hero, Limited, PriceList, Process, Second } from "@/components";
import CompanyInfo from "@/components/company_info/company_info";
import Hero from "@/components/hero/hero";
import Limited from "@/components/limited/limited";
import PriceList from "@/components/price_list/price_list";
import Process from "@/components/process/process";
import Second from "@/components/second/second";
import React from "react";
import { CategoryQuery } from "@/services/category.query";
import { CategoryType } from "@/interfaces/category.interface";
import { PricesQuery } from "@/services/price.query";
import { PricesType } from "@/interfaces/price.interface";

const Home = ({ categories, prices, tenPrice }: HomeProps) => {
  return (
    <>
      <Seo
        metaTitle={
          "Прием металлолома в Москве дорого круглосуточно в Втор Металл ММ"
        }
        metaDescription={
          "Прием металлолома прием металла круглосуточный в Москве и Московской области 24/7. Максимальные цены за 1 тонну для юр. лиц, физ. лиц. Бесплатная оценка стоимости лома по месту или в WhatsApp в Втор Металл ММ."
        }
        metaKeywords={"Прием металлолома"}
      >
        <Layout categories={categories}>
          <Hero />
          <Second categories={categories} />
          <hr />
          <Process />
          <hr />
          <PriceList prices={prices} tenPrice={tenPrice} />
          <Limited />
          <CompanyInfo />
        </Layout>
      </Seo>
    </>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
  const categories = await CategoryQuery.getAllCategory();
  const prices = await PricesQuery.getAllPrices();
  const tenPrice = await PricesQuery.getTenPrice();
  return {
    props: {
      categories,
      prices,
      tenPrice,
    },
  };
};

interface HomeProps {
  categories: CategoryType[];
  prices: PricesType[];
  tenPrice: PricesType[];
}
