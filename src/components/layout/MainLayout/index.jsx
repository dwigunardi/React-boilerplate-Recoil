import React from 'react'
import { Layout } from 'antd'
import Header from '../header'
import Footer from '../Footer'
import { Outlet } from 'react-router-dom'
function MainLayout(props) {

  return (
    <Layout>
        <Layout>
        <Header />
        </Layout>
        {/* {props.children} */}
        <Outlet />
        <Footer />
    </Layout>
  )
}

export default MainLayout