'use client'
import React, { useState, useEffect } from 'react'
import serializeruser from '../../_serializer/serializeruser'
import { ButtonHomeRedirect } from '../../_components/Buttons'
import Backgroud from '@/app/_components/Backgroud'

const Dashboard = () => {
  const [customer, setCustomer] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    try {
      const data = JSON.parse(sessionStorage.getItem('user'))
      const customerSerialized = serializeruser(data)
      setCustomer(customerSerialized)
      localStorage.setItem('customer', JSON.stringify(customer))
    } catch (err) {
      console.log(err)
    } finally {
      setIsLoading(false)
    }
  }, [])
  if (isLoading) {
    return (
      <div className="h-screen flex justify-center items-center">
        <Backgroud>
          <div className="flex items-center justify-center h-screen">
            <div className="h-80 w-80  rounded animate-pulse flex flex-col gap-7 p-2">
              <div className="flex-1 bg-[rgba(255,255,255,0.1)] rounded"></div>
              <div className="flex-1 bg-[rgba(255,255,255,0.1)] rounded"></div>
              <div className="flex-1 bg-[rgba(255,255,255,0.1)] rounded"></div>
            </div>
          </div>
        </Backgroud>
      </div>
    )
  }

  return (
    <div className="h-screen flex justify-center items-center">
      {!customer?._id ? (
        <div className="bg-cover bg-center min-h-screen flex flex-col justify-center items-center">
          <div className="flex flex-col gap-10  h-96 justify-center items-center">
            <p className="text-white text-center font-bold">
              Faça login para continuar!
            </p>
            <div className="flex flex-col gap-5 ">
              <ButtonHomeRedirect />
            </div>
          </div>
        </div>
      ) : (
        <Backgroud>
          <p className="text-white font-extrabold text-xl mt-4 ml-4">
            Dashboard
          </p>
        </Backgroud>
      )}
    </div>
  )
}

export default Dashboard
