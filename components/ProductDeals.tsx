import ProductCard from './ProductCard'
import { sampleProducts } from '@/types/product'

export default function ProductDeals() {
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

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
        {sampleProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}

