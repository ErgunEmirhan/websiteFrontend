import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import Layout from '../components/organisms/Layout'

function RouterPage() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<div>about</div>} />
        
        <Route element={<Layout/>}>
            <Route path= "/home" element={<HomePage/>} />
        </Route>

    </Routes>
    </BrowserRouter>
  )
}

export default RouterPage