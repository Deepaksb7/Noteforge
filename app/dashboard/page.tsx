import { Logout } from '@/components/logout'
import PageWrapper from '@/components/page-wrapper'
import React from 'react'

const Dashboard = () => {
  return (
    <PageWrapper breadcrumbs={[{label:"Dashboard",href:"/dashboard"}]}>
      <h1>
      dashboard
      </h1>
      <Logout />
    </PageWrapper>
  )
}

export default Dashboard
