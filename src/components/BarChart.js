import React from 'react'
import {Bar } from 'react-chartjs-2'  
import { Chart as ChartJS } from 'chart.js/auto'
//封裝獨立的BarChart組件,數據根據用戶輸入
export default function BarChart({chartData,chartOptions}){

return (
  <div id='bar'>
  <Bar data={chartData} options={chartOptions}/>
  </div>

  )
}