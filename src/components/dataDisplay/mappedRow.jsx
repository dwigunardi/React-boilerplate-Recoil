import React from "react";
import { Row, Col } from "antd";
function MappedRow(props) {
  const { data, mode } = props;
  return (
    <div>
      {mode == 'home' ? data.slice(0,5).map((value, idx) => {
        return (
          <Row justify={"center"} align="middle" key={idx}>
          <Col>
            <h1>{value.title}</h1>
            <p>{value.body}</p>
          </Col>
        </Row>
        )
      }) : data.map((value, idx) => {
        return (
          <Row justify={"center"} align="middle" key={idx}>
            <Col>
              <h1>{value.name}</h1>
              <p>{value.username}</p>
            </Col>
          </Row>
        );
      })}
    </div>
  );
}

export default MappedRow;
