import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Home from '../../pages/Home'

type Props = {}

const Router = (props: Props) => {
  return (
    <Routes>
      <Route path='/' element={<Navigate to="/home" replace={true} />}/>
      <Route path='/home' element={<Home />} />
    </Routes>
  )
}

export default Router