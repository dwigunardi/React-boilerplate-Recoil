import React, { useState } from 'react'
import { Layout, Menu } from 'antd'
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { MailOutlined, } from '@ant-design/icons';
function Header() {
  const [current, setCurrent] = useState('mail');
    const {Header} = Layout
    const navigate = useNavigate()
    const headerStyle = {
        textAlign: 'center',
        color: '#fff',
        height: 64,
        lineHeight: '64px',
        backgroundColor: '#7dbcea',
      };
      const onClick = (e) => {
        console.log('click menu header =>', e);
        setCurrent(e.key);
      };
      const items = [
        {
          label: <Link to={'/'}>Go to home</Link>,
          key: 'home',
        },
        {
          label: <Link to={'/test'}>Go to test page</Link>,
          key: 'test',
          icon: <MailOutlined />,
          link: '/test'
        },
        {
          label: <Link to={'/testDua'}>Go to test page 2</Link>,
          key: 'testDua',
          icon: <MailOutlined />,
          link: '/testDua'
        },
        
      ];
  return (
    <Header style={headerStyle}>
      <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />;
    </Header>
  )
}

export default Header