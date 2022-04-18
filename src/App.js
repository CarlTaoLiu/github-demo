import React from 'react'

import {BrowserRouter as Router,Routes,Route,Link,Outlet} from 'react-router-dom'

import { Home,Detail } from './pages'
// import { Posts,PostLists } from './components/PostLists'

export default function App() {
  return (
      <Router>
          <nav style={{margin:10}}>
                <Link to ='/' style={{padding:5}}>
                    Home
                </Link>
                <Link to ='/detail' style={{padding:5}}>
                    detail
                </Link>

          </nav>
            <Routes>
                <Route path='/' element = {<Home />}/>
                <Route path='/detail' element = {<Detail />}/>

            </Routes>
      </Router>
  )
}
