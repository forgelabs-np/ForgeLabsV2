'use client';

import React from 'react';
import { RadialScrollGallery } from '@/components/ui/portfolio-and-image-gallery';
import { ArrowUpRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const baseProjects = [
    { title: "Nebula", cat: "Art", img: "https://picsum.photos/seed/nebula/600/800" },
    { title: "Decay", cat: "Photo", img: "https://picsum.photos/seed/decay/600/800" },
    { title: "Oceanic", cat: "Nature", img: "https://picsum.photos/seed/oceanic/600/800" },
];

const projects = [...baseProjects, ...baseProjects].map((project, index) => ({
  ...project,
  id: index + 1,
}));


export default function DemoRadialScrollGalleryBento() {
return (
  <div className="bg-background min-h-[600px] text-foreground overflow-hidden rounded-lg border w-full">
    <div className="h-[300px] flex flex-col items-center justify-center space-y-4 pt-8">
      <div className="space-y-1 text-center">
        <span className="text-[10px] font-bold tracking-widest text-muted-foreground uppercase">
          Portfolio
        </span>
        <h1 className="text-4xl font-bold tracking-tighter">
          Work
        </h1>
      </div>
      <div className="animate-bounce text-muted-foreground text-xs">↓ Scroll</div>
    </div>

    <RadialScrollGallery
      className="!min-h-[600px]"
      baseRadius={400}
      mobileRadius={250}
      visiblePercentage={50}
      scrollDuration={2000}
    >
      {(hoveredIndex) =>
        projects.map((project, index) => {
           const isActive = hoveredIndex === index;
           return (
            <div 
              key={project.id} 
              className="group relative w-[260px] h-[380px] sm:w-[300px] sm:h-[420px] overflow-hidden rounded-xl bg-card border border-border shadow-lg"
            >
              <div className="absolute inset-0 overflow-hidden">
                <img
                  src={project.img}
                  alt={project.title}
                  className={`h-full w-full object-cover transition-transform duration-700 ease-out ${
                    isActive ? 'scale-110 blur-0' : 'scale-100 blur-[1px] grayscale-[30%]'
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/10 to-transparent opacity-60" />
              </div>

              <div className="absolute inset-0 flex flex-col justify-between p-4">
                <div className="flex justify-between items-start">
                  <Badge variant="secondary" className="text-[10px] px-2 py-0 bg-background/80 backdrop-blur">
                    {project.cat}
                  </Badge>
                  <div className={`w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center transition-all duration-500 ${isActive ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-45'}`}>
                    <ArrowUpRight size={12} />
                  </div>
                </div>

                <div className={`transition-transform duration-500 ${isActive ? 'translate-y-0' : 'translate-y-2'}`}>
                  <h3 className="text-xl font-bold leading-tight text-foreground">{project.title}</h3>
                  <div className={`h-0.5 bg-primary mt-2 transition-all duration-500 ${isActive ? 'w-full opacity-100' : 'w-0 opacity-0'}`} />
                </div>
              </div>
            </div>
           );
        })
      }
    </RadialScrollGallery>

    <div className="h-[300px] flex items-center justify-center bg-muted/30">
      <h2 className="text-xl font-light tracking-widest uppercase text-muted-foreground">
        Footer
      </h2>
    </div>
  </div>
);
}
