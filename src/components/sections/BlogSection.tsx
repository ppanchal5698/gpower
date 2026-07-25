
import { ArrowRightIcon } from 'lucide-react'

const blogPosts = [
  {
    id: 1,
    title: 'The Future of Green Hydrogen in Heavy Manufacturing',
    excerpt: 'How industrial players are leveraging on-site electrolysis to decarbonize high-heat processes and secure long-term energy independence.',
    date: 'October 12, 2026',
    category: 'Technology',
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80',
  },
  {
    id: 2,
    title: 'Navigating the New ESG Mandates for Data Centers',
    excerpt: 'With 24/7 carbon-free energy matching becoming the standard, here is how data centers can utilize BESS and Fuel Cells to stay compliant.',
    date: 'September 28, 2026',
    category: 'Policy & Regulation',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80',
  },
  {
    id: 3,
    title: 'Maximizing ROI on Rooftop Solar with Battery Storage',
    excerpt: 'Combining solar generation with advanced battery energy storage systems to optimize peak shaving and demand response.',
    date: 'September 15, 2026',
    category: 'Economics',
    image: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&q=80',
  }
]

export function BlogSection() {
  return (
    <section id="blog" className="py-24 bg-slate-50 border-t border-slate-200">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-gpower-navy mb-6 font-heading">
            Insights & Perspectives
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Explore the latest thinking from GPower Solutions on industrial decarbonization, emerging technologies, and strategies for the green transition.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article key={post.id} className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all group flex flex-col h-full">
              <div className="aspect-[16/10] overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-8 flex flex-col flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-gpower-green bg-emerald-50 px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                  <span className="text-sm text-slate-500 font-medium">{post.date}</span>
                </div>
                <h3 className="text-xl font-bold text-gpower-navy mb-3 leading-snug group-hover:text-gpower-green transition-colors cursor-pointer">
                  {post.title}
                </h3>
                <p className="text-slate-600 mb-6 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="mt-auto pt-6 border-t border-slate-100">
                  <a href="#" onClick={(e) => e.preventDefault()} className="inline-flex items-center text-sm font-bold text-gpower-green hover:text-gpower-navy transition-colors">
                    Read Article <ArrowRightIcon className="w-4 h-4 ml-2" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
