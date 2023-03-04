import React from 'react'
import { Layout } from 'antd'
import { Outlet } from 'react-router-dom';
function Header() {
    const {Header} = Layout
    const headerStyle = {
        textAlign: 'center',
        color: '#fff',
        height: 64,
        lineHeight: '64px',
        backgroundColor: '#7dbcea',
      };
  return (
    <Header style={headerStyle}>Header</Header>
  )
}

export default Header