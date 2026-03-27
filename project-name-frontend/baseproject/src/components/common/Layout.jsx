import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import Navbar1 from './Navbar1'
import Navbar2 from './Navbar2'
import Navbar3 from './Navbar3'


function Layout() {
  return (
    <div>
      {/* I have added three navbar components Navbar1, Navbar2, and Navbar3 you can switch between them as needed */}
        <Navbar2/>
        <Outlet />
        <Footer/>
    </div>
  )
}

export default Layout