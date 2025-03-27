'use client'
import React from 'react'
import serializeruser from '../_serializer/serializeruser'
import { ButtonHomeRedirect } from '../_components/Buttons'

const Home = () => {
  const data = JSON.parse(sessionStorage.getItem('user'))
  const user = serializeruser(data)
  console.log(data)

  return (
    <div>
      {!user?._id ? (
        <div>
          <p>Não logado</p>
          <ButtonHomeRedirect />
        </div>
      ) : (
        <div>page</div>
      )}
    </div>
  )
}

export default Home
