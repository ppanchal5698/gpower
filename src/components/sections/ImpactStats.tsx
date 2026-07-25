import { impactSection } from '../../content/homepage'
import { useCountUp } from '../../hooks/useCountUp'
import { StatIcon } from '../ui/icons'
import type { StatIconName } from '../ui/icons'
import { motion } from 'framer-motion'

type StatProps = {
  value: number
  suffix: string
  label: string
  icon: StatIconName
  index: number
}

function Stat({ value, suffix, label, icon, index }: StatProps) {
  const { ref, value: display } = useCountUp(value)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative"
    >
      <div className="relative h-full bg-white rounded-xl p-8 flex flex-col items-center text-center border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300">
        <div className="w-14 h-14 rounded-full bg-slate-50 flex items-center justify-center text-gpower-navy mb-6 group-hover:bg-emerald-50 group-hover:text-gpower-green transition-colors duration-300" aria-hidden="true">
          <StatIcon name={icon} />
        </div>

        <div className="text-5xl lg:text-6xl font-black tracking-tighter mb-4 text-gpower-navy font-heading" ref={ref}>
          {display}
          <span className="text-gpower-green">{suffix}</span>
        </div>

        <p className="text-slate-600 text-sm font-semibold leading-relaxed uppercase tracking-wider">{label}</p>
      </div>
    </motion.div>
  )
}

export function ImpactStats() {
  return (
    <section className="py-20 lg:py-32 bg-white relative overflow-hidden border-t border-slate-200">
      <div className="container mx-auto px-6 xl:px-0 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-gpower-navy text-xs font-bold tracking-wider uppercase mb-6 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-gpower-green animate-pulse" />
            {impactSection.eyebrow}
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-gpower-navy mb-6 leading-tight font-heading">
            {impactSection.title}
          </h2>
          <p className="text-sm text-slate-500 font-medium max-w-lg mx-auto">
            {impactSection.note}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {impactSection.stats.map((stat, idx) => (
            <Stat
              key={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              icon={stat.icon}
              index={idx}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
