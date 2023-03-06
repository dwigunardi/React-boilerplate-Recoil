import React from "react";
import { Button, Layout, Row, Col, Typography } from "antd";
import { useRecoilState } from "recoil";
import { counterState } from "../store/example";
import { persistCounter } from "../store/persistExample";

function TestPage() {
  const { Content } = Layout;
  const { Title } = Typography;
  const [counter, setCounter] = useRecoilState(counterState);
  const [counterPersist, setPersist] = useRecoilState(persistCounter)
  const contentStyle = {
    textAlign: "center",
    minHeight: "86vh",
    lineHeight: "120px",
    color: "#fff",
    backgroundColor: "#108ee9",
  };
  console.log(counter);
  return (
    <Content style={contentStyle}>
      <Row justify={"center"}>
        <Col span={6}>
          <Title style={{color:'white'}}>Ini state biasa dari store recoil</Title>
          <Button size="large">{counter}</Button>
        </Col>
        <Col span={6}>
          <Title style={{color:'white'}}>Ini state Persist dari store recoil</Title>
          <Button size="large">{counterPersist}</Button>
        </Col>
      </Row>
    </Content>
  );
}

export default TestPage;
