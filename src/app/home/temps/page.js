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
        <div className="bg-[rgba(0,0,0,0.5)] h-[80%] w-[80%] rounded-md shadow-md shadow-black flex-col">
          <p className="text-white font-extrabold text-xl mt-4 ml-4">
            Temperatura
          </p>
        </div>
      )}
    </div>
  )
}

export default Home
