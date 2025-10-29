'use client'

export default function Hero() {
  const scrollToDeals = () => {
    const dealsSection = document.getElementById('deals-section')
    if (dealsSection) {
      dealsSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
      <div className="text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center space-x-2 bg-blue-50 text-gray-700 px-4 py-2 rounded-full mb-6 text-sm md:text-base">
          <svg className="w-4 h-4 md:w-5 md:h-5 fill-red-500" viewBox="0 0 24 24" fill="none">
            <path d="M13 2L3 14h7l-1 7 10-12h-7l1-7z"/>
          </svg>
          <span>New deals every day</span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 bg-clip-text text-transparent mb-6 leading-tight animate-pulse">
          The smartest Amazon deals
        </h1>

        <p className="text-gray-600 text-base sm:text-lg lg:text-xl mb-8 leading-relaxed px-4">
          Hi, I&apos;m Luca and I find the best bargains for you every day on Amazon. Real price advantage - don&apos;t waste time unnecessarily, just save.
        </p>

        <button 
          onClick={scrollToDeals}
          className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold px-8 py-4 rounded-lg transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 duration-200 cursor-pointer"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
          </svg>
          <span>Discover deals</span>
        </button>
      </div>
    </section>
  )
}
