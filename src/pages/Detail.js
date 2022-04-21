import React,{ useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { useParams } from 'react-router'
import { Link } from "react-router-dom";

import { Space, List, Avatar} from 'antd';

import { getReposInfo } from '../getInfo'
import { Head } from '../components/layouts'

import routes from '.';

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
  if(routes[2].isAuthenticated){
    return (
      <div style={{padding:20}}>
        <Head/>
          <Space>
            <List
              itemLayout="horizontal"
              dataSource={reposContents}
              renderItem={item => (
                <List.Item>
                  <List.Item.Meta
                    avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                    title={<Link to={'/home'}> {item.name}</Link>}
                  />
                </List.Item>
              )}
            />
          </Space>
      </div>
    )
  }
}


export default connect()(Detail)