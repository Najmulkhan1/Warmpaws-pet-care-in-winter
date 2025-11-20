import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useLoaderData, useParams } from 'react-router'
import ServiceDetailsCard from '../components/ServiceDetailsCard'

const ServiceDetails = () => {

  const data = useLoaderData()
  const {serviceId} = useParams()
  const [service, setService] = useState({})

  useEffect(() => {
    const selectedService = data.find(svc => svc.serviceId == serviceId)
    setService(selectedService)
   
    
  },[data, serviceId])
  
  

  return (
    <div className='min-h-screen flex flex-col '>
      <header>
        <Navbar></Navbar>
      </header>
      <main className='flex-1 w-11/12 mx-auto py-5'>
        

        <ServiceDetailsCard service={service}></ServiceDetailsCard>
      </main>
      <Footer></Footer>
    </div>
  )
}

export default ServiceDetails