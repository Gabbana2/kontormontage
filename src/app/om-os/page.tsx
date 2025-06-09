import { Metadata, Viewport } from 'next'
import ParallaxSection from '@/components/ParallaxSection'

export const metadata: Metadata = {
  title: 'Om os - Sven Lauridsen Kontormontage',
  description: 'Sven Lauridsen er uddannet møbelsnedker med mangeårig erfaring siden 2000. Professionel kontormontage til private virksomheder og offentlige institutioner.',
  keywords: 'Sven Lauridsen, møbelsnedker, kontormontage, erfaring, kvalitet, Greve',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function OmOs() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Parallax Section */}
      <ParallaxSection
        backgroundImage="/images/services/om-os.jpg"
        height="h-96 md:h-[500px] lg:h-[600px]"
        overlay="dark"
        overlayOpacity="bg-slate-900/60"
      >
        <div className="text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-white mb-6 tracking-wide drop-shadow-lg">
            Om os
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-300 mx-auto mb-6"></div>
          <p className="text-xl sm:text-2xl text-slate-200 max-w-3xl mx-auto leading-relaxed font-light drop-shadow-md">
            Lær mere om Sven Lauridsen Kontormontage og vores mange års erfaring
          </p>
        </div>
      </ParallaxSection>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 pb-16 sm:pb-20">

        <div className="space-y-16 sm:space-y-20">
          {/* Main Company Story */}
          <section className="bg-white rounded-2xl shadow-lg border border-slate-100 p-8 sm:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div>
                <h2 className="text-2xl sm:text-3xl font-medium text-slate-800 mb-6 tracking-wide">
                  Hvem er Kontormontage.dk
                </h2>
                <div className="space-y-4 text-base text-slate-600 leading-relaxed font-light">
                  <p>
                    Mit navn er Sven Lauridsen. Jeg er uddannet møbelsnedker og har mangeårig erfaring og kompetencer inden for møbelbranchen, det være sig produktion, detailsalg, montage, leverance og reparation.
                  </p>
                  <p>
                    Siden 2000 har jeg gennem mit firma, Sven Lauridsen Kontormontage, tilbudt professionel montering, servicering og reparation af kontormøbler og andet inventar, herunder professionel renovering og ompolstring af kontorstole og klassiske designmøbler.
                  </p>
                  <p>
                    SL Kontormontage er også leveringsdygtig i kontorinventar som kabelbakker, cpu-ophæng mm.
                  </p>
                  <p>
                    Min kundekreds omfatter private virksomheder, store som små, samt en række offentlige virksomheder, herunder ministerier, styrelser og kommuner.
                  </p>
                  <p>
                    Endelig har jeg gennem mit mangeårige samarbejde med leverandører og producenter af hæve/sænkeborde og kontormøbler generelt, opnået et indgående kendskab til de førende produkter inden for kontormøbelbranchen. Inden nævnt, ingen glemt!
                  </p>
                  <p>
                    Sven Lauridsen Kontormontage tilbyder således solidt og erfarent møbelhåndværk, og efterlever et serviceniveau, der tilgodeser kundens behov og ønsker til en professionel udført opgave, uanset om der er tale om en standard møbelmontage eller en specialopgave!
                  </p>
                  <p>
                    Du er altid velkommen til at kontakte os!
                  </p>
                </div>
              </div>
              <div className="bg-slate-50 rounded-xl p-8 border border-slate-100">
                <h3 className="text-lg font-medium text-slate-800 mb-4 tracking-wide">Vores værdier:</h3>
                <ul className="space-y-3 text-base text-slate-600 font-light">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Kvalitet i alt hvad vi gør
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Mange års praktisk erfaring
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Personlig og professionel service
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Pålidelig og troværdig partner
                  </li>
                </ul>
              </div>
            </div>
          </section>



          {/* Service Coverage */}
          <section className="bg-white rounded-2xl shadow-lg border border-slate-100 p-8 sm:p-12">
            <h2 className="text-2xl sm:text-3xl font-medium text-slate-800 mb-6 tracking-wide text-center">
              Serviceområde
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto mb-8"></div>
            <div className="max-w-4xl mx-auto space-y-4 text-base text-slate-600 leading-relaxed font-light text-center">
              <p>
                Vi servicerer hovedsageligt på Sjælland, men kan efter aftale arranges Danmark rundt. Vi udfører opgaver for både private og erhverv. Uanset om det er en lille reparation eller en stor monteringsopgave, så er vi klar til at hjælpe.
              </p>
              <p>
                Som din service partner får du professionel hjælp til alle typer montageopgaver uden faste månedlige omkostninger.
              </p>
            </div>
          </section>

          {/* Contact CTA */}
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
                Kontakt os i dag
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-300 mx-auto mb-8"></div>
                <div className="max-w-3xl mx-auto space-y-6 text-base text-slate-200 leading-relaxed font-light">
                  <p>
                    Er du interesseret i at høre mere om vores services eller har du brug for hjælp 
                    til en specifik opgave? Kontakt os i dag for et uforpligtende tilbud.
                  </p>
                  <p>
                    Vi ser frem til at hjælpe dig med alle dine kontormøbelbehov.
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