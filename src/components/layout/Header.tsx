import { useEffect, useState } from 'react'
import { navItems } from '../../content/homepage'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Menu } from 'lucide-react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'

export function Header() {
  const [open, setOpen] = useState(false)
  const [activeId, setActiveId] = useState('home')

  const { scrollY } = useScroll()
  const headerBackground = useTransform(
    scrollY,
    [0, 24],
    ['rgba(255, 255, 255, 1)', 'rgba(255, 255, 255, 0.9)']
  )
  const headerBorder = useTransform(
    scrollY,
    [0, 24],
    ['rgba(226, 232, 240, 0)', 'rgba(226, 232, 240, 1)']
  )
  const headerShadow = useTransform(
    scrollY,
    [0, 24],
    ['0 0px 0px rgba(0, 0, 0, 0)', '0 4px 20px rgba(0, 0, 0, 0.05)']
  )
  const headerHeight = useTransform(
    scrollY,
    [0, 24],
    ['120px', '96px']
  )

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 900) {
        setOpen(false)
      }
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  useEffect(() => {
    const sections = [...new Set(navItems.map((item) => item.sectionId))]
      .map((sectionId) => document.getElementById(sectionId))
      .filter((element): element is HTMLElement => element !== null)

    if (sections.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        const inView = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

        if (inView[0]) {
          setActiveId(inView[0].target.id)
        }
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: [0, 0.25, 0.5, 0.75, 1] },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])


  return (
    <motion.header
      style={{
        background: headerBackground,
        borderBottomWidth: 1,
        borderColor: headerBorder,
        boxShadow: headerShadow,
        height: headerHeight
      }}
      className="fixed inset-x-0 top-0 z-50 flex items-center backdrop-blur-xl transition-colors"
    >
      <div className="container mx-auto flex items-center justify-between px-6 xl:px-0">
        <a href="#home" className="flex items-center gap-2 relative z-50" aria-label="GPower Solutions home">
          <img
            className="h-20 lg:h-[88px] hidden lg:block py-2"
            src="/logo-landscape.svg"
            alt="GPower Solutions"
          />
          <img
            className="h-[72px] block lg:hidden object-contain"
            src="/logo-landscape.svg"
            alt="GPower Solutions"
          />
        </a>

        <nav className="hidden lg:flex items-center gap-10" aria-label="Primary navigation">
          <ul className="flex items-center gap-8">
            {navItems.map((item) => {
              const isActive = item.sectionId === activeId
              return (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className={`relative text-[15px] tracking-wide font-semibold transition-all duration-300 ${isActive ? 'text-gpower-green' : 'text-slate-600 hover:text-gpower-navy'
                      }`}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {item.label}
                    {isActive && (
                      <motion.div
                        layoutId="nav-indicator"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                        className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gpower-green rounded-full"
                      />
                    )}
                  </a>
                </li>
              )
            })}
          </ul>
        </nav>

        <div className="hidden lg:flex items-center gap-4 ml-8">
          <Button render={<a href="mailto:info@gpowersolutions.in" />} variant="outline" size="sm" className="border-slate-200 text-gpower-navy hover:bg-gpower-navy hover:text-white hover:border-gpower-navy font-medium rounded-full transition-all shadow-sm">
            Contact Us
          </Button>
          <Button render={<Link to="/?form=assessment#assessment" />} size="sm" className="bg-gpower-green hover:bg-emerald-600 text-white font-medium shadow-lg shadow-emerald-500/20 px-6 rounded-full transition-all hover:scale-105 active:scale-95">
            Get Assessment
          </Button>
        </div>

        <div className="flex lg:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger render={<Button variant="ghost" size="icon" className="text-gpower-navy hover:bg-slate-100 relative z-50" />}>
              <Menu className="w-6 h-6" />
            </SheetTrigger>
            <SheetContent side="right" className="w-full sm:w-[400px] flex flex-col pt-24 bg-white border-l border-slate-200 !z-[1000] !opacity-100 shadow-2xl">
              <nav className="flex flex-col gap-8 px-4">
                <AnimatePresence>
                  {navItems.map((item, i) => (
                    <motion.a
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      key={item.label}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className={`text-3xl font-bold tracking-tight ${item.sectionId === activeId ? 'text-gpower-green' : 'text-slate-800'
                        }`}
                    >
                      {item.label}
                    </motion.a>
                  ))}
                </AnimatePresence>
                <div className="mt-8 flex flex-col gap-4">
                  <Button render={<a href="mailto:info@gpowersolutions.in" onClick={() => setOpen(false)} />} variant="outline" className="w-full justify-center border-slate-200 text-gpower-navy hover:bg-slate-50 rounded-full h-12 text-base font-semibold shadow-sm">
                    Contact Us
                  </Button>
                  <Button render={<Link to="/?form=assessment#assessment" onClick={() => setOpen(false)} />} className="w-full justify-center bg-gpower-green hover:bg-emerald-600 text-white rounded-full h-12 text-base font-semibold shadow-lg shadow-emerald-500/20">
                    Get Assessment
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  )
}
