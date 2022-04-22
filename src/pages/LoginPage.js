import React from 'react'
import { connect } from 'react-redux';

import { InitLogin } from '../actions/login'
import store from '../store';
import routes from '.';
import { useHistory } from "react-router-dom"

const LoginPage = (props) => {
    let history = useHistory()
    const doLogin = (routes) =>{
        const newRoutes = routes.map((item) => {
            if (!item.isAuthenticated) {
              item.isAuthenticated = !item.isAuthenticated
            }
            return item
        })
        store.dispatch(InitLogin(newRoutes))
        history.push('/home')
    }
    return (
      <div>
        <p>You must log in to view the pages </p>
        <button onClick={() => doLogin(routes)}>Log in</button>
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