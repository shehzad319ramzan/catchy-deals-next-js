import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Marketplace configuration - same as in lib/api.ts
const MARKETPLACE_CONFIG = {
  de: { domain: 'de', tag: 'catchydeal041-21' },
  fr: { domain: 'fr', tag: 'catchydeals08-21' },
  it: { domain: 'it', tag: 'catchydeals03-21' },
  es: { domain: 'es', tag: 'catchydeals05-21' }
} as const

type MarketplaceKey = keyof typeof MARKETPLACE_CONFIG

// Generate Amazon URL - same logic as in lib/api.ts
function generateAmazonUrl(asin: string, market: string): string | null {
  if (!asin || !market) {
    return null
  }

  const validMarkets: Array<'de' | 'fr' | 'it' | 'es'> = ['de', 'fr', 'it', 'es']
  const marketKey = market.toLowerCase() as MarketplaceKey
  
  if (!validMarkets.includes(marketKey)) {
    return null
  }

  const { domain, tag } = MARKETPLACE_CONFIG[marketKey]
  return `https://www.amazon.${domain}/dp/${asin}?tag=${tag}`
}

export function middleware(request: NextRequest) {
  const { pathname, searchParams } = new URL(request.url)
  
  // Only handle /products/[id] routes
  const productMatch = pathname.match(/^\/products\/([^\/]+)$/)
  
  if (productMatch) {
    const asin = productMatch[1]
    const market = searchParams.get('market')
    
    // If market parameter exists, redirect immediately to Amazon
    // This happens at the edge, before any page rendering
    if (market) {
      const amazonUrl = generateAmazonUrl(asin, market)
      if (amazonUrl) {
        return NextResponse.redirect(amazonUrl)
      }
    }
  }
  
  // Continue with normal request processing
  return NextResponse.next()
}

// Configure which routes to run middleware on
export const config = {
  matcher: '/products/:path*',
}

