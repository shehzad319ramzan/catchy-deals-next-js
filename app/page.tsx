import Header from '@/components/Header'
import Hero from '@/components/Hero'
import ProductDeals from '@/components/ProductDeals'
import About from '@/components/About'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      <ProductDeals />
      <About />
      <Footer />
    </main>
  )
}

