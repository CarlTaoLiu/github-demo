import React from 'react'

import { Layout, Menu } from 'antd'
import { UserOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'



const List = [
    {
        key: '1',
        icon: <UserOutlined />,
        label: '用户登录',
        path:'/login'
    },
    {
        key: '2',
        icon: <UserOutlined />,
        label: '用户仓库',
        path:'/home'
    },

]

export default function index() {
  return (
   
    <div>
    <Menu
      className='menu'
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
      </div>
  )
}
