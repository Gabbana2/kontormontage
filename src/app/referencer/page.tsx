import { Metadata, Viewport } from 'next'
import ParallaxSection from '@/components/ParallaxSection'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Referencer - Sven Lauridsen Kontormontage',
  description: 'Se hvad vores kunder siger om vores professionelle kontormontage og møbelreparation. Læs anbefalinger fra virksomheder og institutioner.',
  keywords: 'referencer, anbefalinger, kundeanmeldelser, kontormontage, møbelreparation, Greve',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

const customers = [
  {
    name: 'Montana',
    logo: '/images/Customers/Montana.png',
    testimonial: '[Testimonial fra Montana kommer her - beskrivelse af det arbejde Sven har udført for Montana og deres oplevelse med servicen]'
  },
  {
    name: 'Rovio',
    logo: '/images/Customers/Rovio.png',
    testimonial: '[Testimonial fra Rovio kommer her - beskrivelse af det arbejde Sven har udført for Rovio og deres oplevelse med servicen]'
  },
  {
    name: 'Mood Visuals',
    logo: '/images/Customers/Mood Visuals.png',
    testimonial: '[Testimonial fra Mood Visuals kommer her - beskrivelse af det arbejde Sven har udført for Mood Visuals og deres oplevelse med servicen]'
  },
  {
    name: 'IO Interactive',
    logo: '/images/Customers/IO-Interactive.png',
    testimonial: '[Testimonial fra IO Interactive kommer her - beskrivelse af det arbejde Sven har udført for IO Interactive og deres oplevelse med servicen]'
  },
  {
    name: 'Swiss Re',
    logo: '/images/Customers/Swiss Ree.jpg',
    testimonial: '[Testimonial fra Swiss Re kommer her - beskrivelse af det arbejde Sven har udført for Swiss Re og deres oplevelse med servicen]'
  },
  {
    name: 'The Body Shop',
    logo: '/images/Customers/The Body Shop.png',
    testimonial: '[Testimonial fra The Body Shop kommer her - beskrivelse af det arbejde Sven har udført for The Body Shop og deres oplevelse med servicen]'
  },
  {
    name: 'Statsministeriet',
    logo: '/images/Customers/Statsministeriet.jpg',
    testimonial: '[Testimonial fra Statsministeriet kommer her - beskrivelse af det arbejde Sven har udført for Statsministeriet og deres oplevelse med servicen]'
  },
  {
    name: 'HK',
    logo: '/images/Customers/HK.png',
    testimonial: '[Testimonial fra HK kommer her - beskrivelse af det arbejde Sven har udført for HK og deres oplevelse med servicen]'
  }
]

export default function Referencer() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Parallax Section */}
      <ParallaxSection
        backgroundImage="/images/backgrounds/parallax-services.jpg"
        height="h-96 md:h-[500px] lg:h-[600px]"
        overlay="dark"
        overlayOpacity="bg-slate-900/60"
      >
        <div className="text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-white mb-6 tracking-wide drop-shadow-lg">
            Referencer
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-300 mx-auto mb-6"></div>
          <p className="text-xl sm:text-2xl text-slate-200 max-w-3xl mx-auto leading-relaxed font-light drop-shadow-md">
            Se hvad vores kunder siger om vores professionelle service
          </p>
        </div>
      </ParallaxSection>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 pb-16 sm:pb-20">
        <div className="space-y-16 sm:space-y-20">
          
          {/* Introduction */}
          <section className="text-center">
            <h2 className="text-2xl sm:text-3xl font-medium text-slate-800 mb-6 tracking-wide">
              Vores tilfredse kunder
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto mb-8"></div>
            <p className="text-base text-slate-600 leading-relaxed font-light max-w-3xl mx-auto">
              Gennem mere end 20 år har vi haft fornøjelsen af at arbejde med mange forskellige virksomheder 
              og institutioner. Her kan du læse om deres oplevelser med vores service.
            </p>
          </section>

          {/* Customer Testimonials */}
          <section className="space-y-12">
            {customers.map((customer, index) => (
              <div 
                key={customer.name}
                className={`bg-white rounded-2xl shadow-lg border border-slate-100 p-8 sm:p-12 ${
                  index % 2 === 0 ? '' : 'bg-slate-50'
                }`}
              >
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                  index % 2 === 0 ? '' : 'lg:grid-cols-2'
                }`}>
                  
                  {/* Logo Section */}
                  <div className={`${index % 2 === 0 ? 'order-1' : 'order-2 lg:order-1'}`}>
                    <div className={`${customer.name === 'Mood Visuals' ? 'bg-slate-900' : 'bg-white'} rounded-xl p-8 shadow-sm border border-slate-100 flex items-center justify-center min-h-[200px]`}>
                      <div className="relative w-full h-32 flex items-center justify-center">
                        <Image
                          src={customer.logo}
                          alt={`${customer.name} logo`}
                          fill
                          className={`object-contain ${customer.name === 'Mood Visuals' ? 'filter brightness-0 invert' : ''}`}
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Testimonial Section */}
                  <div className={`${index % 2 === 0 ? 'order-2' : 'order-1 lg:order-2'}`}>
                    <div className="space-y-6">
                      <h3 className="text-xl sm:text-2xl font-medium text-slate-800 tracking-wide">
                        {customer.name}
                      </h3>
                      
                      {/* Quote Icon */}
                      <div className="text-blue-500">
                        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                        </svg>
                      </div>
                      
                      {/* Testimonial Text */}
                      <blockquote className="text-base text-slate-600 leading-relaxed font-light italic">
                        {customer.testimonial}
                      </blockquote>
                      
                      {/* Placeholder indicator */}
                      <div className="text-sm text-slate-400 bg-slate-100 rounded-lg p-3 border-l-4 border-blue-200">
                        <span className="font-medium">Note:</span> Testimonial kommer snart
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </section>

          {/* Call to Action */}
          <section 
            className="rounded-2xl shadow-lg p-8 sm:p-12 text-center relative overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)',
              backgroundImage: `
                url('/images/backgrounds/geometric-pattern.png'),
                url('/images/backgrounds/wood-texture.jpg')
              `,
              backgroundBlendMode: 'overlay, multiply',
              backgroundSize: 'auto, cover'
            }}
          >
            <div className="absolute inset-0 bg-slate-900/60"></div>
            <div className="relative z-10">
              <h2 className="text-2xl sm:text-3xl font-medium text-white mb-6 tracking-wide">
                Bliv vores næste tilfredse kunde
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-300 mx-auto mb-8"></div>
              <div className="max-w-3xl mx-auto space-y-6 text-base text-slate-200 leading-relaxed font-light">
                <p>
                  Vil du også gerne opleve den samme professionelle service som vores andre kunder? 
                  Kontakt os i dag for et uforpligtende tilbud.
                </p>
              </div>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="tel:29905464"
                  className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-400 text-white text-sm font-medium rounded-full hover:from-blue-600 hover:to-cyan-500 transition-all duration-300 shadow-sm hover:shadow-md tracking-wide"
                >
                  Ring: 29 90 54 64
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                </a>
                <a 
                  href="mailto:sl@kontormontage.dk"
                  className="inline-flex items-center justify-center px-8 py-3 bg-transparent text-white text-sm font-medium rounded-full border border-white/30 hover:bg-white/10 transition-all duration-300 tracking-wide"
                >
                  Email: sl@kontormontage.dk
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
} 