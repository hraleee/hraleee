import Link from 'next/link';

export default function ServiziPage() {
  const services = [
    {
      id: 'siti-web',
      title: 'Siti Web',
      description: 'Siti web responsive, veloci e ottimizzati per la conversione',
      icon: '🌐',
      features: [
        'Design responsive e moderno',
        'Ottimizzazione SEO',
        'Integrazione CMS',
        'Analytics e tracking',
        'Manutenzione continua'
      ],
      price: 'da € 199',
      cta: 'Richiedi Preventivo'
    },
    {
      id: 'e-commerce',
      title: 'E-commerce',
      description: 'Piattaforme di vendita online complete e personalizzate',
      icon: '🛒',
      features: [
        'Catalogo prodotti avanzato',
        'Sistema di pagamento sicuro',
        'Gestione ordini e magazzino',
        'Marketing automation',
        'Integrazione con marketplace'
      ],
      price: 'da € 999',
      cta: 'Richiedi Preventivo'
    },
    {
      id: 'app-mobile',
      title: 'App Mobile',
      description: 'Applicazioni native e cross-platform per iOS e Android',
      icon: '📱',
      features: [
        'Sviluppo nativo iOS/Android',
        'App cross-platform',
        'Push notifications',
        'Integrazione API',
        'Pubblicazione store'
      ],
      price: 'da € 2.499',
      cta: 'Richiedi Preventivo'
    },
    {
      id: 'consulenza',
      title: 'Consulenza Digitale',
      description: 'Strategie digitali personalizzate per la crescita aziendale',
      icon: '💡',
      features: [
        'Analisi del mercato',
        'Strategia digitale',
        'Roadmap tecnologica',
        'Formazione team',
        'Supporto continuo'
      ],
      price: 'da € 49/ora',
      cta: 'Prenota Consulenza'
    },
    {
      id: 'seo',
      title: 'SEO & Marketing',
      description: 'Ottimizzazione per i motori di ricerca e strategie di marketing',
      icon: '📈',
      features: [
        'Ottimizzazione SEO on-page',
        'Content marketing',
        'Link building',
        'Analisi competitor',
        'Report mensili'
      ],
      price: 'da € 799/mese',
      cta: 'Richiedi Analisi'
    },
    {
      id: 'branding',
      title: 'Branding & Design',
      description: 'Identità visiva e design grafico per la tua azienda',
      icon: '🎨',
      features: [
        'Logo e identità visiva',
        'Materiali marketing',
        'Social media design',
        'Packaging design',
        'Brand guidelines'
      ],
      price: 'da € 899',
      cta: 'Richiedi Preventivo'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
          <br/>  I Nostri <span className="gradient-text">Servizi</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Offriamo soluzioni digitali complete per trasformare la tua presenza online 
            e far crescere la tua azienda nel mondo digitale.
          </p>
          <Link
            href="/contatti"
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-block"
          >
            Richiedi Consulenza Gratuita
          </Link>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.id} className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Caratteristiche:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-600">
                        <svg className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-t border-gray-200 pt-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-blue-600">{service.price}</span>
                  </div>
                  <Link
                    href={`/contatti?service=${service.id}`}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-200 text-center block"
                  >
                    {service.cta}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Il Nostro Processo di Lavoro
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Un approccio strutturato per garantire risultati eccellenti
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Analisi</h3>
              <p className="text-gray-600">Studio approfondito delle tue esigenze e obiettivi</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Strategia</h3>
              <p className="text-gray-600">Definizione della roadmap e pianificazione del progetto</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Sviluppo</h3>
              <p className="text-gray-600">Realizzazione tecnica con metodologie agili</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-orange-600">4</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Lancio</h3>
              <p className="text-gray-600">Deploy, test e supporto post-lancio</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Pronto a Iniziare il Tuo Progetto?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Contattaci per una consulenza gratuita e scopri come possiamo aiutarti 
            a raggiungere i tuoi obiettivi digitali
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contatti"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Richiedi Consulenza
            </Link>
            <Link
              href="/portfolio"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all duration-200"
            >
              Vedi i Nostri Lavori
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
