import React from 'react'
import { Layout } from 'antd';

import { Button } from 'antd';
import { Link } from 'react-router-dom';

import { InitLogin } from '../../actions/login'
import routes from '../../pages'
import { connect } from 'react-redux';
import store from '../../store';
import '../../css/index.css'

const { Header } = Layout;

 function index() {
    const doLogout = (routes) =>{
        routes.map((item) => {
            // console.log(item.isAuthenticated)
            item.isAuthenticated = false
            // console.log(item.isAuthenticated)
            return routes
        })
        setTimeout(() => store.dispatch(InitLogin(routes)),0)
        
    }

    return (
        <Header className="site-layout-background">
                <Link to="/login">
                    <Button type="primary" danger onClick={() => doLogout(routes)}>Log out</Button>
                </Link>
        </Header>
    )
}


const mapStateToProps = state => {
  
    const oldData = state.login
    // console.log(oldData,'oldData')
    return {
      oldData,
    }
  }

export default connect(mapStateToProps,{InitLogin})(index)