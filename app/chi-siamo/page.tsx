import Link from 'next/link';

export default function ChiSiamoPage() {
  const team = [
    {
      name: 'Marco Rossi',
      role: 'CEO & Founder',
      description: 'Esperto in strategia digitale con oltre 10 anni di esperienza nel settore tech.',
      image: '/next.svg',
      linkedin: '#',
      twitter: '#'
    },
    {
      name: 'Laura Bianchi',
      role: 'Lead Designer',
      description: 'Designer creativa specializzata in UX/UI design e brand identity.',
      image: '/next.svg',
      linkedin: '#',
      twitter: '#'
    },
    {
      name: 'Alessandro Verdi',
      role: 'Lead Developer',
      description: 'Sviluppatore full-stack esperto in tecnologie moderne e architetture scalabili.',
      image: '/next.svg',
      linkedin: '#',
      twitter: '#'
    },
    {
      name: 'Sofia Neri',
      role: 'Marketing Manager',
      description: 'Specialista in digital marketing, SEO e strategie di crescita online.',
      image: '/next.svg',
      linkedin: '#',
      twitter: '#'
    }
  ];

  const values = [
    {
      icon: '🎯',
      title: 'Innovazione',
      description: 'Sempre alla ricerca delle tecnologie più avanzate per offrire soluzioni all\'avanguardia.'
    },
    {
      icon: '🤝',
      title: 'Collaborazione',
      description: 'Lavoriamo a stretto contatto con i nostri clienti per garantire risultati eccellenti.'
    },
    {
      icon: '⚡',
      title: 'Efficienza',
      description: 'Processi ottimizzati per consegnare progetti di qualità in tempi rapidi.'
    },
    {
      icon: '💎',
      title: 'Qualità',
      description: 'Ogni progetto è realizzato con attenzione ai dettagli e standard elevati.'
    }
  ];

  const milestones = [
    {
      year: '2023',
      title: 'Fondazione',
      description: 'Nasce HraTech con la missione di digitalizzare le aziende italiane.'
    },
    {
      year: '2024',
      title: 'Crescita',
      description: 'Primi progetti completati e ampliamento dei servizi offerti.'
    },
    {
      year: '2025',
      title: 'Espansione',
      description: 'Nuove partnership e ampliamento del portafoglio clienti in Europa.'
    }
  ];

  return (
    <div>
     
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
          <br/> Chi <span className="gradient-text">Siamo</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Siamo un team di professionisti appassionati di tecnologia, 
            dedicati a trasformare le idee in soluzioni digitali innovative.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                La Nostra Missione
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Crediamo che ogni azienda meriti di avere una presenza digitale 
                eccellente. La nostra missione è democratizzare l'accesso alle 
                tecnologie più avanzate, rendendo la digitalizzazione accessibile 
                e vantaggiosa per tutti.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Lavoriamo ogni giorno per creare soluzioni che non solo soddisfino 
                le esigenze immediate dei nostri clienti, ma che li preparino 
                anche per le sfide future del mondo digitale.
              </p>
              <Link
                href="/contatti"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-block"
              >
                Parlaci del Tuo Progetto
              </Link>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl p-12 text-center">
                <div className="mb-4">
                  <img 
                    src="/hratech-screen.png" 
                    alt="HraTech Dashboard"
                    className="w-full h-48 object-cover rounded-lg shadow-lg"
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Innovazione Continua</h3>
                <p className="text-gray-600">
                  Ricerchiamo costantemente nuove tecnologie per offrire 
                  soluzioni sempre più avanzate e competitive.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              I Nostri Valori
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              I principi che guidano ogni nostra decisione e progetto
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="text-6xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section hidden as requested */}

      {/* Timeline Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              La Nostra Storia
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Un viaggio di crescita e innovazione dal 2023 a oggi
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-blue-600 to-purple-600"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`relative flex items-center ${
                  index % 2 === 0 ? 'justify-start' : 'justify-end'
                }`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
                      <div className="text-2xl font-bold text-blue-600 mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full border-4 border-white shadow-lg"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Vuoi Far Parte della Nostra Storia?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Contattaci per discutere del tuo progetto e scoprire come possiamo 
            aiutarti a raggiungere i tuoi obiettivi digitali
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contatti"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Inizia la Collaborazione
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
