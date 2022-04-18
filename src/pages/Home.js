import React,{useState} from 'react'

import { getRepos } from '../getInfo'

import { connect } from 'react-redux'

 function Home(props) {
     const [username,setUsername] = useState('')
    console.log(props)
  return (
    <div style={{padding:20}}>
        <h2>项目主页面</h2>.
        <input type='text' placeholder='请输入github用户名' value={username} onChange={(e)=>{
            console.log(e);
            setUsername(e.target.value)
        }}
        onBlur={(e) => {
            console.log('zhix', e);
        }} 
        />
        <button onClick={() => getRepos(username)}>搜索</button>
    </div>
  )
}
export default connect()(Home)