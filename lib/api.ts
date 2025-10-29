const API_BASE_URL = 'https://catchy-deals.freshusdeals.com/api/v1'

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
    com?: string
    coUk?: string
  }
}

// Convert API product to app product format
export function transformApiProductToProduct(apiProduct: ApiProduct): Product {
  const currentPrice = parseFloat(apiProduct.pricing.current_price)
  const oldPrice = parseFloat(apiProduct.pricing.old_price)
  const discountPercent = Math.round(apiProduct.pricing.savings_percentage)

  // Generate affiliate links based on available marketplace prices
  const affiliateLinks: Product['affiliateLinks'] = {}
  
  // Base URL from product_url (usually amazon.de)
  const baseUrl = apiProduct.product_url
  
  // Generate marketplace URLs based on regional pricing availability
  if (apiProduct.regional_pricing.de_price) {
    affiliateLinks.de = baseUrl.replace(/amazon\.\w{2,3}/, 'amazon.de')
  }
  if (apiProduct.regional_pricing.fr_price) {
    affiliateLinks.fr = baseUrl.replace(/amazon\.\w{2,3}/, 'amazon.fr')
  }
  if (apiProduct.regional_pricing.es_price) {
    affiliateLinks.com = baseUrl.replace(/amazon\.\w{2,3}/, 'amazon.com')
  }
  if (apiProduct.regional_pricing.it_price) {
    affiliateLinks.coUk = baseUrl.replace(/amazon\.\w{2,3}/, 'amazon.co.uk')
  }

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

    // Filter only active products (status === "1")
    const activeProducts = apiResponse.data.products.filter(p => p.status === '1')
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

