import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "../components/layout/mainLayout";
import Loading from "../components/loading";
import Home from "../pages/home";
import LoginPage from "../pages/login";
import TestPage from "../pages/test";
function MainRoute() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route
          path="/"
          element={
            <Suspense fallback={<Loading />}>
              <Home />
            </Suspense>
          }
        />
        <Route path="/test" element={<TestPage />} />
      </Route>
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
}

export default MainRoute;
