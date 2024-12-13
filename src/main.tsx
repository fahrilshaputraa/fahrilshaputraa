import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import './index.css'
import Home from './pages/Home.tsx'
import Header from './layouts/Header.tsx'
import Footer from './layouts/Footer.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  </StrictMode>,
)
