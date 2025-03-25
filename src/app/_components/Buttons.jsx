'use client'
import { useRouter } from 'next/navigation'
import React from 'react';


export const ButtonLogin = () => {
  

  const router = useRouter();

  const handleRedirect = () => {
    router.push('/auth/login');
  };
  
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
  );
}

export const ButtonSignIn = () => {
  const hasClick = () => alert('AEEEEE');
  
  return (
    <div>
      <button 
        className="bg-blueBlack text-white font-light rounded-md py-3 px-8 shadow-md shadow-black 
                  transition-transform duration-150 active:scale-95"
        onClick={hasClick}
      >
        Cadastre-se
      </button>
    </div>
  );
}
