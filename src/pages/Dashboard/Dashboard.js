import React from 'react'
import BarChart from '../../components/DashboardComponent/BarChart'
import PieCharts from '../../components/DashboardComponent/PieCharts'
import TransactionCount from '../../components/DashboardComponent/TransactionCount'
import Layout from '../../components/Layout/Layout'

const Dashboard = () => {
  return (
    <Layout title="Overview">
        <TransactionCount />
        <BarChart />
        <PieCharts />
    </Layout>
  )
}

export default Dashboard