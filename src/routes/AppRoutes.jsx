
import About from '@/pages/About';
import Home from '@/pages/Home';
import ProductDetail from '@/pages/ProductDetail';
import Shop from '@/pages/Shop';
import React from 'react'
import { Routes, Route } from "react-router-dom";

const AppRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/shop" element={<Shop/>} />
        <Route path="/product/:id" element={<ProductDetail/>} />
        <Route path="/about" element={<About/>} />
    </Routes>
  )
}

export default AppRoutes
