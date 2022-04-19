import React from 'react'

import {Link,Outlet} from 'react-router-dom'

// import { Home,Detail } from './pages'

// import 'antd/dist/antd.css'

// import './index.css'

// import { Layout } from 'antd'

// const { Header, Footer, Sider, Content } = Layout;

export default function App() {
  return (
    <>
        <nav>
        <Link to ='/home' style={{padding:5}}>
            Home
        </Link> | {' '}
        <Link to ='/detail' style={{padding:5}}>
            detail
        </Link> 
        <Outlet/>
        </nav>
    </>
 
  )
}
