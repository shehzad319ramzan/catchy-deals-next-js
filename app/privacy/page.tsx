import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-8">
          Datenschutz
        </h1>
        
        <div className="prose prose-lg max-w-none space-y-6 text-gray-700">
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">INFORMATIONEN ZUM DATENSCHUTZ</h2>
          
          <section>
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">1) Information über die Erhebung personenbezogener Daten und Kontaktdaten des Verantwortlichen</h3>
            
            <p className="mb-2"><strong>1.1</strong> Wir freuen uns, dass Sie unseren Internet-Auftritt (nachfolgend „Website") besuchen und bedanken uns für Ihr Interesse. Im Folgenden informieren wir Sie über den Umgang mit Ihren personenbezogenen Daten bei Nutzung unserer Website. Personenbezogene Daten sind hierbei alle Daten, mit denen Sie persönlich identifiziert werden können.</p>
            
            <p className="mb-2"><strong>1.2</strong> Verantwortlicher für die Datenverarbeitung im Sinne der Datenschutz-Grundverordnung (DSGVO) ist Flipscope</p>
            
            <div className="ml-4 space-y-1 mb-2">
              <p>Sara Köninger</p>
              <p>Häuserweg 8</p>
              <p>76698 Ubstadt-Weiher</p>
              <p>E-Mail: <a href="mailto:info@catchycreatorsclub.de" className="text-purple-600 hover:text-purple-700 underline">info@catchycreatorsclub.de</a></p>
            </div>
            
            <p>Der für die Verarbeitung von personenbezogenen Daten Verantwortliche ist diejenige natürliche oder juristische Person, die allein oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten entscheidet.</p>
          </section>
          
          <section>
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">2) Kontaktaufnahme</h3>
            <p>Im Rahmen der Kontaktaufnahme mit uns (z.B. per Kontaktformular oder E-Mail) werden personenbezogene Daten erhoben. Welche Daten im Falle eines Kontaktformulars erhoben werden, ist aus dem jeweiligen Kontaktformular ersichtlich. Diese Daten werden ausschließlich zum Zweck der Beantwortung Ihres Anliegens bzw. für die Kontaktaufnahme und die damit verbundene technische Administration gespeichert und verwendet. Rechtsgrundlage für die Verarbeitung der Daten ist unser berechtigtes Interesse an der Beantwortung Ihres Anliegens gemäß Art. 6 Abs. 1 lit. f DSGVO. Zielt Ihre Kontaktierung auf den Abschluss eines Vertrages ab, so ist zusätzliche Rechtsgrundlage für die Verarbeitung Art. 6 Abs. 1 lit. b DSGVO. Ihre Daten werden nach abschließender Bearbeitung Ihrer Anfrage gelöscht, dies ist der Fall, wenn sich aus den Umständen entnehmen lässt, dass der betroffene Sachverhalt abschließend geklärt ist und sofern keine gesetzlichen Aufbewahrungspflichten entgegenstehen.</p>
          </section>
          
          <section>
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">3) Datenverarbeitung zur Bestellabwicklung</h3>
            <p className="mb-2"><strong>3.1</strong> Soweit für die Vertragsabwicklung zu Liefer- und Zahlungszwecken erforderlich, werden die von uns erhobenen personenbezogenen Daten gemäß Art. 6 Abs. 1 lit. b DSGVO an das beauftragte Transportunternehmen und das beauftragte Kreditinstitut weitergegeben.</p>
            <p className="mb-2">Sofern wir Ihnen auf Grundlage eines entsprechenden Vertrages Aktualisierungen für Waren mit digitalen Elementen oder für digitale Produkte schulden, verarbeiten wir die von Ihnen bei der Bestellung übermittelten Kontaktdaten (Name, Anschrift, Mailadresse), um Sie im Rahmen unserer gesetzlichen Informationspflichten gemäß Art. 6 Abs. 1 lit. c DSGVO auf geeignetem Kommunikationsweg (etwa postalisch oder per Mail) über anstehende Aktualisierungen im gesetzlich vorgesehenen Zeitraum persönlich zu informieren. Ihre Kontaktdaten werden hierbei streng zweckgebunden für Mitteilungen über von uns geschuldete Aktualisierungen verwendet und zu diesem Zweck durch uns nur insoweit verarbeitet, wie dies für die jeweilige Information erforderlich ist.</p>
            <p>Zur Abwicklung Ihrer Bestellung arbeiten wir ferner mit dem / den nachstehenden Dienstleister(n) zusammen, die uns ganz oder teilweise bei der Durchführung geschlossener Verträge unterstützen. An diese Dienstleister werden nach Maßgabe der folgenden Informationen gewisse personenbezogene Daten übermittelt.</p>
          </section>
          
          <section>
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">4) Rechte des Betroffenen</h3>
            <p className="mb-2"><strong>4.1</strong> Das geltende Datenschutzrecht gewährt Ihnen gegenüber dem Verantwortlichen hinsichtlich der Verarbeitung Ihrer personenbezogenen Daten umfassende Betroffenenrechte (Auskunfts- und Interventionsrechte), über die wir Sie nachstehend informieren:</p>
            <ul className="list-disc ml-6 space-y-1 mb-4">
              <li>Auskunftsrecht gemäß Art. 15 DSGVO;</li>
              <li>Recht auf Berichtigung gemäß Art. 16 DSGVO;</li>
              <li>Recht auf Löschung gemäß Art. 17 DSGVO;</li>
              <li>Recht auf Einschränkung der Verarbeitung gemäß Art. 18 DSGVO;</li>
              <li>Recht auf Unterrichtung gemäß Art. 19 DSGVO;</li>
              <li>Recht auf Datenübertragbarkeit gemäß Art. 20 DSGVO;</li>
              <li>Recht auf Widerruf erteilter Einwilligungen gemäß Art. 7 Abs. 3 DSGVO;</li>
              <li>Recht auf Beschwerde gemäß Art. 77 DSGVO.</li>
            </ul>
            
            <p className="mb-2"><strong>4.2 WIDERSPRUCHSRECHT</strong></p>
            <p className="mb-2 font-semibold">WENN WIR IM RAHMEN EINER INTERESSENABWÄGUNG IHRE PERSONENBEZOGENEN DATEN AUFGRUND UNSERES ÜBERWIEGENDEN BERECHTIGTEN INTERESSES VERARBEITEN, HABEN SIE DAS JEDERZEITIGE RECHT, AUS GRÜNDEN, DIE SICH AUS IHRER BESONDEREN SITUATION ERGEBEN, GEGEN DIESE VERARBEITUNG WIDERSPRUCH MIT WIRKUNG FÜR DIE ZUKUNFT EINZULEGEN.</p>
            <p className="mb-2 font-semibold">MACHEN SIE VON IHREM WIDERSPRUCHSRECHT GEBRAUCH, BEENDEN WIR DIE VERARBEITUNG DER BETROFFENEN DATEN. EINE WEITERVERARBEITUNG BLEIBT ABER VORBEHALTEN, WENN WIR ZWINGENDE SCHUTZWÜRDIGE GRÜNDE FÜR DIE VERARBEITUNG NACHWEISEN KÖNNEN, DIE IHRE INTERESSEN, GRUNDRECHTE UND GRUNDFREIHEITEN ÜBERWIEGEN, ODER WENN DIE VERARBEITUNG DER GELTENDMACHUNG, AUSÜBUNG ODER VERTEIDIGUNG VON RECHTSANSPRÜCHEN DIENT.</p>
            <p className="mb-2 font-semibold">WERDEN IHRE PERSONENBEZOGENEN DATEN VON UNS VERARBEITET, UM DIREKTWERBUNG ZU BETREIBEN, HABEN SIE DAS RECHT, JEDERZEIT WIDERSPRUCH GEGEN DIE VERARBEITUNG SIE BETREFFENDER PERSONENBEZOGENER DATEN ZUM ZWECKE DERARTIGER WERBUNG EINZULEGEN. SIE KÖNNEN DEN WIDERSPRUCH WIE OBEN BESCHRIEBEN AUSÜBEN.</p>
            <p className="font-semibold">MACHEN SIE VON IHREM WIDERSPRUCHSRECHT GEBRAUCH, BEENDEN WIR DIE VERARBEITUNG DER BETROFFENEN DATEN ZU DIREKTWERBEZWECKEN.</p>
          </section>
          
          <section>
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">5) Dauer der Speicherung personenbezogener Daten</h3>
            <p>Die Dauer der Speicherung von personenbezogenen Daten bemisst sich anhand der jeweiligen Rechtsgrundlage, am Verarbeitungszweck und – sofern einschlägig – zusätzlich anhand der jeweiligen gesetzlichen Aufbewahrungsfrist (z.B. handels- und steuerrechtliche Aufbewahrungsfristen).</p>
            <p className="mt-2">Bei der Verarbeitung von personenbezogenen Daten auf Grundlage einer ausdrücklichen Einwilligung gemäß Art. 6 Abs. 1 lit. a DSGVO werden die betroffenen Daten so lange gespeichert, bis Sie Ihre Einwilligung widerrufen.</p>
            <p className="mt-2">Existieren gesetzliche Aufbewahrungsfristen für Daten, die im Rahmen rechtsgeschäftlicher bzw. rechtsgeschäftsähnlicher Verpflichtungen auf der Grundlage von Art. 6 Abs. 1 lit. b DSGVO verarbeitet werden, werden diese Daten nach Ablauf der Aufbewahrungsfristen routinemäßig gelöscht, sofern sie nicht mehr zur Vertragserfüllung oder Vertragsanbahnung erforderlich sind und/oder unsererseits kein berechtigtes Interesse an der Weiterspeicherung fortbesteht.</p>
            <p className="mt-2">Bei der Verarbeitung von personenbezogenen Daten auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO werden diese Daten so lange gespeichert, bis Sie Ihr Widerspruchsrecht nach Art. 21 Abs. 1 DSGVO ausüben, es sei denn, wir können zwingende schutzwürdige Gründe für die Verarbeitung nachweisen, die Ihre Interessen, Rechte und Freiheiten überwiegen, oder die Verarbeitung dient der Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen.</p>
            <p className="mt-2">Bei der Verarbeitung von personenbezogenen Daten zum Zwecke der Direktwerbung auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO werden diese Daten so lange gespeichert, bis Sie Ihr Widerspruchsrecht nach Art. 21 Abs. 2 DSGVO ausüben.</p>
            <p className="mt-2">Sofern sich aus den sonstigen Informationen dieser Erklärung über spezifische Verarbeitungssituationen nichts anderes ergibt, werden gespeicherte personenbezogene Daten im Übrigen dann gelöscht, wenn sie für die Zwecke, für die sie erhoben oder auf sonstige Weise verarbeitet wurden, nicht mehr notwendig sind.</p>
          </section>
          
          <section>
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">6) Tools und Sonstiges</h3>
            <p className="mb-2"><strong>- Lexoffice</strong></p>
            <p className="mb-2">Für die Erledigung der Buchhaltung nutzen wir den Service der cloudbasierten Buchhaltungssoftware des folgenden Anbieters: Haufe-Lexware GmbH & Co. KG, Munzinger Straße 9, 79111 Freiburg, Deutschland</p>
            <p className="mb-2">Der Anbieter verarbeitet Eingangs- und Ausgangsrechnungen sowie ggf. auch die Bankbewegungen unseres Unternehmens, um Rechnungen automatisch zu erfassen, zu den Transaktionen zu matchen und hieraus in einem teilautomatisierten Prozess die Finanzbuchhaltung zu erstellen.</p>
            <p>Sofern hierbei auch personenbezogene Daten verarbeitet werden, erfolgt die Verarbeitung gemäß Art. 6 Abs. 1 lit. f DSGVO auf Basis unseres berechtigten Interesses an einer effizienten Organisation und Dokumentation unserer Geschäftsvorgänge.</p>
          </section>
        </div>
      </div>
      <Footer />
    </main>
  )
}

