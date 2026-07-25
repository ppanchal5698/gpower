import { Header } from '../components/layout/Header'
import { Footer } from '../components/layout/Footer'
import { ScrollProgress } from '../components/layout/ScrollProgress'
import { Hero } from '../components/sections/Hero'
import { TrustBar } from '../components/sections/TrustBar'
import { AboutPartner } from '../components/sections/AboutPartner'
import { WhyGPower } from '../components/sections/WhyGPower'
import { SolutionsSection } from '../components/sections/SolutionsSection'
import { IndustriesSection } from '../components/sections/IndustriesSection'
import { ImpactStats } from '../components/sections/ImpactStats'
import { CaseStudies } from '../components/sections/CaseStudies'
import { TestimonialsSection } from '../components/sections/TestimonialsSection'
import { FAQSection } from '../components/sections/FAQSection'
import { AssessmentSection } from '../components/sections/AssessmentSection'
import { BlogSection } from '../components/sections/BlogSection'

export function HomePage() {
  return (
    <>
      <ScrollProgress />
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <AboutPartner />
        <WhyGPower />
        <SolutionsSection />
        <IndustriesSection />
        <ImpactStats />
        <CaseStudies />
        <TestimonialsSection />
        <BlogSection />
        <FAQSection />
        <AssessmentSection />
      </main>
      <Footer />
    </>
  )
}
