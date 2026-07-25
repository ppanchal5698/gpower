import { Link } from 'react-router-dom'
import { brand, footerInfo } from '../../content/homepage'
import { LinkedInIcon } from '../ui/icons'
import { MailIcon, PhoneIcon, MapPinIcon } from 'lucide-react'

export function Footer() {
  const hasPhone = footerInfo.phone.trim().length > 0
  const hasAddress = footerInfo.address.trim().length > 0
  const socialLinks = footerInfo.socials.filter((social) => social.href.startsWith('http'))

  return (
    <footer className="bg-gpower-navy text-slate-300 py-20 lg:py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 xl:px-0 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 lg:gap-12 pb-16 border-b border-white/10">
          <div className="lg:col-span-4 lg:pr-12">
            <a href="#home" className="inline-block mb-8">
              <img src={`${import.meta.env.BASE_URL}logo-landscape.svg`} alt={`${brand.name} logo`} className="h-16 lg:h-20 opacity-90 brightness-0 invert" />
            </a>
            <p className="text-base leading-relaxed text-slate-400 font-medium max-w-sm">{footerInfo.mission}</p>
            {socialLinks.length > 0 && (
              <ul className="flex items-center gap-4 mt-8" aria-label="Social media">
                {socialLinks.map((social) => (
                  <li key={social.label}>
                    <a
                      href={social.href}
                      aria-label={social.label}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/5 border border-white/10 transition-all duration-300 hover:bg-gpower-green hover:border-gpower-green hover:text-white text-slate-400"
                    >
                      <LinkedInIcon />
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="lg:col-span-2 lg:col-start-7">
            <h4 className="text-white font-bold tracking-wider uppercase text-xs mb-6 font-heading">Company</h4>
            <ul className="space-y-3">
              {footerInfo.companyLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="text-slate-400 font-medium hover:text-white hover:translate-x-1 transition-all inline-block text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3 lg:col-start-10">
            <h4 className="text-white font-bold tracking-wider uppercase text-xs mb-6 font-heading">{footerInfo.infoHeading}</h4>
            <ul className="space-y-6 text-slate-400 font-medium text-sm">
              <li>
                <p className="leading-relaxed">{footerInfo.infoTagline}</p>
              </li>
              <li className="flex items-start gap-3">
                <MailIcon className="w-5 h-5 text-gpower-green shrink-0 mt-0.5" />
                <a href={`mailto:${footerInfo.email}`} className="text-white hover:text-gpower-green transition-colors inline-block font-semibold">
                  {footerInfo.email}
                </a>
              </li>
              {hasPhone && (
                <li className="flex items-start gap-3">
                  <PhoneIcon className="w-5 h-5 text-gpower-green shrink-0 mt-0.5" />
                  <a href={`tel:${footerInfo.phone.replace(/\s+/g, '')}`} className="text-white hover:text-gpower-green transition-colors inline-block font-semibold">
                    {footerInfo.phone}
                  </a>
                </li>
              )}
              {hasAddress && (
                <li className="flex items-start gap-3">
                  <MapPinIcon className="w-5 h-5 text-gpower-green shrink-0 mt-0.5" />
                  <p className="max-w-[200px] leading-relaxed">{footerInfo.address}</p>
                </li>
              )}
            </ul>
            {footerInfo.certifications.length > 0 && (
              <ul className="flex flex-wrap gap-2 mt-8" aria-label="Certifications">
                {footerInfo.certifications.map((cert) => (
                  <li key={cert} className="text-[10px] font-bold uppercase tracking-widest bg-white/5 border border-white/10 px-3 py-1.5 rounded-full text-slate-400">
                    {cert}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-8 gap-6 text-xs text-slate-500 font-medium">
          <p>{footerInfo.copyright}</p>
          <ul className="flex flex-wrap items-center justify-center gap-6">
            {footerInfo.legalLinks.map((link) => (
              <li key={link.label}>
                {link.href ? (
                  <Link to={link.href} className="hover:text-white transition-colors">
                    {link.label}
                  </Link>
                ) : (
                  <span>{link.label}</span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}
