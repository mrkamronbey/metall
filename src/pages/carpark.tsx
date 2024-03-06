import { CarParkType } from "@/interfaces/carpark.interface";
import { CategoryType } from "@/interfaces/category.interface";
import { CarParkQuery } from "@/services/carpark.query";
import { CategoryQuery } from "@/services/category.query";
import type { GetServerSideProps } from "next";
import Head from "next/head";
import React from 'react'
import Process from "@/components/process/process";
import Cars from "@/components/cars/cars";
import Layout from "@/layout/layout";


interface CarParkProps{
  carPark: CarParkType[]
  categories: CategoryType[]
}

const CarPark = ({categories, carPark}: CarParkProps) => {

  return (
    <>
      <Head>
        <title>Автопарк</title>
        <meta name="description" content="Metallom Moscow" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout categories={categories}>
        <div style={{paddingTop: "100px"}}>
        <Process />
        </div>
        <hr />
        {/* <CarParkInfo /> */}
        <Cars
         carPark={carPark}
         />
      </Layout>
    </>
  );
};

export default CarPark;

export const getServerSideProps : GetServerSideProps<CarParkProps> = async () => {
  const carPark = await CarParkQuery.getCars()
  const categories = await CategoryQuery.getAllCategory()
  return {
    props: {
      carPark,
      categories
    }
  }
}


