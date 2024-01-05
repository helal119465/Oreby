import React from 'react'
import Navbar from '../Navbar'
import NavbarHeader from '../NavbarHeader'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer'

const RootLayout = () => {
  return (
    <>
        <Navbar/>
        <NavbarHeader/>
        <Outlet/>
        <Footer/>
    </>
  )
}

export default RootLayout