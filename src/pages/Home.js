// import React,{useState} from 'react'

import { getRepos } from '../getInfo'

import { connect } from 'react-redux'

import { InitRequest } from '../actions/repos'

import React, { Component } from 'react'

import { Link } from "react-router-dom";

import store from '../store';

 class Home extends Component {
   constructor(props){
     super(props)
     this.state = {
       username : props.oldData.username || '',
       data: props.oldData.data || [],
     }
   }
   doRequest = (username) => {
    getRepos(username).then(resp => {
      this.setState({
        data: resp,
        username: username
      })
      store.dispatch(InitRequest(username,resp))}
    ).catch(() => {
      return{
        Msg:'Error'
      }
    })
   }
   
  render(){
    const { data } = this.state
    console.log(this.props, 'props');
    console.log(data,'data')
    return (
      <div style={{padding:20}}>
        <h2>主页</h2>
        <input type='text' placeholder='请输入github用户名' value={this.state.username} 
        onChange={(e)=>{
            // console.log(e);
            this.setState({
              username: e.target.value
            })
        }}
        onBlur={(e) => {
          // console.log(e);
          this.setState({
            username: e.target.value
          })}
        }
        />
        <button onClick={ () => {
          this.doRequest(this.state.username)
          }
        }>
          搜索
        </button>
        <label>
          <ul>
            {   
              data ? (
                data.map((item)=>{
                  return(
                    <li key={item.id}>
                      <Link to={`/detail/${this.state.username}/${item.name}`}> {item.name}</Link>
                    </li>
                  )
                })
              ) : null
            } 
          </ul>
        </label>
    </div>
    )
    
  }
}

const mapStateToProps = state => {
  console.log(state, 'state')
  const oldData = state.repos || []
  console.log(oldData)
  return {
    oldData,
  }
}

export default connect(mapStateToProps,{InitRequest})(Home)