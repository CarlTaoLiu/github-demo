import React from 'react'

import {Routes,Route,Link,Outlet} from 'react-router-dom'

import { Home,Detail } from './pages'

import 'antd/dist/antd.css'

import './index.css'

import { Layout } from 'antd'

const { Header, Footer, Sider, Content } = Layout;

export default function App() {
  return (
    <>
    {/* <Layout>
        <Sider> */}
        <nav>
        <Link to ='/home' style={{padding:5}}>
            Home
        </Link> | {' '}
        <Link to ='/detail' style={{padding:5}}>
            detail
        </Link> 
        <Outlet/>
        </nav>


        {/* </Sider>
        <Layout>
            <Header>header</Header>
            <Content>
                <Routes>
                    <Route path='/' element = {<Home />}/>
                    <Route path='/detail/:id' element = {<Detail />}/>
                </Routes>
            </Content>
            <Footer>Footer</Footer>
        </Layout>
    </Layout> */}
</>
 
  )
}
