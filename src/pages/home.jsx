import React, { useState } from "react";
import { Layout, Row, Col, Typography, Button } from "antd";
import {
  counterState,
  testSelector,
  themeState,
  validateAtom,
} from "../store/example";
import { useRecoilState, useRecoilValue } from "recoil";
import { persistCounter } from "../store/persistExample";
import MappedRow from "../components/dataDisplay/mappedRow";
import FecthLoading from "../hooks/fetchLoading";
function Home() {
  const [mounted, setMounted] = useState(false)
  const { Content } = Layout;
  const { Title } = Typography;
  let data = useRecoilValue(testSelector) || null
  const [stateTheme, setStateTheme] = useRecoilState(themeState);
  const [stateValidate, setStateValidate] = useRecoilState(validateAtom);
  const [selectorState, setSelectorState] = useRecoilState(testSelector);
  const [counter, setCounter] = useRecoilState(counterState);
  const [counterPersist, setPersistCounter] = useRecoilState(persistCounter)
  const currentTheme = stateTheme == "dark" ? "#000" : "#fff";
  const contentStyle = {
    textAlign: "center",
    minHeight: "86vh",
    lineHeight: "120px",
    color: "#fff",
    backgroundColor: "#108ee9",
  };

  return (
    
    <Content style={contentStyle}>
      <h1>Ini data dari Selector</h1>
      {stateValidate == "allow me" ? (
        <div>
          {" "}
          <Button
            title="log out"
            size="large"
            onClick={() => setStateValidate(null)}
          >
            LOGOUT
          </Button>
          <MappedRow data={data.data} mode='home' />
        </div>
      ) : (
        <Typography.Text
          style={{ color: "white", fontSize: 45 }}
          editable={{
            onChange: (e) => setStateValidate(e),
          }}
        >
          {selectorState == null ? "You are not Allowed" : selectorState}
        </Typography.Text>
      )}
      <br />
      <Row justify={"center"} align="middle">
        <Col span={2}>
          <Button onClick={() => setCounter((prev) => prev + 1)}>Tambah</Button>
        </Col>
        <Col span={2}>
          <Button onClick={() => setCounter((prev) => prev - 1)}>Kurang</Button>
        </Col>
        <Col span={2}>
          <Button onClick={() => setCounter((prev) => (prev = 0))}>
            Reset
          </Button>
        </Col>
      </Row>
      <Title style={{ color: "white" }}>{counter}</Title>
      <br />
      <Title style={{ color: "white" }}>Contoh Persist State</Title>
      <Row justify={"center"} align="middle">
        <Col span={2}>
          <Button onClick={() => setPersistCounter((prev) => prev + 1)}>Tambah</Button>
        </Col>
        <Col span={2}>
          <Button onClick={() => setPersistCounter((prev) => prev - 1)}>Kurang</Button>
        </Col>
        <Col span={2}>
          <Button onClick={() => setPersistCounter((prev) => (prev = 0))}>
            Reset
          </Button>
        </Col>
      </Row>
      <Title style={{ color: "white" }}>{counterPersist}</Title>
    </Content>
  );
}

export default Home;
