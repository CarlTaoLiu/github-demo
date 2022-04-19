// import React,{useState} from 'react'

import { getRepos } from '../getInfo'

import { connect } from 'react-redux'

import { InitRequest } from '../actions/repos'

import React, { Component } from 'react'


 class Home extends Component {
   constructor(){
     super()
     this.state = {
       username : '',
       data : []
     }
   }
  render() {
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
        <button onClick={
          () => getRepos(this.state.username).then(resp => {
            if(resp !== [] ){
              return this.setState({
                data:resp
              })
            }else{
              alert('未找到该用户')
            }  
        })
        }>
          搜索
        </button>
        <label>
          <ul>
            {
              this.state.data.map((item)=>{
                return(
                  <li key={item.id}>{item.name}</li>
                )
              })
            }
          </ul>
        </label>
    </div>
    )
  }
}

const mapStateToProps = state => {
  return{
    ...state.repos
  }
}

export default connect(mapStateToProps,{InitRequest})(Home)