import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import Layout from "@/layout/layout";
import Process from "@/components/process/process";
import Limited from "@/components/limited/limited";
import CategoryContent from "@/components/category_content/category_content";
import { CategoryQuery } from "@/services/category.query";
import { CategoryType } from "@/interfaces/category.interface";

const CategoryDetails = ({
  categories,
  categoryDetails,
}: CategoryDetailsProps) => {
  return (
    <>
      <Head>
        <title>Цены на металлолом</title>
        <meta name="description" content="Metallom Moscow" />
      </Head>
      <Layout categories={categories}>
        <CategoryContent categoryDetails={categoryDetails} />
        <hr />
        <Process />
        <Limited />
      </Layout>
    </>
  );
};

export default CategoryDetails;

export const getServerSideProps: GetServerSideProps<
  CategoryDetailsProps
> = async ({ query }) => {
  const categoryDetails = await CategoryQuery.getDetailCategory(
    query.slug as string
  );
  const categories = await CategoryQuery.getAllCategory();
  return {
    props: {
      categoryDetails,
      categories
    },
  };
};

interface CategoryDetailsProps {
  categoryDetails: CategoryType[];
  categories: CategoryType[]
}
