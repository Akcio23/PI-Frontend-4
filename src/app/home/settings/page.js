'use client'
import React, { useState, useEffect } from 'react'
import serializeruser from '../../_serializer/serializeruser'
import { ButtonHomeRedirect } from '../../_components/Buttons'
import CreateIcon from '@mui/icons-material/Create'
import Image from 'next/image'

const Settings = () => {
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
        <p className="text-white">Carregando...</p>
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
        <div className="flex flex-col">
          <Image
            src="/profile.svg"
            alt="user image"
            width={200}
            height={100}
            className="text-red-500 fill-current"
          />
          <p className="text-white text-xl">Nome: {customer.user}</p>
          <p className="text-white text-xl">
            Cidade: Franca-SP <CreateIcon />
          </p>
        </div>
      )}
    </div>
  )
}

export default Settings
