import { Footer } from '@/components/landing/footer';
import { Header } from '@/components/landing/header';
import { Hero } from '@/components/landing/hero';
import { Solutions } from '@/components/landing/solutions';
import { AuroraBackground } from '@/components/ui/aurora-background';
import { Feature108 } from '@/components/ui/feature-108';
import { Growth } from '@/components/landing/growth';
import { MarqueeDemo } from '@/components/ui/marquee-demo';
import { Stats } from '@/components/landing/stats';
import { Faq } from '@/components/landing/faq';
import { InteractiveTestimonials } from '@/components/ui/clean-testimonial';
import { Services } from '@/components/landing/services';
import { CaseStudies } from '@/components/landing/case-studies';

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen relative">
      <Header />
      <main className="flex-1 flex flex-col">
        <div className="h-screen">
          <AuroraBackground className="h-full">
            <Hero />
          </AuroraBackground>
        </div>
        <div className="flex flex-col justify-center" style={{ minHeight: '100vh' }}>
          <Solutions />
          <MarqueeDemo />
        </div>
        <Services />
        <Feature108 />
        <CaseStudies />
        <Growth />
        <Stats />
        <section className="bg-background w-full">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center text-center mb-8">
              <div>
                <h2 className="text-5xl font-bold tracking-tighter text-foreground sm:text-6xl font-headline">
                  Testimonial<span className="text-primary">.</span>
                </h2>
                <p className="mt-2 text-lg text-muted-foreground">
                  Hear directly from teams and organizations we've collaborated with.
                </p>
              </div>
            </div>
            <InteractiveTestimonials />
          </div>
        </section>
        <Faq />
      </main>
      <Footer />
    </div>
  );
}
