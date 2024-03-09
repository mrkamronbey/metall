import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import PriceAll from "@/components/price_all/price_all";
import Process from "@/components/process/process";
import Limited from "@/components/limited/limited";
import Layout from "@/layout/layout";
import { CategoryQuery } from "@/services/category.query";
import { CategoryType } from "@/interfaces/category.interface";
import Seo from "@/layout/seo/seo";

const Prices = ({categories}: PriceProps) => {
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
        <div className="pt-20">
          <PriceAll categories={categories} />
        </div>
        <hr/>
        <Process />
        <Limited />
      </Layout>
     </Seo>
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
