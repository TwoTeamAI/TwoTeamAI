import { Routes, Route } from 'react-router-dom'
import { Navbar } from './components/layout/Navbar'
import { Footer } from './components/layout/Footer'
import { MobileDrawer } from './components/layout/MobileDrawer'
import { WhatsAppFloatingBtn } from './components/shared/WhatsAppFloatingBtn'
import { HomePage } from './pages/HomePage'
import { ServicesPage } from './pages/ServicesPage'
import { SolutionsPage } from './pages/SolutionsPage'
import { WorkPage } from './pages/WorkPage'
import { CaseStudyDetailPage } from './pages/CaseStudyDetailPage'
import { AboutPage } from './pages/AboutPage'
import { ContactPage } from './pages/ContactPage'

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <MobileDrawer />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/solutions" element={<SolutionsPage />} />
          <Route path="/work" element={<WorkPage />} />
          <Route path="/work/:id" element={<CaseStudyDetailPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppFloatingBtn />
    </div>
  )
}

export default App