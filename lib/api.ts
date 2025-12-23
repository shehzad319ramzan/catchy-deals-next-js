const API_BASE_URL = 'https://backendnamecheap.freshusdeals.com/api/v1'

// Hours filter - only show products from last 48 hours
const HOURS_FILTER = 48

export const MARKETPLACE_CONFIG = {
  de: { domain: 'de', tag: 'catchydeal041-21' },
  fr: { domain: 'fr', tag: 'catchydeals08-21' },
  it: { domain: 'it', tag: 'catchydeals03-21' },
  es: { domain: 'es', tag: 'catchydeals05-21' }
} as const

export type MarketplaceKey = keyof typeof MARKETPLACE_CONFIG

// Helper function to generate Amazon affiliate URL for any ASIN
export function generateAmazonUrl(asin: string, market: string, tag?: string): string | null {
  if (!asin || !market) {
    return null
  }

  const validMarkets: Array<'de' | 'fr' | 'it' | 'es'> = ['de', 'fr', 'it', 'es']
  const marketKey = market.toLowerCase() as MarketplaceKey
  
  if (!validMarkets.includes(marketKey)) {
    return null
  }

  const { domain, tag: defaultTag } = MARKETPLACE_CONFIG[marketKey]
  // Use provided tag from URL if available and not empty, otherwise use default tag from config
  // Priority: URL tag > default tag
  console.log('generateAmazonUrl - Received tag:', tag, 'Type:', typeof tag, 'Default tag:', defaultTag)
  const affiliateTag = tag && typeof tag === 'string' && tag.trim() !== '' 
    ? tag.trim() 
    : defaultTag
  console.log('generateAmazonUrl - Using affiliate tag:', affiliateTag)
  return `https://www.amazon.${domain}/dp/${asin}?tag=${affiliateTag}`
}

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

