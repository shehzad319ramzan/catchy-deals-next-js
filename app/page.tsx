import Header from '@/components/Header'
import Hero from '@/components/Hero'
import ProductDeals from '@/components/ProductDeals'
import About from '@/components/About'
import DealFinders from '@/components/DealFinders'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      <ProductDeals />
      <About />
      <DealFinders />
      <Footer />
    </main>
  )
}

