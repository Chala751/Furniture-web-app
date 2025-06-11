
import About from '@/pages/About';
import Cart from '@/pages/Cart';
import Contact from '@/pages/Contact';
import Home from '@/pages/Home';
import Login from '@/pages/Login';
import ProductDetail from '@/pages/ProductDetail';
import Register from '@/pages/Register';
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
        <Route path="/contact" element={<Contact/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/login" element={<Login/>} />
    </Routes>
  )
}

export default AppRoutes
