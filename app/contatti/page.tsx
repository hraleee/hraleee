'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';
import emailjs from '@emailjs/browser';

export default function ContattiPage() {
  const form = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefono: '',
    azienda: '',
    servizio: '',
    messaggio: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    // Mappa i nomi EmailJS ai nomi dello stato
    const fieldMap: { [key: string]: string } = {
      'user_name': 'nome',
      'user_email': 'email',
      'user_phone': 'telefono',
      'user_company': 'azienda',
      'user_service': 'servizio',
      'message': 'messaggio'
    };
    
    const stateField = fieldMap[name] || name;
    
    setFormData({
      ...formData,
      [stateField]: value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitSuccess(false);
    setError('');
    
    // Validazione completa
    if (!formData.nome.trim()) {
      setError('Il nome è obbligatorio');
      setIsSubmitting(false);
      return;
    }
    
    if (!formData.email.trim()) {
      setError('L\'email è obbligatoria');
      setIsSubmitting(false);
      return;
    }
    
    if (!formData.email.includes('@')) {
      setError('Inserisci un\'email valida');
      setIsSubmitting(false);
      return;
    }
    
    if (!formData.messaggio.trim()) {
      setError('Il messaggio è obbligatorio');
      setIsSubmitting(false);
      return;
    }
    
    if (!form.current) return;
    
    emailjs
      .sendForm(
        'service_9dxdvjs',
        'template_grjckl5',
        form.current,
        'wiZ-28A0lqjg3CHs_'
      )
      .then(
        () => {
          setSubmitSuccess(true);
          setIsSubmitting(false);
          setFormData({
            nome: '',
            email: '',
            telefono: '',
            azienda: '',
            servizio: '',
            messaggio: ''
          });
        },
        (err: any) => {
          setError('Errore durante l\'invio del messaggio. Riprova più tardi.');
          setIsSubmitting(false);
        }
      );
  };

  const contactInfo = [
    {
      icon: '📍',
      title: 'Indirizzo',
      content: 'Via Napoli, San Felice a Cancello (Caserta), Italia',
      link: 'https://maps.google.com'
    },
    {
      icon: '📧',
      title: 'Email',
      content: 'hratechconsulting@gmail.com',
      link: 'mailto:hratechconsulting@gmail.com'
    },
    {
      icon: '📞',
      title: 'Telefono',
      content: '+39 380 430 70 14',
      link: 'tel:+393804307014'
    },
    {
      icon: '🕒',
      title: 'Orari',
      content: 'Lun-Ven: 9:00-18:00',
      link: null
    }
  ];

  const services = [
    'Siti Web',
    'E-commerce',
    'App Mobile',
    'Consulenza Digitale',
    'SEO & Marketing',
    'Branding & Design',
    'Altro'
  ];

  return (
    <div>
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
          <br/>  <span className="gradient-text">Contattaci</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Pronto a trasformare la tua presenza digitale? 
            Parlaci del tuo progetto e scopri come possiamo aiutarti.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Invia un Messaggio
              </h2>
              
              {submitSuccess ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                  <div className="text-4xl mb-4">✅</div>
                  <h3 className="text-xl font-semibold text-green-800 mb-2">
                    Messaggio Inviato!
                  </h3>
                  <p className="text-green-700 mb-4">
                    Grazie per averci contattato. Ti risponderemo entro 24 ore.
                  </p>
                  <button
                    onClick={() => setSubmitSuccess(false)}
                    className="text-green-600 hover:text-green-700 font-medium"
                  >
                    Invia un altro messaggio
                  </button>
                </div>
              ) : (
                <form ref={form} onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="nome" className="block text-sm font-medium text-gray-700 mb-2">
                        Nome e Cognome *
                      </label>
                      <input
                        type="text"
                        id="nome"
                        name="user_name"
                        value={formData.nome}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-900"
                        placeholder="Il tuo nome completo"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="user_email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-900"
                        placeholder="la-tua-email@esempio.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="telefono" className="block text-sm font-medium text-gray-700 mb-2">
                        Telefono
                      </label>
                      <input
                        type="tel"
                        id="telefono"
                        name="user_phone"
                        value={formData.telefono}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-900"
                        placeholder="+39 012 345 6789"
                      />
                    </div>
                    <div>
                      <label htmlFor="azienda" className="block text-sm font-medium text-gray-700 mb-2">
                        Azienda
                      </label>
                      <input
                        type="text"
                        id="azienda"
                        name="user_company"
                        value={formData.azienda}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-900"
                        placeholder="Nome della tua azienda"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="servizio" className="block text-sm font-medium text-gray-700 mb-2">
                      Servizio di Interesse
                    </label>
                    <select
                      id="servizio"
                      name="user_service"
                      value={formData.servizio}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-900 bg-white"
                    >
                      <option value="" className="text-gray-900">Seleziona un servizio</option>
                      {services.map((service, index) => (
                        <option key={index} value={service} className="text-gray-900">{service}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="messaggio" className="block text-sm font-medium text-gray-700 mb-2">
                      Messaggio *
                    </label>
                    <textarea
                      id="messaggio"
                      name="message"
                      value={formData.messaggio}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none text-gray-900"
                      placeholder="Raccontaci del tuo progetto, delle tue esigenze e dei tuoi obiettivi..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-8 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Invio in corso...
                      </span>
                    ) : (
                      'Invia Messaggio'
                    )}
                  </button>
                  
                  {error && (
                    <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg">
                      <p className="text-red-600 font-medium">{error}</p>
                    </div>
                  )}
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Informazioni di Contatto
              </h2>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="text-3xl">{info.icon}</div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">
                        {info.title}
                      </h3>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="text-blue-600 hover:text-blue-700 transition-colors"
                          target={info.link.startsWith('http') ? '_blank' : undefined}
                          rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                        >
                          {info.content}
                        </a>
                      ) : (
                        <p className="text-gray-600">{info.content}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Media */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Seguici sui Social
                </h3>
                <div className="flex space-x-4">
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white hover:bg-blue-700 transition-colors"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.047-1.852-3.047-1.853 0-2.136 1.445-2.136 2.939v5.677H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-blue-400 rounded-lg flex items-center justify-center text-white hover:bg-blue-500 transition-colors"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                  </a>
                  <a
                    href="https://www.instagram.com/hratech_consulting?igsh=MWlyc3ozNTdhMXMybw%3D%3D&utm_source=qr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center text-white hover:from-purple-600 hover:to-pink-600 transition-colors"
                  >
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm0 2a3 3 0 00-3 3v10a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H7z"/>
                      <path d="M12 7.5a4.5 4.5 0 110 9 4.5 4.5 0 010-9zm0 2a2.5 2.5 0 100 5 2.5 2.5 0 000-5z"/>
                      <circle cx="17.5" cy="6.5" r="1.25"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Domande Frequenti
            </h2>
            <p className="text-xl text-gray-600">
              Risposte alle domande più comuni sui nostri servizi
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Quanto tempo ci vuole per completare un progetto?
              </h3>
              <p className="text-gray-600">
                I tempi variano in base alla complessità del progetto. Un sito web semplice può richiedere 2-4 settimane, 
                mentre un e-commerce complesso può richiedere 2-3 mesi. Ti forniamo sempre una timeline dettagliata.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Offrite servizi di manutenzione post-lancio?
              </h3>
              <p className="text-gray-600">
                Sì, offriamo piani di manutenzione personalizzati che includono aggiornamenti di sicurezza, 
                backup, monitoraggio delle performance e supporto tecnico continuo.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Come funziona il processo di sviluppo?
              </h3>
              <p className="text-gray-600">
                Seguiamo un processo agile in 4 fasi: analisi e strategia, design e prototipazione, 
                sviluppo e testing, lancio e supporto. Ti teniamo aggiornato in ogni fase.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Pronto a Iniziare?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Non aspettare! Contattaci oggi stesso per una consulenza gratuita 
            e scopri come possiamo trasformare la tua presenza digitale.
          </p>
          <Link
            href="#top"
            className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-block"
          >
            Richiedi Consulenza Gratuita
          </Link>
        </div>
      </section>
    </div>
  );
}
