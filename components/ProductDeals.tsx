'use client'

import { useState, useEffect } from 'react'
import ProductCard from './ProductCard'
import Disclaimer from './Disclaimer'
import { Product } from '@/types/product'
import { fetchProducts } from '@/lib/api'

export default function ProductDeals() {
  const [products, setProducts] = useState<Product[]>([])
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [totalProducts, setTotalProducts] = useState(0)
  const [loading, setLoading] = useState(true) // Show skeleton on initial load
  const [error, setError] = useState<string | null>(null)
  
  const itemsPerPage = 12 // 4 columns × 3 rows
  const maxPages = 4 // Maximum 4 pages (48 products total)

  // Load products in chunks for faster initial display
  useEffect(() => {
    let isMounted = true
    
    const loadProducts = async () => {
      if (currentPage === 1) {
        setLoading(true) // Show skeleton only on first page
      }
      setError(null)
      
      try {
        // Fetch products for current page
        const result = await fetchProducts({
          page: currentPage,
          perPage: itemsPerPage,
          sortBy: 'created_at',
          sortOrder: 'desc',
          status: '1'
        })
        
        // Only update if component is still mounted
        if (isMounted) {
          // Set products immediately
          setProducts(result.products)
          setTotalProducts(result.pagination.total)
          
          // Calculate total pages (max 4 pages)
          const calculatedTotalPages = Math.min(result.pagination.lastPage, maxPages)
          setTotalPages(calculatedTotalPages)
          setLoading(false)
        }
        
      } catch (err) {
        if (isMounted) {
          setError('Fehler beim Laden der Produkte. Bitte versuchen Sie es später erneut.')
          console.error('Error loading products:', err)
          setLoading(false)
        }
      }
    }

    loadProducts()
    
    // Cleanup
    return () => {
      isMounted = false
    }
  }, [currentPage, itemsPerPage])

  const goToPage = (page: number) => {
    // Limit to maximum 4 pages
    const maxPages = 4
    const limitedPage = Math.min(page, maxPages)
    if (limitedPage >= 1 && limitedPage <= totalPages) {
      setCurrentPage(limitedPage)
      // Scroll to top of deals section
      const dealsSection = document.getElementById('deals-section')
      if (dealsSection) {
        dealsSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }
  }

  // Show skeleton loading only if no products and not on initial load
  const showSkeleton = loading && products.length === 0

  if (error) {
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
        <div className="text-center py-12">
          <p className="text-red-500 text-lg mb-4">{error}</p>
          <button
            onClick={() => setCurrentPage(1)}
            className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all"
          >
            Erneut versuchen
          </button>
        </div>
      </section>
    )
  }

  return (
    <section id="deals-section" className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
      <div className="mb-8 md:mb-12">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
          Aktuelle Top-Deals
        </h2>
        <p className="text-gray-600 text-base sm:text-lg lg:text-xl">
          Top-Schnäppchen mit echten Rabatten - täglich frisch für Sie zusammengestellt.
        </p>
      </div>

      {showSkeleton ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="bg-white rounded-lg shadow-md border border-gray-100 animate-pulse">
              <div className="aspect-square w-full bg-gray-200"></div>
              <div className="p-4 sm:p-6 space-y-3">
                <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                <div className="h-8 bg-gray-200 rounded w-1/3"></div>
              </div>
            </div>
          ))}
        </div>
      ) : products.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">Derzeit sind keine Produkte verfügbar.</p>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 auto-rows-fr">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="mt-12 flex flex-col items-center space-y-4">
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => goToPage(currentPage - 1)}
                  disabled={currentPage === 1 || loading}
                  className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                    currentPage === 1 || loading
                      ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                      : 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700'
                  }`}
                >
                  Zurück
                </button>
                
                <div className="flex items-center space-x-1">
                  {Array.from({ length: Math.min(totalPages, 4) }, (_, i) => i + 1).map((page) => {
                    return (
                      <button
                        key={page}
                        onClick={() => goToPage(page)}
                        disabled={loading}
                        className={`w-10 h-10 rounded-lg font-semibold transition-all ${
                          currentPage === page
                            ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        } ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                      >
                        {page}
                      </button>
                    )
                  })}
                </div>

                <button
                  onClick={() => goToPage(currentPage + 1)}
                  disabled={currentPage >= Math.min(totalPages, 4) || loading}
                  className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                    currentPage >= Math.min(totalPages, 4) || loading
                      ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                      : 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700'
                  }`}
                >
                  Weiter
                </button>
              </div>
            </div>
          )}

          <Disclaimer />
        </>
      )}
    </section>
  )
}
