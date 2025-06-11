'use client'
import React, { useState } from 'react'
import CreateIcon from '@mui/icons-material/Create'
import LoadingSpinner from './LoadingSpiner'
import { addCity } from '../_service/user/postCity'

const ModalCity = ({ customer }) => {
  const [show, setShow] = useState(false)
  const [city, setCity] = useState()
  const [loading, setLoading] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const handleAdd = async () => {
    await addCity(_id, city, token)
    setLoading(true)
    handleClose()
    window.location.reload()
  }
  const { _id, token } = customer

  return (
    <>
      {loading && <LoadingSpinner />}
      <button
        onClick={handleShow}
        className=" text-white px-3 py-2 rounded flex items-center gap-2 hover:text-blue-500 transition-colors duration-300"
      >
        <CreateIcon fontSize="small" />
      </button>

      {show && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          {/* Modal box */}
          <div className="bg-gray-600 rounded-lg shadow-lg max-w-sm w-full p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Adicionar cidade</h2>
              <button
                onClick={handleClose}
                className="text-gray-500 hover:text-red-500"
              >
                ✕
              </button>
            </div>
            <p className="mb-6">Qual a sua cidade?</p>
            <input
              className="mb-5 rounded-md w-[100%] text-black p-1"
              onChange={(e) => setCity(e.target.value)}
              value={city}
            />
            <div className="flex justify-end gap-2">
              <button
                onClick={handleClose}
                className="px-4 py-2 rounded bg-gray-600 hover:bg-gray-300 hover:text-gray-600"
              >
                Cancelar
              </button>
              <button
                onClick={handleAdd}
                className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-400"
              >
                Salvar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default ModalCity
