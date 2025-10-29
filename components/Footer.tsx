import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-purple-800 to-pink-800 text-white py-8 md:py-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <p className="text-sm sm:text-base text-gray-300">
            © 2025 Catchy Deals. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-sm sm:text-base">
            <Link href="/imprint" className="text-gray-300 hover:text-white transition-colors">
              Imprint
            </Link>
            <Link href="/privacy" className="text-gray-300 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

