import React from "react";
import Categories from "../components/home/Categories";
import Collection from "../components/home/Collection";
import FeaturedProducts from "../components/home/FeaturedProducts";
import NewArrival from "../components/home/NewArrival";
import HomeLayout from "./HomeLayout";

const HomePage = () => {
  return (
    <HomeLayout>
      <FeaturedProducts />
      <NewArrival />
      <Categories />
      <Collection />
    </HomeLayout>
  );
};

export default HomePage;
