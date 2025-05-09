import React from 'react'
import { BrowserRouter as Router } from "react-router-dom";
import Header from './componentes/Header';
import AppRoutes from './routes/AppRoutes';

const App = () => {
  return (
   <Router>
    <Header/>
    <main className="min-h-screen">
      <AppRoutes/>
    </main>
   </Router>
  )
}

export default App
