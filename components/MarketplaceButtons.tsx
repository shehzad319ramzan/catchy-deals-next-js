interface MarketplaceButtonsProps {
  affiliateLinks?: {
    de?: string
    fr?: string
    com?: string
    coUk?: string
  }
}

const marketplaces = [
  {
    key: 'de',
    name: 'Amazon.de',
    flag: '🇩🇪',
    country: 'Germany',
    color: 'from-yellow-400 to-yellow-600'
  },
  {
    key: 'fr',
    name: 'Amazon.fr',
    flag: '🇫🇷',
    country: 'France',
    color: 'from-blue-400 to-blue-600'
  },
  {
    key: 'com',
    name: 'Amazon.com',
    flag: '🇺🇸',
    country: 'USA',
    color: 'from-orange-400 to-orange-600'
  },
  {
    key: 'coUk',
    name: 'Amazon.co.uk',
    flag: '🇬🇧',
    country: 'UK',
    color: 'from-red-400 to-red-600'
  }
] as const

export default function MarketplaceButtons({ affiliateLinks }: MarketplaceButtonsProps) {
  if (!affiliateLinks) {
    return null
  }

  // Filter to only show marketplaces with available links
  const availableMarketplaces = marketplaces.filter(marketplace => {
    const link = affiliateLinks[marketplace.key as keyof typeof affiliateLinks]
    return link && link.trim() !== ''
  })

  if (availableMarketplaces.length === 0) {
    return null
  }

  return (
    <div className="space-y-3">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Available on:</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {availableMarketplaces.map(marketplace => {
          const link = affiliateLinks[marketplace.key as keyof typeof affiliateLinks]!
          return (
            <a
              key={marketplace.key}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className={`bg-gradient-to-r ${marketplace.color} hover:opacity-90 text-white font-semibold py-3 px-4 rounded-lg transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5 duration-200 flex items-center justify-center space-x-2 text-sm sm:text-base`}
            >
              <span className="text-xl">{marketplace.flag}</span>
              <span>{marketplace.name}</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          )
        })}
      </div>
    </div>
  )
}
