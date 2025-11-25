import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-8">
          Allgemeine Geschäftsbedingungen mit Kundeninformationen
        </h1>
        
        <div className="prose prose-lg max-w-none space-y-6 text-gray-700">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Inhaltsverzeichnis</h2>
            <ol className="list-decimal ml-6 space-y-2">
              <li>Geltungsbereich</li>
              <li>Vertragsschluss</li>
              <li>Widerrufsrecht</li>
              <li>Preise und Zahlungsbedingungen</li>
              <li>Liefer- und Versandbedingungen</li>
              <li>Einräumung von Nutzungsrechten für digitale Inhalte</li>
              <li>Eigentumsvorbehalt</li>
              <li>Mängelhaftung (Gewährleistung)</li>
              <li>Anwendbares Recht</li>
              <li>Alternative Streitbeilegung</li>
            </ol>
          </div>
          
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1) Geltungsbereich</h2>
            <p className="mb-2"><strong>1.1</strong> Diese Allgemeinen Geschäftsbedingungen (nachfolgend "AGB") der Flipscope, (nachfolgend "Verkäufer"), gelten für alle Verträge zur Lieferung von Waren, die ein Verbraucher oder Unternehmer (nachfolgend „Kunde") mit dem Verkäufer hinsichtlich der vom Verkäufer in seinem Online-Shop dargestellten Waren abschließt. Hiermit wird der Einbeziehung von eigenen Bedingungen des Kunden widersprochen, es sei denn, es ist etwas anderes vereinbart.</p>
            <p className="mb-2"><strong>1.2</strong> Für Verträge zur Bereitstellung von digitalen Inhalten gelten diese AGB entsprechend, sofern insoweit nicht etwas Abweichendes geregelt ist. Digitale Inhalte im Sinne dieser AGB sind Daten, die in digitaler Form erstellt und bereitgestellt werden.</p>
            <p className="mb-2"><strong>1.3</strong> Verbraucher im Sinne dieser AGB ist jede natürliche Person, die ein Rechtsgeschäft zu Zwecken abschließt, die überwiegend weder ihrer gewerblichen noch ihrer selbständigen beruflichen Tätigkeit zugerechnet werden können.</p>
            <p><strong>1.4</strong> Unternehmer im Sinne dieser AGB ist eine natürliche oder juristische Person oder eine rechtsfähige Personengesellschaft, die bei Abschluss eines Rechtsgeschäfts in Ausübung ihrer gewerblichen oder selbständigen beruflichen Tätigkeit handelt.</p>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2) Vertragsschluss</h2>
            <p className="mb-2"><strong>2.1</strong> Die im Online-Shop des Verkäufers enthaltenen Produktbeschreibungen stellen keine verbindlichen Angebote seitens des Verkäufers dar, sondern dienen zur Abgabe eines verbindlichen Angebots durch den Kunden.</p>
            <p className="mb-2"><strong>2.2</strong> Der Kunde kann das Angebot über das in den Online-Shop des Verkäufers integrierte Online-Bestellformular abgeben. Dabei gibt der Kunde, nachdem er die ausgewählten Waren in den virtuellen Warenkorb gelegt und den elektronischen Bestellprozess durchlaufen hat, durch Klicken des den Bestellvorgang abschließenden Buttons ein rechtlich verbindliches Vertragsangebot in Bezug auf die im Warenkorb enthaltenen Waren ab. Ferner kann der Kunde das Angebot auch per E-Mail oder per Online-Kontaktformular gegenüber dem Verkäufer abgeben.</p>
            <p className="mb-2"><strong>2.3</strong> Der Verkäufer kann das Angebot des Kunden innerhalb von fünf Tagen annehmen,</p>
            <ul className="list-disc ml-6 space-y-1 mb-2">
              <li>indem er dem Kunden eine schriftliche Auftragsbestätigung oder eine Auftragsbestätigung in Textform (Fax oder E-Mail) übermittelt, wobei insoweit der Zugang der Auftragsbestätigung beim Kunden maßgeblich ist, oder</li>
              <li>indem er dem Kunden die bestellte Ware liefert, wobei insoweit der Zugang der Ware beim Kunden maßgeblich ist, oder</li>
              <li>indem er den Kunden nach Abgabe von dessen Bestellung zur Zahlung auffordert.</li>
            </ul>
            <p className="mb-2">Liegen mehrere der vorgenannten Alternativen vor, kommt der Vertrag in dem Zeitpunkt zustande, in dem eine der vorgenannten Alternativen zuerst eintritt. Die Frist zur Annahme des Angebots beginnt am Tag nach der Absendung des Angebots durch den Kunden zu laufen und endet mit dem Ablauf des fünften Tages, welcher auf die Absendung des Angebots folgt. Nimmt der Verkäufer das Angebot des Kunden innerhalb vorgenannter Frist nicht an, so gilt dies als Ablehnung des Angebots mit der Folge, dass der Kunde nicht mehr an seine Willenserklärung gebunden ist.</p>
            <p className="mb-2"><strong>2.4</strong> Bei Auswahl einer von PayPal angebotenen Zahlungsart erfolgt die Zahlungsabwicklung über den Zahlungsdienstleister PayPal (Europe) S.à r.l. et Cie, S.C.A., 22-24 Boulevard Royal, L-2449 Luxemburg (im Folgenden: „PayPal"), unter Geltung der <a href="https://www.paypal.com/de/webapps/mpp/ua/useragreement-full" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-700 underline">PayPal-Nutzungsbedingungen</a>, einsehbar unter https://www.paypal.com/de/webapps/mpp/ua/useragreement-full oder - falls der Kunde nicht über ein PayPal-Konto verfügt – unter Geltung der <a href="https://www.paypal.com/de/webapps/mpp/ua/privacywax-full" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-700 underline">Bedingungen für Zahlungen ohne PayPal-Konto</a>, einsehbar unter https://www.paypal.com/de/webapps/mpp/ua/privacywax-full. Zahlt der Kunde mittels einer im Online-Bestellvorgang auswählbaren von PayPal angebotenen Zahlungsart, erklärt der Verkäufer schon jetzt die Annahme des Angebots des Kunden in dem Zeitpunkt, in dem der Kunde den Button anklickt, welcher den Bestellvorgang abschließt.</p>
            <p className="mb-2"><strong>2.5</strong> Bei der Abgabe eines Angebots über das Online-Bestellformular des Verkäufers wird der Vertragstext nach dem Vertragsschluss vom Verkäufer gespeichert und dem Kunden nach Absendung von dessen Bestellung in Textform (z. B. E-Mail, Fax oder Brief) übermittelt. Eine darüber hinausgehende Zugänglichmachung des Vertragstextes durch den Verkäufer erfolgt nicht.</p>
            <p className="mb-2"><strong>2.6</strong> Vor verbindlicher Abgabe der Bestellung über das Online-Bestellformular des Verkäufers kann der Kunde mögliche Eingabefehler durch aufmerksames Lesen der auf dem Bildschirm dargestellten Informationen erkennen. Ein wirksames technisches Mittel zur besseren Erkennung von Eingabefehlern kann dabei die Vergrößerungsfunktion des Browsers sein, mit deren Hilfe die Darstellung auf dem Bildschirm vergrößert wird. Seine Eingaben kann der Kunde im Rahmen des elektronischen Bestellprozesses so lange über die üblichen Tastatur- und Mausfunktionen korrigieren, bis er den Button anklickt, welcher den Bestellvorgang abschließt.</p>
            <p className="mb-2"><strong>2.7</strong> Für den Vertragsschluss stehen die deutsche und die englische Sprache zur Verfügung.</p>
            <p><strong>2.8</strong> Die Bestellabwicklung und Kontaktaufnahme finden in der Regel per E-Mail und automatisierter Bestellabwicklung statt. Der Kunde hat sicherzustellen, dass die von ihm zur Bestellabwicklung angegebene E-Mail-Adresse zutreffend ist, so dass unter dieser Adresse die vom Verkäufer versandten E-Mails empfangen werden können. Insbesondere hat der Kunde bei dem Einsatz von SPAM-Filtern sicherzustellen, dass alle vom Verkäufer oder von diesem mit der Bestellabwicklung beauftragten Dritten versandten E-Mails zugestellt werden können.</p>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3) Widerrufsrecht</h2>
            <p className="mb-2"><strong>3.1</strong> Verbrauchern steht grundsätzlich ein Widerrufsrecht zu.</p>
            <p className="mb-2"><strong>3.2</strong> Nähere Informationen zum Widerrufsrecht ergeben sich aus der Widerrufsbelehrung des Verkäufers.</p>
            <p><strong>3.3</strong> Das Widerrufsrecht gilt nicht für Verbraucher, die zum Zeitpunkt des Vertragsschlusses keinem Mitgliedstaat der Europäischen Union angehören und deren alleiniger Wohnsitz und Lieferadresse zum Zeitpunkt des Vertragsschlusses außerhalb der Europäischen Union liegen.</p>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4) Preise und Zahlungsbedingungen</h2>
            <p className="mb-2"><strong>4.1</strong> Sofern sich aus der Produktbeschreibung des Verkäufers nichts anderes ergibt, handelt es sich bei den angegebenen Preisen um Gesamtpreise, die die gesetzliche Umsatzsteuer enthalten. Gegebenenfalls zusätzlich anfallende Liefer- und Versandkosten werden in der jeweiligen Produktbeschreibung gesondert angegeben.</p>
            <p className="mb-2"><strong>4.2</strong> Bei Lieferungen in Länder außerhalb der Europäischen Union können im Einzelfall weitere Kosten anfallen, die der Verkäufer nicht zu vertreten hat und die vom Kunden zu tragen sind. Hierzu zählen beispielsweise Kosten für die Geldübermittlung durch Kreditinstitute (z.B. Überweisungsgebühren, Wechselkursgebühren) oder einfuhrrechtliche Abgaben bzw. Steuern (z.B. Zölle). Solche Kosten können in Bezug auf die Geldübermittlung auch dann anfallen, wenn die Lieferung nicht in ein Land außerhalb der Europäischen Union erfolgt, der Kunde die Zahlung aber von einem Land außerhalb der Europäischen Union aus vornimmt.</p>
            <p className="mb-2"><strong>4.3</strong> Die Zahlungsmöglichkeit/en wird/werden dem Kunden im Online-Shop des Verkäufers mitgeteilt.</p>
            <p className="mb-2"><strong>4.4</strong> Bei Auswahl einer über den Zahlungsdienst "Shopify Payments" angebotenen Zahlungsart erfolgt die Zahlungsabwicklung über den Zahlungsdienstleister Stripe Payments Europe Ltd., 1 Grand Canal Street Lower, Grand Canal Dock, Dublin, Irland (nachfolgend "Stripe"). Die einzelnen über Shopify Payments angebotenen Zahlungsarten werden dem Kunden im Online-Shop des Verkäufers mitgeteilt. Zur Abwicklung von Zahlungen kann sich Stripe weiterer Zahlungsdienste bedienen, für die ggf. besondere Zahlungsbedingungen gelten, auf die der Kunde ggf. gesondert hingewiesen wird. Weitere Informationen zu "Shopify Payments" sind im Internet unter <a href="https://www.shopify.com/legal/terms-payments-de" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-700 underline">https://www.shopify.com/legal/terms-payments-de</a> abrufbar.</p>
            <p><strong>4.5</strong> Bei Auswahl der Zahlungsart Kreditkarte via Stripe ist der Rechnungsbetrag mit Vertragsschluss sofort fällig. Die Zahlungsabwicklung erfolgt über den Zahlungsdienstleister Stripe Payments Europe Ltd., 1 Grand Canal Street Lower, Grand Canal Dock, Dublin, Irland (im Folgenden: „Stripe"). Stripe behält sich vor, eine Bonitätsprüfung durchzuführen und diese Zahlungsart bei negativer Bonitätsprüfung abzulehnen.</p>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5) Liefer- und Versandbedingungen</h2>
            <p className="mb-2"><strong>5.1</strong> Bietet der Verkäufer den Versand der Ware an, so erfolgt die Lieferung innerhalb des vom Verkäufer angegebenen Liefergebietes an die vom Kunden angegebene Lieferanschrift, sofern nichts anderes vereinbart ist. Bei der Abwicklung der Transaktion ist die in der Bestellabwicklung des Verkäufers angegebene Lieferanschrift maßgeblich. Abweichend hiervon ist bei Auswahl der Zahlungsart PayPal die vom Kunden zum Zeitpunkt der Bezahlung bei PayPal hinterlegte Lieferanschrift maßgeblich.</p>
            <p className="mb-2"><strong>5.2</strong> Scheitert die Zustellung der Ware aus Gründen, die der Kunde zu vertreten hat, trägt der Kunde die dem Verkäufer hierdurch entstehenden angemessenen Kosten. Dies gilt im Hinblick auf die Kosten für die Hinsendung nicht, wenn der Kunde sein Widerrufsrecht wirksam ausübt. Für die Rücksendekosten gilt bei wirksamer Ausübung des Widerrufsrechts durch den Kunden die in der Widerrufsbelehrung des Verkäufers hierzu getroffene Regelung.</p>
            <p className="mb-2"><strong>5.3</strong> Handelt der Kunde als Unternehmer, geht die Gefahr des zufälligen Untergangs und der zufälligen Verschlechterung der verkauften Ware auf den Kunden über, sobald der Verkäufer die Sache dem Spediteur, dem Frachtführer oder der sonst zur Ausführung der Versendung bestimmten Person oder Anstalt ausgeliefert hat. Handelt der Kunde als Verbraucher, geht die Gefahr des zufälligen Untergangs und der zufälligen Verschlechterung der verkauften Ware grundsätzlich erst mit Übergabe der Ware an den Kunden oder eine empfangsberechtigte Person über. Abweichend hiervon geht die Gefahr des zufälligen Untergangs und der zufälligen Verschlechterung der verkauften Ware auch bei Verbrauchern bereits auf den Kunden über, sobald der Verkäufer die Sache dem Spediteur, dem Frachtführer oder der sonst zur Ausführung der Versendung bestimmten Person oder Anstalt ausgeliefert hat, wenn der Kunde den Spediteur, den Frachtführer oder die sonst zur Ausführung der Versendung bestimmte Person oder Anstalt mit der Ausführung beauftragt und der Verkäufer dem Kunden diese Person oder Anstalt zuvor nicht benannt hat.</p>
            <p className="mb-2"><strong>5.4</strong> Der Verkäufer behält sich das Recht vor, im Falle nicht richtiger oder nicht ordnungsgemäßer Selbstbelieferung vom Vertrag zurückzutreten. Dies gilt nur für den Fall, dass die Nichtlieferung nicht vom Verkäufer zu vertreten ist und dieser mit der gebotenen Sorgfalt ein konkretes Deckungsgeschäft mit dem Zulieferer abgeschlossen hat. Der Verkäufer wird alle zumutbaren Anstrengungen unternehmen, um die Ware zu beschaffen. Im Falle der Nichtverfügbarkeit oder der nur teilweisen Verfügbarkeit der Ware wird der Kunde unverzüglich informiert und die Gegenleistung unverzüglich erstattet.</p>
            <p className="mb-2"><strong>5.5</strong> Bietet der Verkäufer die Ware zur Abholung an, so kann der Kunde die bestellte Ware innerhalb der vom Verkäufer angegebenen Geschäftszeiten unter der vom Verkäufer angegebenen Adresse abholen. In diesem Fall werden keine Versandkosten berechnet.</p>
            <p><strong>5.6</strong> Digitale Inhalte werden dem Kunden wie folgt bereitgestellt: - per E-Mail</p>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">6) Einräumung von Nutzungsrechten für digitale Inhalte</h2>
            <p className="mb-2"><strong>6.1</strong> Sofern sich aus der Inhaltsbeschreibung im Online-Shop des Verkäufers nichts anderes ergibt, räumt der Verkäufer dem Kunden an den bereitgestellten Inhalten das nicht ausschließliche, örtlich und zeitlich unbeschränkte Recht ein, die Inhalte zu privaten sowie zu kommerziellen Zwecken zu nutzen.</p>
            <p className="mb-2"><strong>6.2</strong> Eine Weitergabe der Inhalte an Dritte oder die Erstellung von Kopien für Dritte außerhalb des Rahmens dieser AGB ist nicht gestattet, soweit nicht der Verkäufer einer Übertragung der vertragsgegenständlichen Lizenz an den Dritten zugestimmt hat.</p>
            <p><strong>6.3</strong> Soweit sich der Vertrag auf die einmalige Bereitstellung eines digitalen Inhalts bezieht, wird die Rechtseinräumung erst wirksam, wenn der Kunde die geschuldete Vergütung vollständig geleistet hat. Der Verkäufer kann eine Benutzung der vertragsgegenständlichen Inhalte auch schon vor diesem Zeitpunkt vorläufig erlauben. Ein Übergang der Rechte findet durch eine solche vorläufige Erlaubnis nicht statt.</p>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">7) Eigentumsvorbehalt</h2>
            <p>Tritt der Verkäufer in Vorleistung, behält er sich bis zur vollständigen Bezahlung des geschuldeten Kaufpreises das Eigentum an der gelieferten Ware vor.</p>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">8) Mängelhaftung (Gewährleistung)</h2>
            <p className="mb-2"><strong>8.1</strong> Soweit sich aus den nachfolgenden Regelungen nichts anderes ergibt, gelten die Vorschriften der gesetzlichen Mängelhaftung. Hiervon abweichend gilt bei Verträgen zur Lieferung von Waren:</p>
            <p className="mb-2"><strong>8.2</strong> Handelt der Kunde als Unternehmer,</p>
            <ul className="list-disc ml-6 space-y-1 mb-2">
              <li>hat der Verkäufer die Wahl der Art der Nacherfüllung;</li>
              <li>beträgt bei neuen Waren die Verjährungsfrist für Mängel ein Jahr ab Ablieferung der Ware;</li>
              <li>sind bei gebrauchten Waren die Rechte und Ansprüche wegen Mängeln ausgeschlossen;</li>
              <li>beginnt die Verjährung nicht erneut, wenn im Rahmen der Mängelhaftung eine Ersatzlieferung erfolgt.</li>
            </ul>
            <p className="mb-2"><strong>8.3</strong> Die vorstehend geregelten Haftungsbeschränkungen und Fristverkürzungen gelten nicht</p>
            <ul className="list-disc ml-6 space-y-1 mb-2">
              <li>für Schadensersatz- und Aufwendungsersatzansprüche des Kunden,</li>
              <li>für den Fall, dass der Verkäufer den Mangel arglistig verschwiegen hat,</li>
              <li>für Waren, die entsprechend ihrer üblichen Verwendungsweise für ein Bauwerk verwendet worden sind und dessen Mangelhaftigkeit verursacht haben,</li>
              <li>für eine ggf. bestehende Verpflichtung des Verkäufers zur Bereitstellung von Aktualisierungen für digitale Produkte, bei Verträgen zur Lieferung von Waren mit digitalen Elementen.</li>
            </ul>
            <p className="mb-2"><strong>8.4</strong> Darüber hinaus gilt für Unternehmer, dass die gesetzlichen Verjährungsfristen für einen ggf. bestehenden gesetzlichen Rückgriffsanspruch unberührt bleiben.</p>
            <p className="mb-2"><strong>8.5</strong> Handelt der Kunde als Kaufmann i.S.d. § 1 HGB, trifft ihn die kaufmännische Untersuchungs- und Rügepflicht gemäß § 377 HGB. Unterlässt der Kunde die dort geregelten Anzeigepflichten, gilt die Ware als genehmigt.</p>
            <p><strong>8.6</strong> Handelt der Kunde als Verbraucher, so wird er gebeten, angelieferte Waren mit offensichtlichen Transportschäden bei dem Zusteller zu reklamieren und den Verkäufer hiervon in Kenntnis zu setzen. Kommt der Kunde dem nicht nach, hat dies keinerlei Auswirkungen auf seine gesetzlichen oder vertraglichen Mängelansprüche.</p>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">9) Anwendbares Recht</h2>
            <p className="mb-2"><strong>9.1</strong> Für sämtliche Rechtsbeziehungen der Parteien gilt das Recht der Bundesrepublik Deutschland unter Ausschluss der Gesetze über den internationalen Kauf beweglicher Waren. Bei Verbrauchern gilt diese Rechtswahl nur insoweit, als nicht der gewährte Schutz durch zwingende Bestimmungen des Rechts des Staates, in dem der Verbraucher seinen gewöhnlichen Aufenthalt hat, entzogen wird.</p>
            <p><strong>9.2</strong> Ferner gilt diese Rechtswahl im Hinblick auf das gesetzliche Widerrufsrecht nicht bei Verbrauchern, die zum Zeitpunkt des Vertragsschlusses keinem Mitgliedstaat der Europäischen Union angehören und deren alleiniger Wohnsitz und Lieferadresse zum Zeitpunkt des Vertragsschlusses außerhalb der Europäischen Union liegen.</p>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">10) Alternative Streitbeilegung</h2>
            <p className="mb-2"><strong>10.1</strong> Die EU-Kommission stellt im Internet unter folgendem Link eine Plattform zur Online-Streitbeilegung bereit: <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-700 underline">https://ec.europa.eu/consumers/odr</a></p>
            <p className="mb-2">Diese Plattform dient als Anlaufstelle zur außergerichtlichen Beilegung von Streitigkeiten aus Online-Kauf- oder Dienstleistungsverträgen, an denen ein Verbraucher beteiligt ist.</p>
            <p><strong>10.2</strong> Der Verkäufer ist zur Teilnahme an einem Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle weder verpflichtet noch bereit.</p>
          </section>
        </div>
      </div>
      <Footer />
    </main>
  )
}

