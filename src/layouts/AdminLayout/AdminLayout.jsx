import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../../components/Footer/Footer'

const AdminLayout = () => {
  return (
    <div>
      <h1>admin</h1>
      <div className=''>
        <Outlet/>
      </div>
      <Footer/>
    </div>
  )
}

export default AdminLayout
