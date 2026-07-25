import type { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { fadeUp, staggerParent } from '../../lib/motion/variants'
import { cn } from '@/lib/utils'

type SectionHeadingProps = {
  eyebrow: string
  title: string
  body?: string
  align?: 'start' | 'center'
  children?: ReactNode
  className?: string
}

export function SectionHeading({
  eyebrow,
  title,
  body,
  align = 'start',
  children,
  className
}: SectionHeadingProps) {
  return (
    <motion.div 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={staggerParent}
      className={cn(
        "max-w-3xl mb-16",
        align === 'center' ? "mx-auto text-center" : "",
        className
      )}
    >
      <motion.p variants={fadeUp} className="text-primary font-bold tracking-widest uppercase text-sm mb-4">
        {eyebrow}
      </motion.p>
      <motion.h2 variants={fadeUp} className="text-4xl lg:text-5xl font-bold tracking-tight text-[var(--ink)] mb-6 leading-tight">
        {title}
      </motion.h2>
      {body && (
        <motion.p variants={fadeUp} className="text-lg lg:text-xl text-foreground/70 leading-relaxed">
          {body}
        </motion.p>
      )}
      {children && <motion.div variants={fadeUp} className="mt-6">{children}</motion.div>}
    </motion.div>
  )
}
