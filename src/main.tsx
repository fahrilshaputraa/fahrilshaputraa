import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import AOS from 'aos'
import 'aos/dist/aos.css'
import './index.css'
import Home from './pages/Home.tsx'
import Header from './layouts/Header.tsx'
import Footer from './layouts/Footer.tsx'
import ProjectPage from "./pages/project"
import ProjectDetail from "./pages/project/[id]"
import NotFound from './pages/NotFound'
import { HelmetProvider } from 'react-helmet-async';
import ScrollToTop from './components/ScrollToTop'

AOS.init({
    duration: 800,
    once: false,
    mirror: true
})

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <HelmetProvider>
            <Suspense fallback={
                <div className="flex items-center justify-center min-h-screen">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
                </div>
            }>
                <Router>
                    <ScrollToTop />
                    <Header />
                    <main className="min-h-screen">
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/project" element={<ProjectPage />} />
                            <Route path="/project/:id" element={<ProjectDetail />} />
                            <Route path="*" element={<NotFound />} />
                        </Routes>
                    </main>
                    <Footer />
                </Router>
            </Suspense>
        </HelmetProvider>
    </StrictMode>,
)
