import React from 'react'

import {Routes,Route,Link} from 'react-router-dom'

import { Home,Detail } from './pages'


export default function App() {
  return (
        <div>
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

        </div>
 
  )
}
