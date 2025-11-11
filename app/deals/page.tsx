import Header from '@/components/Header'
import ProductDeals from '@/components/ProductDeals'
import Footer from '@/components/Footer'
import { fetchProducts } from '@/lib/api'

export default async function DealsPage() {
  const products = await fetchProducts()

  return (
    <main className="min-h-screen bg-white">
      <Header />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 bg-clip-text text-transparent mb-4 text-center">
          All Deals
        </h1>
        <p className="text-gray-600 text-center text-lg mb-12">
          Browse through all our amazing deals and save big!
        </p>
      </div>
      <ProductDeals products={products} />
      <Footer />
    </main>
  )
}
