import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

export function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center w-full h-full z-10 container px-4 md:px-6">
      <div className="flex flex-col items-center space-y-6 text-center">
        <div className="flex items-center gap-2">
          <Image src="/logo.png" alt="ForgeLabs Logo" width={240} height={240} />
        </div>
        <div className="space-y-4">
          <h1 className="text-5xl font-bold tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl/none font-headline">
            Where ideas are forged into impactful digital realities
          </h1>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-2xl">
            Transforming concepts into scalable, secure, and efficient enterprise web applications.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-4 pt-6">
          <Button size="lg">
            Get Started
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button size="lg" variant="outline">
            Request a Demo
          </Button>
        </div>
      </div>
    </section>
  );
}
