import { BrowserRouter, Route, Routes } from "react-router-dom"
import React, { lazy, Suspense, useEffect } from "react"

import Home from "./pages/Home"
import Navbar from "./components/Navbar"
import FloatingNewsletter from "./components/FloatingNewsletter"
import Footer from "./components/Footer"

const About = lazy(() => import("./pages/About"))
const ProgramsPage = lazy(() => import("./pages/ProgramsPage"))
const ProjectsPage = lazy(() => import("./pages/ProjectsPage"))
const Donate = lazy(() => import("./pages/Donate"))
const Contact = lazy(() => import("./pages/Contact"))
const NewsletterPage = lazy(() => import("./pages/NewsletterPage"))
const MembershipForm = lazy(() => import("./pages/MembershipForm"))
const MembersPage = lazy(() => import("./pages/MembersPage"))
const PolicyPage = lazy(() => import("./pages/PolicyPage"))
const AdminLogin = lazy(() => import("./pages/AdminLogin"))
const AdminDashboard = lazy(() => import("./pages/AdminDashboard"))

function App() {
  useEffect(() => {
    const loadAnimations = () => {
      Promise.all([import("aos"), import("aos/dist/aos.css")]).then(([{ default: AOS }]) => {
        AOS.init({
          duration: 850,
          easing: "ease-out-cubic",
          once: true,
          offset: 80,
        })
      })
    }

    if ("requestIdleCallback" in window) {
      const idleId = window.requestIdleCallback(loadAnimations)
      return () => window.cancelIdleCallback(idleId)
    }

    const timeoutId = window.setTimeout(loadAnimations, 1)
    return () => window.clearTimeout(timeoutId)
  }, [])

  return (
    <BrowserRouter>
      <Navbar />

      <main>
        <Suspense fallback={<div className="page-loading">Loading AVARD...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/programs" element={<ProgramsPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/donate" element={<Donate />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/newsletter" element={<NewsletterPage />} />
            <Route path="/membership" element={<MembershipForm />} />
            <Route path="/members" element={<MembersPage />} />
            <Route path="/:slug" element={<PolicyPage />} />
            <Route path="/admin" element={<AdminLogin />} />
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
          </Routes>
        </Suspense>
      </main>

      <FloatingNewsletter />
      <Footer />
    </BrowserRouter>
  )
}

export default App
