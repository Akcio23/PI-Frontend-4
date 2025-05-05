'use client'
import React, { useState, useEffect } from 'react'
import serializeruser from '../../_serializer/serializeruser'
import { ButtonHomeRedirect } from '../../_components/Buttons'
import Backgroud from '@/app/_components/Backgroud'
import { getCityWeather } from '@/app/_service/hq-api/getCity'
import { getUser } from '@/app/_service/user/getUser'
import serializedApi from '@/app/_serializer/serializarApi'

const Temps = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [customer, setCustomer] = useState()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await JSON.parse(sessionStorage.getItem('user'))
        const customerSerialized = serializeruser(data)
        setCustomer(customerSerialized)

        const profileResponse = await getUser(
          customerSerialized.email,
          customerSerialized.token,
        )
        const city = profileResponse.response.data.user.city
        const cityWeather = await getCityWeather(city)

        const test = serializedApi(cityWeather.response.data)

        console.log(test, '------------------>')

        console.log(cityWeather)
      } catch (err) {
        console.log(err)
      } finally {
        setIsLoading(false)
      }
    }
    fetchData()
  }, [])
  if (isLoading) {
    return (
      <Backgroud>
        <div className="h-6 w-40 bg-gray-700 rounded animate-pulse"></div>
      </Backgroud>
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
          <div className="text-white font-light flex flex-col justify-center items-center mt-5 gap-1">
            <p className="text-white text-xl">DOM</p>
            <p>Franca-SP</p>
            <p className="text-5xl pl-4">22º</p>
            <p>Parcialmente nublado</p>
          </div>
          <div className="flex justify-center mt-3">
            <div className="text-white font-light flex flex-col items-start text-left">
              <p>Umidade do ar: 41%</p>
              <p>Max.: 25º, Min.: 15º</p>
              <p>Prob. de chuva: 20%</p>
            </div>
          </div>
          <div className="flex justify-center items-center mt-2">
            <table border="1" className=" text-white">
              <thead>
                <tr>
                  <th></th>
                  <th className="text-right font-light pl-5">Max</th>
                  <th className="text-right font-light pl-5">Min</th>
                </tr>
              </thead>
              <tbody className="text-left">
                <tr>
                  <td>
                    <div className="flex items-center gap-2">
                      <span>Segunda</span>
                    </div>
                  </td>
                  <td className="text-right">25°</td>
                  <td className="text-right">10°</td>
                </tr>
                <tr>
                  <td>
                    <div className="flex items-center gap-2">
                      <span>Terça</span>
                    </div>
                  </td>
                  <td className="text-right">25°</td>
                  <td className="text-right">10°</td>
                </tr>
                <tr>
                  <td>
                    <div className="flex items-center gap-2">
                      <span>Quarta</span>
                    </div>
                  </td>
                  <td className="text-right">25°</td>
                  <td className="text-right">10°</td>
                </tr>
                <tr>
                  <td>
                    <div className="flex items-center gap-2">
                      <span>Quinta</span>
                    </div>
                  </td>
                  <td className="text-right">25°</td>
                  <td className="text-right">10°</td>
                </tr>
                <tr>
                  <td>
                    <div className="flex items-center gap-2">
                      <span>Sexta</span>
                    </div>
                  </td>
                  <td className="text-right">25°</td>
                  <td className="text-right">10°</td>
                </tr>
                <tr>
                  <td>
                    <div className="flex items-center gap-2">
                      <span>Sábado</span>
                    </div>
                  </td>
                  <td className="text-right">25°</td>
                  <td className="text-right">10°</td>
                </tr>
                <tr>
                  <td>
                    <div className="flex items-center gap-2">
                      <span>Domingo</span>
                    </div>
                  </td>
                  <td className="text-right">25°</td>
                  <td className="text-right">10°</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Backgroud>
      )}
    </div>
  )
}

export default Temps
