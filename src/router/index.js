import React from 'react'
import { useRoutes } from 'react-router-dom'
//懶加載, 不用原因:比較慢

import About from '../pages/About'
import Home from '../pages/Home'
import Town from '../pages/Town'
import Render from '../pages/Render'

import NoMatch from '../pages/NoMatch'

import NavBarExample from '../layout/Navbar'
//本來想Town拿資料,Render做顯示,但顯示出來後資料還沒出來
export default function GetRoutes() {
  let routes = [
    {
      path: '/',
      element:
        <NavBarExample />,
      children: [
        {
          index: true, element: <Home />        
        },
        {
          path: '/',
          element:  <Home />, 
          children: [
            {
              path: ':town',
              element: <Town/>,
              children: [
                {
                  index: true,
                  element: <Render/>,
                }
              ]        
            }
          ]        
        },
        {
          path: 'About',
          element:<About />   
        },
      ]
    },
    {
      path: '*',
      element:<NoMatch />       
    }
  ]

  let element = useRoutes(routes)

  return (
    <div>
      {element}
    </div>
  )
}