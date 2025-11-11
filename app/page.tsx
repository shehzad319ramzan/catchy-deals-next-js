import Header from '@/components/Header'
import Hero from '@/components/Hero'
import ProductDeals from '@/components/ProductDeals'
import About from '@/components/About'
import Footer from '@/components/Footer'
import { fetchProducts } from '@/lib/api'

export default async function Home() {
  const products = await fetchProducts()

  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      <ProductDeals products={products} />
      <About />
      <Footer />
    </main>
  )
}

