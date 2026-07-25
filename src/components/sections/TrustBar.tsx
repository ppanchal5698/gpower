import { trustSignals } from '../../content/homepage'
import { motion } from 'framer-motion'

export function TrustBar() {
  return (
    <section className="bg-slate-50 py-20 border-y border-slate-200" aria-label="Why Choose GPower">
      <div className="container mx-auto px-6 xl:px-0">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:max-w-md"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-200 text-gpower-navy text-xs font-bold uppercase tracking-wider mb-6">
              <span className="w-2 h-2 rounded-full bg-gpower-green" />
              Our Principles
            </div>
            <h2 className="text-3xl lg:text-4xl font-semibold text-gpower-navy leading-tight font-heading">
              A grounded partner for <br className="hidden lg:block"/> complex industrial transitions.
            </h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 w-full lg:flex-1">
            {trustSignals.map((signal, idx) => (
              <motion.article 
                key={signal.value}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-8 rounded-xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex flex-col h-full justify-between">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-gpower-green mb-3">{signal.label}</p>
                    <h3 className="text-2xl font-bold text-gpower-navy mb-4 font-heading">{signal.value}</h3>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed">{signal.detail}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
