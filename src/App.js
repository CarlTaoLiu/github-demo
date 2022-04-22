import React from 'react'
import { Switch, Route} from 'react-router-dom'
import Home from './pages/Home'
import Detail from './pages/Detail'
import LoginPage from './pages/LoginPage'

import "./css/index.css"
import { Head, Sidebar } from './components/layouts'
import { Layout } from 'antd'

const {Sider, Content} =Layout

export default function App() {
  return (
    <div className='App' style={{textAlign:'center'}}>
        <Layout>
          <Sider>
            <Sidebar/>
            <Head/>
          </Sider>
            <Content>
                <div>
                <Switch>
                  <Route path="/home">
                    <Home />
                  </Route>
                  <Route path="/detail/:username/:name">
                    <Detail />
                  </Route>
                  <Route path="/">
                    <LoginPage />
                  </Route>
                  {/* <Route path="*">
                    <NoMatch />
                  </Route> */}
                </Switch>
              </div>
            </Content>
        </Layout>
        {/* <Menu routes = {routes}/> */}
        
        {/* <Switch>
          {routes.map( (route) => {
            return <Route exact path={route.path} key={route.path}>
              <route.component />
            </Route>
          })}
        </Switch> */}

    </div>
  )
}
