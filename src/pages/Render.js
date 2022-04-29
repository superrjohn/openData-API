import React from 'react'
import axios from 'axios'
import BarChart from '../components/BarChart'
import { Data } from '../Data'
import { useParams } from 'react-router-dom'
export default function Render() {
  const params = useParams()
//一開始設Chart數據時還未請求成功,所以利用axios請求的時間,拿到數據重設Chart的數據
  const [userData, setUserData] = React.useState({
    labels: Data.map((data) => data.type),
    datasets: [{
      label: '男',
      data: Data.map((data) => data.ordinary),
      backgroundColor: 'rgba(75,192,192,1)',
      borderColor: 'black',
      borderWidth: 1
    },
    {
      label: '女',
      data: Data.map((data) => data.single),
      backgroundColor: '#2a71d0',
      borderColor: 'black',
      borderWidth: 1
    }
    ]
  })

  //console.log('3')
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: `${Data[1].site_id}`,
      },
    },
  };
  React.useEffect(() => {
    axios.get('https://www.ris.gov.tw/rs-opendata/api/v1/datastore/ODRP019/109')
      .then((res) =>
        setUserData({
          labels: Data.map((data) => data.type),
          datasets: [{
            label: '男',
            data: Data.map((data) => data.ordinary),
            backgroundColor: 'rgba(75,192,192,1)',
            borderColor: 'black',
            borderWidth: 1
          },
          {
            label: '女',
            data: Data.map((data) => data.single),
            backgroundColor: '#2a71d0',
            borderColor: 'black',
            borderWidth: 1
          }
          ]
        }))

  }, [params])
//統計圖,根據數據顯示
  return (
    <BarChart chartData={userData} chartOptions={options} />
  )
}

/*import React from 'react'
import { useParams } from 'react-router-dom'

import { Spinner } from 'react-bootstrap'

import BarChart from '../components/BarChart'
import { Data, getTown } from '../Data'

export default function Render() {
  const params = useParams()

  const [isLoading, setLoading] = React.useState(false)
  const [userData, setUserData] = React.useState({})

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: `${Data[1].site_id}`,
      },
    },
  };


  React.useEffect(() => {
    getTown(params.town, setLoading(true),
      setUserData({
        labels: Data.map((data) => data.type),
        datasets: [{
          label: '男',
          data: Data.map((data) => data.ordinary),
          backgroundColor: 'rgba(75,192,192,1)',
          borderColor: 'black',
          borderWidth: 1
        },
        {
          label: '女',
          data: Data.map((data) => data.single),
          backgroundColor: '#2a71d0',
          borderColor: 'black',
          borderWidth: 1
        }
        ]
      })
    )
  }, [params])

  if (isLoading) {
    return (
        <BarChart chartData={userData} chartOptions={options} />
    )
  }
  return (
    <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  )
}
*/
