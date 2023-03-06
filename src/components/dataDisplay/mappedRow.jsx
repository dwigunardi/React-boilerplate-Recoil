import React from "react";
import { Row, Col } from "antd";
function MappedRow(props) {
  const { data } = props;
  return (
    <div>
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
  );
}

export default MappedRow;
