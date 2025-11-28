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
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  
  const itemsPerPage = 12 // 4 columns × 3 rows

  useEffect(() => {
    const loadProducts = async () => {
      setLoading(true)
      setError(null)
      
      try {
        const result = await fetchProducts({
          page: currentPage,
          perPage: itemsPerPage,
          sortBy: 'created_at',
          sortOrder: 'desc',
          status: '1'
        })
        
        setProducts(result.products)
        setTotalPages(result.pagination.lastPage)
        setTotalProducts(result.pagination.total)
      } catch (err) {
        setError('Fehler beim Laden der Produkte. Bitte versuchen Sie es später erneut.')
        console.error('Error loading products:', err)
      } finally {
        setLoading(false)
      }
    }

    loadProducts()
  }, [currentPage, itemsPerPage])

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

  if (loading) {
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
        <div className="text-center py-12">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div>
          <p className="text-gray-500 text-lg mt-4">Produkte werden geladen...</p>
        </div>
      </section>
    )
  }

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

      {products.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">Derzeit sind keine Produkte verfügbar.</p>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
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
                  disabled={currentPage === totalPages || loading}
                  className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                    currentPage === totalPages || loading
                      ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                      : 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700'
                  }`}
                >
                  Weiter
                </button>
              </div>
              
              <p className="text-sm text-gray-600">
                Seite {currentPage} von {totalPages} ({totalProducts} Produkte aus den letzten 48 Stunden)
              </p>
            </div>
          )}

          <Disclaimer />
        </>
      )}
    </section>
  )
}
