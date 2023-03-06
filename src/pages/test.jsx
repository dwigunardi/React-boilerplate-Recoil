import React from 'react'
import { Button, Layout, Row,Col} from 'antd'
import { useRecoilState } from 'recoil'
import { counterState } from '../store/example'

function TestPage() {
    const {Content} = Layout
    const [counter, setCounter] = useRecoilState(counterState)
    const contentStyle = {
        textAlign: "center",
        minHeight: "86vh",
        lineHeight: "120px",
        color: "#fff",
        backgroundColor: "#108ee9",
      };
      console.log(counter)
  return (
    <Content style={contentStyle}>
        <Row justify={'center'}>
            <Col><Button size='large'>{counter}</Button></Col>
        </Row>
    </Content>
  )
}

export default TestPage