import React from 'react'

const Backgroud = ({ children }) => {
  return (
    <div className="bg-[rgba(0,0,0,0.5)] h-[80%] w-[80%] rounded-md shadow-md shadow-black flex-col">
      {children}
    </div>
  )
}

export default Backgroud
