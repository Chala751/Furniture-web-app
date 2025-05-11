
import Home from '@/pages/Home';
import Shop from '@/pages/Shop';
import React from 'react'
import { Routes, Route } from "react-router-dom";

const AppRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/shop" element={<Shop/>} />
    </Routes>
  )
}

export default AppRoutes
