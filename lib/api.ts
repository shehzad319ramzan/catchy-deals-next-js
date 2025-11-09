const API_BASE_URL = 'https://catchy-deals.freshusdeals.com/api/v1'

// Days filter - will be made dynamic later via API parameter
const DAYS_FILTER = 7

const MARKETPLACE_CONFIG = {
  de: { domain: 'de', tag: 'catchydeal041-21' },
  fr: { domain: 'fr', tag: 'catchydeals08-21' },
  it: { domain: 'it', tag: 'catchydeals03-21' },
  es: { domain: 'es', tag: 'catchydeals05-21' }
} as const

type MarketplaceKey = keyof typeof MARKETPLACE_CONFIG

export interface ApiProduct {
  id: string
  title: string
  asin: string
  ean: string
  product_url: string
  img_url: string
  description: string
  pricing: {
    current_price: string
    old_price: string
    savings: number
    savings_percentage: number
  }
  regional_pricing: {
    de_price: string
    es_price: string
    fr_price: string
    it_price: string
  }
  timestamps: {
    posted_at: string
    created_at: string
    updated_at: string
  }
  status: string
}

interface ApiResponse {
  success: boolean
  message: string
  data: {
    products: ApiProduct[]
    count: number
  }
  meta: {
    current_page: number
    last_page: number
    per_page: number
    total: number
    from: number
    to: number
  }
}

export interface Product {
  id: string
  title: string
  image: string
  currentPrice: string
  originalPrice: string
  discount: string
  category: string
  asin?: string
  ean?: string
  description?: string
  affiliateLinks?: {
    de?: string
    fr?: string
    it?: string
    es?: string
  }
}

// Convert API product to app product format
export function transformApiProductToProduct(apiProduct: ApiProduct): Product {
  const currentPrice = parseFloat(apiProduct.pricing.current_price)
  const oldPrice = parseFloat(apiProduct.pricing.old_price)
  const discountPercent = Math.round(apiProduct.pricing.savings_percentage)

  // Generate affiliate links based on available marketplace prices
  const affiliateLinks: Product['affiliateLinks'] = {}
  const asin = apiProduct.asin?.trim()

  const addAffiliateLink = (marketplaceKey: MarketplaceKey, price: string | null | undefined) => {
    if (!price || !asin) {
      return
    }

    const { domain, tag } = MARKETPLACE_CONFIG[marketplaceKey]
    affiliateLinks[marketplaceKey] = `https://www.amazon.${domain}/dp/${asin}?tag=${tag}`
  }

  addAffiliateLink('de', apiProduct.regional_pricing.de_price)
  addAffiliateLink('fr', apiProduct.regional_pricing.fr_price)
  addAffiliateLink('it', apiProduct.regional_pricing.it_price)
  addAffiliateLink('es', apiProduct.regional_pricing.es_price)

  return {
    id: apiProduct.asin, // Use ASIN as ID
    title: apiProduct.title,
    image: apiProduct.img_url,
    currentPrice: `€${currentPrice.toFixed(2)}`,
    originalPrice: `€${oldPrice.toFixed(2)}`,
    discount: `-${discountPercent}%`,
    category: 'General', // You may want to add category to API
    asin: apiProduct.asin,
    ean: apiProduct.ean,
    description: apiProduct.description,
    affiliateLinks
  }
}

// Helper function to check if product is within last N days
function isWithinLastDays(postedAt: string, days: number): boolean {
  const postedDate = new Date(postedAt)
  const now = new Date()
  const daysAgo = new Date(now.getTime() - days * 24 * 60 * 60 * 1000)
  return postedDate >= daysAgo
}

// Fetch all products
export async function fetchProducts(): Promise<Product[]> {
  try {
    const response = await fetch(`${API_BASE_URL}/get-products`, {
      next: { revalidate: 60 } // Revalidate every 60 seconds
    })

    if (!response.ok) {
      throw new Error(`Failed to fetch products: ${response.statusText}`)
    }

    const apiResponse: ApiResponse = await response.json()
    
    if (!apiResponse.success || !apiResponse.data.products) {
      throw new Error(apiResponse.message || 'Failed to fetch products')
    }

    // Filter only active products (status === "1") and from last N days based on created_at
    const activeProducts = apiResponse.data.products.filter(p => {
      const isActive = p.status === '1'
      const isWithinDays = isWithinLastDays(p.timestamps.created_at, DAYS_FILTER)
      return isActive && isWithinDays
    })
    
    return activeProducts.map(transformApiProductToProduct)
  } catch (error) {
    console.error('Error fetching products:', error)
    // Return empty array on error
    return []
  }
}

// Fetch single product by ASIN/ID
export async function fetchProductById(id: string): Promise<Product | null> {
  try {
    const response = await fetch(`${API_BASE_URL}/get-products`, {
      next: { revalidate: 60 }
    })

    if (!response.ok) {
      throw new Error(`Failed to fetch products: ${response.statusText}`)
    }

    const apiResponse: ApiResponse = await response.json()
    
    if (!apiResponse.success || !apiResponse.data.products) {
      throw new Error(apiResponse.message || 'Failed to fetch products')
    }

    // Find product by ASIN/EAN/ID and filter active products
    const apiProduct = apiResponse.data.products.find(
      p => (p.asin === id || p.ean === id || p.id === id) && p.status === '1'
    )

    if (!apiProduct) {
      return null
    }

    return transformApiProductToProduct(apiProduct)
  } catch (error) {
    console.error('Error fetching product:', error)
    return null
  }
}

