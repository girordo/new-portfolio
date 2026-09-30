import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { WavyBackground } from './Background/Background'
import Navbar from './Navbar/Navbar'
import Footer from './Footer/Footer'
import FloatingBar from './FloatingBar/FloatingBar'
import CommandPalette from './CommandPalette/CommandPalette'
import HomePage from '../pages/HomePage'
import WorkPage from '../pages/WorkPage'
import ProjectsPage from '../pages/ProjectsPage'
import LabPage from '../pages/LabPage'
import ShelfPage from '../pages/ShelfPage'

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

function PortfolioContent() {
  const [commandOpen, setCommandOpen] = useState(false)
  const colors = ['#4caf50', '#03a9f4', '#9c27b0', '#607d8b']

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        setCommandOpen((prev) => !prev)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <WavyBackground colors={colors} waveOpacity={0.16} blur={14} speed="slow">
      <ScrollToTop />
      <Navbar onOpenCommand={() => setCommandOpen(true)} />
      <main className="min-h-screen">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/work" element={<WorkPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/lab" element={<LabPage />} />
          <Route path="/shelf" element={<ShelfPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </main>
      <Footer />
      <FloatingBar onOpenCommand={() => setCommandOpen(true)} />
      <CommandPalette
        isOpen={commandOpen}
        onClose={() => setCommandOpen(false)}
      />
    </WavyBackground>
  )
}

function App() {
  return (
    <BrowserRouter>
      <PortfolioContent />
    </BrowserRouter>
  )
}

export default App
