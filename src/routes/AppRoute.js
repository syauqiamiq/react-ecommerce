import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import UserLoginPage from "../pages/UserLoginPage";

const AppRoute = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<UserLoginPage />} />
      </Routes>
    </>
  );
};

export default AppRoute;
