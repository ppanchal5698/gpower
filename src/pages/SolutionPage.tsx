import { useParams, Navigate, Link } from 'react-router-dom'
import { solutions } from '../content/homepage'
import { Header } from '../components/layout/Header'
import { Footer } from '../components/layout/Footer'
import { AssessmentSection } from '../components/sections/AssessmentSection'
import { ArrowLeftIcon, CheckCircle2Icon } from 'lucide-react'

// Override images with high quality unsplash links for the God Level UI
const solutionImages: Record<string, string> = {
  'solar': `${import.meta.env.BASE_URL}solarsolutions.png`,
  'green-hydrogen': `${import.meta.env.BASE_URL}greenhydrogen.png`,
  'bess': `${import.meta.env.BASE_URL}batterystorage.png`,
  'fuel-cell': `${import.meta.env.BASE_URL}fuelcells.png`
};

export function SolutionPage() {
  const { slug } = useParams<{ slug: string }>()
  const solution = solutions.find((s) => s.slug === slug)

  if (!solution) {
    return <Navigate to="/404" replace />
  }

  const imageSrc = solutionImages[solution.slug] ?? solution.image

  return (
    <>
      <Header />
      <main className="pt-[140px] pb-20">
        <section className="py-12 lg:py-20">
          <div className="container mx-auto px-6 xl:px-0">
            <div className="mb-10">
              <Link to="/#solutions" className="inline-flex items-center text-sm font-semibold text-slate-500 hover:text-gpower-green transition-colors">
                <ArrowLeftIcon className="w-4 h-4 mr-2" />
                Back to Solutions
              </Link>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-gpower-navy text-xs font-bold tracking-wider uppercase mb-6 border border-slate-200">
                  <span className="w-2 h-2 rounded-full bg-gpower-green animate-pulse" />
                  Solution Detail
                </div>
                <h1 className="text-4xl lg:text-6xl font-bold tracking-tight text-gpower-navy mb-8 leading-tight font-heading">
                  {solution.title}
                </h1>
                <p className="text-xl text-slate-600 leading-relaxed mb-10">
                  {solution.body}
                </p>
                
                <h3 className="text-2xl font-bold text-gpower-navy mb-6 font-heading">Key Capabilities</h3>
                <ul className="space-y-4 mb-10">
                  {solution.points.map((point) => (
                    <li key={point} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-emerald-50 flex items-center justify-center shrink-0 text-gpower-green">
                        <CheckCircle2Icon className="w-4 h-4" />
                      </div>
                      <span className="text-slate-700 font-semibold">{point}</span>
                    </li>
                  ))}
                </ul>
                
                <Link to="/?form=contact#assessment" className="inline-flex items-center justify-center bg-gpower-green hover:bg-emerald-600 text-white rounded-md h-12 px-8 text-base shadow-lg shadow-emerald-500/20 font-medium transition-colors">
              Talk to an Expert
            </Link>  
              </div>
              
              <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] bg-slate-100 border border-slate-200">
                <img
                  src={imageSrc}
                  alt={solution.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* We reuse the Assessment form at the bottom so they can convert immediately */}
        <AssessmentSection />
      </main>
      <Footer />
    </>
  )
}
