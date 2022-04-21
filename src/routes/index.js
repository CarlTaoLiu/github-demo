import React from 'react'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import{ Home, Detail } from '../pages'
export default function index() {
  return (
        <Router>
            <Routes>
                <Route path='/' element = {<Home />}/>
                <Route path='detail/:username/:name' element = {<Detail />}/>
                <Route
                    path="*"
                    element={
                        <main style={{ padding: "1rem" }}>
                        <p>There's nothing here!</p>
                        </main>
                    }
                />       
            </Routes> 
          </Router>
  )
}
