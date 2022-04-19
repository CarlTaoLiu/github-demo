

import { connect } from 'react-redux'

import React, { Component } from 'react'

 class Detail extends Component {
  render() {
    return (
      <div style={{padding:20}}>
      <h2>这是用户仓库详情界面</h2>
  </div>
    )
  }
}


export default connect()(Detail)