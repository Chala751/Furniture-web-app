import { Home } from 'lucide-react';
import React from 'react'
import { Routes, Route } from "react-router-dom";

const AppRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>} />
    </Routes>
  )
}

export default AppRoutes
