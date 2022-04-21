import { connect } from 'react-redux'

import { useParams } from 'react-router'

import { getReposInfo } from '../getInfo'

import React,{ useState, useEffect } from 'react'

import 'antd/dist/antd.css';

import { Space, List, Avatar} from 'antd';

import { Link } from "react-router-dom";

import { Header } from '../components/layouts'

 const Detail = (props) =>  {
   const test = useParams()
   const [username,reposname] = [test.username,test.name]
   console.log(props, 'props')
   const [reposContents,setReposContents] = useState([])
 
   useEffect(() => {
    getReposInfo(username,reposname).then(resp => {
      setReposContents(resp)
    })
    },[])
    // console.log(reposContents)
    return (
      
      <div style={{padding:20}}>
        <Header/>
        <h2>用户仓库详情界面</h2>
        <Space>
          <List
            itemLayout="horizontal"
            dataSource={reposContents}
            renderItem={item => (
              <List.Item>
                <List.Item.Meta
                  avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                  title={<Link to={`/`}> {item.name}</Link>}
                  description={item.description}
                />
              </List.Item>
            )}
          />
        </Space>

      </div>
    )
}


export default connect()(Detail)