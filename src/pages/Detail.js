
import { connect } from 'react-redux'
import { useParams } from 'react-router'

import { getReposInfo } from '../getInfo'

import React,{ useState, useEffect } from 'react'

 const Detail = () =>  {
   const test = useParams()
   const [username,reposname] = [test.username,test.name]
  //  console.log(username,reposname)
   const [reposContents,setReposContents] = useState([])
 
   useEffect(() => {
    getReposInfo(username,reposname).then(resp => {
      setReposContents(resp)
    })
    },[])
    console.log(reposContents)
    return (
      <div style={{padding:20}}>
        <h2>用户仓库详情界面</h2>
        <ul>
          {
            reposContents.map((item) => {
              return <li key={item.sha}>{item.name}</li>
            })
          }
        </ul>
      </div>
    )
}


export default connect()(Detail)