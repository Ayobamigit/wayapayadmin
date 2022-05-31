import React, { useEffect } from 'react'
import { useNavigate } from 'react-router'
import BarChart from '../../components/DashboardComponent/BarChart'
import PieCharts from '../../components/DashboardComponent/PieCharts'
import TransactionCount from '../../components/DashboardComponent/TransactionCount'
import Layout from '../../components/Layout/Layout'

const Dashboard = () => {
  const navigate = useNavigate();
  let reloadCount = 0
  useEffect(()=>{
    // debugger
    // if (typeof window !== "undefined") {
      // console.log('dash', reloadCount)
      reloadCount = JSON.parse(localStorage.getItem('reloadCount'));
      // console.log(localStorage.getItem('reloadCount'))
    // }
    if (reloadCount === 0) {
      window.location.reload()
      localStorage.setItem('reloadCount', reloadCount + 1)
    }
  })
  return (
    <Layout title="Overview">
        <TransactionCount />
        <BarChart />
        <PieCharts />
    </Layout>
  )
}

export default Dashboard