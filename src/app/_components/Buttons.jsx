'use client'
import { useRouter } from 'next/navigation'
import React from 'react'

export const ButtonLoginRedirect = () => {
  const router = useRouter()

  const handleRedirect = () => {
    router.push('/auth/login')
  }

  return (
    <div>
      <button
        className="bg-blueLight text-white font-light rounded-md py-3 px-8 shadow-md shadow-black 
                  transition-transform duration-150 active:scale-95"
        onClick={handleRedirect}
      >
        Login
      </button>
    </div>
  )
}

export const ButtonRegisterRedirect = () => {
  const router = useRouter()

  const handleRedirect = () => {
    router.push('/auth/register')
  }

  return (
    <div>
      <button
        className="bg-blueBlack text-white font-light rounded-md py-3 px-8 shadow-md shadow-black 
                  transition-transform duration-150 active:scale-95"
        onClick={handleRedirect}
      >
        Cadastre-se
      </button>
    </div>
  )
}

export const ButtonHomeRedirect = () => {
  const router = useRouter()

  const handleRedirect = () => {
    router.push('/')
  }

  return (
    <div>
      <button
        className="bg-gray-300 text-black font-light rounded-md py-3 px-8 shadow-md shadow-black 
                  transition-transform duration-150 active:scale-95"
        onClick={handleRedirect}
      >
        Ir para home
      </button>
    </div>
  )
}

export const ButtonLoginSubmit = () => {
  return (
    <div>
      <button
        className="bg-blueLight text-white font-light rounded-md py-3 px-8 shadow-md shadow-black 
                  transition-transform duration-150 active:scale-95"
        type="submit"
      >
        Login
      </button>
    </div>
  )
}

export const ButtonRegisterSubmit = () => {
  const router = useRouter()

  const handleRedirect = () => {
    router.push('/auth/register')
  }

  return (
    <div>
      <button
        className="bg-blueBlack text-white font-light rounded-md py-3 px-8 shadow-md shadow-black 
                  transition-transform duration-150 active:scale-95"
        onClick={handleRedirect}
      >
        Cadastre-se
      </button>
    </div>
  )
}
