import { testimonialsData } from '../../content/extendedData'

export function TestimonialsSection() {
  return (
    <section className="py-20 lg:py-32 bg-slate-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gpower-green/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="container mx-auto px-6 xl:px-0 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16 lg:mb-24">
          <div className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-slate-200/50 text-gpower-navy text-xs font-bold tracking-wider uppercase mb-6 border border-slate-200">
            Client Success
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gpower-navy mb-6 font-heading">
            Trusted by Industry Leaders
          </h2>
          <p className="text-lg md:text-xl text-slate-600">
            Hear from the partners who have trusted GPower Solutions to engineer their green transition.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonialsData.map((testimonial, i) => (
            <div key={i} className="bg-white p-8 lg:p-10 rounded-2xl shadow-sm border border-slate-200 hover:shadow-xl transition-shadow flex flex-col justify-between h-full group">
              <div>
                <div className="flex gap-1 mb-8">
                  {[...Array(5)].map((_, idx) => (
                    <svg key={idx} className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="text-lg text-slate-700 leading-relaxed font-medium mb-8">
                  "{testimonial.quote}"
                </blockquote>
              </div>
              <div className="flex items-center gap-4 mt-auto">
                <img src={testimonial.image} alt={testimonial.author} className="w-12 h-12 rounded-full ring-2 ring-gpower-green/20" />
                <div>
                  <div className="font-bold text-gpower-navy">{testimonial.author}</div>
                  <div className="text-sm text-slate-500">{testimonial.role}, <span className="font-semibold text-gpower-green">{testimonial.company}</span></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
