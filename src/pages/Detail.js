
import { connect } from 'react-redux'
import { useParams } from 'react-router'

import { getReposInfo } from '../getInfo'

import React,{ useState, useEffect } from 'react'

 const Detail = () =>  {
   const [reposContents,setReposContents] = useState()
   const test = useParams()
   const [username,reposname] = [test.username,test.name]
   console.log(username,reposname)

  setTimeout(
    useEffect(() => {
      getReposInfo(username,reposname).then(resp => {
        // let arr = []
        // for(let i in resp){
        //   arr.push(resp[i])
        // }
        // console.log(resp)
        setReposContents({
          reposContents : resp
        })
      })
    },[]),1000
   )

    console.log(1)
    return (
      <div style={{padding:20}}>
        <h2>用户仓库详情界面</h2>
        <ul>
          {
            
          }
        </ul>
      </div>
    )
}


export default connect()(Detail)