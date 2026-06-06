'use client';
import { useTransform, motion, useScroll, MotionValue } from 'framer-motion';
import React, { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { projects } from '@/lib/case-studies-data';

interface CardProps {
  i: number;
  title: string;
  description: string;
  url: string;
  color: string;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
  slug: string;
}

const Card = ({ i, title, description, url, color, progress, range, targetScale, slug }: CardProps) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start'],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div ref={container} className='h-screen flex items-center justify-center sticky top-0'>
      <motion.div
        style={{
          backgroundColor: color,
          scale,
          top: `${i * 25}px`,
        }}
        className='flex flex-col relative h-[500px] w-[70%] max-w-[1000px] rounded-2xl p-10 origin-top text-primary-foreground'
      >
        <h2 className='text-3xl text-center font-bold'>{title}</h2>
        <div className='flex flex-col md:flex-row h-full mt-5 gap-10'>
          <div className='w-full md:w-[40%] relative top-[10%] space-y-4'>
            <p className='text-lg'>{description}</p>
            <Link href={`/case-studies/${slug}`} className='inline-flex items-center gap-2 underline cursor-pointer text-lg'>
              See more
              <svg width='22' height='12' viewBox='0 0 22 12' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <path d='M21.5303 6.53033C21.8232 6.23744 21.8232 5.76256 21.5303 5.46967L16.7574 0.696699C16.4645 0.403806 15.9896 0.403806 15.6967 0.696699C15.4038 0.989592 15.4038 1.46447 15.6967 1.75736L19.9393 6L15.6967 10.2426C15.4038 10.5355 15.4038 11.0104 15.6967 11.3033C15.9896 11.5962 16.4645 11.5962 16.7574 11.3033L21.5303 6.53033ZM0 6.75L21 6.75V5.25L0 5.25L0 6.75Z' fill='currentColor'/>
              </svg>
            </Link>
          </div>

          <div className='relative w-full md:w-[60%] h-full rounded-lg overflow-hidden'>
            <motion.div className='w-full h-full' style={{ scale: imageScale }}>
              <Image src={url} alt={title} fill className='object-cover' />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export function CaseStudies() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  });

  return (
    <div className="bg-background text-foreground">
        <div className="container mx-auto px-4 md:px-6 pt-12 pb-0">
            <div className="flex flex-col text-center">
                <h2 className="text-5xl font-bold tracking-tighter sm:text-6xl font-headline text-foreground">
                    Case Studies<span className="text-primary">.</span>
                </h2>
            </div>
        </div>
        <div ref={container} className="relative">
        {projects.map((project, i) => {
            const targetScale = 1 - (projects.length - i) * 0.05;
            return (
            <Card
                key={`p_${i}`}
                i={i}
                url={project.link}
                title={project.title}
                color={project.color}
                description={project.description}
                progress={scrollYProgress}
                range={[i * 0.25, 1]}
                targetScale={targetScale}
                slug={project.slug}
            />
            );
        })}
        </div>
    </div>
  );
}
