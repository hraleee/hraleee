export default function CookiePolicyPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center">
            <div className="order-2 lg:order-1">
              <h1 className="text-4xl lg:text-6xl font-extrabold text-gray-900 tracking-tight mb-4">
                Cookie <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">Policy</span>
              </h1>
              <p className="text-lg text-gray-600 max-w-xl">
                Trasparenza e controllo: scopri come utilizziamo i cookie per migliorare
                l'esperienza e misurare le performance del sito.
              </p>
            </div>
            <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
              {/* Cookie Illustration refined */}
              <div className="relative w-52 h-52 sm:w-60 sm:h-60">
                <div className="absolute inset-0 blur-2xl rounded-full bg-gradient-to-tr from-blue-300/30 to-purple-300/30" />
                <svg viewBox="0 0 220 220" className="relative drop-shadow-2xl">
                  <defs>
                    <radialGradient id="cookieShade" cx="50%" cy="45%" r="70%">
                      <stop offset="0%" stopColor="#F8D89A" />
                      <stop offset="70%" stopColor="#E9B868" />
                      <stop offset="100%" stopColor="#D9A352" />
                    </radialGradient>
                    <radialGradient id="highlight" cx="35%" cy="30%" r="35%">
                      <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.6" />
                      <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
                    </radialGradient>
                  </defs>
                  {/* Main cookie with soft outline */}
                  <circle cx="110" cy="110" r="90" fill="url(#cookieShade)" stroke="#E2B269" strokeWidth="3" />
                  {/* Bite */}
                  <circle cx="188" cy="86" r="24" fill="#fff" />
                  <circle cx="184" cy="120" r="12" fill="#fff" />
                  {/* Specular highlight */}
                  <ellipse cx="82" cy="72" rx="32" ry="22" fill="url(#highlight)" />
                  {/* Chips with subtle shadows */}
                  <g fill="#5B3A21">
                    <circle cx="76" cy="82" r="9" />
                    <circle cx="132" cy="78" r="7" />
                    <circle cx="98" cy="116" r="8" />
                    <circle cx="140" cy="132" r="10" />
                    <circle cx="70" cy="132" r="7" />
                    <circle cx="115" cy="155" r="6" />
                  </g>
                  {/* Crumbs */}
                  <g fill="#C7964B">
                    <circle cx="200" cy="62" r="3" />
                    <circle cx="196" cy="74" r="2" />
                    <circle cx="193" cy="95" r="2.5" />
                  </g>
                </svg>
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
              <div className="prose prose-sm max-w-none text-gray-700">
              <h2 className="text-2xl font-semibold text-gray-900">Cosa sono i cookie</h2>
              <p>
                I cookie sono piccoli file di testo che i siti inviano al dispositivo dell'utente,
                dove vengono memorizzati per essere poi ritrasmessi ai siti alla visita successiva.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8">Tipologie di cookie</h2>
              <ul className="space-y-2">
                <li className="flex items-start gap-3">
                  <span className="mt-1 inline-block w-2.5 h-2.5 rounded-full bg-gradient-to-r from-blue-600 to-purple-600" />
                  <span><strong>Cookie tecnici</strong>: necessari al corretto funzionamento del sito.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 inline-block w-2.5 h-2.5 rounded-full bg-gradient-to-r from-blue-600 to-purple-600" />
                  <span><strong>Cookie di preferenza</strong>: memorizzano alcune scelte dell'utente.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 inline-block w-2.5 h-2.5 rounded-full bg-gradient-to-r from-blue-600 to-purple-600" />
                  <span><strong>Cookie statistici</strong>: raccolgono informazioni in forma aggregata.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 inline-block w-2.5 h-2.5 rounded-full bg-gradient-to-r from-blue-600 to-purple-600" />
                  <span><strong>Cookie di marketing</strong>: tracciano la navigazione per mostrare contenuti personalizzati.</span>
                </li>
              </ul>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8">Gestione del consenso</h2>
              <p>
                Puoi accettare o rifiutare i cookie non tecnici tramite il banner. Puoi inoltre
                modificare le preferenze direttamente dal tuo browser.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8">Contatti</h2>
              <p>
                Per informazioni sulla presente policy, contattaci a
                <a href="mailto:hratechconsulting@gmail.com" className="text-blue-600 underline"> hratechconsulting@gmail.com</a>.
              </p>
            </div>
          </div>
        </div></div>
      </section>
    </div>
  );
}


