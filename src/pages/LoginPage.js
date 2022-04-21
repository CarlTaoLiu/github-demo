import React from 'react'
import { connect } from 'react-redux';

import { InitLogin } from '../actions/login'
import store from '../store';
import routes from '.';

function LoginPage(props) {
    
    console.log(props)
    // const handleLogin = (routes) => {
    //     routes.map((item) => {
    //         console.log(!item.isAuthenticated)
    //         return (!item.isAuthenticated)
    //     })
    // }
    const doLogin = (routes) =>{
        routes.map((item) => {
            // console.log(item.isAuthenticated)
            item.isAuthenticated = !item.isAuthenticated
            // console.log(item.isAuthenticated)
            return routes
        })
        setTimeout(() => store.dispatch(InitLogin(routes)),0)
        
    }
    const doLogout = (routes) =>{
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
        <p>You must log in to view the pages </p>
        <button onClick={() => doLogin(routes)}>Log in</button>
        <br/>
        <button onClick={() => doLogout(routes)}>Log out</button>
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