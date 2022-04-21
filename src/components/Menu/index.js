import React from 'react'
import { Button } from "antd"
import { useHistory } from "react-router-dom"

const Menu = ( { routes } ) => {
  let history = useHistory()
  // console.log(routes)
  return (
    <div>

        {routes.map((route) => {
            return <Button key={route.path} onClick={() => history.push(route.path)}>{route.title}</Button>
        })}
    </div>
  )
}
export default Menu