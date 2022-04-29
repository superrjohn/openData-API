import React from 'react'
import { useParams, Outlet } from 'react-router-dom'

import { Spinner } from 'react-bootstrap'

import { getTown } from '../Data'
//一開始顯示Loading圖標,請求數據後顯示子路由
export default function Town() {
  const params = useParams()

  const [isLoading, setLoading] = React.useState(false)

  React.useEffect(() => {
    getTown(params.town, setLoading(true))
    //console.log('1')
  }, [params])


  if (isLoading) {
    return (
      <div>
        <Outlet />
      </div>
    )
  }
//等待時的圖
  return (
    <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  )
}

