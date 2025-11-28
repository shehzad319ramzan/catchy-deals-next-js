import Header from '@/components/Header'
import Footer from '@/components/Footer'
import MarketplaceButtons from '@/components/MarketplaceButtons'
import Disclaimer from '@/components/Disclaimer'
import { fetchProductById } from '@/lib/api'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'

interface ProductDetailPageProps {
  params: Promise<{
    id: string
  }>
}

export default async function ProductDetailPage({ params }: ProductDetailPageProps) {
  const { id } = await params
  const product = await fetchProductById(id)

  if (!product) {
    notFound()
  }

  const postedDate = product.postedAt ? new Date(product.postedAt) : null
    const formattedPostedDate = postedDate
      ? postedDate.toLocaleString('de-DE', {
          day: '2-digit',
          month: 'short',
          year: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
          timeZone: 'Europe/Berlin'
        })
      : null

  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <Link 
          href="/" 
          className="inline-flex items-center text-purple-600 hover:text-purple-700 mb-6 transition-colors"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Zurück zu den Deals
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {/* Product Image */}
          <div className="w-full">
            <div className="aspect-square w-full relative overflow-hidden bg-gray-50 rounded-lg border border-gray-200">
              {product.image ? (
                <Image
                  src={product.image}
                  alt={product.title || 'Product Image'}
                  fill
                  className="object-cover"
                  unoptimized
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-gray-200">
                  <svg className="w-24 h-24 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
              )}
            </div>
          </div>

          {/* Product Details */}
          <div className="flex flex-col">
            <div className="mb-4">
              <span className="inline-block bg-purple-100 text-purple-700 text-sm font-semibold px-3 py-1 rounded-full">
                {product.category}
              </span>
            </div>

            <h1 className="text-[1rem] font-bold text-gray-900 mb-6">
              {product.title}
            </h1>

            <div className="mb-8">
              <div className="flex items-center space-x-4 mb-4">
                <span className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  {product.currentPrice}
                </span>
                <span className="text-xl sm:text-2xl text-gray-400 line-through">
                  {product.originalPrice}
                </span>
                {product.discount && product.discount.trim() !== '' && (
                  <span className="bg-gradient-to-r from-pink-500 to-purple-500 text-white text-base sm:text-lg font-semibold px-4 py-2 rounded">
                    {product.discount}
                  </span>
                )}
              </div>
              {formattedPostedDate && (
                <p className="text-xs text-gray-500">Veröffentlicht {formattedPostedDate}</p>
              )}
            </div>

            <div className="mb-8 p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg border border-purple-100">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Produktbeschreibung</h2>
              <div className="mb-6">
                {product.description ? (
                  <div className="text-gray-700 leading-relaxed whitespace-pre-wrap break-words">
                    {product.description}
                  </div>
                ) : (
                  <p className="text-gray-700 leading-relaxed">
                    Dieses großartige Produkt bietet außergewöhnlichen Wert mit einem erheblichen Rabatt. 
                    Verpassen Sie nicht dieses zeitlich begrenzte Angebot! Erhalten Sie die beste Qualität zu einem unschlagbaren Preis.
                  </p>
                )}
              </div>
              
              {/* Product Information */}
              <div className="mt-6 pt-6 border-t border-purple-200">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  {product.asin && (
                    <div>
                      <span className="font-semibold text-gray-700">ASIN:</span>
                      <span className="ml-2 text-gray-600">{product.asin}</span>
                    </div>
                  )}
                  {product.ean && (
                    <div>
                      <span className="font-semibold text-gray-700">EAN:</span>
                      <span className="ml-2 text-gray-600">{product.ean}</span>
                    </div>
                  )}
                </div>
              </div>
              <ul className="space-y-2 text-gray-700 mt-6">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-purple-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 6.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Hochwertiges Produkt mit Premium-Funktionen</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-purple-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 6.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Schneller und zuverlässiger Versand</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-purple-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 6.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>30-Tage-Geld-zurück-Garantie</span>
                </li>
              </ul>
            </div>

            <div className="space-y-6">
              <MarketplaceButtons affiliateLinks={product.affiliateLinks} regionalPrices={product.regionalPrices} />
              
              <button className="w-full bg-white border-2 border-purple-600 text-purple-600 hover:bg-purple-50 font-semibold py-4 px-6 rounded-lg transition-all flex items-center justify-center space-x-2 text-lg">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                <span>Zur Wunschliste hinzufügen</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <Disclaimer />
      </div>

      <Footer />
    </main>
  )
}
