import React, { useState } from "react";
import { Layout, Row, Col, Typography, Button } from "antd";
import {
  counterState,
  testSelector,
  themeState,
  validateAtom,
} from "../../store/example";
import { useRecoilState, useRecoilValue } from "recoil";
function Home() {
  const [mounted, setMounted] = useState(false)
  const { Content } = Layout;
  const { Title } = Typography;
  let data = useRecoilValue(testSelector) || null
  const [stateTheme, setStateTheme] = useRecoilState(themeState);
  const [stateValidate, setStateValidate] = useRecoilState(validateAtom);
  const [selectorState, setSelectorState] = useRecoilState(testSelector);
  const [counter, setCounter] = useRecoilState(counterState);
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
          {data.data.slice(0, 5).map((value, idx) => {
            return (
              <Row justify={"center"} align="middle" key={idx}>
                <Col>
                  <h1>{value.title}</h1>
                  <p>{value.body}</p>
                </Col>
              </Row>
            );
          })}
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
          <Button onClick={() => setCounter((prev) => prev + 1)}>TamBah</Button>
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
    </Content>
  );
}

export default Home;
