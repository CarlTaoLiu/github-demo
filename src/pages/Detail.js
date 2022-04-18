import React from 'react'

import { connect } from 'react-redux'

 function Detail(props) {

    console.log(props)
  return (
    <div style={{padding:20}}>
        <h2>这是用户仓库详情界面</h2>
    </div>
  )
}

export default connect()(Detail)