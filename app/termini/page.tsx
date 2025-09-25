export default function TerminiCondizioniPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center">
            <div className="mb-8"><br />
              <h1 className="text-4xl lg:text-6xl font-extrabold text-gray-900 tracking-tight mb-4">
                Termini e <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">Condizioni</span>
              </h1>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                I termini e le condizioni che regolano l'utilizzo dei nostri servizi e la nostra collaborazione.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="relative w-52 h-52 sm:w-60 sm:h-60">
                <div className="absolute inset-0 blur-2xl rounded-full bg-gradient-to-tr from-blue-300/30 to-purple-300/30" />
                <div className="relative w-full h-full bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center shadow-2xl">
                  <svg className="w-24 h-24 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl p-[1px] bg-gradient-to-r from-blue-200/60 via-purple-200/60 to-transparent shadow-2xl">
            <div className="bg-white/80 backdrop-blur-xl rounded-3xl border border-white/60 p-6 sm:p-10">
              <div className="prose prose-lg max-w-none text-gray-700">
                
                <div className="mb-8">
                  <p className="text-sm text-gray-500 mb-4">Ultimo aggiornamento: {new Date().toLocaleDateString('it-IT')}</p>
                  <p className="text-lg leading-relaxed">
                    Questi Termini e Condizioni ("Termini") regolano l'utilizzo del sito web e dei servizi offerti da Hratech. 
                    L'accesso e l'utilizzo del nostro sito web costituiscono l'accettazione di questi Termini.
                  </p>
                </div>

                <h2 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">1. Definizioni</h2>
                <div className="bg-gray-50 p-6 rounded-xl">
                  <ul className="space-y-3">
                    <li><strong>"Azienda"</strong> si riferisce a Hratech, con sede in Via Napoli, San Felice a Cancello (Caserta), Italia</li>
                    <li><strong>"Cliente"</strong> indica la persona fisica o giuridica che utilizza i nostri servizi</li>
                    <li><strong>"Servizi"</strong> comprende tutti i servizi di sviluppo web, consulenza digitale e soluzioni IT offerti</li>
                    <li><strong>"Sito Web"</strong> si riferisce a hratech.it e tutte le sue sottopagine</li>
                    <li><strong>"Contenuto"</strong> include testi, immagini, codici, design e qualsiasi altro materiale presente sul sito</li>
                  </ul>
                </div>

                <h2 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">2. Accettazione dei Termini</h2>
                <p className="mb-4">Utilizzando il nostro sito web o i nostri servizi, dichiari di:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Avere letto e compreso questi Termini e Condizioni</li>
                  <li>Essere maggiorenne o avere il consenso di un tutore legale</li>
                  <li>Accettare di essere vincolato da questi Termini</li>
                  <li>Rispettare tutte le leggi e regolamenti applicabili</li>
                </ul>

                <h2 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">3. Descrizione dei Servizi</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-blue-50 p-6 rounded-xl">
                    <h3 className="text-lg font-semibold text-blue-900 mb-3">Sviluppo Web</h3>
                    <ul className="space-y-2 text-sm">
                      <li>• Siti web personalizzati</li>
                      <li>• E-commerce e piattaforme online</li>
                      <li>• Applicazioni web progressive</li>
                      <li>• Integrazione di sistemi esistenti</li>
                    </ul>
                  </div>
                  <div className="bg-purple-50 p-6 rounded-xl">
                    <h3 className="text-lg font-semibold text-purple-900 mb-3">Consulenza Digitale</h3>
                    <ul className="space-y-2 text-sm">
                      <li>• Strategie digitali</li>
                      <li>• SEO e marketing online</li>
                      <li>• Analisi e ottimizzazione</li>
                      <li>• Formazione e supporto</li>
                    </ul>
                  </div>
                </div>

                <h2 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">4. Obblighi del Cliente</h2>
                <div className="space-y-4">
                  <h3 className="text-xl font-medium text-gray-900">4.1 Fornitura di Informazioni</h3>
                  <p>Il Cliente si impegna a fornire:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Informazioni accurate e complete sui propri requisiti</li>
                    <li>Accesso tempestivo a materiali e risorse necessarie</li>
                    <li>Feedback costruttivo durante il processo di sviluppo</li>
                    <li>Approvazione tempestiva delle fasi di progetto</li>
                  </ul>

                  <h3 className="text-xl font-medium text-gray-900">4.2 Pagamenti</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Rispetto delle scadenze di pagamento concordate</li>
                    <li>Comunicazione tempestiva di eventuali ritardi</li>
                    <li>Copertura di eventuali costi aggiuntivi approvati</li>
                    <li>Mantenimento di un metodo di pagamento valido</li>
                  </ul>
                </div>

                <h2 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">5. Proprietà Intellettuale</h2>
                <div className="space-y-4">
                  <h3 className="text-xl font-medium text-gray-900">5.1 Diritti di Hratech</h3>
                  <p>Hratech mantiene la proprietà di:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Codice sorgente e framework sviluppati internamente</li>
                    <li>Metodologie e processi proprietari</li>
                    <li>Template e componenti riutilizzabili</li>
                    <li>Conoscenze tecniche e know-how</li>
                  </ul>

                  <h3 className="text-xl font-medium text-gray-900">5.2 Diritti del Cliente</h3>
                  <p>Il Cliente riceve:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Licenza d'uso perpetua per il progetto finale</li>
                    <li>Diritto di modifica e personalizzazione</li>
                    <li>Proprietà del contenuto fornito dal Cliente</li>
                    <li>Diritto di trasferimento a terze parti</li>
                  </ul>
                </div>

                <h2 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">6. Prezzi e Pagamenti</h2>
                <div className="bg-yellow-50 p-6 rounded-xl">
                  <h3 className="text-lg font-semibold text-yellow-900 mb-3">Struttura dei Prezzi</h3>
                  <ul className="space-y-2">
                    <li><strong>Preventivi personalizzati:</strong> Basati sui requisiti specifici del progetto</li>
                    <li><strong>Pagamenti rateali:</strong> 50% all'avvio, 50% alla consegna</li>
                    <li><strong>Modifiche di scope:</strong> Preventivate separatamente</li>
                    <li><strong>Manutenzione:</strong> Piani annuali opzionali</li>
                  </ul>
                </div>

                <h2 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">7. Termini di Consegna</h2>
                <div className="space-y-4">
                  <h3 className="text-xl font-medium text-gray-900">7.1 Timeline di Progetto</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Timeline definite nel contratto specifico</li>
                    <li>Possibili ritardi per modifiche richieste dal Cliente</li>
                    <li>Comunicazione tempestiva di eventuali ritardi</li>
                    <li>Fattori esterni non controllabili da Hratech</li>
                  </ul>

                  <h3 className="text-xl font-medium text-gray-900">7.2 Processo di Approvazione</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Presentazione di milestone per approvazione</li>
                    <li>Feedback entro 5 giorni lavorativi</li>
                    <li>Approvazione tacita dopo 10 giorni</li>
                    <li>Possibilità di revisioni minori incluse</li>
                  </ul>
                </div>

                <h2 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">8. Garanzie e Supporto</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-green-50 p-6 rounded-xl">
                    <h3 className="text-lg font-semibold text-green-900 mb-3">Garanzie</h3>
                    <ul className="space-y-2 text-sm">
                      <li>• Funzionalità conforme alle specifiche</li>
                      <li>• Compatibilità con browser moderni</li>
                      <li>• Codice pulito e documentato</li>
                      <li>• Conformità agli standard web</li>
                    </ul>
                  </div>
                  <div className="bg-blue-50 p-6 rounded-xl">
                    <h3 className="text-lg font-semibold text-blue-900 mb-3">Supporto Post-Lancio</h3>
                    <ul className="space-y-2 text-sm">
                      <li>• 30 giorni di supporto gratuito</li>
                      <li>• Correzioni di bug inclusi</li>
                      <li>• Formazione di base inclusa</li>
                      <li>• Piani di manutenzione opzionali</li>
                    </ul>
                  </div>
                </div>

                <h2 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">9. Limitazione di Responsabilità</h2>
                <div className="bg-red-50 p-6 rounded-xl">
                  <h3 className="text-lg font-semibold text-red-900 mb-3">Esclusioni</h3>
                  <p className="mb-4">Hratech non sarà responsabile per:</p>
                  <ul className="space-y-2 text-sm">
                    <li>• Perdite di profitti o opportunità commerciali</li>
                    <li>• Danni indiretti o consequenziali</li>
                    <li>• Problemi causati da terze parti</li>
                    <li>• Modifiche non autorizzate al codice</li>
                    <li>• Danni superiori al valore del contratto</li>
                  </ul>
                </div>

                <h2 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">10. Risoluzione delle Controversie</h2>
                <div className="space-y-4">
                  <h3 className="text-xl font-medium text-gray-900">10.1 Procedura di Risoluzione</h3>
                  <ol className="list-decimal pl-6 space-y-2">
                    <li><strong>Comunicazione diretta:</strong> Tentativo di risoluzione amichevole</li>
                    <li><strong>Mediazione:</strong> Ricorso a un mediatore professionale</li>
                    <li><strong>Arbitrato:</strong> Procedura arbitrale accelerata</li>
                    <li><strong>Giurisdizione:</strong> Tribunale competente di Caserta</li>
                  </ol>

                  <h3 className="text-xl font-medium text-gray-900">10.2 Legge Applicabile</h3>
                  <p>Questi Termini sono regolati dalla legge italiana e dalle normative dell'Unione Europea applicabili.</p>
                </div>

                <h2 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">11. Modifiche ai Termini</h2>
                <p className="mb-4">Ci riserviamo il diritto di modificare questi Termini in qualsiasi momento. Le modifiche sostanziali saranno comunicate con almeno 30 giorni di preavviso.</p>

                <h2 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">12. Forza Maggiore</h2>
                <p className="mb-4">Nessuna delle parti sarà responsabile per il mancato adempimento dovuto a eventi di forza maggiore, inclusi ma non limitati a:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Disastri naturali, pandemie, guerre</li>
                  <li>Interruzioni di servizi di terze parti</li>
                  <li>Modifiche normative impreviste</li>
                  <li>Atti di terrorismo o sabotaggio</li>
                </ul>

                <h2 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">13. Privacy e Protezione Dati</h2>
                <p className="mb-4">Il trattamento dei dati personali è regolato dalla nostra <a href="/privacy" className="text-blue-600 underline">Privacy Policy</a>, conforme al GDPR e alla normativa italiana sulla privacy.</p>

                <h2 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">14. Contatti e Comunicazioni</h2>
                <div className="bg-blue-50 p-6 rounded-xl">
                  <h3 className="text-lg font-semibold text-blue-900 mb-3">Informazioni di Contatto</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p><strong>Email:</strong> <a href="mailto:info@hratech.it" className="text-blue-600 underline">info@hratech.it</a></p>
                      <p><strong>Telefono:</strong> <a href="tel:+393804307014" className="text-blue-600 underline">+39 380 430 70 14</a></p>
                    </div>
                    <div>
                      <p><strong>Indirizzo:</strong> Via Napoli, San Felice a Cancello (Caserta), Italia</p>
                      <p><strong>P.IVA:</strong> [Numero Partita IVA]</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl text-white">
                  <h3 className="text-xl font-semibold mb-2">Accettazione dei Termini</h3>
                  <p className="text-blue-100">
                    Utilizzando i nostri servizi, confermi di aver letto, compreso e accettato questi Termini e Condizioni. 
                    Se non sei d'accordo con qualsiasi parte di questi Termini, non utilizzare i nostri servizi.
                  </p>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
