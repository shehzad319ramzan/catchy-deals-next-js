import ProductCard from './ProductCard'
import Disclaimer from './Disclaimer'
import { fetchProducts } from '@/lib/api'

export default async function ProductDeals() {
  const products = await fetchProducts()

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

      {products.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No products available at the moment.</p>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <Disclaimer />
        </>
      )}
    </section>
  )
}

