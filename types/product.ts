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
    de?: string  // Amazon.de (Germany)
    fr?: string  // Amazon.fr (France)
    it?: string  // Amazon.it (Italy)
    es?: string  // Amazon.es (Spain)
  }
  regionalPrices?: {
    de?: number
    fr?: number
    it?: number
    es?: number
  }
}

export const sampleProducts: Product[] = [
  {
    id: '1',
    title: 'Coleman Darwin 3 tent, compact 3-man dome tent,...',
    image: 'https://picsum.photos/seed/tent1/400/400',
    currentPrice: '€47.62',
    originalPrice: '€155.11',
    discount: '-69%',
    category: 'Outdoor',
    postedAt: '2025-01-01T10:00:00Z',
    affiliateLinks: {
      de: 'https://amzn.to/example-de',
      fr: 'https://amzn.to/example-fr',
      it: 'https://amzn.to/example-it',
      es: 'https://amzn.to/example-es'
    }
  },
  {
    id: '2',
    title: 'Pentel SES15C-Y - Brush Sign Pen Fiber-tip pens, 10 piece...',
    image: 'https://picsum.photos/seed/pen1/400/400',
    currentPrice: '€8.09',
    originalPrice: '€22.66',
    discount: '-64%',
    category: 'Office',
    postedAt: '2025-01-02T10:00:00Z',
    affiliateLinks: {
      de: 'https://amzn.to/example-de-2',
      fr: 'https://amzn.to/example-fr-2'
    }
  },
  {
    id: '3',
    title: 'Electric Breast Pump with Multiple Modes',
    image: 'https://picsum.photos/seed/baby1/400/400',
    currentPrice: '€89.99',
    originalPrice: '€159.99',
    discount: '-44%',
    category: 'Baby',
    postedAt: '2025-01-03T10:00:00Z'
  },
  {
    id: '4',
    title: 'Nivea Men Shower Gel, 3x400ml',
    image: 'https://picsum.photos/seed/shower1/400/400',
    currentPrice: '€12.99',
    originalPrice: '€24.99',
    discount: '-48%',
    category: 'Personal Care',
    postedAt: '2025-01-04T10:00:00Z'
  },
  {
    id: '5',
    title: 'Folding Laundry Basket with Handles',
    image: 'https://picsum.photos/seed/basket1/400/400',
    currentPrice: '€18.99',
    originalPrice: '€42.99',
    discount: '-56%',
    category: 'Home',
    postedAt: '2025-01-05T10:00:00Z'
  },
  {
    id: '6',
    title: 'Toy BBQ Kitchen Playset for Kids',
    image: 'https://picsum.photos/seed/toy1/400/400',
    currentPrice: '€34.99',
    originalPrice: '€79.99',
    discount: '-56%',
    category: 'Toys',
    postedAt: '2025-01-06T10:00:00Z'
  },
  {
    id: '7',
    title: 'Staedtler Fineliner Pens Set, 20 Colors',
    image: 'https://picsum.photos/seed/pen2/400/400',
    currentPrice: '€16.99',
    originalPrice: '€34.99',
    discount: '-51%',
    category: 'Office',
    postedAt: '2025-01-07T10:00:00Z'
  },
  {
    id: '8',
    title: 'Compact Travel Umbrella Windproof',
    image: 'https://picsum.photos/seed/umbrella1/400/400',
    currentPrice: '€14.99',
    originalPrice: '€29.99',
    discount: '-50%',
    category: 'Travel',
    postedAt: '2025-01-08T10:00:00Z'
  },
  {
    id: '9',
    title: 'Smart LED Desk Lamp with USB Charging',
    image: 'https://picsum.photos/seed/lamp1/400/400',
    currentPrice: '€39.99',
    originalPrice: '€79.99',
    discount: '-50%',
    category: 'Home',
    postedAt: '2025-01-09T10:00:00Z'
  },
  {
    id: '10',
    title: 'Wireless Bluetooth Earbuds with Noise Cancellation',
    image: 'https://picsum.photos/seed/earbuds1/400/400',
    currentPrice: '€59.99',
    originalPrice: '€129.99',
    discount: '-54%',
    category: 'Electronics',
    postedAt: '2025-01-10T10:00:00Z'
  },
  {
    id: '11',
    title: 'Stainless Steel Water Bottle Insulated',
    image: 'https://picsum.photos/seed/bottle1/400/400',
    currentPrice: '€24.99',
    originalPrice: '€49.99',
    discount: '-50%',
    category: 'Health',
    postedAt: '2025-01-11T10:00:00Z'
  },
  {
    id: '12',
    title: 'Yoga Mat Premium Non-Slip Exercise Mat',
    image: 'https://picsum.photos/seed/yoga1/400/400',
    currentPrice: '€19.99',
    originalPrice: '€44.99',
    discount: '-56%',
    category: 'Sports',
    postedAt: '2025-01-12T10:00:00Z'
  },
]

