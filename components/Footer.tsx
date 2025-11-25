import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-purple-800 via-purple-900 to-pink-800 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-8">
          {/* Company Info Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white mb-4">Catchy Deals</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Finden Sie die besten Amazon-Schnäppchen jeden Tag. Top Deals mit echten Rabatten - täglich frisch für Sie zusammengestellt.
            </p>
          </div>

          {/* Quick Links Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white mb-4">Rechtliches</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/imprint" className="text-gray-300 hover:text-white transition-colors text-sm flex items-center group">
                  <svg className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  Impressum
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-300 hover:text-white transition-colors text-sm flex items-center group">
                  <svg className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  Datenschutz
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-300 hover:text-white transition-colors text-sm flex items-center group">
                  <svg className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  AGB
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white mb-4">Kontakt</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors text-sm flex items-center group">
                  <svg className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  Kontaktformular
                </Link>
              </li>
              <li>
                <a href="tel:015785747147" className="text-gray-300 hover:text-white transition-colors text-sm flex items-center group">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  015785747147
                </a>
              </li>
              <li>
                <a href="mailto:info@catchycreatorsclub.de" className="text-gray-300 hover:text-white transition-colors text-sm flex items-center group">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  info@catchycreatorsclub.de
                </a>
              </li>
            </ul>
          </div>

          {/* Company Details Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white mb-4">Firmendaten</h3>
            <div className="text-gray-300 text-sm space-y-2">
              <p className="font-semibold text-white">Flipscope</p>
              <p>Sara Köninger</p>
              <p>Häuserweg 8</p>
              <p>76698 Ubstadt-Weiher</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-sm text-gray-300 text-center sm:text-left">
              © {new Date().getFullYear()} Catchy Deals. Alle Rechte vorbehalten.
            </p>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-sm">
              <Link href="/imprint" className="text-gray-300 hover:text-white transition-colors">
                Impressum
              </Link>
              <span className="text-gray-500">•</span>
              <Link href="/privacy" className="text-gray-300 hover:text-white transition-colors">
                Datenschutz
              </Link>
              <span className="text-gray-500">•</span>
              <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                Kontakt
              </Link>
              <span className="text-gray-500">•</span>
              <Link href="/terms" className="text-gray-300 hover:text-white transition-colors">
                AGB
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
