import { motion } from 'framer-motion'
import { aboutSection } from '../../content/homepage'
import { CheckCircle2Icon } from 'lucide-react'
import { ArrowRightIcon } from '../ui/icons'

export function AboutPartner() {
  return (
    <section id={aboutSection.id} className="py-24 lg:py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 xl:px-0 grid lg:grid-cols-2 gap-16 lg:gap-24 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="relative group order-2 lg:order-1"
        >
          {/* Main Image Container */}
          <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3] lg:aspect-[4/5] bg-slate-100 border border-slate-200">
            <img
              src={`${import.meta.env.BASE_URL}about.png`}
              alt="Solar panels at industrial facility"
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
          </div>
          
          {/* Floating Stats Pane */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg border border-slate-100 max-w-[260px]"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-emerald-50 flex items-center justify-center shrink-0 text-gpower-green">
                <span className="font-bold text-xl">15+</span>
              </div>
              <div>
                <b className="block text-gpower-navy font-bold text-sm">Years Experience</b>
                <span className="text-xs text-slate-500 font-medium">
                  in clean energy
                </span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <div className="flex flex-col relative z-10 order-1 lg:order-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-gpower-navy text-xs font-bold tracking-wider uppercase mb-6 border border-slate-200">
              <span className="w-2 h-2 rounded-full bg-gpower-green animate-pulse" />
              {aboutSection.eyebrow}
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-gpower-navy mb-6 leading-tight font-heading">
              Your <span className="text-gpower-green">End-to-End</span> Green Transition Partner
            </h2>
          </motion.div>
          
          <div className="space-y-4 mb-10 text-slate-600 leading-relaxed text-lg">
            {aboutSection.paragraphs.map((paragraph, idx) => (
              <motion.p 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 + (idx * 0.1) }}
              >
                {paragraph}
              </motion.p>
            ))}
          </div>

          <ul className="space-y-4 mb-10">
            {aboutSection.highlights.map((item, idx) => (
              <motion.li 
                key={idx} 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + (idx * 0.1) }}
                className="flex items-center gap-3"
              >
                <div className="w-6 h-6 rounded-full bg-emerald-50 flex items-center justify-center shrink-0 text-gpower-green">
                  <CheckCircle2Icon className="w-4 h-4" />
                </div>
                <span className="text-gpower-navy font-semibold">{item}</span>
              </motion.li>
            ))}
          </ul>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <a href={aboutSection.ctaHref} className="inline-flex items-center justify-center rounded-md bg-gpower-navy text-white hover:bg-slate-800 transition-colors text-sm font-semibold h-12 px-8 w-fit group shadow-md hover:shadow-lg">
              {aboutSection.cta}
              <ArrowRightIcon className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
