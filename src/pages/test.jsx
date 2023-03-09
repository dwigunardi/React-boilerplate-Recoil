import React, { Suspense } from "react";
import { Button, Layout, Row, Col, Typography, Spin } from "antd";
import { useRecoilState, useRecoilValue } from "recoil";
import { apiSelector, counterState } from "../store/example";
import { persistCounter } from "../store/persistExample";
import UseFetchLoadingApi from "../hooks/fetchLoading";
import MappedRow from "../components/dataDisplay/mappedRow";

function TestPage() {
  const { Content } = Layout;
  const { Title } = Typography;
  const [counter, setCounter] = useRecoilState(counterState);
  const [counterPersist, setPersist] = useRecoilState(persistCounter);
  const { user } = useRecoilValue(apiSelector);
  let fecthing = UseFetchLoadingApi();
  const contentStyle = {
    textAlign: "center",
    minHeight: "86vh",
    lineHeight: "120px",
    color: "#fff",
    backgroundColor: "#108ee9",
  };

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
      <Title>Contoh loading get api setiap mengunjungi ini akan loading</Title>
      {fecthing?.data == "loading" ? (
        <Spin
          spinning
          size="large"
          style={{ color: "white", backgroundColor: "white" }}
        />
      ) : fecthing?.data.length <= 1 ? (
        <Spin
          spinning
          size="large"
          style={{ color: "white", backgroundColor: "white" }}
        />
      ) : (
        fecthing?.data?.user?.data.map((data, idx) => {
          return (
            <ul key={idx} style={{ display: "flex" }}>
              <li style={{ marginRight: 50 }}>name : {data.name}</li>
              <li style={{ marginRight: 50 }}>username : {data.username}</li>
              <li style={{ marginRight: 50 }}>email: {data.email} </li>
              <li style={{ marginRight: 50 }}>address: {data.addres} </li>
            </ul>
          );
        })
      )}
      <Title>Contoh get api secara langsung dari store dengan suspense</Title>
      <Suspense
        fallback={
          <Spin
            spinning
            size="large"
            style={{ color: "white", backgroundColor: "white" }}
          />
        }
      >
        {/* {user.data.map((data, idx) => {
          return (
            <ul key={idx} style={{ display: "flex" }}>
              <li style={{ marginRight: 50 }}>name : {data.name}</li>
              <li style={{ marginRight: 50 }}>username : {data.username}</li>
              <li style={{ marginRight: 50 }}>email: {data.email} </li>
              <li style={{ marginRight: 50 }}>address: {data.addres} </li>
            </ul>
          );
        })} */}
        <MappedRow data={user.data} mode="testPage" />
      </Suspense>
    </Content>
  );
}

export default TestPage;
