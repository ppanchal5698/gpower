import { motion } from 'framer-motion';
import { ArrowRight, Play, X } from 'lucide-react';
import { Button } from '../ui/button';
import * as Dialog from '@radix-ui/react-dialog';
import { Link } from 'react-router-dom';

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-white overflow-hidden pt-20">
      {/* Background Subtle Elements */}
      <div className="absolute inset-0 z-0 bg-slate-50">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-slate-100 to-transparent skew-x-[-10deg] translate-x-10"></div>
        {/* Decorative Brand Watermark */}
        <div className="absolute top-1/4 -left-64 lg:-left-32 w-96 lg:w-[600px] h-96 lg:h-[600px] opacity-[0.03] pointer-events-none z-0">
          <img src={`${import.meta.env.BASE_URL}logo.svg`} alt="" aria-hidden="true" className="w-full h-full object-contain" />
        </div>
      </div>

      <div className="container relative z-10 mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Column: Content */}
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center space-x-2 bg-slate-100 border border-slate-200 px-4 py-2 rounded-full mb-8">
              <span className="w-2 h-2 rounded-full bg-gpower-green animate-pulse"></span>
              <span className="text-sm font-medium text-slate-800 tracking-wide uppercase">
                Powering a Sustainable Tomorrow
              </span>
            </div>
          </motion.div>

          <motion.h1
            className="text-5xl lg:text-7xl font-bold text-gpower-navy leading-[1.1] mb-6 font-heading"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            One Partner. <br />
            Every <span className="text-gpower-green">Solution.</span>
          </motion.h1>

          <motion.p
            className="text-lg text-slate-600 mb-10 max-w-xl leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            From renewable energy and green hydrogen to battery storage and energy efficiency — we deliver end-to-end solutions for a cleaner, smarter and sustainable industry.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Link to="/#assessment" className="bg-gpower-green hover:bg-emerald-600 text-white rounded-md h-14 px-8 text-base shadow-lg shadow-emerald-500/20 group inline-flex items-center justify-center font-medium">
              Get Your Assessment
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Dialog.Root>
              <Dialog.Trigger asChild>
                <Button size="lg" variant="outline" className="border-slate-300 text-gpower-navy hover:bg-slate-50 h-14 px-8 text-base rounded-md group cursor-pointer">
                  <Play className="mr-2 w-5 h-5 text-gpower-green group-hover:scale-110 transition-transform" />
                  Watch Video
                </Button>
              </Dialog.Trigger>
              <Dialog.Portal>
                <Dialog.Overlay className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 animate-in fade-in duration-200" />
                <Dialog.Content className="fixed left-[50%] top-[50%] z-50 grid w-full max-w-4xl translate-x-[-50%] translate-y-[-50%] gap-4 bg-transparent p-6 shadow-lg sm:rounded-lg md:w-full animate-in zoom-in-95 fade-in duration-200">
                  <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-slate-900 border border-slate-700 shadow-2xl">
                    <iframe
                      width="100%"
                      height="100%"
                      src="https://www.youtube.com/embed/1-g73ty9v04?autoplay=1"
                      title="GPower Solutions Video"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <Dialog.Close asChild>
                    <button
                      className="absolute -top-4 -right-4 lg:-top-6 lg:-right-6 rounded-full bg-white/10 p-2 text-white hover:bg-white/20 transition-colors focus:outline-none focus:ring-2 focus:ring-white"
                      aria-label="Close"
                    >
                      <X className="h-6 w-6" />
                    </button>
                  </Dialog.Close>
                </Dialog.Content>
              </Dialog.Portal>
            </Dialog.Root>
          </motion.div>
          
          <motion.div 
            className="mt-12 flex items-center space-x-6 text-sm text-slate-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="flex -space-x-3">
               <img className="w-10 h-10 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop" alt="User" />
               <img className="w-10 h-10 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop" alt="User" />
               <img className="w-10 h-10 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&h=100&fit=crop" alt="User" />
            </div>
            <p>Trusted by industrial leaders including <span className="font-semibold text-gpower-navy">Tata Steel, Adani Green,</span> and <span className="font-semibold text-gpower-navy">Reliance Industries</span>.</p>
          </motion.div>
        </div>

        {/* Right Column: Hero Image */}
        <motion.div
          className="relative h-[600px] w-full hidden lg:block"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl shadow-slate-200">
            <img 
              src={`${import.meta.env.BASE_URL}home.webp`} 
              alt="Industrial Solar Panels" 
              className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
            />
          </div>
          
          {/* Floating Stats Card */}
          <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-xl shadow-xl border border-slate-100 flex items-center space-x-4 animate-float">
            <div className="w-12 h-12 bg-emerald-50 rounded-full flex items-center justify-center text-gpower-green">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div>
              <p className="text-3xl font-bold text-gpower-navy">100%</p>
              <p className="text-sm text-slate-500 font-medium">Clean Energy</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
