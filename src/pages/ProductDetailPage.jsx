import React from "react";
import ProductDetail from "../components/product_detail/ProductDetail";
import SuggestedProduct from "../components/product_detail/SuggestedProduct";
import Layout from "./Layout";

const ProductDetailPage = () => {
  return (
    <Layout>
      <ProductDetail />
      <SuggestedProduct />
    </Layout>
  );
};

export default ProductDetailPage;
