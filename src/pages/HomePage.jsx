import React from "react";
import FeaturedProducts from "../components/home/FeaturedProducts";
import Categories from "../components/home/Categories";
import Collection from "../components/home/Collection";
import NewArrival from "../components/home/NewArrival";
import HomeTop from "../components/home/HomeTop";
import NavMenuDesktop from "../components/common/NavMenuDesktop";

const HomePage = () => {
  return (
    <>
      <NavMenuDesktop />
      <HomeTop />
      <FeaturedProducts />
      <NewArrival />
      <Categories />
      <Collection />
    </>
  );
};

export default HomePage;
