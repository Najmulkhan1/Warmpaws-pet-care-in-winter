import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router'
import Footer from '../components/Footer'
import { Toaster } from 'react-hot-toast'


const RootLayout = () => {
  return (
    <div className='bg-[#F5FAFF] min-h-screen flex flex-col'>
        <Navbar></Navbar>
        <div className='flex-1'>
            <Outlet></Outlet>
        </div>
        <Footer></Footer>

         <Toaster />
    </div>
  )
}

export default RootLayout