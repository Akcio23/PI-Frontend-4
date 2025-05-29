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
  const [weather, setWeather] = useState()

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

        const weatherParse = serializedApi(cityWeather?.response?.data)

        setWeather(weatherParse)
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
          <div className="text-white font-light flex flex-col justify-center items-center mt-5 gap-1">
            <p className="text-white text-xl">
              {weather?.forecast?.[0]?.weekday}
            </p>
            <p>{weather?.city}</p>
            <p className="text-5xl pl-4 ">{weather?.temp}º</p>
            <p>{weather?.desc}</p>
          </div>
          <div className="flex justify-center mt-3">
            <div className="text-white font-light flex flex-col items-start text-left">
              <p>Umidade do ar: {weather?.humidity}%</p>
              <p>
                Max.: {weather?.forecast?.[0]?.max}º, Min.:{' '}
                {weather?.forecast?.[0]?.min}º
              </p>
              <p>Prob. de chuva: {weather.rain} %</p>
            </div>
          </div>
          <div className="flex justify-center items-center mt-5">
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
                      <span>{weather.forecast[1].weekday}</span>
                    </div>
                  </td>
                  <td className="text-right">{weather.forecast[1].max}°</td>
                  <td className="text-right">{weather.forecast[1].min}°</td>
                </tr>
                <tr>
                  <td>
                    <div className="flex items-center gap-2">
                      <span>{weather.forecast[2].weekday}</span>
                    </div>
                  </td>
                  <td className="text-right">{weather.forecast[2].max}°</td>
                  <td className="text-right">{weather.forecast[2].min}°</td>
                </tr>
                <tr>
                  <td>
                    <div className="flex items-center gap-2">
                      <span>{weather.forecast[3].weekday}</span>
                    </div>
                  </td>
                  <td className="text-right">{weather.forecast[3].max}°</td>
                  <td className="text-right">{weather.forecast[3].min}°</td>
                </tr>
                <tr>
                  <td>
                    <div className="flex items-center gap-2">
                      <span>{weather.forecast[4].weekday}</span>
                    </div>
                  </td>
                  <td className="text-right">{weather.forecast[4].max}°</td>
                  <td className="text-right">{weather.forecast[4].min}°</td>
                </tr>
                <tr>
                  <td>
                    <div className="flex items-center gap-2">
                      <span>{weather.forecast[5].weekday}</span>
                    </div>
                  </td>
                  <td className="text-right">{weather.forecast[5].max}°</td>
                  <td className="text-right">{weather.forecast[5].min}°</td>
                </tr>
                <tr>
                  <td>
                    <div className="flex items-center gap-2">
                      <span>{weather.forecast[6].weekday}</span>
                    </div>
                  </td>
                  <td className="text-right">{weather.forecast[6].max}°</td>
                  <td className="text-right">{weather.forecast[6].min}°</td>
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
