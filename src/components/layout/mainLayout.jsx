import React from "react";
import { Layout } from "antd";
import Header from "./header";
import Footer from "./footer";
import { Outlet } from "react-router-dom";
function MainLayout(props) {
  return (
    <Layout>
      <Header />

      {/* {props.children} */}
      <Outlet />
      <Footer />
    </Layout>
  );
}

export default MainLayout;
