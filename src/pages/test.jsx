import React from "react";
import { Button, Layout, Row, Col, Typography, Spin } from "antd";
import { useRecoilState, useRecoilValue } from "recoil";
import { apiSelector, counterState } from "../store/example";
import { persistCounter } from "../store/persistExample";
import UseFetchLoadingApi from "../hooks/fetchLoading";

function TestPage() {
  const { Content } = Layout;
  const { Title } = Typography;
  const [counter, setCounter] = useRecoilState(counterState);
  const [counterPersist, setPersist] = useRecoilState(persistCounter);
  const storeData = useRecoilValue(apiSelector)
  let fecthing = UseFetchLoadingApi();
  const contentStyle = {
    textAlign: "center",
    minHeight: "86vh",
    lineHeight: "120px",
    color: "#fff",
    backgroundColor: "#108ee9",
  };

  console.log(storeData, 'ini');
  return (
    <Content style={contentStyle}>
      <Row justify={"center"}>
        <Col span={6}>
          <Title style={{ color: "white" }}>
            Ini state biasa dari store recoil
          </Title>
          <Button size="large">{counter}</Button>
        </Col>
        <Col span={6}>
          <Title style={{ color: "white" }}>
            Ini state Persist dari store recoil
          </Title>
          <Button size="large">{counterPersist}</Button>
        </Col>
      </Row>
      {/* <Title>Contoh loading get api setiap mengunjungi ini akan loading</Title>
      {fecthing.data == "loading" ? (
        <Spin
          spinning
          size="large"
          style={{ color: "white", backgroundColor: "white" }}
        />
      ) : fecthing.data.length <= 1 ? (
        <Spin
          spinning
          size="large"
          style={{ color: "white", backgroundColor: "white" }}
        />
      ) : (
        fecthing?.data.map((data, idx) => {
          return (
            <ul key={idx} style={{ display: "flex" }}>
              <li style={{ marginRight: 50 }}>name : {data.name}</li>
              <li style={{ marginRight: 50 }}>username : {data.username}</li>
              <li style={{ marginRight: 50 }}>email: {data.email} </li>
              <li style={{ marginRight: 50 }}>address: {data.addres} </li>
            </ul>
          );
        })
      )} */}
      <Title>Contoh get api secara langsung dari store</Title>
      {storeData?.length > 2 ? storeData.map((data, idx) => {
          return (
            <ul key={idx} style={{ display: "flex" }}>
              <li style={{ marginRight: 50 }}>name : {data.name}</li>
              <li style={{ marginRight: 50 }}>username : {data.username}</li>
              <li style={{ marginRight: 50 }}>email: {data.email} </li>
              <li style={{ marginRight: 50 }}>address: {data.addres} </li>
            </ul>
          );
        }): null}
    </Content>
  );
}

export default TestPage;
