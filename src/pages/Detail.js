
import { connect } from 'react-redux'
import { useParams } from 'react-router'

import React from 'react'

 const Detail = () =>  {
   const test = useParams()
    console.log(test);
    return (
      <div style={{padding:20}}>
        <h2>这是用户仓库详情界面</h2>
      </div>
    )
}


export default connect()(Detail)