import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import { SolutionPage } from './pages/SolutionPage'
import { CaseStudyPage } from './pages/CaseStudyPage'
import { LegalPage } from './pages/LegalPage'
import { NotFoundPage } from './pages/NotFoundPage'
import { CookieBanner } from './components/layout/CookieBanner'

function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/solution/:slug" element={<SolutionPage />} />
        <Route path="/case-study/:slug" element={<CaseStudyPage />} />
        <Route path="/legal/:slug" element={<LegalPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <CookieBanner />
    </BrowserRouter>
  )
}

export default App
