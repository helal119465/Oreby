import React from 'react'
import Navbar from '../component/Navbar'
import NavbarHeader from '../component/NavbarHeader'
import Banner from '../component/Banner'
import AdditionInfo from '../component/AdditionInfo'
import Advertise from '../component/Advertise'
import NewArrival from '../component/NewArrival'


const Home = () => {
  return (
    <>
      <Banner/>
      <AdditionInfo/>
      <Advertise/>
      <NewArrival/>
    </>
  )
}

export default Home