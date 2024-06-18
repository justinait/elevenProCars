import React, { useContext } from 'react'
import { AuthContext } from './context/AuthContext'
import { Navigate, Outlet } from 'react-router-dom'

function ProtectedUsers() {
    const {user, isLogged} = useContext(AuthContext)
  return (
    <>
      {
        isLogged && user?.rol === "user" ?
        <Outlet /> :
        <Navigate to="/login" />
      }
    </>
  )
}

export default ProtectedUsers