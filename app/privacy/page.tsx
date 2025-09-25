export default function PrivacyPolicyPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center">
            <div className="mb-8"><br />
              <h1 className="text-4xl lg:text-6xl font-extrabold text-gray-900 tracking-tight mb-4">
                Privacy <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">Policy</span>
              </h1>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                La tua privacy è importante per noi. Scopri come raccogliamo, utilizziamo e proteggiamo le tue informazioni personali.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="relative w-52 h-52 sm:w-60 sm:h-60">
                <div className="absolute inset-0 blur-2xl rounded-full bg-gradient-to-tr from-blue-300/30 to-purple-300/30" />
                <div className="relative w-full h-full bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center shadow-2xl">
                  <svg className="w-24 h-24 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
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
                    Hratech ("noi", "nostro" o "la nostra azienda") rispetta la tua privacy e si impegna a proteggere le tue informazioni personali. 
                    Questa Privacy Policy spiega come raccogliamo, utilizziamo, divulghiamo e proteggiamo le tue informazioni quando utilizzi il nostro sito web.
                  </p>
                </div>

                <h2 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">1. Informazioni che Raccogliamo</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-medium text-gray-900 mb-2">1.1 Informazioni Fornite Volontariamente</h3>
                    <ul className="list-disc pl-6 space-y-2">
                      <li><strong>Dati di contatto:</strong> Nome, cognome, indirizzo email, numero di telefono</li>
                      <li><strong>Informazioni aziendali:</strong> Nome dell'azienda, posizione lavorativa</li>
                      <li><strong>Comunicazioni:</strong> Messaggi, richieste di supporto, feedback</li>
                      <li><strong>Preferenze:</strong> Interessi relativi ai nostri servizi</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-medium text-gray-900 mb-2">1.2 Informazioni Raccolte Automaticamente</h3>
                    <ul className="list-disc pl-6 space-y-2">
                      <li><strong>Dati di navigazione:</strong> Pagine visitate, tempo di permanenza, percorsi di navigazione</li>
                      <li><strong>Informazioni tecniche:</strong> Indirizzo IP, tipo di browser, sistema operativo</li>
                      <li><strong>Cookie e tecnologie simili:</strong> Per migliorare l'esperienza utente e analizzare il traffico</li>
                    </ul>
                  </div>
                </div>

                <h2 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">2. Come Utilizziamo le Tue Informazioni</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-blue-50 p-6 rounded-xl">
                    <h3 className="text-lg font-semibold text-blue-900 mb-3">Servizi Principali</h3>
                    <ul className="space-y-2 text-sm">
                      <li>• Fornire e migliorare i nostri servizi</li>
                      <li>• Rispondere alle tue richieste</li>
                      <li>• Gestire il rapporto contrattuale</li>
                      <li>• Fornire supporto tecnico</li>
                    </ul>
                  </div>
                  <div className="bg-purple-50 p-6 rounded-xl">
                    <h3 className="text-lg font-semibold text-purple-900 mb-3">Marketing e Comunicazioni</h3>
                    <ul className="space-y-2 text-sm">
                      <li>• Inviare newsletter e aggiornamenti</li>
                      <li>• Promuovere nuovi servizi</li>
                      <li>• Invitare a eventi e webinar</li>
                      <li>• Personalizzare i contenuti</li>
                    </ul>
                  </div>
                </div>

                <h2 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">3. Base Giuridica del Trattamento</h2>
                <div className="bg-gray-50 p-6 rounded-xl">
                  <p className="mb-4">Trattiamo i tuoi dati personali sulla base di:</p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <div>
                        <strong>Consenso:</strong> Per marketing diretto e cookie non essenziali
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <div>
                        <strong>Esecuzione contrattuale:</strong> Per fornire i servizi richiesti
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <div>
                        <strong>Interesse legittimo:</strong> Per migliorare i nostri servizi e sicurezza
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <div>
                        <strong>Obbligo legale:</strong> Per adempimenti fiscali e contabili
                      </div>
                    </li>
                  </ul>
                </div>

                <h2 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">4. Condivisione delle Informazioni</h2>
                <p className="mb-4">Non vendiamo, affittiamo o condividiamo le tue informazioni personali con terze parti, eccetto nei seguenti casi:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Fornitori di servizi:</strong> Partner fidati che ci aiutano a fornire i nostri servizi</li>
                  <li><strong>Obblighi legali:</strong> Quando richiesto dalla legge o per proteggere i nostri diritti</li>
                  <li><strong>Consenso esplicito:</strong> Quando hai dato il tuo consenso specifico</li>
                  <li><strong>Transazioni aziendali:</strong> In caso di fusione, acquisizione o vendita di asset</li>
                </ul>

                <h2 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">5. Sicurezza dei Dati</h2>
                <div className="bg-green-50 p-6 rounded-xl">
                  <h3 className="text-lg font-semibold text-green-900 mb-3">Misure di Protezione</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <ul className="space-y-2 text-sm">
                      <li>• Crittografia SSL/TLS per la trasmissione</li>
                      <li>• Accesso limitato e controllato</li>
                      <li>• Backup regolari e sicuri</li>
                      <li>• Monitoraggio continuo della sicurezza</li>
                    </ul>
                    <ul className="space-y-2 text-sm">
                      <li>• Formazione del personale sulla privacy</li>
                      <li>• Audit di sicurezza periodici</li>
                      <li>• Procedure di risposta agli incidenti</li>
                      <li>• Conformità agli standard internazionali</li>
                    </ul>
                  </div>
                </div>

                <h2 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">6. I Tuoi Diritti</h2>
                <div className="space-y-4">
                  <p>In conformità al GDPR, hai i seguenti diritti:</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="border border-gray-200 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">Diritto di Accesso</h4>
                      <p className="text-sm text-gray-600">Richiedere una copia dei tuoi dati personali</p>
                    </div>
                    <div className="border border-gray-200 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">Diritto di Rettifica</h4>
                      <p className="text-sm text-gray-600">Correggere dati inesatti o incompleti</p>
                    </div>
                    <div className="border border-gray-200 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">Diritto di Cancellazione</h4>
                      <p className="text-sm text-gray-600">Richiedere la cancellazione dei tuoi dati</p>
                    </div>
                    <div className="border border-gray-200 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">Diritto di Portabilità</h4>
                      <p className="text-sm text-gray-600">Ricevere i tuoi dati in formato strutturato</p>
                    </div>
                  </div>
                </div>

                <h2 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">7. Cookie e Tecnologie Simili</h2>
                <p className="mb-4">Utilizziamo cookie per migliorare la tua esperienza sul nostro sito. Per maggiori dettagli, consulta la nostra <a href="/cookie" className="text-blue-600 underline">Cookie Policy</a>.</p>

                <h2 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">8. Trasferimenti Internazionali</h2>
                <p className="mb-4">I tuoi dati potrebbero essere trasferiti e processati in paesi al di fuori dell'Unione Europea. In tal caso, garantiamo adeguate misure di protezione in conformità al GDPR.</p>

                <h2 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">9. Conservazione dei Dati</h2>
                <p className="mb-4">Conserviamo i tuoi dati personali solo per il tempo necessario agli scopi per cui sono stati raccolti o come richiesto dalla legge:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Dati di contatto:</strong> 3 anni dall'ultimo contatto</li>
                  <li><strong>Dati contrattuali:</strong> 10 anni per obblighi fiscali</li>
                  <li><strong>Dati di marketing:</strong> Fino alla revoca del consenso</li>
                  <li><strong>Dati tecnici:</strong> 12 mesi per analisi e sicurezza</li>
                </ul>

                <h2 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">10. Modifiche a Questa Policy</h2>
                <p className="mb-4">Ci riserviamo il diritto di modificare questa Privacy Policy. Le modifiche sostanziali saranno comunicate tramite email o avviso sul sito web.</p>

                <h2 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">11. Contatti</h2>
                <div className="bg-blue-50 p-6 rounded-xl">
                  <p className="mb-4">Per domande su questa Privacy Policy o per esercitare i tuoi diritti:</p>
                  <div className="space-y-2">
                    <p><strong>Email:</strong> <a href="mailto:privacy@hratech.it" className="text-blue-600 underline">privacy@hratech.it</a></p>
                    <p><strong>Telefono:</strong> <a href="tel:+393804307014" className="text-blue-600 underline">+39 380 430 70 14</a></p>
                    <p><strong>Indirizzo:</strong> Via Napoli, San Felice a Cancello (Caserta), Italia</p>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl text-white">
                  <h3 className="text-xl font-semibold mb-2">Autorità di Controllo</h3>
                  <p className="text-blue-100">
                    Hai il diritto di presentare reclamo al Garante per la Protezione dei Dati Personali 
                    se ritieni che i tuoi diritti siano stati violati.
                  </p>
                  <p className="text-sm mt-2">
                    <strong>Sito web:</strong> <a href="https://www.gpdp.it" className="underline" target="_blank" rel="noopener noreferrer">www.gpdp.it</a>
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
