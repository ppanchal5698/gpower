import { useEffect } from 'react'
import { useParams, Navigate, Link } from 'react-router-dom'
import { Header } from '../components/layout/Header'
import { Footer } from '../components/layout/Footer'
import { projectsSection } from '../content/homepage'
import { SectorIcon } from '../components/ui/icons'
import type { SectorIconName } from '../components/ui/icons'
import { ArrowLeftIcon } from 'lucide-react'

const caseStudyImages: Record<string, string> = {
  'featured': '/casestudies.png',
  'rooftop-solar-bess': '/solarsolutions.png',
  'green-hydrogen-pilot': '/greenhydrogen.png',
  'fuel-cell-backup': '/fuelcells.png',
}

interface NormalizedStudy {
  title: string
  sector: string
  icon: SectorIconName
  body: string
  metrics: readonly { value: string; label: string }[]
}

export function CaseStudyPage() {
  const { slug } = useParams<{ slug: string }>()
  
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

  let study: NormalizedStudy | null = null

  if (slug === 'featured') {
    study = {
      title: projectsSection.featured.title,
      sector: 'Manufacturing',
      icon: 'manufacturing' as SectorIconName,
      body: projectsSection.featured.body,
      metrics: projectsSection.featured.metrics,
    }
  } else {
    const item = projectsSection.items.find((i) => i.slug === slug)
    if (item) {
      study = {
        title: item.title,
        sector: item.sector,
        icon: item.icon,
        body: item.result,
        metrics: [item.metric],
      }
    }
  }

  if (!study) {
    return <Navigate to="/404" replace />
  }

  const imageSrc = caseStudyImages[slug ?? ''] ?? caseStudyImages.featured

  return (
    <>
      <Header />
      <main className="pt-[140px] pb-20">
        <article className="container mx-auto px-6">
          <div className="mb-12">
            <div className="max-w-4xl mx-auto">
              <div className="mb-10">
                <Link to="/#projects" className="inline-flex items-center text-sm font-semibold text-slate-500 hover:text-gpower-green transition-colors">
                  <ArrowLeftIcon className="w-4 h-4 mr-2" />
                  Back to Projects
                </Link>
              </div>

              <div className="flex items-center gap-4 mb-8">
                <span className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-200 shadow-sm flex items-center justify-center text-gpower-navy shrink-0" aria-hidden="true">
                  <SectorIcon name={study.icon} />
                </span>
                <span className="text-xs font-bold uppercase tracking-widest text-gpower-navy bg-slate-100 px-4 py-2 rounded-full border border-slate-200 shadow-sm">
                  {study.sector}
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-gpower-navy mb-6 font-heading">
                {study.title}
              </h1>
              
              <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[21/9] bg-slate-100 border border-slate-200 mb-12">
                <img 
                  src={imageSrc}
                  alt={study.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="prose prose-lg max-w-none text-slate-600 mb-16">
                <div className="border-l-4 border-gpower-green pl-6 py-2 mb-10 bg-slate-50/50 rounded-r-xl">
                  <p className="text-xl md:text-2xl text-gpower-navy leading-relaxed font-medium m-0">
                    {study.body}
                  </p>
                </div>
                <p className="mb-6">
                  At GPower Solutions, we understand that every industrial facility has unique energy requirements and operational constraints. For this project, we conducted a comprehensive energy audit to establish a clear baseline. We then designed a tailored green transition strategy that perfectly aligned with the client's financial and sustainability goals.
                </p>
                <p>
                  Through seamless end-to-end delivery—from initial feasibility and solution design to procurement, installation, and final commissioning—we ensured minimal disruption to ongoing operations.
                </p>
              </div>

              <div className="bg-slate-50 rounded-2xl p-8 lg:p-12 border border-slate-200">
                <h3 className="text-2xl font-bold text-gpower-navy mb-8 font-heading">Key Project Outcomes</h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {study.metrics.map((metric) => (
                    <div key={metric.label}>
                      <b className="block text-4xl lg:text-5xl font-black tracking-tighter text-gpower-navy mb-2">
                        {metric.value}
                      </b>
                      <span className="text-sm font-semibold uppercase tracking-wider text-slate-500">
                        {metric.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  )
}
