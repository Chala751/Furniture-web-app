import React from 'react'
import { BrowserRouter as Router } from "react-router-dom";
import Header from './componentes/Header';
import AppRoutes from './routes/AppRoutes';
import Footer from './componentes/Footer';

const App = () => {
  return (
   <Router>
    <Header/>
    <main className="min-h-screen">
      <AppRoutes/>
    </main>
    <Footer/>
   </Router>
  )
}

export default App
