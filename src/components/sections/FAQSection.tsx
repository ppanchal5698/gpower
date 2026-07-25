import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDownIcon } from 'lucide-react'
import { faqData } from '../../content/extendedData'

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="py-20 lg:py-32 bg-white relative">
      <div className="container mx-auto px-6 xl:px-0">
        <div className="max-w-3xl mx-auto text-center mb-16 lg:mb-24">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gpower-navy mb-6 font-heading">
            Frequently Asked Questions
          </h2>
          <p className="text-lg md:text-xl text-slate-600">
            Common questions from industrial partners regarding our transition process and commercial models.
          </p>
        </div>

        <div className="max-w-3xl mx-auto flex flex-col gap-4">
          {faqData.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <div 
                key={index} 
                className={`border rounded-2xl overflow-hidden transition-colors ${isOpen ? 'border-gpower-green bg-slate-50' : 'border-slate-200 bg-white hover:border-slate-300'}`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className="text-lg font-bold text-gpower-navy pr-8">
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${isOpen ? 'bg-gpower-green text-white rotate-180' : 'bg-slate-100 text-slate-500'}`}>
                    <ChevronDownIcon className="w-5 h-5" />
                  </div>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <div className="px-6 pb-6 pt-2 text-slate-600 leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
