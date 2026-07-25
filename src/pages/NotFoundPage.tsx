import { Link } from 'react-router-dom'
import { Header } from '../components/layout/Header'
import { Footer } from '../components/layout/Footer'

export function NotFoundPage() {
  return (
    <>
      <Header />
      <main className="min-h-[80vh] flex items-center justify-center pt-[140px] pb-12">
        <div className="container mx-auto px-6 text-center flex flex-col items-center">
          <img src="/logo.svg" alt="GPower Solutions" className="w-24 h-24 mb-8 opacity-80" />
          <h1 className="text-9xl font-black text-gpower-green mb-4 font-heading">404</h1>
          <h2 className="text-3xl font-bold text-gpower-navy mb-6 font-heading">Page Not Found</h2>
          <p className="text-slate-600 mb-8 max-w-md mx-auto text-lg">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
          <Link to="/" className="inline-flex items-center justify-center bg-gpower-green hover:bg-emerald-600 text-white rounded-md h-12 px-8 text-base shadow-lg shadow-emerald-500/20 font-medium transition-colors">
          Return Home
        </Link>
        </div>
      </main>
      <Footer />
    </>
  )
}