export interface ApiResponse {
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

export interface FetchProductsParams {
  page?: number
  perPage?: number
  sortBy?: string
  sortOrder?: 'asc' | 'desc'
  minPrice?: number
  maxPrice?: number
  status?: string
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
  postedAt?: string
  affiliateLinks?: {
    de?: string
    fr?: string
    it?: string
    es?: string
  }
  regionalPrices?: {
    de?: number
    fr?: number
    it?: number
    es?: number
  }
}

// Convert API product to app product format
export function transformApiProductToProduct(apiProduct: ApiProduct): Product {
  const regionalPriceValues = [
    apiProduct.regional_pricing.de_price,
    apiProduct.regional_pricing.fr_price,
    apiProduct.regional_pricing.it_price,
    apiProduct.regional_pricing.es_price
  ]
    .map(price => (price ? parseFloat(price) : NaN))
    .filter(price => !Number.isNaN(price))

  const currentPrice =
    regionalPriceValues.length > 0 ? Math.min(...regionalPriceValues) : parseFloat(apiProduct.pricing.current_price)
  const originalPrice =
    regionalPriceValues.length > 0 ? Math.max(...regionalPriceValues) : parseFloat(apiProduct.pricing.old_price)

  const calculatedDiscount =
    originalPrice > 0 ? ((originalPrice - currentPrice) / originalPrice) * 100 : apiProduct.pricing.savings_percentage
  const discountPercent = Number.isFinite(calculatedDiscount)
    ? Math.max(0, Math.round(calculatedDiscount))
    : Math.max(0, Math.round(apiProduct.pricing.savings_percentage))

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

  // Only show discount if it's greater than 0%
  const discountString = discountPercent > 0 ? `-${discountPercent}%` : ''

  return {
    id: apiProduct.asin, // Use ASIN as ID
    title: apiProduct.title || 'Untitled Product',
    image: apiProduct.img_url || '/placeholder-image.png',
    currentPrice: `€${currentPrice.toFixed(2)}`,
    originalPrice: `€${originalPrice.toFixed(2)}`,
    discount: discountString,
    category: 'General', // You may want to add category to API
    asin: apiProduct.asin,
    ean: apiProduct.ean,
    description: apiProduct.description,
    postedAt: apiProduct.timestamps.created_at,
    affiliateLinks,
    regionalPrices: {
      de: apiProduct.regional_pricing.de_price ? parseFloat(apiProduct.regional_pricing.de_price) : undefined,
      fr: apiProduct.regional_pricing.fr_price ? parseFloat(apiProduct.regional_pricing.fr_price) : undefined,
      it: apiProduct.regional_pricing.it_price ? parseFloat(apiProduct.regional_pricing.it_price) : undefined,
      es: apiProduct.regional_pricing.es_price ? parseFloat(apiProduct.regional_pricing.es_price) : undefined
    }
  }
}

// Helper function to check if product is within last N hours based on created_at
function isWithinLastHours(createdAt: string, hours: number): boolean {
  if (!createdAt) {
    return false
  }
  
  const createdDate = new Date(createdAt)
  // Check if date is valid
  if (isNaN(createdDate.getTime())) {
    console.warn(`Invalid created_at date: ${createdAt}`)
    return false
  }
  
  const now = new Date()
  // Calculate the timestamp 48 hours ago (hours * 60 minutes * 60 seconds * 1000 milliseconds)
  const hoursAgo = new Date(now.getTime() - hours * 60 * 60 * 1000)
  
  // Check if created_at is within the last N hours
  // Product must be created after (now - 48 hours) and before or equal to now
  const isWithinRange = createdDate >= hoursAgo && createdDate <= now
  
  return isWithinRange
}

// Fetch products with pagination support
export async function fetchProducts(params?: FetchProductsParams): Promise<{
  products: Product[]
  pagination: {
    currentPage: number
    lastPage: number
    perPage: number
    total: number
    from: number
    to: number
  }
}> {
  try {
    // Build query parameters
    const queryParams = new URLSearchParams()
    
    // Enable pagination
    queryParams.append('paginate', 'true')
    queryParams.append('per_page', String(params?.perPage || 12))
    queryParams.append('page', String(params?.page || 1))
    
    // Add sorting - default to created_at desc (latest first)
    if (params?.sortBy) {
      queryParams.append('sort_by', params.sortBy)
    } else {
      // Default: sort by created_at desc (latest uploaded first)
      queryParams.append('sort_by', 'created_at')
    }
    if (params?.sortOrder) {
      queryParams.append('sort_order', params.sortOrder)
    } else {
      // Default: desc (newest/latest first)
      queryParams.append('sort_order', 'desc')
    }
    
    // Add filters
    if (params?.minPrice) {
      queryParams.append('min_price', String(params.minPrice))
    }
    if (params?.maxPrice) {
      queryParams.append('max_price', String(params.maxPrice))
    }
    if (params?.status) {
      queryParams.append('status', params.status)
    } else {
      // Default: only active products
      queryParams.append('status', '1')
    }

    const url = `${API_BASE_URL}/get-products?${queryParams.toString()}`
    
    // Optimize fetch for faster loading
    const fetchOptions: RequestInit = {
      next: { revalidate: 0 }, // Always fetch fresh data (Next.js way)
      headers: {
        'Content-Type': 'application/json',
      }
    }
    
    const response = await fetch(url, fetchOptions)

    if (!response.ok) {
      throw new Error(`Failed to fetch products: ${response.statusText}`)
    }

    const apiResponse: ApiResponse = await response.json()
    
    if (!apiResponse.success || !apiResponse.data.products) {
      throw new Error(apiResponse.message || 'Failed to fetch products')
    }

    // Transform all products to Product format (no time filter - show all products)
    const transformedProducts = apiResponse.data.products.map(transformApiProductToProduct)
    
    // Remove duplicates based on product ID (ASIN) - keep only the first occurrence
    // Use Map for faster O(1) lookup instead of Set + filter
    const uniqueProductsMap = new Map<string, Product>()
    for (const product of transformedProducts) {
      if (product.id && !uniqueProductsMap.has(product.id)) {
        uniqueProductsMap.set(product.id, product)
      }
    }
    const uniqueProducts = Array.from(uniqueProductsMap.values())
    
    // Sort by created_at to ensure consistent ordering (newest first)
    const sortedProducts = uniqueProducts.sort((a, b) => {
      if (!a.postedAt || !b.postedAt) return 0
      return new Date(b.postedAt).getTime() - new Date(a.postedAt).getTime()
    })
    
    console.log(`Total products from API: ${apiResponse.data.products.length}`)
    console.log(`Unique products after deduplication: ${sortedProducts.length} (page ${params?.page || 1})`)
    
    return {
      products: sortedProducts,
      pagination: {
        currentPage: apiResponse.meta.current_page,
        lastPage: apiResponse.meta.last_page,
        perPage: apiResponse.meta.per_page,
        total: sortedProducts.length, // Use deduplicated count
        from: apiResponse.meta.from,
        to: apiResponse.meta.to
      }
    }
  } catch (error) {
    console.error('Error fetching products:', error)
    // Return empty array on error
    return {
      products: [],
      pagination: {
        currentPage: 1,
        lastPage: 1,
        perPage: 12,
        total: 0,
        from: 0,
        to: 0
      }
    }
  }
}

// Fetch single product by ASIN/ID
// Uses the same fetchProducts function to ensure consistency with home page
export async function fetchProductById(id: string): Promise<Product | null> {
  try {
    if (!id || id.trim() === '') {
      return null
    }

    const normalizedId = id.trim().toUpperCase()
    
    // Use the same fetchProducts function that works on the home page
    // Search through multiple pages until we find the product
    let page = 1
    const maxPagesToSearch = 100 // Search up to 100 pages
    const perPage = 200 // Fetch 200 products per page
    
    while (page <= maxPagesToSearch) {
      try {
        // Use the exact same fetchProducts function that works on home page
        const result = await fetchProducts({
          page: page,
          perPage: perPage,
          sortBy: 'created_at',
          sortOrder: 'desc',
          status: '1'
        })

        if (!result.products || result.products.length === 0) {
          // No more products, stop searching
          break
        }

        // Search for the product in the transformed products
        // The product.id is set to apiProduct.asin in transformApiProductToProduct
        const product = result.products.find(p => {
          const productId = (p.id || '').trim().toUpperCase()
          const productAsin = (p.asin || '').trim().toUpperCase()
          const productEan = (p.ean || '').trim().toUpperCase()
          
          return productId === normalizedId || 
                 productAsin === normalizedId || 
                 productEan === normalizedId
        })

        if (product) {
          return product
        }

        // If we've reached the last page, stop searching
        if (page >= result.pagination.lastPage) {
          break
        }

        page++
      } catch (pageError) {
        console.error(`Error fetching page ${page} for product search:`, pageError)
        page++
        if (page > maxPagesToSearch) break
      }
    }

    // If not found with status=1, try without status filter
    page = 1
    while (page <= 50) { // Limit to 50 pages for this fallback
      try {
        const result = await fetchProducts({
          page: page,
          perPage: perPage,
          sortBy: 'created_at',
          sortOrder: 'desc'
          // No status filter
        })

        if (!result.products || result.products.length === 0) {
          break
        }

        const product = result.products.find(p => {
          const productId = (p.id || '').trim().toUpperCase()
          const productAsin = (p.asin || '').trim().toUpperCase()
          const productEan = (p.ean || '').trim().toUpperCase()
          
          return productId === normalizedId || 
                 productAsin === normalizedId || 
                 productEan === normalizedId
        })

        if (product) {
          return product
        }

        if (page >= result.pagination.lastPage) {
          break
        }

        page++
      } catch (pageError) {
        break
      }
    }

    return null
  } catch (error) {
    console.error('Error fetching product by ID:', error)
    return null
  }
}

