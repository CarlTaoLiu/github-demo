import React from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import Menu from "./components/Menu"
import routes from './pages'
import Home from './pages/Home'
import Detail from './pages/Detail'
import LoginPage from './pages/LoginPage'

export default function App() {
  return (
    <div className='App' style={{textAlign:'center'}}>
        <Menu routes = {routes}/>
        {/* <Switch>
          {routes.map( (route) => {
            return <Route exact path={route.path} key={route.path}>
              <route.component />
            </Route>
          })}
        </Switch> */}
          <div>
            <Switch>
              <Route path="/home">
                <Home />
              </Route>
              <Route path="/login">
                <LoginPage />
              </Route>
              <Route path="/detail/:username/:name">
                <Detail />
              </Route>
            </Switch>
          </div>
    </div>
  )
}
