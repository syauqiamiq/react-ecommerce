import React from "react";
import { Routes, Route } from "react-router-dom";
import ContactPage from "../pages/ContactPage";
import HomePage from "../pages/HomePage";
import NotificationPage from "../pages/NotificationPage";
import PrivacyPage from "../pages/PrivacyPage";
import ProductDetailPage from "../pages/ProductDetailPage";
import PurchasePage from "../pages/PurchasePage";
import RefundPage from "../pages/RefundPage";
import UserLoginPage from "../pages/UserLoginPage";
import FavouritePage from "../pages/FavouritePage";

const AppRoute = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<UserLoginPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/purchase" element={<PurchasePage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/refund" element={<RefundPage />} />

        <Route path="/productdetails" element={<ProductDetailPage />} />
        <Route path="/notification" element={<NotificationPage />} />
        <Route path="/favourite" element={<FavouritePage />} />
      </Routes>
    </>
  );
};

export default AppRoute;
