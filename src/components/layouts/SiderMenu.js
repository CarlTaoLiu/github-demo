import React from 'react'

import { Layout, Menu } from 'antd'
import { UserOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'

const { Sider }  = Layout

const List = [
    {
        key: '1',
        icon: <UserOutlined />,
        label: '用户仓库',
        path:'/'
    },
    {
        key: '2',
        icon: <UserOutlined />,
        label: '仓库详情',
        path:'/detail'
    },

]

export default function index() {
  return (
    <Sider trigger={null} collapsible collapsed={false}>
    <div className="logo" />
    <Menu
      theme="dark"
      mode="inline"
      defaultSelectedKeys={['1']}>
      {
        List.map((item) => {
          return <Menu.Item key={item.id} icon={item.icon}>
            <Link to={item.path}>{item.label}</Link>
          </Menu.Item>
        })
      }
      </Menu>
    </Sider>
  )
}
