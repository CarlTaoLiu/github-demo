import { getRepos } from '../getInfo'

import { connect } from 'react-redux'

import { InitRequest } from '../actions/repos'

import React, { Component } from 'react'

import { Link } from "react-router-dom";

import store from '../store';

import 'antd/dist/antd.css';

import { Input, Space, List, Avatar} from 'antd';


const { Search } = Input;


// import { createBrowserHistory } from 'history';

// const history = createBrowserHistory();

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
    // console.log(this.props, 'props');
    // console.log(data,'data')
    const onSearch = value => {
      if(value === ''){
        alert('用户名为空！')
        return
      }else{
        this.setState({username:value})
        setTimeout(() => this.doRequest(this.state.username), 1000)
      }
     };

    //  const Title = [
    //   data ? (
    //     data.map((item)=>{
    //       return {
    //         title:item.name,
    //         description:item.description
    //       }
    //     })
    //   ) : null
    // ];
    // for(let i in Title){
    //   console.log(Title[i])

    // }

    return (
      
      <div style={{padding:20}}>
        <Space direction="vertical">
          <Search placeholder='请输入github用户名' onSearch={onSearch} enterButton />
        
        {/* <input type='text' placeholder='请输入github用户名' value={this.state.username} 
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
        /> */}

        {/* <button onClick={ () => {
          this.doRequest(this.state.username)
          }
        }>
          搜索
        </button> */}
        {/* <label>
          <ul >
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
        </label> */}

      <List
          itemLayout="horizontal"
          dataSource={data}
          renderItem={item => (
            <List.Item>
              <List.Item.Meta
                // avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                title={<Link to={`/detail/${this.state.username}/${item.name}`}> {item.name}</Link>}
                description={item.description}
              />
            </List.Item>
          )}
        />
        </Space>
    </div>
    )
    
  }
}

const mapStateToProps = state => {
  console.log(state, 'state')
  const oldData = state.repos || []
  console.log(oldData,'oldData')
  return {
    oldData,
  }
}

export default connect(mapStateToProps,{InitRequest})(Home)