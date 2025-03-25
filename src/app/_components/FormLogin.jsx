'use client'
import React from 'react'
import { ButtonLogin } from './Buttons.jsx'
import FirstPageIcon from '@mui/icons-material/FirstPage';



const FormLogin = () => {
  return (
    
    <div className='flex flex-col justify-center items-center h-screen'>
    
      <form className='flex flex-col gap-5  w-[80%] items-center'>

        <div className='flex justify-start items-start md:w-[40%] lg:w-[40%] xl:w-[40%]'>
          <label htmlFor="login" className='text-white '>E-mail</label>
        </div>
        <input type="text" id="login" className='rounded-md w-[80%] md:w-[40%] lg:w-[40%] xl:w-[40%] px-2 py-2'
        placeholder='Digite seu email '/>

        <div className='flex justify-start items-start md:w-[40%] lg:w-[40%] xl:w-[40%]'>
          <label htmlFor="password" className='text-white '>Senha</label>
        </div>
        <input type="password" id="password" className='rounded-md w-[80%] md:w-[40%] lg:w-[40%] xl:w-[40%] px-2 py-2'
        placeholder='Digite sua senha'/>
        
        <div className='mt-8'>
        <ButtonLogin/>
        </div>
        

      </form>
    </div>
  )
}

export default FormLogin