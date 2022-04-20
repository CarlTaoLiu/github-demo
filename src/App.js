import React from 'react'

import {Link,Outlet} from 'react-router-dom'

import { Button } from 'antd'

import './App.css'

export default function App() {
  return (
    <>
        <nav>
        <Button type='primary'>
          <Link to ='/home' style={{padding:5}}>
              <span style={{color:'black'}}><b>Home</b></span>
          </Link> | {' '}
          <Link to ='/detail' style={{padding:5}}>
              <span style={{color:'black'}}><b>Detail</b></span>
          </Link> 
        </Button>
        <Outlet/>
        </nav>
    </>
 
  )
}
