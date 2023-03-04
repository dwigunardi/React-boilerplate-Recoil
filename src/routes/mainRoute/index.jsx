import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "../../components/layout/Footer";
import Header from "../../components/layout/header";
import MainLayout from "../../components/layout/MainLayout";
import Home from "../../pages/Home";
import LoginPage from "../../pages/Login";
function MainRoute() {
  return ( <Suspense
    fallback={
      <div style={{ textAlign: "center", fontSize: 56, color: "blue" }}>
        Loading....
      </div>
    }>
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
      </Route>
      <Route path="/login" element={<LoginPage />} />
    
    </Routes>
    </Suspense>
  );
}

export default MainRoute;
