import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { projectsSection } from '../../content/homepage'
import { SectorIcon } from '../ui/icons'
import { ArrowRightIcon } from '../ui/icons'

export function CaseStudies() {
  const { featured } = projectsSection

  return (
    <section className="py-24 lg:py-32 bg-slate-50 relative overflow-hidden border-t border-slate-200" id={projectsSection.id}>
      <div className="container mx-auto px-6 xl:px-0 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-gpower-navy text-xs font-bold tracking-wider uppercase mb-6 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-gpower-green animate-pulse" />
            {projectsSection.eyebrow}
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-gpower-navy mb-6 leading-tight font-heading">
            {projectsSection.title}
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed max-w-2xl">
            {projectsSection.body}
          </p>
        </motion.div>

        {/* Featured Case Study */}
        <motion.div
          className="relative rounded-2xl overflow-hidden bg-white shadow-xl mb-12 lg:mb-16 grid lg:grid-cols-2 group border border-slate-200"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative aspect-[4/3] lg:aspect-auto">
            <img
              src={`${import.meta.env.BASE_URL}casestudies.png`}
              alt={projectsSection.featured.title}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute top-6 left-6 inline-flex items-center px-4 py-2 rounded-full bg-white/90 backdrop-blur-md text-xs font-bold uppercase tracking-widest text-gpower-navy shadow-sm">
              {featured.tag}
            </div>
          </div>

          <div className="p-8 lg:p-16 flex flex-col justify-center relative bg-white">
            <p className="text-gpower-green font-bold tracking-widest uppercase text-xs mb-4">Outcome profile</p>
            <h3 className="text-3xl lg:text-4xl font-bold text-gpower-navy mb-6 leading-tight font-heading">{featured.title}</h3>
            <p className="text-slate-600 text-lg leading-relaxed mb-10">{featured.body}</p>

            <div className="grid grid-cols-2 gap-8 border-t border-slate-100 pt-8">
              {featured.metrics.map((metric) => (
                <div key={metric.label}>
                  <b className="block text-4xl lg:text-5xl font-black tracking-tighter text-gpower-navy mb-2">
                    {metric.value}
                  </b>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">{metric.label}</span>
                </div>
              ))}
            </div>

            <Link to="/case-study/featured" className="mt-12 inline-flex items-center text-gpower-navy font-bold uppercase tracking-widest text-sm hover:text-gpower-green transition-colors group/link w-fit">
              Read full case study
              <span className="ml-3 w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center group-hover/link:bg-emerald-50 transition-colors">
                <ArrowRightIcon className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
              </span>
            </Link>
          </div>
        </motion.div>

        {/* Secondary Case Studies */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsSection.items.map((item, idx) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="h-full"
            >
              <div className="h-full rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-lg p-8 flex flex-col transition-all duration-300">
                <div className="flex justify-between items-start mb-8">
                  <span className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-gpower-navy transition-transform duration-500" aria-hidden="true">
                    <SectorIcon name={item.icon} />
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-gpower-navy bg-slate-100 px-3 py-1.5 rounded-full">
                    {item.sector}
                  </span>
                </div>

                <div className="mb-6 border-l-2 border-gpower-green pl-4">
                  <b className="block text-3xl font-black tracking-tighter text-gpower-navy mb-1">
                    {item.metric.value}
                  </b>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">{item.metric.label}</span>
                </div>

                <h4 className="text-xl font-bold text-gpower-navy mb-3 font-heading">{item.title}</h4>
                <p className="text-slate-600 text-sm leading-relaxed mt-auto">{item.result}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
