import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-8">
          Kontakt
        </h1>
        
        <div className="prose prose-lg max-w-none space-y-6 text-gray-700">
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-6 md:p-8 border border-purple-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Kontaktinformationen</h2>
            
            <div className="space-y-4">
              <div>
                <p className="font-semibold text-gray-900 mb-1">Flipscope</p>
                <p>Sara Köninger</p>
                <p>Häuserweg 8</p>
                <p>76698 Ubstadt-Weiher</p>
              </div>
              
              <div className="pt-4 border-t border-purple-200">
                <p className="mb-2">
                  <span className="font-semibold">Telefon:</span>{' '}
                  <a href="tel:015785747147" className="text-purple-600 hover:text-purple-700 underline">
                    015785747147
                  </a>
                </p>
                <p>
                  <span className="font-semibold">E-Mail:</span>{' '}
                  <a href="mailto:info@catchycreatorsclub.de" className="text-purple-600 hover:text-purple-700 underline">
                    info@catchycreatorsclub.de
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}

