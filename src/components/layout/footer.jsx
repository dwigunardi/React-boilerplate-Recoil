import React from "react";
import { Layout } from "antd";
import { Outlet } from "react-router-dom";
function Footer() {
  const { Footer } = Layout;
  const footerStyle = {
    textAlign: "center",
    color: "#fff",
    backgroundColor: "#7dbcea",
  };
  return (
      <Footer style={footerStyle}>Footer</Footer>
  );
}

export default Footer;
