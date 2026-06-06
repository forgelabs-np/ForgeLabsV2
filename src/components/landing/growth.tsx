import { CheckCircle2 } from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export function Growth() {
  const features = [
    'Building scalable web applications',
    'Crafting stunning graphic designs',
    'Delivering custom software solutions',
    'Optimizing digital transformation',
  ];

  return (
    <section className="w-full py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="bg-muted/70 rounded-2xl p-8 lg:p-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-6">
            <h2 className="text-4xl font-semibold tracking-tighter sm:text-5xl font-headline">
              Choose Forge Labs solutions to accelerate your{' '}
              <span className="text-primary">growth.</span>
            </h2>
            <div className="grid gap-4 mt-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary mt-1 shrink-0" />
                  <p className="text-lg text-muted-foreground">{feature}</p>
                </div>
              ))}
            </div>
            <Button size="lg" className="mt-4 w-fit">
              Let's work together
            </Button>
          </div>
          <div className="relative h-full min-h-[300px] md:min-h-[400px]">
            <Image
              src="https://picsum.photos/seed/growth/600/500"
              alt="Man working at a desk"
              layout="fill"
              objectFit="cover"
              className="rounded-xl"
              data-ai-hint="man at desk"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
