import Link from 'next/link'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2 group">
          <svg className="w-6 h-6 text-purple-600 fill-current group-hover:text-purple-700 transition-colors" 
               viewBox="0 0 24 24" 
               fill="none" 
               stroke="currentColor" 
               strokeWidth="2" 
               strokeLinecap="round" 
               strokeLinejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
          <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Catchy Deals</span>
        </Link>
        
        <div className="hidden sm:flex items-center space-x-6">
          <Link href="/" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">
            Home
          </Link>
          <Link href="/deals" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">
            Deals
          </Link>
          <Link href="/about" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">
            About me
          </Link>
        </div>

        {/* Mobile menu button */}
        <button className="sm:hidden p-2 text-gray-700" aria-label="Menu">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>
    </header>
  )
}

