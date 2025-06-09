import { Metadata, Viewport } from 'next'
import ParallaxSection from '@/components/ParallaxSection'

export const metadata: Metadata = {
  title: 'Kontakt - Sven Lauridsen Kontormontage',
  description: 'Kontakt Sven Lauridsen Kontormontage for professionel kontormontage, møbelreparation og ompolstring. Telefon: 29 90 54 64',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function Kontakt() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Parallax Section */}
      <ParallaxSection
        backgroundImage="/images/services/kontakt.jpg"
        height="h-[500px] md:h-[500px] lg:h-[600px]"
        overlay="dark"
        overlayOpacity="bg-slate-900/50"
      >
        <div className="text-center px-4 sm:px-6 lg:px-8 pt-12 md:pt-0">
          <div className="mb-6 md:mb-8">
            <img 
              src="/images/logo/sven-lauridsen-logo.png" 
              alt="Sven Lauridsen Kontormontage" 
              className="h-24 sm:h-32 md:h-40 lg:h-48 w-auto mx-auto drop-shadow-2xl"
            />
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white mb-4 md:mb-6 tracking-wide drop-shadow-lg">
            Kontakt os
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-300 mx-auto mb-4 md:mb-6"></div>
          <p className="text-lg sm:text-xl md:text-2xl text-slate-200 max-w-3xl mx-auto leading-relaxed font-light drop-shadow-md">
            Vi er altid klar til at hjælpe med dine kontormøbelbehov
          </p>
        </div>
      </ParallaxSection>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 pb-12 sm:pb-16">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Photo Placeholder */}
          <div className="bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden">
            <div className="h-full min-h-[400px] lg:min-h-[500px] relative">
              <img 
                src="/images/contact/contact-photo.jpg" 
                alt="Sven Lauridsen Kontormontage workspace" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-xl sm:text-2xl font-medium text-white mb-2 tracking-wide drop-shadow-lg">
                  Professionel kontormontage
                </h3>
                <p className="text-sm sm:text-base text-slate-200 font-light drop-shadow-md">
                  Kvalitet og erfaring siden 2000
                </p>
              </div>
            </div>
          </div>

          {/* Contact Information Box */}
          <div className="bg-white rounded-2xl shadow-lg border border-slate-100 p-8 sm:p-10">
            <h2 className="text-2xl sm:text-3xl font-medium text-slate-800 mb-6 tracking-wide text-center">
              Kontakt oplysninger
            </h2>
            
            <div className="text-center space-y-4 text-base text-slate-600 leading-relaxed font-light">
              <p className="mb-6">
                Ønsker du at komme i kontakt med Kontormontage.dk, kan jeg kontaktes via nedenstående information.
              </p>
              
              <div className="space-y-3">
                <p className="font-medium text-slate-800">Sven Lauridsen Kontormontage A/S</p>
                <p>Mosede Bygade 32, 2670 Greve</p>
                <p>Cvr: 27 97 80 29</p>
                <p>
                  Telefon: <a href="tel:29905464" className="text-blue-600 hover:text-blue-800 transition-colors">29 90 54 64</a>
                </p>
                <p>
                  E-mail: <a href="mailto:sl@kontormontage.dk" className="text-blue-600 hover:text-blue-800 transition-colors">sl@kontormontage.dk</a>
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8 pt-6 border-t border-slate-200">
                <a 
                  href="tel:29905464"
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-lg font-bold rounded-full hover:from-blue-700 hover:to-cyan-600 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl tracking-wide"
                >
                  Ring nu
                  <svg className="ml-3 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </a>
                <a 
                  href="mailto:sl@kontormontage.dk"
                  className="inline-flex items-center justify-center px-8 py-4 bg-transparent text-blue-600 text-lg font-bold rounded-full border-2 border-blue-600 hover:bg-blue-600 hover:text-white hover:scale-105 transition-all duration-300 shadow-lg tracking-wide"
                >
                  Send email
                  <svg className="ml-3 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Google Maps Section */}
        <div className="mt-8 sm:mt-12">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-medium text-slate-800 mb-4 tracking-wide">
              Find os i Greve
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto mb-4"></div>
            <p className="text-base text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">
              Vi er beliggende i Greve og servicerer hele Danmark
            </p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden">
            <div className="h-96 lg:h-[500px] w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2254.8!2d12.2967!3d55.5833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4652a1f8b8b8b8b8%3A0x1234567890abcdef!2sMosede%20Bygade%2032%2C%202670%20Greve%2C%20Denmark!5e0!3m2!1sda!2sdk!4v1640000000000!5m2!1sda!2sdk"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                sandbox="allow-scripts allow-same-origin"
                title="Sven Lauridsen Kontormontage - Mosede Bygade 32, 2670 Greve"
              ></iframe>
            </div>
            <div className="p-6 bg-slate-50 border-t border-slate-100">
              <div className="flex items-center justify-center space-x-4 text-sm text-slate-600">
                <div className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Mosede Bygade 32, 2670 Greve
                </div>
                <div className="hidden sm:block w-px h-4 bg-slate-300"></div>
                <div className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  29 90 54 64
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 