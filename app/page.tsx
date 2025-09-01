import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Soluzioni Digitali{" "}
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Innovative
                  </span>{" "}
                  per la Tua Azienda
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Creiamo siti web, applicazioni e strategie digitali su misura per far crescere 
                  la tua presenza online e raggiungere nuovi clienti.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contatti"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Inizia il Tuo Progetto
                </Link>
                <Link
                  href="/portfolio"
                  className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold text-lg hover:border-blue-600 hover:text-blue-600 transition-all duration-200"
                >
                  Vedi i Nostri Lavori
                </Link>
              </div>
            </div>

            {/* Image/Illustration */}
            <div className="relative">
              <div className="relative z-10">
                <Image
                  src="/next.svg"
                  alt="Digital Solutions"
                  width={500}
                  height={400}
                  className="w-full h-auto"
                  priority
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-200 rounded-full opacity-50"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-200 rounded-full opacity-50"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              I Nostri Servizi
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Offriamo soluzioni complete per trasformare la tua presenza digitale
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Web Development */}
            <div className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-all duration-200">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Siti Web</h3>
              <p className="text-gray-600 mb-4">
                Siti web responsive, veloci e ottimizzati per la conversione
              </p>
              <Link href="/servizi/siti-web" className="text-blue-600 hover:text-blue-700 font-medium">
                Scopri di più →
              </Link>
            </div>

            {/* E-commerce */}
            <div className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-all duration-200">
              <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">E-commerce</h3>
              <p className="text-gray-600 mb-4">
                Piattaforme di vendita online complete e personalizzate
              </p>
              <Link href="/servizi/e-commerce" className="text-purple-600 hover:text-purple-700 font-medium">
                Scopri di più →
              </Link>
            </div>

            {/* Mobile Apps */}
            <div className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-all duration-200">
              <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">App Mobile</h3>
              <p className="text-gray-600 mb-4">
                Applicazioni native e cross-platform per iOS e Android
              </p>
              <Link href="/servizi/app-mobile" className="text-green-600 hover:text-green-700 font-medium">
                Scopri di più →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Pronto a Trasformare la Tua Presenza Digitale?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Contattaci per una consulenza gratuita e scopri come possiamo aiutarti a raggiungere i tuoi obiettivi
          </p>
          <Link
            href="/contatti"
            className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-block"
          >
            Richiedi Consulenza Gratuita
          </Link>
        </div>
      </section>
    </div>
  );
}
