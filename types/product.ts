export interface Product {
  id: string
  title: string
  image: string
  currentPrice: string
  originalPrice: string
  discount: string
  category: string
  affiliateLinks?: {
    de?: string  // Amazon.de (Germany)
    fr?: string  // Amazon.fr (France)
    com?: string // Amazon.com (US)
    coUk?: string // Amazon.co.uk (UK)
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
    affiliateLinks: {
      de: 'https://amzn.to/example-de',
      fr: 'https://amzn.to/example-fr',
      com: 'https://amzn.to/example-com',
      coUk: 'https://amzn.to/example-co-uk'
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
    category: 'Baby'
  },
  {
    id: '4',
    title: 'Nivea Men Shower Gel, 3x400ml',
    image: 'https://picsum.photos/seed/shower1/400/400',
    currentPrice: '€12.99',
    originalPrice: '€24.99',
    discount: '-48%',
    category: 'Personal Care'
  },
  {
    id: '5',
    title: 'Folding Laundry Basket with Handles',
    image: 'https://picsum.photos/seed/basket1/400/400',
    currentPrice: '€18.99',
    originalPrice: '€42.99',
    discount: '-56%',
    category: 'Home'
  },
  {
    id: '6',
    title: 'Toy BBQ Kitchen Playset for Kids',
    image: 'https://picsum.photos/seed/toy1/400/400',
    currentPrice: '€34.99',
    originalPrice: '€79.99',
    discount: '-56%',
    category: 'Toys'
  },
  {
    id: '7',
    title: 'Staedtler Fineliner Pens Set, 20 Colors',
    image: 'https://picsum.photos/seed/pen2/400/400',
    currentPrice: '€16.99',
    originalPrice: '€34.99',
    discount: '-51%',
    category: 'Office'
  },
  {
    id: '8',
    title: 'Compact Travel Umbrella Windproof',
    image: 'https://picsum.photos/seed/umbrella1/400/400',
    currentPrice: '€14.99',
    originalPrice: '€29.99',
    discount: '-50%',
    category: 'Travel'
  },
  {
    id: '9',
    title: 'Smart LED Desk Lamp with USB Charging',
    image: 'https://picsum.photos/seed/lamp1/400/400',
    currentPrice: '€39.99',
    originalPrice: '€79.99',
    discount: '-50%',
    category: 'Home'
  },
  {
    id: '10',
    title: 'Wireless Bluetooth Earbuds with Noise Cancellation',
    image: 'https://picsum.photos/seed/earbuds1/400/400',
    currentPrice: '€59.99',
    originalPrice: '€129.99',
    discount: '-54%',
    category: 'Electronics'
  },
  {
    id: '11',
    title: 'Stainless Steel Water Bottle Insulated',
    image: 'https://picsum.photos/seed/bottle1/400/400',
    currentPrice: '€24.99',
    originalPrice: '€49.99',
    discount: '-50%',
    category: 'Health'
  },
  {
    id: '12',
    title: 'Yoga Mat Premium Non-Slip Exercise Mat',
    image: 'https://picsum.photos/seed/yoga1/400/400',
    currentPrice: '€19.99',
    originalPrice: '€44.99',
    discount: '-56%',
    category: 'Sports'
  },
]

