import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "../components/layout/mainLayout";
import Loading from "../components/loading";
import Home from "../pages/home";
import LoginPage from "../pages/login";
import TestPage from "../pages/test";
import TestDua from "../pages/test2";
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
        <Route path="/test" element={<Suspense fallback={<Loading />}><TestPage /></Suspense>} />
        <Route path="/testDua" element={<TestDua />} />
      </Route>
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
}

export default MainRoute;
