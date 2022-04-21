import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from "react-router-dom";

import { InitRequest } from '../actions/repos'
import { getRepos } from '../getInfo'
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
    // console.log(this.props.oldData.data, 'props');
    // console.log(data,'data')
    const onSearch = value => {
      if(value === ''){
        alert('用户名为空！')
        return
      }else{
        this.setState({username:value})
        setTimeout(() => this.doRequest(this.state.username),0)
        // setTimeout(() => requestAction(value), 0)
      }
      
      
     };

    return (
      <div style={{padding:20}}>
        <Space direction="vertical">
          <Search placeholder='请输入github用户名' onSearch={onSearch} enterButton />
          <List
              itemLayout="horizontal"
              dataSource={data}
              renderItem={item => (
                <List.Item>
                  <List.Item.Meta
                    avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
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
  
  const oldData = state.repos
  console.log(oldData,'oldData')
  return {
    oldData,
  }
}

export default connect(mapStateToProps,{InitRequest})(Home)