import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function ImprintPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-8">
          Impressum
        </h1>
        
        <div className="prose prose-lg max-w-none space-y-4 text-gray-700">
          <p className="font-semibold text-gray-900">Nach § 5 TMG</p>
          
          <div className="space-y-2">
            <p>Grimme und Köninger GbR</p>
            <p>c/o Postflex #8701</p>
            <p>Emsdettener Str. 10</p>
            <p>48268 Greven</p>
          </div>
          
          <p className="font-semibold text-red-600">Keine Pakete oder Päckchen - Annahme wird verweigert!</p>
          
          <div className="space-y-2">
            <p>
              Tel.: <a href="tel:015785747147" className="text-purple-600 hover:text-purple-700 underline">015785747147</a>
            </p>
            <p>
              E-Mail: <a href="mailto:info@catchycreatorsclub.de" className="text-purple-600 hover:text-purple-700 underline">info@catchycreatorsclub.de</a>
            </p>
            <p>USt-ID DE454237083</p>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}

