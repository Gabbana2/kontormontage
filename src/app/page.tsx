import Link from 'next/link'
import Image from 'next/image'
import ParallaxSection from '../components/ParallaxSection'

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Mobile-First Hero Section */}
      {/* Mobile: Hero with background image and right-aligned content */}
      <section className="md:hidden relative h-[50vh] overflow-hidden">
        {/* Background Image */}
        <Image
          src="/images/hero/SvenHeroImage.jpg"
          alt="Sven Lauridsen Kontormontage hero background"
          fill
          className="object-cover"
          style={{ objectPosition: '40% center' }}
          priority
          quality={90}
          sizes="100vw"
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
        />
        
        {/* Dark gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/20 via-slate-900/40 to-slate-900/70 z-10"></div>
        
        {/* Content positioned to the right */}
        <div className="relative h-full flex items-center justify-end pt-16 z-20">
          <div className="w-full flex justify-end px-4">
            <div className="text-right pr-4">
              <div className="mb-3 flex justify-end">
                <Image
                  src="/images/logo/sven-lauridsen-logo.png"
                  alt="Sven Lauridsen Kontormontage"
                  width={400}
                  height={300}
                  className="h-24 w-auto drop-shadow-2xl"
                  priority
                />
              </div>
              <h1 className="text-lg font-medium text-white mb-1 tracking-wide drop-shadow-lg">
                MØBELSNEDKER
              </h1>
              <p className="text-sm text-white font-light drop-shadow-lg">
                Kvalitet | Erfaring | God Service
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Desktop: Full hero with background image */}
      <section className="hidden md:block relative h-[80vh] overflow-hidden">
        {/* Background Image using Next.js Image component */}
        <Image
          src="/images/hero/SvenHeroImage.jpg"
          alt="Sven Lauridsen Kontormontage hero background"
          fill
          className="object-cover object-[30%_center]"
          priority
          sizes="100vw"
        />
        
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/70 to-slate-700/50 z-10"></div>
        
        {/* Text content - responsive positioning */}
        <div className="relative h-full flex items-center justify-end pt-16 md:pt-18 lg:pt-20 xl:pt-22 z-20">
          <div className="max-w-15xl mx-auto w-full flex justify-end px-4 sm:px-6 lg:px-8">
            <div className="text-right pr-4 sm:pr-8 md:pr-12 lg:pr-16 xl:pr-20 2xl:pr-24">
              {/* Logo prominently displayed - responsive sizing */}
              <div className="mb-4 flex justify-end">
                <Image
                  src="/images/logo/sven-lauridsen-logo.png"
                  alt="Sven Lauridsen Kontormontage"
                  width={800}
                  height={600}
                  className="h-32 sm:h-48 md:h-56 lg:h-72 xl:h-80 2xl:h-96 w-auto drop-shadow-2xl"
                  priority
                />
              </div>
              
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-medium text-white mb-2 drop-shadow-lg leading-tight">
                MØBELSNEDKER
              </h2>
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl text-white drop-shadow-lg leading-relaxed font-light">
                Kvalitet | Erfaring | God Service
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section with Mobile-First Design */}
      <section 
        className="py-8 md:py-20 lg:py-28 relative bg-slate-50 md:bg-transparent"
        style={{
          backgroundImage: `
            linear-gradient(90deg, rgba(148, 163, 184, 0.08) 1px, transparent 1px),
            linear-gradient(rgba(148, 163, 184, 0.08) 1px, transparent 1px),
            linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)
          `,
          backgroundSize: '40px 40px, 40px 40px, 100%'
        }}
      >
        {/* Background overlay for services description - only on desktop */}
        <div 
          className="hidden md:block absolute inset-0 opacity-10"
          style={{
            backgroundImage: "url('/images/backgrounds/services-section/office-space-background.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'scroll'
          }}
        ></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-6 md:mb-16 lg:mb-24">
            <h2 className="text-2xl md:text-3xl lg:text-5xl font-light text-slate-800 mb-2 md:mb-4 tracking-wide">
              Vores Services
            </h2>
            <div className="w-16 md:w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto mb-3 md:mb-6"></div>
            <p className="text-sm md:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed font-light hidden md:block">
              Vi tilbyder professionelle løsninger for alle slags behov siden 2000
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-8 lg:gap-12">
            {/* Kontormontage */}
            <div className="group bg-white rounded-lg md:rounded-2xl shadow-md md:shadow-lg hover:shadow-xl md:hover:shadow-2xl transition-all duration-300 md:duration-500 overflow-hidden border border-slate-100">
              <div className="relative h-24 md:h-48 overflow-hidden">
                <img 
                  src="/images/services/kontormontage.jpg" 
                  alt="Kontormontage service"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 md:duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                <div className="absolute bottom-1 left-1 md:bottom-4 md:left-4">
                  <div className="w-6 h-6 md:w-12 md:h-12 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2 2v0M8 5a2 2 0 012-2h4a2 2 0 012 2v2H8V5z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="p-2 md:p-6">
                <h3 className="text-sm md:text-lg font-medium text-slate-800 mb-2 md:mb-3 tracking-wide">Kontormontage</h3>
                <Link 
                  href="/services#kontormontage"
                  className="inline-flex items-center justify-center px-3 py-1.5 md:px-5 md:py-2 bg-gradient-to-r from-blue-500 to-cyan-400 text-white text-xs md:text-sm font-medium rounded-full hover:from-blue-600 hover:to-cyan-500 transition-all duration-300 shadow-sm hover:shadow-md tracking-wide"
                >
                  <span className="md:hidden">Læs</span>
                  <span className="hidden md:inline">Læs mere</span>
                  <svg className="ml-1 md:ml-2 w-3 h-3 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Møbelreparation */}
            <div className="group bg-white rounded-lg md:rounded-2xl shadow-md md:shadow-lg hover:shadow-xl md:hover:shadow-2xl transition-all duration-300 md:duration-500 overflow-hidden border border-slate-100">
              <div className="relative h-24 md:h-48 overflow-hidden">
                <img 
                  src="/images/services/mobelreparation.jpg" 
                  alt="Møbelreparation service"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                <div className="absolute bottom-1 left-1 md:bottom-4 md:left-4">
                  <div className="w-6 h-6 md:w-12 md:h-12 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="p-2 md:p-6">
                <h3 className="text-sm md:text-lg font-medium text-slate-800 mb-2 md:mb-3 tracking-wide">Møbelreparation</h3>
                <Link 
                  href="/services#mobelreparation"
                  className="inline-flex items-center justify-center px-3 py-1.5 md:px-5 md:py-2 bg-gradient-to-r from-blue-500 to-cyan-400 text-white text-xs md:text-sm font-medium rounded-full hover:from-blue-600 hover:to-cyan-500 transition-all duration-300 shadow-sm hover:shadow-md tracking-wide"
                >
                  <span className="md:hidden">Læs</span>
                  <span className="hidden md:inline">Læs mere</span>
                  <svg className="ml-1 md:ml-2 w-3 h-3 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Ompolstring */}
            <div className="group bg-white rounded-lg md:rounded-2xl shadow-md md:shadow-lg hover:shadow-xl md:hover:shadow-2xl transition-all duration-300 md:duration-500 overflow-hidden border border-slate-100">
              <div className="relative h-24 md:h-48 overflow-hidden">
                <img 
                  src="/images/services/ompolstring.jpg" 
                  alt="Ompolstring service"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                <div className="absolute bottom-1 left-1 md:bottom-4 md:left-4">
                  <div className="w-6 h-6 md:w-12 md:h-12 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a4 4 0 004-4V5z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="p-2 md:p-6">
                <h3 className="text-sm md:text-lg font-medium text-slate-800 mb-2 md:mb-3 tracking-wide">Ompolstring</h3>
                <Link 
                  href="/services#ompolstring"
                  className="inline-flex items-center justify-center px-3 py-1.5 md:px-5 md:py-2 bg-gradient-to-r from-blue-500 to-cyan-400 text-white text-xs md:text-sm font-medium rounded-full hover:from-blue-600 hover:to-cyan-500 transition-all duration-300 shadow-sm hover:shadow-md tracking-wide"
                >
                  <span className="md:hidden">Læs</span>
                  <span className="hidden md:inline">Læs mere</span>
                  <svg className="ml-1 md:ml-2 w-3 h-3 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Service Partner */}
            <div className="group bg-white rounded-lg md:rounded-2xl shadow-md md:shadow-lg hover:shadow-xl md:hover:shadow-2xl transition-all duration-300 md:duration-500 overflow-hidden border border-slate-100">
              <div className="relative h-24 md:h-48 overflow-hidden">
                <img 
                  src="/images/services/servicepartner.jpg" 
                  alt="Service partner"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                <div className="absolute bottom-1 left-1 md:bottom-4 md:left-4">
                  <div className="w-6 h-6 md:w-12 md:h-12 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="p-2 md:p-6">
                <h3 className="text-sm md:text-lg font-medium text-slate-800 mb-2 md:mb-3 tracking-wide">Service partner</h3>
                <Link 
                  href="/services#servicepartner"
                  className="inline-flex items-center justify-center px-3 py-1.5 md:px-5 md:py-2 bg-gradient-to-r from-blue-500 to-cyan-400 text-white text-xs md:text-sm font-medium rounded-full hover:from-blue-600 hover:to-cyan-500 transition-all duration-300 shadow-sm hover:shadow-md tracking-wide"
                >
                  <span className="md:hidden">Læs</span>
                  <span className="hidden md:inline">Læs mere</span>
                  <svg className="ml-1 md:ml-2 w-3 h-3 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Om os */}
            <div className="group bg-white rounded-lg md:rounded-2xl shadow-md md:shadow-lg hover:shadow-xl md:hover:shadow-2xl transition-all duration-300 md:duration-500 overflow-hidden border border-slate-100">
              <div className="relative h-24 md:h-48 overflow-hidden">
                <img 
                  src="/images/services/om-os.jpg" 
                  alt="Om os"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 md:duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                <div className="absolute bottom-1 left-1 md:bottom-4 md:left-4">
                  <div className="w-6 h-6 md:w-12 md:h-12 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="p-2 md:p-6">
                <h3 className="text-sm md:text-lg font-medium text-slate-800 mb-2 md:mb-3 tracking-wide">Om os</h3>
                <Link 
                  href="/om-os"
                  className="inline-flex items-center justify-center px-3 py-1.5 md:px-5 md:py-2 bg-gradient-to-r from-blue-500 to-cyan-400 text-white text-xs md:text-sm font-medium rounded-full hover:from-blue-600 hover:to-cyan-500 transition-all duration-300 shadow-sm hover:shadow-md tracking-wide"
                >
                  <span className="md:hidden">Læs</span>
                  <span className="hidden md:inline">Læs mere</span>
                  <svg className="ml-1 md:ml-2 w-3 h-3 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Kontakt */}
            <div className="group bg-white rounded-lg md:rounded-2xl shadow-md md:shadow-lg hover:shadow-xl md:hover:shadow-2xl transition-all duration-300 md:duration-500 overflow-hidden border border-slate-100">
              <div className="relative h-24 md:h-48 overflow-hidden">
                <img 
                  src="/images/services/kontakt.jpg" 
                  alt="Kontakt"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 md:duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                <div className="absolute bottom-1 left-1 md:bottom-4 md:left-4">
                  <div className="w-6 h-6 md:w-12 md:h-12 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="p-2 md:p-6">
                <h3 className="text-sm md:text-lg font-medium text-slate-800 mb-2 md:mb-3 tracking-wide">Kontakt</h3>
                <Link 
                  href="/kontakt"
                  className="inline-flex items-center justify-center px-3 py-1.5 md:px-5 md:py-2 bg-gradient-to-r from-blue-500 to-cyan-400 text-white text-xs md:text-sm font-medium rounded-full hover:from-blue-600 hover:to-cyan-500 transition-all duration-300 shadow-sm hover:shadow-md tracking-wide"
                >
                  <span className="md:hidden">Kontakt</span>
                  <span className="hidden md:inline">Kontakt os</span>
                  <svg className="ml-1 md:ml-2 w-3 h-3 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Info Section - Merged Content */}
      <section className="py-20 sm:py-24 lg:py-28 relative bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-12 sm:p-16 shadow-xl border border-slate-200/50">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-slate-800 mb-6 sm:mb-8 tracking-wide">
              Sven Lauridsen Kontormontage
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto mb-8"></div>
            <p className="text-lg sm:text-xl text-slate-700 max-w-3xl mx-auto leading-relaxed font-light mb-6">
              Professionel kontormontage siden 2000 med mere end 20 års erfaring med kvalitetsmontage.
            </p>
            <p className="text-lg sm:text-xl text-slate-700 max-w-3xl mx-auto leading-relaxed font-light mb-12">
              Vi tilbyder kvalitet, erfaring og god service til både private og erhverv i hele Danmark.
            </p>
            
            {/* Customer Logos */}
            <div className="mt-12 pt-8 border-t border-slate-200">
              <h3 className="text-xl sm:text-2xl font-medium text-slate-700 mb-8 tracking-wide">
                Betroet af førende virksomheder
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 items-center justify-items-center">
                <div className="bg-white rounded-lg p-3 shadow-sm border border-slate-100 hover:shadow-md transition-shadow duration-300 w-full h-16 flex items-center justify-center">
                  <span className="text-sm font-medium text-slate-700 text-center">Montana</span>
                </div>
                
                <div className="bg-white rounded-lg p-3 shadow-sm border border-slate-100 hover:shadow-md transition-shadow duration-300 w-full h-16 flex items-center justify-center">
                  <span className="text-sm font-medium text-slate-700 text-center">Rovio</span>
                </div>
                
                <div className="bg-white rounded-lg p-3 shadow-sm border border-slate-100 hover:shadow-md transition-shadow duration-300 w-full h-16 flex items-center justify-center">
                  <span className="text-sm font-medium text-slate-700 text-center">Mood Visuals</span>
                </div>
                
                <div className="bg-white rounded-lg p-3 shadow-sm border border-slate-100 hover:shadow-md transition-shadow duration-300 w-full h-16 flex items-center justify-center">
                  <span className="text-sm font-medium text-slate-700 text-center">IO Interactive</span>
                </div>
                
                <div className="bg-white rounded-lg p-3 shadow-sm border border-slate-100 hover:shadow-md transition-shadow duration-300 w-full h-16 flex items-center justify-center">
                  <span className="text-sm font-medium text-slate-700 text-center">Swiss Re</span>
                </div>
                
                <div className="bg-white rounded-lg p-3 shadow-sm border border-slate-100 hover:shadow-md transition-shadow duration-300 w-full h-16 flex items-center justify-center">
                  <span className="text-sm font-medium text-slate-700 text-center">The Body Shop</span>
                </div>
                
                <div className="bg-white rounded-lg p-3 shadow-sm border border-slate-100 hover:shadow-md transition-shadow duration-300 w-full h-16 flex items-center justify-center">
                  <span className="text-sm font-medium text-slate-700 text-center">Statsministeriet</span>
                </div>
                
                <div className="bg-white rounded-lg p-3 shadow-sm border border-slate-100 hover:shadow-md transition-shadow duration-300 w-full h-16 flex items-center justify-center">
                  <span className="text-sm font-medium text-slate-700 text-center">HK</span>
                </div>
              </div>
              
              <div className="mt-6">
                <Link 
                  href="/referencer"
                  className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-400 text-white text-sm font-medium rounded-full hover:from-blue-600 hover:to-cyan-500 transition-all duration-300 shadow-sm hover:shadow-md tracking-wide"
                >
                  Se alle referencer
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Parallax Section - Contact Call to Action */}
      <ParallaxSection
        backgroundImage="/images/backgrounds/contact-section/parallax-contact.jpg"
        height="h-64 md:h-80 lg:h-96"
        overlay="dark"
        overlayOpacity="bg-slate-900/60"
      >
        <div className="text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white mb-6 tracking-wide drop-shadow-lg">
            Klar til at hjælpe
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-300 mx-auto mb-6"></div>
          <p className="text-lg sm:text-xl text-slate-200 max-w-2xl mx-auto leading-relaxed font-light drop-shadow-md mb-8">
            Kontakt os i dag for et uforpligtende tilbud
          </p>
          <a 
            href="tel:29905464"
            className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-400 text-white text-lg font-medium rounded-full hover:from-blue-600 hover:to-cyan-500 transition-all duration-300 shadow-lg hover:shadow-xl tracking-wide"
          >
            Ring nu: 29 90 54 64
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </a>
        </div>
      </ParallaxSection>


    </div>
  )
}
