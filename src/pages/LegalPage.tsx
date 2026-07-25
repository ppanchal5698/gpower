import { useParams, Navigate, Link } from 'react-router-dom'
import { Header } from '../components/layout/Header'
import { Footer } from '../components/layout/Footer'
import { ArrowLeftIcon } from 'lucide-react'

export function LegalPage() {
  const { slug } = useParams<{ slug: string }>()
  
  if (slug !== 'privacy-policy' && slug !== 'terms-of-service') {
    return <Navigate to="/404" replace />
  }

  const title = slug === 'privacy-policy' ? 'Privacy Policy' : 'Terms of Service'

  return (
    <>
      <Header />
      <main className="pt-[140px] pb-20">
        <article className="container mx-auto px-6 max-w-4xl">
          <div className="max-w-3xl mx-auto">
            <div className="mb-10">
              <Link to="/" className="inline-flex items-center text-sm font-semibold text-slate-500 hover:text-gpower-green transition-colors">
                <ArrowLeftIcon className="w-4 h-4 mr-2" />
                Back to Home
              </Link>
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-bold tracking-tight text-gpower-navy mb-10 leading-tight font-heading">
              {title}
            </h1>
            
            <div className="prose prose-slate max-w-none prose-headings:font-heading prose-headings:text-gpower-navy prose-a:text-gpower-green">
              <p>Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</p>
              
              {slug === 'privacy-policy' ? (
                <>
                  <h2>1. Introduction</h2>
                  <p>Welcome to GPower Solutions. We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about this privacy notice or our practices with regard to your personal information, please contact us at info@gpowersolutions.in.</p>
                  
                  <h2>2. Information We Collect</h2>
                  <p>We collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and Services, when you participate in activities on the Website, or otherwise when you contact us.</p>
                  <p>The personal information that we collect depends on the context of your interactions with us and the Website, the choices you make, and the products and features you use. The personal information we collect may include the following:</p>
                  <ul>
                    <li>Names</li>
                    <li>Phone numbers</li>
                    <li>Email addresses</li>
                    <li>Job titles</li>
                    <li>Company names</li>
                    <li>Energy consumption data (if provided in assessment)</li>
                  </ul>
                  
                  <h2>3. How We Use Your Information</h2>
                  <p>We use personal information collected via our Website for a variety of business purposes described below. We process your personal information for these purposes in reliance on our legitimate business interests, in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations.</p>
                  
                  <h2>4. Will Your Information Be Shared With Anyone?</h2>
                  <p>We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business obligations.</p>
                </>
              ) : (
                <>
                  <h2>1. Agreement to Terms</h2>
                  <p>These Terms of Service constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you") and GPower Solutions ("Company", "we", "us", or "our"), concerning your access to and use of the website as well as any other media form, media channel, mobile website or mobile application related, linked, or otherwise connected thereto (collectively, the "Site").</p>
                  
                  <h2>2. Intellectual Property Rights</h2>
                  <p>Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the "Content") and the trademarks, service marks, and logos contained therein (the "Marks") are owned or controlled by us or licensed to us.</p>
                  
                  <h2>3. User Representations</h2>
                  <p>By using the Site, you represent and warrant that: (1) all registration information you submit will be true, accurate, current, and complete; (2) you will maintain the accuracy of such information and promptly update such registration information as necessary; (3) you have the legal capacity and you agree to comply with these Terms of Service.</p>
                  
                  <h2>4. Prohibited Activities</h2>
                  <p>You may not access or use the Site for any purpose other than that for which we make the Site available. The Site may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us.</p>
                </>
              )}
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  )
}
