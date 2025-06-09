import { Metadata, Viewport } from 'next'
import ParallaxSection from '@/components/ParallaxSection'

export const metadata: Metadata = {
  title: 'Services - Sven Lauridsen Kontormontage',
  description: 'Professionel kontormontage, møbelreparation og ompolstring. Levering og montering af kontormøbler, reparation af kontorstole og hæve-sænkeborde.',
  keywords: 'kontormontage, møbelreparation, ompolstring, kontorstole, kontormøbler, servicepartner',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function Services() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Parallax Section */}
      <ParallaxSection
        backgroundImage="/images/backgrounds/services-section/office-space-background.jpg"
        height="h-96 md:h-[500px] lg:h-[600px]"
        overlay="dark"
        overlayOpacity="bg-slate-900/60"
      >
        <div className="text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-white mb-6 tracking-wide drop-shadow-lg">
            Vores services
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-300 mx-auto"></div>
        </div>
      </ParallaxSection>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 pb-16 sm:pb-20">
        
        <div className="space-y-16 sm:space-y-20">
          {/* Kontormontage */}
          <section className="bg-white rounded-2xl shadow-lg border border-slate-100 p-8 sm:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="rounded-xl overflow-hidden shadow-lg">
                  <img 
                    src="/images/services/kontormontage-service.jpg" 
                    alt="Professionel kontormontage" 
                    className="w-full h-64 lg:h-80 object-cover"
                  />
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <h2 className="text-2xl sm:text-3xl font-medium text-slate-800 mb-6 tracking-wide">Kontormontage</h2>
                <div className="space-y-4 text-base text-slate-600 leading-relaxed font-light">
                  <p>
                    SL Kontormontage tilbyder professionel levering og montering af kontormøbler og andet inventar.
                  </p>
                  <p>
                    Vi håndterer bl.a. opsætning af arbejdspladser, reoler, skranker, telefonbokse og glasvægge samt andre montageopgaver i organisationen. Fx tv-ophæng, tavler og billeder samt opsætning af akustik vægge og andre lydabsorberende løsninger i storrumsmiljøer og kantiner.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Møbelreparation */}
          <section className="bg-white rounded-2xl shadow-lg border border-slate-100 p-8 sm:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div>
                <div className="rounded-xl overflow-hidden shadow-lg">
                  <img 
                    src="/images/services/mobelreparation-service.jpg" 
                    alt="Møbelreparation og service" 
                    className="w-full h-64 lg:h-80 object-cover"
                  />
                </div>
              </div>
              <div>
                <h2 className="text-2xl sm:text-3xl font-medium text-slate-800 mb-6 tracking-wide">Møbelreparation</h2>
                <div className="space-y-4 text-base text-slate-600 leading-relaxed font-light">
                  <p>
                    SL Kontormontage har mangeårig erfaring inden for servicering og reparation af kontormøbler generelt, herunder reparation af kontorstole og hæve-/sænkeborde systemer.
                  </p>
                  <p>
                    Er fletningen i dine stole blevet slidt eller er syningen i din lænestol eller sofa gået op? Med andre ord tilbyder vi at reparere alle slags møbler, så du igen kan nyde komforten i dine kvalitetsmøbler.
                  </p>
                  <p>
                    Gælder både private og erhverv.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Ompolstring */}
          <section className="bg-white rounded-2xl shadow-lg border border-slate-100 p-8 sm:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="rounded-xl overflow-hidden shadow-lg">
                  <img 
                    src="/images/services/ompolstring-service.jpg" 
                    alt="Ompolstring og renovering" 
                    className="w-full h-64 lg:h-80 object-cover"
                  />
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <h2 className="text-2xl sm:text-3xl font-medium text-slate-800 mb-6 tracking-wide">Ompolstring</h2>
                <div className="space-y-4 text-base text-slate-600 leading-relaxed font-light">
                  <p>
                    Trænger dine gamle møbler eller din virksomheds kontormøbler til et nyt og mere moderne look?
                  </p>
                  <p>
                    Ompolstring er en rentabel og bæredygtig løsning som giver nyt liv til kontoret og kantinen. Eller til stuen og køkkenet derhjemme.
                  </p>
                  <p>
                    SL Kontormontage tilbyder også professionel renovering og ompolstring af kontorstole og klassiske designmøbler. Alt udføres, hvad enten det er dine gode HÅG kontorstole eller du vil forkæle dine dyrebare møbler med et nyt look i lækkert læder eller stof af høj kvalitets og professionelt polsterarbejde.
                  </p>
                  <p>
                    Gælder både private og erhverv.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div className="space-y-16 sm:space-y-20">

          {/* Din service partner */}
          <section 
            className="rounded-2xl shadow-lg p-8 sm:p-12 text-white relative overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)',
              backgroundImage: `url('/images/services/servicepartner.jpg')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundBlendMode: 'overlay'
            }}
          >
            <div className="absolute inset-0 bg-slate-900/60"></div>
            <div className="text-center max-w-4xl mx-auto relative z-10">
              <h2 className="text-2xl sm:text-3xl font-medium mb-6 tracking-wide">Din service partner</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-300 mx-auto mb-8"></div>
              <div className="space-y-6 text-base text-slate-200 leading-relaxed font-light">
                <p>
                  Som din virksomheds servicepartner får du professionel møbelsnedkerhjælp til montageopgaver, store som små projekter, som kan løses selvstændigt eller i samarbejde med andre montører i din organisation.
                </p>
                <p>
                  Ved brug af SL Kontormontage som din selvstændige servicepartner har din virksomhed ingen faste månedlige udgifter til løn, montørbil og andre omkostninger, men betaler kun for den ydelse, der leveres.
                </p>
                <p className="text-lg font-medium text-white">
                  Vil du vide mere om servicepartner ordningen, kan du kontakte SL kontormontage på telefon 29 90 54 64 eller sende en mail til sl@kontormontage.dk
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
} 