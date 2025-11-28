export default function About() {
  return (
    <section className="bg-gradient-to-br from-purple-600 via-pink-600 to-purple-700 py-16 md:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
          Willkommen bei catchy-deals.de – der Plattform für smarte Technikliebhaber.
        </h2>
        
        <div className="text-white text-base sm:text-lg leading-relaxed space-y-6 mb-8">
          <p>
            Hinter dieser Seite steckt ein kleines Team, das seit Jahren eine große Leidenschaft teilt: Technik entdecken, vergleichen, testen und die besten Deals finden. Genau daraus entstand die Idee, eine Seite aufzubauen, die all das vereint – übersichtlich, aktuell und verlässlich.
          </p>
          
          <div className="text-left bg-white/10 backdrop-blur-sm rounded-lg p-6 mt-8">
            <p className="font-semibold text-xl mb-4 text-center">Dabei setzen wir auf:</p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <svg className="w-6 h-6 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 6.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span><strong>Technische Expertise</strong> – weil wir wissen, worauf es wirklich ankommt</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 6.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span><strong>Daten & Preisvergleiche</strong> – statt Marketingversprechen</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 6.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span><strong>Ehrliche Empfehlungen</strong> – nur Produkte, die wir selbst kaufen würden</span>
              </li>
            </ul>
          </div>
          
          <p>
            catchy-deals.de richtet sich an alle, die gute Technik genauso schätzen wie wir – egal ob fürs Homeoffice, Entertainment, Gaming oder einfach für den Alltag.
          </p>
          
          <p className="font-semibold text-xl">
            Wir sind keine große Redaktion, sondern ein Team, das Technik liebt.
          </p>
          
          <p>
            Und genau deshalb findest du hier nur sorgfältig geprüfte Deals, statt eine Masse an zufälligen Angeboten.
          </p>
        </div>
      </div>
    </section>
  )
}

