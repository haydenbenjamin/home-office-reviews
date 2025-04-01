import Link from 'next/link'
import { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
    console.log('Page loaded')
  }, [])

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Home Office Reviews
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto">
          Expert reviews and recommendations for your perfect home office setup
        </p>
      </section>

      {/* Top Reviews Section */}
      <section className="px-4 py-12 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">Top Reviews</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Review Cards */}
          <ReviewCard
            category="Chairs"
            title="Best Ergonomic Chairs Under $500"
            slug="chairs/best-ergonomic-chairs-under-500"
          />
          <ReviewCard
            category="Monitors"
            title="Best 32-inch Monitors for Home Office"
            slug="monitors/best-32-inch-monitors"
          />
          <ReviewCard
            category="Desks"
            title="Best Standing Desks for Small Spaces"
            slug="desks/best-standing-desks-small-spaces"
          />
        </div>
      </section>

      {/* Navigation Header */}
      <header className="fixed top-0 left-0 right-0 bg-dark-bg/80 backdrop-blur-sm border-b border-gray-800">
        <nav className="max-w-7xl mx-auto px-4 py-4">
          <ul className="flex space-x-6 justify-center">
            <NavLink href="/chairs">Chairs</NavLink>
            <NavLink href="/monitors">Monitors</NavLink>
            <NavLink href="/desks">Desks</NavLink>
            <NavLink href="/lights">Lights</NavLink>
            <NavLink href="/cameras">Cameras</NavLink>
          </ul>
        </nav>
      </header>

      {/* Footer */}
      <footer className="bg-dark-surface mt-20 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-400">
            <div>
              <h3 className="text-white font-bold mb-4">About Us</h3>
              <p>Expert reviews and recommendations for your home office setup.</p>
            </div>
            <div>
              <h3 className="text-white font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
                <li><Link href="/terms" className="hover:text-white transition-colors">Terms & Conditions</Link></li>
                <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-bold mb-4">Categories</h3>
              <ul className="space-y-2">
                <li><Link href="/chairs" className="hover:text-white transition-colors">Chairs</Link></li>
                <li><Link href="/monitors" className="hover:text-white transition-colors">Monitors</Link></li>
                <li><Link href="/desks" className="hover:text-white transition-colors">Desks</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}

// Component for navigation links
function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link href={href} className="text-gray-300 hover:text-white transition-colors">
        {children}
      </Link>
    </li>
  )
}

// Component for review cards
function ReviewCard({ category, title, slug }: { category: string; title: string; slug: string }) {
  return (
    <article className="bg-dark-surface rounded-lg overflow-hidden shadow-lg">
      <div className="p-6">
        <span className="text-accent-purple text-sm font-semibold">{category}</span>
        <h3 className="text-xl font-bold mt-2">{title}</h3>
        <Link 
          href={`/reviews/${slug}`}
          className="btn-primary inline-block mt-4"
        >
          Full Review
        </Link>
      </div>
    </article>
  )
}
