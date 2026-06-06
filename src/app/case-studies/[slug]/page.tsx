import { projects } from '@/lib/case-studies-data';
import { Header } from '@/components/landing/header';
import { Footer } from '@/components/landing/footer';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen bg-background relative">
      <Header />
      <main className="flex-1">
        <div className="relative w-full h-[70vh]">
          <Image src={project.link} alt={project.title} layout="fill" objectFit="cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10 -mt-32">
            <div className="grid md:grid-cols-2 gap-12 items-center py-12">
              <div>
                <p className="text-primary font-semibold">{project.title}</p>
                <h1 className="text-3xl md:text-5xl font-bold tracking-tighter mt-2">
                  Website Development for {project.title} - Complete UI and UX Transformation
                </h1>
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-4">The Client</h2>
                <p className="text-muted-foreground">
                  This is a placeholder description for the client. The actual case study data would contain specific details about who the client is, their mission, and their role in the project. For now, this text serves to demonstrate the layout and structure of the client information section.
                </p>
                <h2 className="text-2xl font-bold mt-8 mb-4">Services</h2>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">WEB DESIGN & DEVELOPMENT</Badge>
                </div>
                <Button className="mt-4" size="lg">VISIT WEBSITE</Button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-16">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                    <Image src="https://picsum.photos/seed/cs1/800/600" alt="Project view 1" layout="fill" objectFit="cover" data-ai-hint="website screenshot" />
                </div>
                <div className="relative aspect-[9/16] md:aspect-[4/3] rounded-2xl overflow-hidden justify-self-center self-start">
                    <Image src="https://picsum.photos/seed/cs2/600/800" alt="Project view 2" layout="fill" objectFit="cover" data-ai-hint="mobile website" />
                </div>
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mt-[-8rem] md:mt-0">
                    <Image src="https://picsum.photos/seed/cs3/800/600" alt="Project view 3" layout="fill" objectFit="cover" data-ai-hint="website design" />
                </div>
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mt-[-8rem] md:mt-0">
                    <Image src="https://picsum.photos/seed/cs4/800/600" alt="Project view 4" layout="fill" objectFit="cover" data-ai-hint="app interface" />
                </div>
            </div>

            <div className="max-w-4xl mx-auto my-24 text-center">
              <h2 className="text-3xl font-bold mb-4">Results <span className="text-primary">•</span> Summary</h2>
              <p className="text-muted-foreground text-lg">
                This project involved a complete overhaul of the client's online presence to better reflect their role as a leader in their industry. The outdated website was transformed into a modern, efficient, and user-friendly platform. Key to this transformation was the UI/UX redesign, which made the website more engaging and easier to navigate. We also migrated the site to a new, more capable platform and optimized page speeds.
              </p>
            </div>

            <div className="max-w-3xl mx-auto my-24 text-center">
                <h2 className="text-3xl font-bold mb-8">The Client <span className="text-primary italic">Said</span></h2>
                <div className="bg-muted/50 p-8 md:p-12 rounded-2xl">
                    <p className="text-lg italic text-foreground">
                        "The team displayed exceptional skill and creativity, transforming our digital presence with a modern, intuitive, and user-friendly interface. The attention to detail in optimizing for both speed and SEO was remarkable, significantly enhancing our online visibility and user engagement."
                    </p>
                    <p className="font-bold text-primary mt-6">{project.title}</p>
                    <p className="font-medium text-muted-foreground">Client Name</p>
                </div>
            </div>
            
            <div className="text-center my-24">
                <h2 className="text-2xl font-bold mb-4">Find Out More About Web Design & Development</h2>
                <Button variant="default" size="lg">GET IN TOUCH</Button>
            </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export async function generateStaticParams() {
    return projects.map((project) => ({
      slug: project.slug,
    }));
}
