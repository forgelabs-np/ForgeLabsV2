import { Footer } from '@/components/landing/footer';
import { Header } from '@/components/landing/header';
import { AboutContent } from '@/components/about/about-content';

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background relative">
      <Header />
      <main className="flex-1">
        <AboutContent />
      </main>
      <Footer />
    </div>
  );
}
