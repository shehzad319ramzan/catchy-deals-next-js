export default function Disclaimer() {
  return (
    <div className="mt-12 p-4 sm:p-6 bg-gray-50 border border-gray-200 rounded-lg">
      <div className="text-xs sm:text-sm text-gray-600 leading-relaxed">
        <p className="mb-3">
          <strong className="text-gray-800">Hinweis:</strong>
        </p>
        <div className="space-y-2 text-center sm:text-left">
          <p>
            Produktpreise und Verfügbarkeit entsprechen dem angegebenen Stand (Datum/Uhrzeit) und können sich ändern. 
            Für den Kauf dieses Produkts gelten die Angaben zu Preis und Verfügbarkeit, die zum Kaufzeitpunkt auf Amazon angezeigt werden.
          </p>
          <p>
            Bestimmte Inhalte, die auf dieser Website angezeigt werden, stammen von Amazon. Diese Inhalte werden, "wie besehen" bereitgestellt und können jederzeit geändert oder entfernt werden.
          </p>
          <p>
            Alle Preise inklusive der gesetzlichen Umsatzsteuer.
          </p>
        </div>
      </div>
    </div>
  )
}

