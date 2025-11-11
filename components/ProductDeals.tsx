'use client'

import { useState, useMemo } from 'react'
import ProductCard from './ProductCard'
import Disclaimer from './Disclaimer'
import { Product } from '@/types/product'

interface ProductDealsProps {
  products: Product[]
}

export default function ProductDeals({ products }: ProductDealsProps) {
  const [currentPage, setCurrentPage] = useState(1)
  // Always show 12 products per page (4 columns × 3 rows)
  const itemsPerPage = 12
  
  // Sort products by latest first (postedAt descending)
  const sortedProducts = useMemo(() => {
    return [...products].sort((a, b) => {
      if (!a.postedAt && !b.postedAt) return 0
      if (!a.postedAt) return 1
      if (!b.postedAt) return -1
      return new Date(b.postedAt).getTime() - new Date(a.postedAt).getTime()
    })
  }, [products])
  
  const totalPages = Math.ceil(sortedProducts.length / itemsPerPage)
  
  const paginatedProducts = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage
    const endIndex = startIndex + itemsPerPage
    return sortedProducts.slice(startIndex, endIndex)
  }, [sortedProducts, currentPage, itemsPerPage])

  const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page)
      // Scroll to top of deals section
      const dealsSection = document.getElementById('deals-section')
      if (dealsSection) {
        dealsSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }
  }

  return (
    <section id="deals-section" className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
      <div className="mb-8 md:mb-12">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
          Current top deals
        </h2>
        <p className="text-gray-600 text-base sm:text-lg lg:text-xl">
          Top bargains with real discounts - freshly compiled for you every day.
        </p>
      </div>

      {sortedProducts.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No products available at the moment.</p>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
            {paginatedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="mt-12 flex flex-col items-center space-y-4">
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => goToPage(currentPage - 1)}
                  disabled={currentPage === 1}
                  className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                    currentPage === 1
                      ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                      : 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700'
                  }`}
                >
                  Previous
                </button>
                
                <div className="flex items-center space-x-1">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
                    // Show first page, last page, current page, and pages around current
                    if (
                      page === 1 ||
                      page === totalPages ||
                      (page >= currentPage - 1 && page <= currentPage + 1)
                    ) {
                      return (
                        <button
                          key={page}
                          onClick={() => goToPage(page)}
                          className={`w-10 h-10 rounded-lg font-semibold transition-all ${
                            currentPage === page
                              ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                          }`}
                        >
                          {page}
                        </button>
                      )
                    } else if (
                      page === currentPage - 2 ||
                      page === currentPage + 2
                    ) {
                      return (
                        <span key={page} className="px-2 text-gray-400">
                          ...
                        </span>
                      )
                    }
                    return null
                  })}
                </div>

                <button
                  onClick={() => goToPage(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                    currentPage === totalPages
                      ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                      : 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700'
                  }`}
                >
                  Next
                </button>
              </div>
              
              <p className="text-sm text-gray-600">
                Page {currentPage} of {totalPages} ({sortedProducts.length} total products)
              </p>
            </div>
          )}

          <Disclaimer />
        </>
      )}
    </section>
  )
}
