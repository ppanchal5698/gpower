import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { solutions, solutionsSection } from '../../content/homepage'
import { ArrowRightIcon } from '../ui/icons'
import { CheckCircle2Icon } from 'lucide-react'

// Override images with high quality unsplash links for the God Level UI
const highQualityImages: Record<string, string> = {
  'solar': `${import.meta.env.BASE_URL}solarsolutions.webp`,
  'green-hydrogen': `${import.meta.env.BASE_URL}greenhydrogen.webp`,
  'bess': `${import.meta.env.BASE_URL}batterystorage.webp`,
  'fuel-cell': `${import.meta.env.BASE_URL}fuelcells.webp`
};

export function SolutionsSection() {
  return (
    <section className="py-24 lg:py-32 bg-slate-50 relative overflow-hidden border-t border-slate-200" id={solutionsSection.id}>
      <div className="container mx-auto px-6 xl:px-0">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-gpower-navy text-xs font-bold tracking-wider uppercase mb-6 shadow-sm">
            {solutionsSection.eyebrow}
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-gpower-navy mb-6 leading-tight font-heading">
            {solutionsSection.title}
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            {solutionsSection.body}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-10 mb-16">
          {solutions.map((solution, idx) => (
            <motion.article
              key={solution.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-slate-200 hover:shadow-xl transition-all duration-300"
            >
              {/* Image Container */}
              <div className="relative aspect-[16/9] overflow-hidden bg-slate-100">
                <img
                  src={highQualityImages[solution.slug] ?? solution.image}
                  alt={solution.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              
              {/* Content Area */}
              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-2xl font-bold text-gpower-navy mb-3 font-heading group-hover:text-gpower-green transition-colors">
                  {solution.title}
                </h3>
                <p className="text-slate-600 leading-relaxed mb-8 flex-1">
                  {solution.body}
                </p>
                
                <ul className="space-y-3 mb-8 pt-6 border-t border-slate-100">
                  {solution.points.map((point) => (
                    <li key={point} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-emerald-50 flex items-center justify-center shrink-0 text-gpower-green">
                        <CheckCircle2Icon className="w-3 h-3" />
                      </div>
                      <span className="text-slate-700 text-sm font-medium">{point}</span>
                    </li>
                  ))}
                </ul>
                
                <Link to={`/solution/${solution.slug}`} className="inline-flex items-center text-gpower-navy font-bold text-sm tracking-wide hover:text-gpower-green transition-colors group/link mt-auto">
                  Explore Solution
                  <ArrowRightIcon className="ml-2 w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Link to="/#assessment" className="inline-flex items-center justify-center rounded-md bg-gpower-navy text-white hover:bg-slate-800 shadow-md hover:shadow-lg transition-all text-sm font-semibold h-12 px-10 w-full sm:w-auto">
            {solutionsSection.cta}
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
