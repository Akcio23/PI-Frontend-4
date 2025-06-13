'use client'
import React, { useState, useEffect } from 'react'
import serializeruser from '../../_serializer/serializeruser'
import { ButtonHomeRedirect } from '../../_components/Buttons'
import Backgroud from '@/app/_components/Backgroud'
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
} from 'recharts'

const Dashboard = () => {
  const [customer, setCustomer] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  const estatisticas = [
    { label: 'Média', value: 25.73 },
    { label: 'Moda', value: 25.5 },
    { label: 'Mediana', value: 25.4 },
  ]

  const comparativos = [
    { label: 'Mínimo', value: 17.6 },
    { label: 'P25', value: 24.7 },
    { label: 'P50', value: 25.4 },
    { label: 'P75', value: 27 },
    { label: 'Máximo', value: 31.6 },
  ]

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = JSON.parse(sessionStorage.getItem('user'))
        const customerSerialized = serializeruser(data)
        setCustomer(customerSerialized)
        localStorage.setItem('customer', JSON.stringify(customerSerialized))
      } catch (err) {
        console.log(err)
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [])

  // Loading state
  if (isLoading) {
    return (
      <div className="min-h-screen flex justify-center items-center p-4">
        <Backgroud>
          <div className="flex items-center justify-center h-full min-h-[400px]">
            <div className="w-full max-w-md rounded animate-pulse flex flex-col gap-4 p-4 relative">
              <div className="h-80 bg-white/10 rounded flex items-center justify-center">
                <div className="w-8 h-8 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
              </div>
            </div>
          </div>
        </Backgroud>
      </div>
    )
  }

  // Not authenticated state
  if (!customer?._id) {
    return (
      <div className="min-h-screen flex justify-center items-center p-4">
        <Backgroud>
          <div className="flex flex-col gap-8 justify-center items-center h-full min-h-[400px] p-6">
            <p className="text-white text-center font-bold text-lg md:text-xl">
              Faça login para continuar!
            </p>
            <ButtonHomeRedirect />
          </div>
        </Backgroud>
      </div>
    )
  }

  // Main content
  return (
    <div className="min-h-screen flex justify-center items-center p-2 sm:p-4">
      <Backgroud>
        <div className="w-full max-w-6xl mx-auto text-white">
          <div className="text-center mb-16">
            <h1 className="text-white font-extrabold text-xl mt-5 sm:text-2xl md:text-3xl text-center">
              Analítico do Clima
            </h1>
            <p className="text-lg text-white/70 font-light">
              Últimos 90 dias de dados meteorológicos
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-teal-400 mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 mb-16">
            <div className="group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-2xl blur-xl transform group-hover:scale-110 transition-transform duration-500"></div>
              <div className="relative p-8 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 hover:scale-[1.02]">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
                  <h3 className="text-2xl font-bold text-white">
                    Estatísticas
                  </h3>
                </div>
                <div className="bg-white/5 rounded-xl p-4 border border-white/5">
                  <ResponsiveContainer width="100%" height={280}>
                    <BarChart data={estatisticas}>
                      <CartesianGrid
                        strokeDasharray="2 4"
                        stroke="rgba(255,255,255,0.1)"
                      />
                      <XAxis
                        dataKey="label"
                        stroke="#e2e8f0"
                        fontSize={12}
                        tickLine={false}
                        axisLine={false}
                      />
                      <YAxis
                        stroke="#e2e8f0"
                        fontSize={12}
                        tickLine={false}
                        axisLine={false}
                      />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: 'rgba(0,0,0,0.8)',
                          border: '1px solid rgba(255,255,255,0.1)',
                          borderRadius: '12px',
                          color: '#fff',
                        }}
                      />
                      <Legend />
                      <Bar
                        dataKey="value"
                        fill="url(#blueGradient)"
                        radius={[8, 8, 0, 0]}
                        className="drop-shadow-lg"
                      />
                      <defs>
                        <linearGradient
                          id="blueGradient"
                          x1="0"
                          y1="0"
                          x2="0"
                          y2="1"
                        >
                          <stop offset="0%" stopColor="#38bdf8" />
                          <stop offset="100%" stopColor="#1e40af" />
                        </linearGradient>
                      </defs>
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-emerald-600/20 rounded-2xl blur-xl transform group-hover:scale-110 transition-transform duration-500"></div>
              <div className="relative p-8 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl hover:shadow-green-500/20 transition-all duration-300 hover:scale-[1.02]">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <h3 className="text-2xl font-bold text-white">
                    Comparativos
                  </h3>
                </div>
                <div className="bg-white/5 rounded-xl p-4 border border-white/5">
                  <ResponsiveContainer width="100%" height={280}>
                    <BarChart data={comparativos}>
                      <CartesianGrid
                        strokeDasharray="2 4"
                        stroke="rgba(255,255,255,0.1)"
                      />
                      <XAxis
                        dataKey="label"
                        stroke="#e2e8f0"
                        fontSize={12}
                        tickLine={false}
                        axisLine={false}
                      />
                      <YAxis
                        stroke="#e2e8f0"
                        fontSize={12}
                        tickLine={false}
                        axisLine={false}
                      />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: 'rgba(0,0,0,0.8)',
                          border: '1px solid rgba(255,255,255,0.1)',
                          borderRadius: '12px',
                          color: '#fff',
                        }}
                      />
                      <Legend />
                      <Bar
                        dataKey="value"
                        fill="url(#greenGradient)"
                        radius={[8, 8, 0, 0]}
                        className="drop-shadow-lg"
                      />
                      <defs>
                        <linearGradient
                          id="greenGradient"
                          x1="0"
                          y1="0"
                          x2="0"
                          y2="1"
                        >
                          <stop offset="0%" stopColor="#4ade80" />
                          <stop offset="100%" stopColor="#16a34a" />
                        </linearGradient>
                      </defs>
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          </div>

          <div className="relative group mb-10">
            <div className="absolute inset-0 bg-gradient-to-r from-sky-500/20 to-blue-600/20 rounded-2xl blur-xl transform group-hover:scale-105 transition-transform duration-500"></div>
            <div className="relative text-center p-8 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-sky-500/20 rounded-full mb-4">
                <div className="w-2 h-2 bg-sky-400 rounded-full animate-ping"></div>
                <span className="text-sm font-medium text-sky-300">
                  Relatório Detalhado
                </span>
              </div>

              <h4 className="text-xl font-bold mb-3 text-white">
                Análise Completa Disponível
              </h4>
              <p className="text-white/70 mb-6 max-w-md mx-auto">
                Acesse dados históricos, tendências avançadas e insights
                detalhados sobre as condições climáticas
              </p>

              <a
                href="https://lookerstudio.google.com/u/0/reporting/14699bb1-d3a1-44e4-8d66-d88243dbcd2c"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 group"
              >
                <span>Acessar Relatório Completo</span>
                <svg
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </a>

              <p className="text-xs text-white/50 mt-4">
                Powered by Google Looker Studio
              </p>
            </div>
          </div>
        </div>
      </Backgroud>
    </div>
  )
}

export default Dashboard
