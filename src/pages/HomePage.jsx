import React, { useEffect } from "react";
import Categories from "../components/home/Categories";
import Collection from "../components/home/Collection";
import FeaturedProducts from "../components/home/FeaturedProducts";
import NewArrival from "../components/home/NewArrival";
import HomeLayout from "./HomeLayout";
import axios from "axios";
import APIServices from "../api/api";

const HomePage = () => {
  //GET VISITOR DETAIL
  // useEffect(() => {
  //   axios
  //     .get(APIServices.getVisitiroDetails)
  //     .then((response) => {
  //       // handle success
  //       console.log(response.data);
  //     })
  //     .catch((error) => {
  //       // handle error
  //       console.log(error);
  //     });
  // }, []);
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
