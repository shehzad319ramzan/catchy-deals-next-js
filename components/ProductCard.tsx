import Image from 'next/image'
import Link from 'next/link'
import { Product } from '@/types/product'

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-100 group">
      <div className="aspect-square w-full relative overflow-hidden bg-gray-50">
        <Image
          src={product.image}
          alt={product.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          unoptimized
        />
      </div>

      <div className="p-4 sm:p-6">
        <h3 className="text-sm sm:text-base font-semibold text-gray-800 mb-3 line-clamp-2 min-h-[3rem]">
          {product.title}
        </h3>

        <div className="flex items-center space-x-3 mb-4 flex-wrap gap-2">
          <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            {product.currentPrice}
          </span>
          <span className="text-sm sm:text-base text-gray-400 line-through">
            {product.originalPrice}
          </span>
          <span className="bg-gradient-to-r from-pink-500 to-purple-500 text-white text-xs sm:text-sm font-semibold px-2 py-1 rounded">
            {product.discount}
          </span>
        </div>

        <Link 
          href={`/products/${product.id}`}
          className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-3 px-4 rounded-lg transition-all flex items-center justify-center space-x-2 text-sm sm:text-base"
        >
          <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
          </svg>
          <span>Go to deal</span>
        </Link>
      </div>
    </div>
  )
}

