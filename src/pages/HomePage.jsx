import React from "react";
import Categories from "../components/home/Categories";
import Collection from "../components/home/Collection";
import FeaturedProducts from "../components/home/FeaturedProducts";
import NewArrival from "../components/home/NewArrival";
import Layout from "./Layout";

const HomePage = () => {
  return (
    <Layout>
      <FeaturedProducts />
      <NewArrival />
      <Categories />
      <Collection />
    </Layout>
  );
};

export default HomePage;
