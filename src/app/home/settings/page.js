'use client'
import React from 'react'
import serializeruser from '../../_serializer/serializeruser'
import { ButtonHomeRedirect } from '../../_components/Buttons'
import DefaultAllpages from '../../_components/DefaultAllpages'

const Home = () => {
  const data = JSON.parse(sessionStorage.getItem('user'))
  const customer = serializeruser(data)
  localStorage.setItem('customer', JSON.stringify(customer))

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
        <DefaultAllpages customer={customer} />
      )}
    </div>
  )
}

export default Home
