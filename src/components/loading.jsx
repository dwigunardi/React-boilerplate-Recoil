import React from "react";
import { Spin } from "antd";
function Loading() {
  const loadingStyle = {
    height: "100vh",
    width: "100%",
    position: "absolute",
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    top: 0,
    bottom: 0,
    left: 0,
    right: 50,
    marginLeft: "auto",
    marginRight: "auto",
  };
  return (
    <div style={{
        height:'100vh',
        backgroundColor: "rgba(0, 0, 0)",
        width: "100%",
        marginLeft:'auto',
        marginRight:'auto',
        display:'flex',
        justifyContent:'center',
        justifyItems:'center',
        alignItems:'center'
    }}>
      <Spin size="large" spinning={true} />
    </div>
  );
}

export default Loading;
