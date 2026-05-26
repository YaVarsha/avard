import { BrowserRouter, Route, Routes } from "react-router-dom"
import React, { lazy, Suspense, useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"

const Home = lazy(() => import("./pages/Home"))
const About = lazy(() => import("./pages/About"))
const ProgramsPage = lazy(() => import("./pages/ProgramsPage"))
const ProjectsPage = lazy(() => import("./pages/ProjectsPage"))
const Donate = lazy(() => import("./pages/Donate"))
const Contact = lazy(() => import("./pages/Contact"))
const NewsletterPage = lazy(() => import("./pages/NewsletterPage"))
const AdminLogin = lazy(() => import("./pages/AdminLogin"))
const AdminDashboard = lazy(() => import("./pages/AdminDashboard"))

const Navbar = lazy(() => import("./components/Navbar"))
const Footer = lazy(() => import("./components/Footer"))
const FloatingNewsletter = lazy(() => import("./components/FloatingNewsletter"))

function App() {
  useEffect(() => {
    AOS.init({
      duration: 850,
      easing: "ease-out-cubic",
      once: true,
      offset: 80,
    })
  }, [])

  return (
    <BrowserRouter>
      <Suspense fallback={<div className="page-loading">Loading AVARD...</div>}>
        <Navbar />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/programs" element={<ProgramsPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/donate" element={<Donate />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/newsletter" element={<NewsletterPage />} />
            <Route path="/admin" element={<AdminLogin />} />
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
          </Routes>
        </main>

        <FloatingNewsletter />
        <Footer />
      </Suspense>
    </BrowserRouter>
  )
}

export default App
