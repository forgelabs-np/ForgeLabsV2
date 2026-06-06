'use client';
import { Button } from '@/components/ui/button';
import { CheckCircle2 } from 'lucide-react';
import {
  SiNextdotjs,
  SiReact,
  SiSpringboot,
  SiTailwindcss,
  SiPostgresql,
  SiMongodb,
  SiDocker,
  SiKubernetes,
} from 'react-icons/si';
import { useState, useEffect } from 'react';

const allIcons = [
  { icon: SiSpringboot, color: '#6DB33F' },
  { icon: SiReact, color: '#61DAFB' },
  { icon: SiPostgresql, color: '#336791' },
  { icon: SiNextdotjs, color: '#000000' },
  { icon: SiTailwindcss, color: '#06B6D4' },
  { icon: SiMongodb, color: '#47A248' },
  { icon: SiDocker, color: '#2496ED' },
  { icon: SiKubernetes, color: '#326CE5' },
];

export function Solutions() {
  const [icons, setIcons] = useState<typeof allIcons>([]);

  useEffect(() => {
    setIcons(allIcons.sort(() => 0.5 - Math.random()).slice(0, 8));
  }, []);

  const iconPositions = [
    'top-1/4 left-[15%]',
    'top-1/3 right-[15%]',
    'top-1/2 right-[10%]',
    'bottom-1/4 right-[20%]',
    'top-2/3 left-[10%]',
    'bottom-1/3 left-[20%]',
    'bottom-1/2 left-[5%]',
    'top-3/4 right-[5%]',
  ];

  const animationClasses = [
    'animate-float-1',
    'animate-float-2',
    'animate-float-3',
    'animate-float-4',
    'animate-float-2',
    'animate-float-3',
    'animate-float-1',
    'animate-float-4',
  ];

  return (
    <section className="relative w-full py-48 lg:py-72 bg-white overflow-hidden flex items-center justify-center">
      <div className="container mx-auto px-4 md:px-6">
        {icons.map(({ icon: Icon, color }, index) => (
          <div
            key={index}
            className={`absolute ${iconPositions[index % iconPositions.length]} ${animationClasses[index % animationClasses.length]} -translate-x-1/2 -translate-y-1/2 text-primary/10 hover:animate-float-fast`}
          >
            <div className="flex size-16 items-center justify-center rounded-lg bg-background shadow-md">
              <Icon className="h-8 w-8" style={{ color: color }} />
            </div>
          </div>
        ))}
        <div className="relative z-10 flex flex-col items-center space-y-8 text-center">
          <div className="max-w-3xl">
            <h2 className="text-4xl font-semibold tracking-tighter sm:text-5xl md:text-6xl font-headline">
              Solutions custom supported by THE best technologies at Forge Labs
            </h2>
            <p className="mt-4 text-muted-foreground md:text-xl">
              With the support of our experts, you will be able to anticipate
              future analytical trends and align with best practices in your
              industry.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-1 justify-start text-left max-w-md mx-auto">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-6 w-6 text-primary mt-1 shrink-0" />
              <p className="text-lg text-muted-foreground">
                Easily adaptable for any business
              </p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-6 w-6 text-primary mt-1 shrink-0" />
              <p className="text-lg text-muted-foreground">
                At the cutting edge of technological advances
              </p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-6 w-6 text-primary mt-1 shrink-0" />
              <p className="text-lg text-muted-foreground">
                Modern, scalable and recognized tools
              </p>
            </div>
          </div>
          <Button size="lg">Contact Us</Button>
        </div>
      </div>
    </section>
  );
}
