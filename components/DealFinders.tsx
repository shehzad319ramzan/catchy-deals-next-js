import Image from 'next/image'

export default function DealFinders() {
  const teamMembers = [
    {
      name: 'Tobias',
      title: 'Der Schnäppchenjäger',
      description: 'Tobias liebt es, Deals zu finden, bei denen andere zweimal hinschauen müssen. Er kennt die besten Rabatte und Preistrends und bleibt immer einen Schritt voraus, um Ihnen die wertvollsten Angebote zu bringen.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face'
    },
    {
      name: 'Michaela',
      title: 'Die Alltagsstrategin',
      description: 'Michaela optimiert den Alltag für Familien mit cleveren Deals – von Haushaltsgeräten bis hin zu Abonnements, die wirklich lohnenswert sind. Sie weiß, was Familien wirklich brauchen.',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=face'
    },
    {
      name: 'Alex',
      title: 'Der Technik-Enthusiast',
      description: 'Alex verbindet technisches Know-how mit einer Leidenschaft für die besten Tech-Deals. Von Gaming-Ausrüstung bis hin zu Smart-Home-Lösungen sorgt er dafür, dass jede Empfehlung Ihr Geld wert ist.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face'
    }
  ]

  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
          UNSERE DEAL FINDER
        </h2>
        <p className="text-gray-600 text-base sm:text-lg lg:text-xl max-w-2xl mx-auto">
          Das Team hinter catchy-deals.de – Experten, die täglich die besten Deals für Sie finden.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 max-w-6xl mx-auto">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 md:p-8 border border-gray-100"
          >
            <div className="flex flex-col items-center text-center">
              <div className="relative mb-6">
                <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-purple-100 shadow-md relative">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {member.name}
              </h3>
              
              <p className="text-purple-600 font-semibold mb-4 text-sm uppercase tracking-wide">
                {member.title}
              </p>
              
              <p className="text-gray-600 leading-relaxed text-sm">
                {member.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

