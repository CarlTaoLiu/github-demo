import React from 'react'
import { connect } from 'react-redux';

import { InitLogin } from '../actions/login'
import store from '../store';
import routes from '.';

import 'antd/dist/antd.css';
import '../css/index.css';
import { Button, Layout } from 'antd';
import { Link } from 'react-router-dom';

const { Header } = Layout

function LoginPage(props) {
    
    const doLogin = (routes) =>{
        routes.map((item) => {
            // console.log(item.isAuthenticated)
            item.isAuthenticated = !item.isAuthenticated
            // console.log(item.isAuthenticated)
            return routes
        })
        setTimeout(() => store.dispatch(InitLogin(routes)),0)
        
    }

    return (
      <div>
        <Header className='loginButton'>
         <Button onClick={() => doLogin(routes)}><Link to={'/home'}>Log in</Link></Button>
        </Header>
      </div>

    );
  }

  const mapStateToProps = state => {
  
    const oldData = state.login
    console.log(oldData,'oldData')
    return {
      oldData,
    }
  }

export default connect(mapStateToProps,{InitLogin})(LoginPage)