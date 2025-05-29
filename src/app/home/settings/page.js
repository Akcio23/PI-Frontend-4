'use client'
import React, { useState, useEffect } from 'react'
import serializeruser from '../../_serializer/serializeruser'
import { ButtonHomeRedirect } from '../../_components/Buttons'
import Image from 'next/image'
import ModalCity from '@/app/_components/ModalCity'
import { getUser } from '@/app/_service/user/getUser'

const Settings = () => {
  const [customer, setCustomer] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [city, setCity] = useState(false)

  useEffect(() => {
    try {
      const data = JSON.parse(sessionStorage.getItem('user'))
      const customerSerialized = serializeruser(data)
      setCustomer(customerSerialized)
      localStorage.setItem('customer', JSON.stringify(customer))

      setTimeout(async () => {
        const profile = await getUser(
          customerSerialized.email,
          customerSerialized.token,
        )
        setCity(profile?.response?.data?.user?.city)
      }, 500)
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
        <div className="flex flex-col justify-center items-center">
          <Image
            src="/profile.svg"
            alt="user image"
            width={200}
            height={100}
            className="text-red-500 fill-current"
          />
          <div className="flex flex-col gap-1 justify-start items-start">
            <p className="text-white text-xl">Nome: {customer.user}</p>
            <p className="text-white text-xl flex justify-center items-center">
              Cidade: {city || 'N/D'} <ModalCity customer={customer} />
            </p>
          </div>
        </div>
      )}
    </div>
  )
}

export default Settings
