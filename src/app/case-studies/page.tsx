import { Header } from '@/components/landing/header';
import { Footer } from '@/components/landing/footer';
import { projects } from '@/lib/case-studies-data';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

export default function CaseStudiesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background relative">
      <Header />
      <main className="flex-1 py-24 sm:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tighter text-foreground font-headline">
              Our Work
            </h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
              Explore a selection of our projects that showcase our expertise and commitment to quality.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <Link key={project.slug} href={`/case-studies/${project.slug}`} className="group block">
                <div className="overflow-hidden rounded-xl bg-card border shadow-sm hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
                  <div className="bg-muted/50 aspect-[4/3] flex items-center justify-center p-4">
                     <div className="relative w-full h-full overflow-hidden rounded-md shadow-inner">
                        <Image
                            src={project.link}
                            alt={project.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                     </div>
                  </div>
                  <div className="p-6 flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-foreground">{project.title}</h3>
                    <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-transform duration-300 group-hover:rotate-45 group-hover:text-primary" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
