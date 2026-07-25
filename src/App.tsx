import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { HomePage } from './pages/HomePage'
import { SolutionPage } from './pages/SolutionPage'
import { CaseStudyPage } from './pages/CaseStudyPage'
import { LegalPage } from './pages/LegalPage'
import { NotFoundPage } from './pages/NotFoundPage'
import { BlogPage } from './pages/BlogPage'
import { CookieBanner } from './components/layout/CookieBanner'

function ScrollToHash() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // Small timeout to ensure DOM is ready
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [hash]);

  return null;
}

function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <ScrollToHash />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/solution/:slug" element={<SolutionPage />} />
        <Route path="/case-study/:slug" element={<CaseStudyPage />} />
        <Route path="/legal/:slug" element={<LegalPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:id" element={<BlogPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <CookieBanner />
    </BrowserRouter>
  )
}

export default App
