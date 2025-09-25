import Link from 'next/link';

export default function PortfolioPage() {
  const projects = [
    {
      id: 1,
      title: 'Rodyna - Negozio Alimentari dell\'Est',
      category: 'E-commerce',
      description: 'Piattaforma e-commerce per negozio di alimentari specializzato in prodotti dell\'Europa dell\'Est. Gestione catalogo multilingue e sistema di pagamento integrato.',
      image: '/rodyna-screen.png',
      technologies: ['Next.js', 'TypeScript', 'MongoDB', 'Tailwind CSS'],
      link: 'https://www.rodyna.it/',
      featured: true
    },
    {
      id: 2,
      title: 'Alex Abbigliamento Pagani',
      category: 'E-commerce',
      description: 'Sito e-commerce per boutique di moda a Pagani. Selezione curata di brand e capi di qualità che uniscono materiali pregiati e linee versatili per la vita quotidiana e le occasioni speciali.',
      image: '/alex-abb-screen.png',
      technologies: ['Next.js', 'TypeScript', 'MongoDB', 'Tailwind CSS'],
      link: 'https://alex-abb.vercel.app/',
      featured: true
    },
    {
      id: 3,
      title: 'TechStart Hub - Landing Page',
      category: 'Siti Web',
      description: 'Landing page moderna per startup tech con animazioni fluide e design responsive. Progetto in fase di sviluppo.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
      technologies: ['Next.js', 'Framer Motion', 'Tailwind CSS', 'TypeScript'],
      link: '#',
      featured: false
    },
    {
      id: 4,
      title: 'EcoTrack - App Mobile',
      category: 'App Mobile',
      description: 'App per il tracking dell\'impatto ambientale con gamification e community features. In sviluppo.',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop',
      technologies: ['React Native', 'Node.js', 'MongoDB', 'Expo'],
      link: '#',
      featured: false
    },
    {
      id: 5,
      title: 'FoodieConnect - Social Platform',
      category: 'Web App',
      description: 'Piattaforma social per food blogger con sistema di ricette e recensioni. Progetto in corso.',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop',
      technologies: ['Next.js', 'Prisma', 'PostgreSQL', 'Cloudinary'],
      link: '#',
      featured: false
    },
    {
      id: 6,
      title: 'DevTools Dashboard',
      category: 'Web App',
      description: 'Dashboard per sviluppatori con strumenti di produttività e monitoraggio progetti. In sviluppo.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
      technologies: ['React', 'D3.js', 'Express.js', 'Redis'],
      link: '#',
      featured: false
    }
  ];

  const categories = ['Tutti', 'Siti Web', 'E-commerce', 'App Mobile', 'Web App'];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
          <br/>  Il Nostro <span className="gradient-text">Portfolio</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Scopri i progetti che abbiamo realizzato per i nostri clienti. 
            Ogni progetto è un esempio della nostra passione per l'innovazione e l'eccellenza.
          </p>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Progetti in Evidenza
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              I nostri lavori più rappresentativi che mostrano la qualità e l'innovazione
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            {projects.filter(p => p.featured).map((project) => (
              <div key={project.id} className="group">
                <div className="relative overflow-hidden rounded-2xl shadow-lg group-hover:shadow-2xl transition-all duration-300">
                  <div className="aspect-video bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="px-3 py-1 bg-blue-600 rounded-full text-sm font-medium">
                        {project.category}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                    <p className="text-gray-200 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, index) => (
                        <span key={index} className="px-2 py-1 bg-white/20 rounded text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <Link
                      href={project.link}
                      className="inline-flex items-center text-blue-300 hover:text-white transition-colors"
                    >
                      Scopri di più
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Projects */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Tutti i Nostri Progetti
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Una selezione completa dei nostri lavori più recenti
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-2 mb-3">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Tecnologie:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Link
                    href={project.link}
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors"
                  >
                    Vedi Progetto
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
              <p className="text-gray-600">Progetti Completati</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">30+</div>
              <p className="text-gray-600">Clienti Soddisfatti</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">5+</div>
              <p className="text-gray-600">Anni di Esperienza</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-600 mb-2">100%</div>
              <p className="text-gray-600">Progetti Consegna</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Vuoi un Progetto Simile?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Contattaci per discutere del tuo progetto e scoprire come possiamo 
            trasformare le tue idee in realtà digitali
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contatti"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Inizia il Tuo Progetto
            </Link>
            <Link
              href="/servizi"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all duration-200"
            >
              Scopri i Nostri Servizi
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
