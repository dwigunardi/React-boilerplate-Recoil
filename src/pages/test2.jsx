import { Layout, Typography } from "antd";
import React from "react";
import { useRecoilValue, useRecoilValueLoadable } from "recoil";
import useFetchByState from "../hooks/fetchByState";

function TestDua() {
  const { Content } = Layout;
  const { Title } = Typography;
  const apiData = useFetchByState();
  //   const userData = useRecoilValueLoadable(getUserSelector);
  //   const { state } = userData;
  //   console.log(userData)
  //   if (userData.state === "hasError") {
  //     return <div> There is some problem! </div>;
  //   }

  //   if (state === "loading") {
  //     return <div>loading....</div>;
  //   }

  //   if (state === "hasValue") {
  //     const {
  //       contents
  //     } = userData;
  //     return (
  //       <div>
  //         <Title style={{textAlign:'center'}}>Get data tanpa component suspense</Title>
  //         {contents.map((item, idx) => (
  //           <div key={idx} style={{display:"flex", gap:"24px", justifyContent:'space-evenly'}}>
  //             <p>
  //               {`Email: ${item.email}`}
  //               .
  //             </p>
  //             <p>{`Name: ${item.name}`}</p>
  //           </div>
  //         ))}
  //       </div>
  //     );
  //   }

  return (
    <div>
      <Title style={{ textAlign: "center" }}>
        Get data tanpa component suspense
      </Title>
      {apiData.map((item, idx) => (
        <div
          key={idx}
          style={{
            display: "flex",
            gap: "24px",
            justifyContent: "space-evenly",
          }}
        >
          <p>{`Email: ${item.email}`}.</p>
          <p>{`Name: ${item.name}`}</p>
        </div>
      ))}
    </div>
  );
}

export default TestDua;
