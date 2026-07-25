import { motion } from 'framer-motion'
import { whySection, whySteps } from '../../content/homepage'

export function WhyGPower() {
  return (
    <section className="py-24 lg:py-32 bg-white relative overflow-hidden" id="process">
      <div className="container mx-auto px-6 xl:px-0 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-gpower-navy text-xs font-bold tracking-wider uppercase mb-6 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-gpower-green animate-pulse" />
            {whySection.eyebrow}
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-gpower-navy mb-6 leading-tight font-heading">
            {whySection.title}
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed font-medium">
            {whySection.body}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <motion.div
            className="lg:col-span-5 relative rounded-2xl overflow-hidden shadow-xl group order-2 lg:order-1 border border-slate-200"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="aspect-[4/3] lg:aspect-[3/4] overflow-hidden bg-slate-100">
              <img
                src={`${import.meta.env.BASE_URL}whygpower.png`}
                alt="Industrial engineers planning decarbonization strategy"
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
            </div>
          </motion.div>

          <div className="lg:col-span-7 flex flex-col gap-6 order-1 lg:order-2 lg:pl-10">
            {whySteps.map((step, idx) => (
              <motion.article 
                key={step.number} 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative"
              >
                {/* Connecting Line (except last) */}
                {idx !== whySteps.length - 1 && (
                  <div className="absolute left-[39px] top-[70px] bottom-[-24px] w-0.5 bg-slate-100 z-0 hidden sm:block group-hover:bg-gpower-green/20 transition-colors" />
                )}
                
                <div className="bg-white rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row gap-6 sm:gap-8 border border-slate-200 hover:border-gpower-green hover:shadow-md transition-all duration-300 relative z-10 overflow-hidden">
                  <div className="shrink-0 flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-xl bg-slate-50 border border-slate-100 relative z-10 group-hover:bg-emerald-50 transition-colors duration-300">
                    <span className="text-gpower-navy font-black text-2xl sm:text-3xl font-heading group-hover:text-gpower-green transition-colors">
                      {step.number}
                    </span>
                  </div>
                  <div className="relative z-10 flex-1 flex flex-col justify-center">
                    <h3 className="text-xl sm:text-2xl font-bold text-gpower-navy mb-2 font-heading group-hover:text-gpower-green transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed text-sm font-medium">
                      {step.body}
                    </p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
