import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Navigation from '../../components/Navigation/Navigation'
import { Outlet } from 'react-router-dom'

const DefaultLayout = () => {
  return (
    <div>
      <Header/>
      <Navigation/>
      <div className=''>
        <Outlet/>
      </div>
      <Footer/>
    </div>
  )
}

export default DefaultLayout
