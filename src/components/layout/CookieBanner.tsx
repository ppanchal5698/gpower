import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '../ui/button'
import { Link } from 'react-router-dom'

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Show banner if not accepted previously
    const hasAccepted = localStorage.getItem('gpower-cookie-consent')
    if (!hasAccepted) {
      // Small delay so it animates in after initial load
      const timer = setTimeout(() => setIsVisible(true), 1000)
      return () => clearTimeout(timer)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem('gpower-cookie-consent', 'true')
    setIsVisible(false)
  }

  const declineCookies = () => {
    localStorage.setItem('gpower-cookie-consent', 'false')
    setIsVisible(false)
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", bounce: 0, duration: 0.6 }}
          className="fixed bottom-0 left-0 right-0 z-[100] p-4 pointer-events-none"
        >
          <div className="container mx-auto max-w-5xl pointer-events-auto">
            <div className="bg-gpower-navy text-white p-6 rounded-2xl shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6 border border-slate-700">
              <div className="flex-1 flex flex-col md:flex-row gap-4 md:gap-6 items-start">
                <img src="/logo.svg" alt="" className="w-8 h-8 shrink-0 mt-1 opacity-90 brightness-0 invert hidden sm:block" aria-hidden="true" />
                <div>
                  <h3 className="text-lg font-bold mb-2">We value your privacy</h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. By clicking "Accept All", you consent to our use of cookies as described in our{' '}
                    <Link to="/legal/privacy-policy" className="text-gpower-green hover:underline font-semibold">
                      Privacy Policy
                    </Link>.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3 shrink-0 w-full md:w-auto">
                <Button 
                  onClick={declineCookies} 
                  variant="outline" 
                  className="flex-1 md:flex-none border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white"
                >
                  Decline
                </Button>
                <Button 
                  onClick={acceptCookies} 
                  className="flex-1 md:flex-none bg-gpower-green hover:bg-emerald-600 text-white"
                >
                  Accept All
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
