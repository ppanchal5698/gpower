import { motion } from 'framer-motion'
import { industriesSection } from '../../content/homepage'
import { FactoryIcon, ChevronRight } from 'lucide-react'

export function IndustriesSection() {
  return (
    <section className="py-24 lg:py-32 bg-white relative overflow-hidden" id={industriesSection.id}>
      <div className="container mx-auto px-6 xl:px-0 grid lg:grid-cols-12 gap-16 lg:gap-20 items-center relative z-10">
        <motion.div
          className="lg:col-span-6"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-gpower-navy text-xs font-bold tracking-wider uppercase mb-6 border border-slate-200">
            <span className="w-2 h-2 rounded-full bg-gpower-green" />
            {industriesSection.eyebrow}
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-gpower-navy mb-6 leading-tight font-heading">
            Decarbonization <span className="text-gpower-green">Tailored to Your Sector</span>
          </h2>

          <p className="text-lg text-slate-600 leading-relaxed mb-10 max-w-xl">
            {industriesSection.body}
          </p>

          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {industriesSection.items.map((item, idx) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="group flex items-center gap-3 p-3 rounded-lg border border-slate-200 bg-white hover:border-gpower-green hover:shadow-md transition-all cursor-default"
              >
                <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center shrink-0 group-hover:bg-emerald-50 transition-colors">
                  <FactoryIcon className="w-4 h-4 text-slate-400 group-hover:text-gpower-green transition-colors" />
                </div>
                <span className="text-sm font-semibold text-gpower-navy group-hover:text-gpower-green transition-colors">{item}</span>
                <ChevronRight className="w-4 h-4 ml-auto text-slate-300 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="lg:col-span-6 relative rounded-2xl overflow-hidden shadow-xl"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="aspect-[4/3] lg:aspect-[4/5] overflow-hidden bg-slate-100 border border-slate-200">
            <img
              src={`${import.meta.env.BASE_URL}industries.webp`}
              alt="Industrial complex at dusk"
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
