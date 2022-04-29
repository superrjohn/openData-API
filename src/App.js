import React from 'react'
import {  HashRouter } from 'react-router-dom'
import GetRoutes from './router'

import './asset/css/App.css'

export default function App() {
  return(
    <HashRouter>
      <GetRoutes/>
    </HashRouter>
  )
}